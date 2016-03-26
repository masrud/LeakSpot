var fs = require("fs");
var JSInstrumentLib = require('JSInstrument');
var jsinstrument = new JSInstrumentLib();
var htmlparser = require("htmlparser");
var parse5 = require('parse5');
var cheerio = require("cheerio");
module.exports = function(filenamePrefix) {
    return new INSTRUMENT(filenamePrefix);
}

var INSTRUMENT = function(filenamePrefix) {

	var JSinHTMLFilePrefix = "hjsh";
	var JSFilePrefix = "ff";
	var HTMLPrefix = "hh";
	var FileModifiedPrefix = "Modified";
	var FilePath = "./";


	this.parsingOptions={};

	var filenamesCounter=1;
	var prefixname="";

	if (filenamePrefix!==undefined) 
		prefixname=filenamePrefix;

	this.setParsingOptions = function (options) {
		//console.log(options);
		this.parsingOptions = options;
		jsinstrument.setOptions(this.parsingOptions);
	}

	this.setFilePath = function(fp) {
		FilePath = fp;	
	}
	this.updateLID = function (newLID) {
		console.log(newLID);
		jsinstrument.updateLID(newLID);
	}

	function writeToFile(filename, data) {
		fs.writeFileSync(FilePath+filename, data, 'utf-8', function (err) {
			console.log('It\'s saved!');
			if (err) {throw err;};
		});
	}

	function isHTML(url, ctype, data) {
		if (/\.js$/i.test(url) ||
		/\.css$/i.test(url) ||
		/\.js/i.test(url) ||
		/javascript/.test(ctype) ||
		/\.css$/i.test(url) ||
		/image/i.test(ctype)
		)
		return false;

		if (/\.html$/i.test(url) ||
		/\.htm$/i.test(url) ||
		( /text\/html/.test(ctype) && (/<html>/.test(data)) ) ||
		/<!doctype\s+html/i.test(data) || 
		///<html>/i.test(data) ||
		/<head>/i.test(data) ||
		( /!DOCTYPE html/.test(data)  ) || (/<script/.test(data)
		))
		return true;


		return false;
	}

	function isJS(url, ctype, data) {

		if ( ctype == "application/x-javascript" ) 
			return false;

		if (/\.html$/i.test(url) ||
		/\.htm$/i.test(url) ||
		/\.css$/i.test(url) ||
		/image/i.test(ctype)
		)
			return false;

		if (/\.js$/i.test(url) ||
		( /\js/i.test(url) && /javascript/.test(ctype)))
			return true;

		return false;
	}

	var parseTag = this.parseTag = function(data, loc) {
		var ret = {
			name: "",
			attribs: {},
			isEnd: false,
			isSingleton: false,
			start: loc,
			end: loc
		};

		var ws = /\s/;
		var wsoe = /\s|>/;
		var wseoeq = /\s|>|=/;

		loc++;

		// first, is this an end tag?
		if (data[loc] === "/") {
			ret.isEnd = true;
			loc++;
		}

		// then should be the name
		var nstart = loc;
		for (; loc < data.length && !wsoe.test(data[loc]); loc++);
		ret.name = data.substring(nstart, loc).toLowerCase();

		// then find any attributes
		while (data[loc] !== ">") {
			for (; loc < data.length && ws.test(data[loc]); loc++);

			// OK, we're either at an attribute or the end
			if (data[loc] === ">") break;

			// not the end, must be an attribute!
			var astart = loc;
			for (; loc < data.length && !wseoeq.test(data[loc]); loc++);
			var aname = data.substring(astart, loc).toLowerCase();
			for (; loc < data.length && ws.test(data[loc]); loc++);

			// if this is just /, this is actually the /> at the end
			if (aname === "/") {
				ret.isSingleton = true;
				continue;
			}

			// does the attribute have a value?
			if (data[loc] !== "=") {
				// nope
				ret.attribs[aname] = true;

			} else {
				loc++;
				for (; loc < data.length && ws.test(data[loc]); loc++);

				// yes, look for the end
				var avstart = loc;
				if (data[loc] === "\"") {
					avstart++;
					for (loc++; loc < data.length && data[loc] !== "\""; loc++) {
						if (data[loc] === "\\") loc++;
					}
					ret.attribs[aname] = data.substring(avstart, loc++);

				} else if (data[loc] === "'") {
					avstart++;
					for (loc++; loc < data.length && data[loc] !== "'"; loc++);
					ret.attribs[aname] = data.substring(avstart, loc++);

				} else {
					for (; loc < data.length && !wsoe.test(data[loc]); loc++);
					ret.attribs[aname] = data.substring(avstart, loc);

				}
			}
		}
		ret.end = loc + 1;
		return ret;
	};

	var instTagInHTML = this.instTagInHTML = function(html, tagnm, inst, noend) {

		if (typeof noend === "undefined") noend = false;
		var start, cur = 0;

		var stag = new RegExp("<" + tagnm, "gi");
		var etag = new RegExp("<\\/" + tagnm, "gi");
		var ftags = [];

		// just look for the tags
		while (cur < html.length) {
			stag.lastIndex = cur;
			var tags = stag.exec(html);
			if (tags !== null) {
				start = tags.index;
				var tag = parseTag(html, start);
				cur = tag.end;

				etag.lastIndex = cur;
				var etags = etag.exec(html);
				if (!noend && !tag.isSingleton && etags !== null) {
					var tage = parseTag(html, etags.index);
					ftags.push([start, cur, etags.index, tage.end]);
					cur = etags.index;
				} else {
					ftags.push([start, cur]);
				}
			} else {
				cur = html.length;
			}
		}
		// then call the instrumentation
		for (var i = ftags.length - 1; i >= 0; i--) {
			inst(ftags[i]);
		}
	}

	/*
	  Insert profiler library at the beginning of an html page, after the html page
	  is modified.
	*/
	var pushHTMLInst = this.pushHTMLInst = function(data) {
		var doc = cheerio.load(data);
		//console.log(doc('head'));
		doc('head').append('<script type=\"text/javascript\" src=\"/profilerLib.js\"></script>');
		//console.log(doc('head').children().first());
		return doc.html();
	};

	var applyJSInsts = this.applyJSInsts = function(url, line, data) {
		try {
			var ret = jsinstrument.instrument(data);
			return ret;                
		} catch (ex) {
			console.log("JS instrumentation library problem");
			console.log("CATCHING OF INSTRUMENT................");
			return data;
		}
	};

	var instJSInHTML = this.instJSInHTML = function(html) {
		instTagInHTML(html, "script", function(tag) {
			var tagi = parseTag(html, tag[0]);
			if (!("src" in tagi.attribs) ) {
				if ( (tagi.attribs!== undefined) && (tagi.attribs.type!== undefined) && (tagi.attribs.type.indexOf('text/html') >= 0 )) {
				}else {
					//console.log(tagi);
					var script = html.slice(tag[1], tag[2]);

					/* in cases the scripts are commented in the original file to save
					load time, we like to preserve it as before. Assuming there is an 
					instance of "<!--" at the beginning and one at the end of the script.
					First, we remove the tags and later add the tags*/ 
					var addBegin=false, addEnd=false;
					var ii = script.indexOf("<!--");
					var jj = script.indexOf("-->");
					if ( ii >= 0 ) {
						script = script.replace(/^(\s*<!--[^\r\n]*\r?\n)+/g, "");
						addBegin = true;
					}
					if (jj >= 0) {
						script = script.replace(/(-->\s*)+$/g, "");
						addEnd = true
					}

					/* Store the script inside each tags in a separate file starting with hjsh,
					but finally we have an html file (*.hh) containing all the scripts*/
					var filenameJSinHtml = prefixname + JSinHTMLFilePrefix + filenamesCounter.toString()+".js";
					writeToFile(filenameJSinHtml, script);

					script = applyJSInsts(":" + tag[0], 1, script);

					var filenameJSinHtmlMod = prefixname + FileModifiedPrefix + JSinHTMLFilePrefix + filenamesCounter.toString()+".js";
					writeToFile(filenameJSinHtmlMod, script);
					console.log("HJSH................."+filenamesCounter);
					filenamesCounter++;

					if (addBegin)
						script = "  <!--\n" + script ;
					if (addEnd)   
						script = script + "\n-->  ";

					html = html.slice(0, tag[1]) + script + html.slice(tag[2]);
				}
			}
		});     
			return html;
	}

	this.instrument = function(url, ctype, data) {

		if (isHTML(url, ctype, data)) { 
			console.log("HTML-------------------------" + filenamesCounter);
			var filenameHtml = prefixname + HTMLPrefix + filenamesCounter.toString() + ".html";
			writeToFile(filenameHtml, data);
			ret = instJSInHTML(data);

			var ret2 = pushHTMLInst(ret);
			if (ret2 === null) {
				ret2 = ret;
			}   
			var filenameHtml = prefixname + FileModifiedPrefix + HTMLPrefix + filenamesCounter.toString()+".html";
			writeToFile(filenameHtml, ret2);
			filenamesCounter++;
			return ret2;
		}
		else if  ( isJS(url, ctype, data) )  {
			console.log("JS-------------------------"+filenamesCounter);
			//console.log("instrumentation: "+ url); 
			var filename = prefixname + JSFilePrefix + filenamesCounter.toString()+".js"; 
			writeToFile(filename, data);

			var ret = applyJSInsts(url, 1, data);

			var filename = prefixname + FileModifiedPrefix + JSFilePrefix + filenamesCounter.toString() + ".js"; 
			writeToFile(filename, ret);
			filenamesCounter++;
			return ret;
		}
		else {
			return null; 
		}

	}
}

