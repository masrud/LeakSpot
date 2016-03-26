var fs = require("fs");
var instrumentLib = require(__dirname+'/instrumentation.js');

/* The INCOMING parameter is used to specify that the code instrumented is 
   received from the client, for example the code inside an eval function */
var instrumentation = new instrumentLib("INCOMING");

/* WP specifies the proxy write path*/
module.exports = function(WP) {
    return new incomingMsgProcess(WP);
}

var incomingMsgProcess = function(WP) {
    var writePath = WP;
    var suffix = 0;

    instrumentation.setFilePath(WP);

    //console.log("write path ==============" + writePath);
    var stream =  fs.createWriteStream(writePath+"webAppData"); 
    var streamCount = fs.createWriteStream(writePath+'numberOfPages');
    var streamLoad = fs.createWriteStream(writePath+'loadTimes');
    /* The size of the buffer is chosen to be smaller than the size of buffer 
    in profilerLib.js to remove the problem of emptying the buffer.
    */
    var MAX_BUF_SIZE = 1024; 


    var logging = function(st) {
	    var bufferSize = 0;
	    var buffer="";
	    var traceWfh;

	    this.logToFile = function(line) {
		    buffer += line;
		    bufferSize += line.length;
		    if ( (bufferSize > MAX_BUF_SIZE) || (buffer.indexOf('empty')>= 0) || (buffer.indexOf('load')>= 0)  ) {
			    this.flush();
		    }
	    }
	    this.flush = function() {
		    var msg;
		    if (typeof window === 'undefined') {
			    st.write(buffer);
		    }
		    bufferSize = 0;
		    buffer = "";
	    }

    }

	var LoggingData = new logging(stream);
	var LoggingLoad = new logging(streamLoad); 
        
	/*The following three functions are responsible for processing
          POST request. The first and second one logs the data, and the 
	  third one process and sends back a reply.
	*/

        function postLoadData(request, ret) {
            var msg = "";
            request.addListener("data", function(chunk) {
                msg += chunk.toString("utf8");
            });
            request.addListener("end", function() {
	    	//write load information to the file
                LoggingLoad.logToFile(msg); 
                ret({ 'Access-Control-Allow-Origin': '*', 
                    data: "" });
            });
        }

        function postMessage(request, ret) {
            var msg = "";
            request.addListener("data", function(chunk) {
                msg += chunk.toString("utf8");
            });
            request.addListener("end", function() {
                //Write monitoring data to the file
                LoggingData.logToFile(msg); 
                ret({ 'Access-Control-Allow-Origin': '*', 
                    data: "" }); 
            });
        }

        function postMessageInstrument(request, ret) {
            var msg = "";
            request.addListener("data", function(chunk) {
                msg += chunk.toString("utf8");
            });
            request.addListener("end", function() {
                //instrumentation.setOptions({parsing_mode:'UNMODIFIED'});
                instrumentation.updateLID(10000);
                var instrumentedMsg = instrumentation.instrument(".js","",msg);
                console.log("instrumented Message: " + instrumentedMsg);    
                ret({data: instrumentedMsg });
            });
        }

        function preInst(url, doc) {
            // GET-only
            if (doc === "/profilerLib.js")  {

                /* The suffix is used to distinguish the object ids on every page.*/
                suffix++; 
                var suffixVar = '\n var suffix = \'S'+suffix + '\' ;';
                return ({
                    "content-type": "text/javascript",
                    data: suffixVar + fs.readFileSync(__dirname+"/profilerLib.js", "utf8")
                });
            }

            // POST-only: for receiving the messages from the client!
            if (doc === "/POST_MONITORING_DATA") {
                console.log("**************" + doc + "**************");
                return postMessage; 
            }
            if (doc === "/HTMLData") {
                return postMessageInstrument; 
            }

            if (doc === "/LOADDATA") {
                return postLoadData;
            }
            return null;
        }

        this.preInstrument = function(url) {
            var doc = url.replace(/^[^:]*:\/\/[^\/]*/, "");
            //console.log("Inside preInstrument: " +  doc);
            //console.log("Inside preInstrument: " +  url);
            var ret = preInst(url, doc);
            if (ret !== null) return ret;
            return null;
        }
}

