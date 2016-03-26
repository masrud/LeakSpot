var fs = require("fs");
var http = require("http");
var https = require("https");
var net = require('net');
var url = require('url');
var path = require('path');
var instrumentLib = require('./instrumentation.js');
//var instrumentLib = require(__dirname+'/instrumentation.js');
var incomingMsgLib = require('./incomingMsgProcess.js');
//var incomingMsgLib = require(__dirname+'/incomingMsgProcess.js');
var instrumentation = new instrumentLib();
var incomingMsg;
var zlib = require('zlib');

var debugging = 0;

module.exports = function(proxy_options) {
    return new Proxy(proxy_options);
}

//Proxy Constructor
var Proxy = function(proxy_options) {
	this.options = this.process_options(proxy_options);
	console.log(this.options);
	instrumentation.setParsingOptions({ parsing_mode: this.options.parsing_mode });
	instrumentation.setFilePath(this.options.proxy_write_path);
	incomingMsg = new incomingMsgLib(this.options.proxy_write_path);
	this.listen();
};

Proxy.prototype.process_options = function(proxy_options) {
  var options = proxy_options || {}
  if(!options.proxy_port)            options.proxy_port       = 8080;
  if(!options.mitm_port)             options.mitm_port        = 8082;
  if(!options.proxy_write_path)      options.proxy_write_path = '/tmp/';
  if(!options.parsing_mode)          options.parsing_mode     = 'MINIFIED';
  if(!options.key_path)              options.key_path         = path.join('../lib/', 'keys', 'san_domain_com.key');
  if(!options.cert_path)             options.cert_path        = path.join('../lib/', 'keys', 'san_domain_com.crt');

  return options;
}

Proxy.prototype.listen = function() {
    var sslOptions = {
        key: fs.readFileSync(this.options.key_path),
        cert: fs.readFileSync(this.options.cert_path)
    };

    var self = this;
    var mitmProxy = https.createServer(sslOptions, function(request, response) { 

        self.handleRequest(request, response, "https");
    });

    mitmProxy.listen(this.options.mitm_port);

    this.httpProxy = http.createServer();
    this.httpProxy.addListener('request', function(req, res) { 
   
	    self.handleRequest(req, res, "http");  
       }); 
    
    //self.httpProxy.addListener('connect', self.httpsHandler);
    self.httpProxy.addListener('connect', function( request, cltHttpSocket, bodyhead ) { 
	self.httpsHandler (request,  cltHttpSocket, bodyhead ); });

    this.httpProxy.listen(self.options.proxy_port);
//    console.log(" listening on port " + this.options.proxy_port);
}

Proxy.prototype.handleRequest = function (inRequest, outResponse, type) {
   
    function respond(statusCode, headers, datab, noInst) {
        function sendResponse(e,b) {
            headers["content-length"] = ""+b.length;
            delete headers["transfer-encoding"];
            delete headers["x-xss-protection"];
            headers["proxy-connection"] = "close";
            outResponse.writeHead(statusCode, headers);
            outResponse.write(b, 'binary');
            outResponse.end(); 
        }
        
        if (typeof noInst === "undefined") noInst = false;
        var datastring = datab.toString('utf8');    
        if (!noInst) {
            var ctype = headers["content-type"];
	    //if ( headers['content-encoding'] === 'gzip' )
	    //console.log(datastring);
                var instrumentedData = instrumentation.instrument(inRequest.url, ctype, datastring);
            if (instrumentedData !== null)
                datab = new Buffer(instrumentedData, 'utf8');
        }  
        if ("set-cookie" in headers) {
            var cookies = headers["set-cookie"];
            if (!(cookies instanceof Array)) {
                cookies = [cookies];
            }
            for (var i = 0; i < cookies.length; i++) {
                cookies[i] = cookies[i].replace(/; *Secure/i, "");
            }
        }
        if ( headers["content-encoding"] == "gzip" ) {
            zlib.gzip(datab, sendResponse);
        }
        else
	if ( headers["content-encoding"] == "deflate" ) {
            zlib.deflate(datab, sendResponse);
        }
        else {
            sendResponse(undefined, datab);
        }
    }
    
    var data = [];
    var bufferlength = 0;
    var databuffer = new Buffer(0);

    /* either send the profilerLib file to the client or just send nothing
       (in case of writing monitoring data). The last parameter in the call 
       to respond is set to true, so that there is no need to instrument the
       profilerLib.js code */

    function handlePreInst(o) {
        data.push(new Buffer(o.data));
        databuffer = new Buffer(o.data);
        respond(o.statusCode?o.statusCode:200, {
            "content-type": o["content-type"]?o["content-type"]:"text/html",  //TODO
            "content-length": databuffer.length
        }, databuffer, true);
    }

    /* Perform pre-instrumenting here, since we need to send the required files
    (such as profilerLib.js, etc. just once, not with every request from the page.*/

    var preinst = incomingMsg.preInstrument(inRequest.url);
    if (preinst != null) {
        if (typeof preinst === "function") {
            preinst(inRequest, handlePreInst);
        } else {
            handlePreInst(preinst);
        }
        return; 
	/* It calls returns so that the function 
           does not continue anymore and does not send a request to
           the server, etc. Since this part is responsible for sending
           extra js files and also receiving the monitoring messages 
           from the client. */
    }

	var self=this;
    function ServerToMitmResponseHandler(serverToMitmResponse) {

            serverToMitmResponse.addListener("data", function(chunk) {
                data.push(chunk);
                bufferlength += chunk.length;
            });
            serverToMitmResponse.addListener("end", function() {

		    //console.log(self);
		    var dontInstrument=false;
		    if ( self.options.parsing_mode === 'UNMODIFIED' )
		    	dontInstrument = true;

                var pos = 0;
                var databuffer = new Buffer(bufferlength);
                for (var i=0, len = data.length; i < len; i++) {
                    (new Buffer(data[i])).copy(databuffer, pos);
                    pos += data[i].length;
                }

                if ("content-encoding" in serverToMitmResponse.headers &&
                serverToMitmResponse.headers["content-encoding"] === "gzip") {
			//delete serverToMitmResponse.headers["content-encoding"];
			//console.log(",,,,,,,,,,,,,,,,,,");
			//console.log(serverToMitmResponse.headers["content-encoding"]);
                    zlib.gunzip(databuffer, function(error, newBuffer) {
		    	
                        //respond(serverToMitmResponse.statusCode, serverToMitmResponse.headers, newBuffer, true);
                        respond(serverToMitmResponse.statusCode, serverToMitmResponse.headers, newBuffer, dontInstrument);
                    });
                } 
                else if ("content-encoding" in serverToMitmResponse.headers &&
                 serverToMitmResponse.headers["content-encoding"] === "deflate") {

			console.log("---------------------------");
			console.log(serverToMitmResponse.headers["content-encoding"]);
                    zlib.inflate(databuffer, function(error, newBuffer) {
                        //respond(serverToMitmResponse.statusCode, serverToMitmResponse.headers, newBuffer, true);
                        respond(serverToMitmResponse.statusCode, serverToMitmResponse.headers, newBuffer, dontInstrument);
                    });
                }
                else {
                    respond(serverToMitmResponse.statusCode, serverToMitmResponse.headers, databuffer, dontInstrument);
                } 
            });

            serverToMitmResponse.addListener("error", function(e) {
                console.log('problem receiving data ' + e.message);
            }
            );
    }


    var req_url = url.parse(inRequest.url, true);

    if ( debugging )
        console.log("Incoming Request headers: " + inRequest);

	//var modified_header = inRequest.headers;
	//modified_header['accept-encoding'] = 'identity';

    var server_req_options = {
        'host': inRequest.headers.host,
        'port': req_url.port || (type == "http" ? 80 : 443), 
        'method': inRequest.method,
        'path': req_url.pathname + ( req_url.search || ""),
        rejectUnauthorized: false,
        requestCert: false,
        'headers': inRequest.headers
    };

	/* useful for knowing the domain names of every web page, which
	   are used in making the key */
    //console.log("host name: " + inRequest.headers.host); 
//    console.log("ENCODING++++++++++++"+inRequest.headers);
  //  console.log(inRequest.headers);
        
    var mitmProxyServerRequest = (type == 'http' ? http : https).request(server_req_options, ServerToMitmResponseHandler);

    mitmProxyServerRequest.addListener("error", function(e) {
        console.log('problem with request ' + e.message);
    });

    inRequest.addListener("data", function(chunk) {
        mitmProxyServerRequest.write(chunk, "binary");
    });

    inRequest.addListener("end", function() {
        mitmProxyServerRequest.end();
    });

    inRequest.addListener("error", function() {});
}

Proxy.prototype.httpsHandler = function ( request, cltHttpSocket, bodyhead ) {
    var httpVersion = request['httpVersion'];    
    var httpMitmSocket = net.createConnection(this.options.mitm_port, 'localhost');
    httpMitmSocket.on('connect', function() {
      cltHttpSocket.write( "HTTP/1.0 200 Connection established\r\nProxy-agent: Netscape-Proxy/1.1\r\n\r\n");

    });

    httpMitmSocket.addListener("data",function ( chunk ) {
        cltHttpSocket.write( chunk );
    });

    httpMitmSocket.addListener("end",function () {
        cltHttpSocket.end();
    });

    cltHttpSocket.addListener("data",function ( chunk ) {
        httpMitmSocket.write( chunk );
    });

    cltHttpSocket.addListener("end",function () {
            httpMitmSocket.end();
    });

    httpMitmSocket.addListener('error', function ( err ) {
        cltHttpSocket.write( "HTTP/" + httpVersion + " 500 Connection error\r\n\r\n" );
        
        cltHttpSocket.end();
    });

    cltHttpSocket.on('error', function ( err ) {
       httpMitmSocket.end();
    }); 
}
