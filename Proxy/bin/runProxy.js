
//These are the default values that are used if no argument is given by the user.
var DEFAULT_PROXY_PORT = 8080;
var DEFAULT_MITM_PORT = 8082;

var proxy = require('../lib/proxy.js');
var ArgumentParser = require('argparse').ArgumentParser;
var argParser = new ArgumentParser({
    addHelp: true,
    description: 'Call graph generator'
});

argParser.addArgument(
    [ '--proxy_port' ],
    { help: 'The port you want the proxy to listen on '}
);

argParser.addArgument(
    [ '--mitm_port' ],
    { help: 'The port you want the mitm proxy to listen on '}
);


argParser.addArgument(
    [ '--proxy_write_path' ],
    { help: 'The location of writing logged data and original and modified js files '}
);



/*
In UNMODIFIED mode the proxy just relays the data without performing any change.
In MINIFIED mode the proxy beautifies the code; the code received from the server
is usually packed to minimize the amount of the data communicated between client
and the server.
In PARSE mode the proxy insert the logging statements in the code.
*/

argParser.addArgument(
    [ '--parsing_mode' ],
    { help: 'The proxy modes of parsing files is: UNMODIFIED, MINIFIED, PARSE'}
);
 
var r = argParser.parseKnownArgs();
var args = r[0], files = r[1];


//args.parsing_mode = args.parsing_mode || 'UNMODIFIED';
args.parsing_mode = args.parsing_mode || 'MINIFIED';
//args.parsing_mode = args.parsing_mode || 'PARSE';

if (!args.parsing_mode.match(/^(MINIFIED|PARSE|UNMODIFIED)$/)) {
    argParser.printHelp();
    process.exit(-1);
}

//There are two listening port: one the proxy port and one mitm proxy port. The
//mitmproxy port acts as the https server to the client. The proxy serves as 
//the first point of connection.
args.proxy_port = args.proxy_port || DEFAULT_PROXY_PORT;
args.mitm_port = args.mitm_port || DEFAULT_MITM_PORT;
args.proxy_write_path = args.proxy_write_path || '/tmp/';
//run the proxy
var Proxy = new proxy({mitm_port: args.mitm_port, proxy_port: args.proxy_port, parsing_mode: args.parsing_mode, proxy_write_path: args.proxy_write_path});
