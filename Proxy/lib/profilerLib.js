JSProf = new ( function() {
    var objectId = 1;
    var COMMUNICATION = 1;
    var Logging = 1; //On==1, Off==0
    var evalMonitor = 1;
    var ReferenceCreation = 1; //This should be 1 if want to measure just beautify
    var MAX_BUF_SIZE = 23107200;  //131072   1024*64 = 65635
    this.TMPS={};
    var INTERVALTIME = 60000;
    var intervalId=0;

    var constants = {
        objectCreate : "objCr",
        logArrayPush: "ArrPush",
        logFuncCall : "LFC",
        logFuncDeclaration : "LFD",
        logGetFieldBracket : "LGE",
        logGetFieldDot : "LGD",
        logNewObject : "LNE",
        logNewFunction : "LNF",
        logMethodCall : "LMC",
        logPutFieldDot : "LPD",
        logPutFieldBracket : "LPE",
        logPutDotNull : "LPDNull",
        logPutBracketNull : "LPENull",
        logRightSidePutBracket : "LRPE",
        logRightSidePutDot : "LRSP",
        logRead : "LRE",
        logReadUndefined : "LRU",
        logWrite : "LWR",
        logWriteNull : "LWNull",
        logWriteUndefined : "LWU", 
        logWriteUndefinedNull : "LWUNull",
        UNKNOWN : "-1"
    };

    this.consts = constants;
    if (typeof window !=='undefined') {
        function wrapArrayPushPop(func, type) {
            return function() {
                if (Logging === 1) {
                    var res1 = addObjectId(this);
                    var res2 = addObjectId(arguments[0]);
                    var line="";
                    if (res1.stat>0) {
                        if (res2.stat>0) 
                            line = [constants.UNKNOWN, type, res1.oid, constants.UNKNOWN, res2.oid, constants.UNKNOWN, "\n"].join(); 
                        else 
                            line = [constants.UNKNOWN, type, res1.oid, constants.UNKNOWN,"\n"].join(); 
                        logLine(line);
                    }
                }
                var returnvalue=func.apply(this, arguments);
                return returnvalue;
            }   
        } 
        function wrapEval(func) {
            return function() {
                if (evalMonitor===1) {
                    //console.log(this);
                    //console.log(arguments);
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "/HTMLData", false);
                    xhr.send(arguments[0]);
                    if (xhr.status==200)
                    {
                        console.log("response");
                        //console.log(xhr.responseText);
                        //TODO: update arguments[0]
                    }
                    //console.log(arguments[0]);
                    //console.log(typeof arguments[0]);
                    arguments[0] = xhr.responseText;  
                }
                var returnvalue = func.apply(this, arguments);
                return returnvalue;
            }
        }
	function wrapFunc(func, type) {
		return function() {
			var ret=func.apply(this, arguments);
			return ret;
		}   
	}   
        Object.create = wrapFunc(Object.create, constants.objectCreate);
        var originalArrayPush = Array.prototype.push;
        if ( ReferenceCreation == 1 ) {
            Array.prototype.push = wrapArrayPushPop( Array.prototype.push, constants.logArrayPush );
        }

        var originalEval = eval;
        if (evalMonitor === 1 )
            eval = wrapEval(eval);

        window.addEventListener('load', function() {
            setTimeout(function() {
                var loadtime = (window.performance.timing.loadEventEnd - window.performance.timing.navigationStart)/1000;
                //Time returned by window.performance.timing is in milliseconds.
                //Therefore, we are diving by 1000 to have in seconds
                //console.log("load time in seconds" + loadtime);
                var line = "load time = "+ loadtime +" location origin : " + window.location.origin + "\n";
                console.log(line);

                //Send the load time of a page instantly to the proxy to be logged
                //It does not add it to the buffer
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/LOADDATA", true);
                xhr.send("load time = "+ loadtime +" location origin : " + window.location.origin + "\n" );
                line+= "\nemptybuffer\n";

                logLine(line);

            }, 2000); } );
        var inbrowserbuffer = "";
        var inbrowserbufferSize = 0;
        var intervalOn = true;
        var dataArray=[];
	function sendToServer(msg, imm ) {
		inbrowserbuffer += msg;
		inbrowserbufferSize += msg.length;
		if ( (inbrowserbufferSize >= MAX_BUF_SIZE) ) {
			Array.prototype.push = originalArrayPush;
			dataArray.push(inbrowserbuffer);
			Array.prototype.push = wrapArrayPushPop( Array.prototype.push, constants.logArrayPush );
			inbrowserbuffer="";
			inbrowserbufferSize = 0;
			sendInterval();
		}
	}
        function sendToServerPeriodically() {
		if ( intervalOn &&  (inbrowserbufferSize > 0) ) {
			console.log("*******send Periodically********");
			if (dataArray.length==0) {

				Array.prototype.push = originalArrayPush;
				dataArray.push(inbrowserbuffer);
				Array.prototype.push = wrapArrayPushPop( Array.prototype.push, constants.logArrayPush );

				inbrowserbuffer="";
				inbrowserbufferSize = 0;
			}
			sendInterval();
		}
            }
            if (COMMUNICATION === 1) {
                intervalId = window.setInterval(sendToServerPeriodically, INTERVALTIME);
            }
            // because onreadystatechange is a callback function, it is
            // not being executed at the time I'm expecting. Therefore intercalOn
            // is not set to true when it is needed. 

            function sendInterval() {
                console.log(" dataArray.length =  " + dataArray.length );
                if ( dataArray.length > 0 ) {
                    var dataToSend = dataArray.pop();
                    intervalOn = false;
                    var xhrBUFFER = new XMLHttpRequest();
                    xhrBUFFER.onreadystatechange = function() {
                        if (xhrBUFFER.readyState == 4) {
                            if (xhrBUFFER.status == 200 || xhrBUFFER.status == 304) {
                                intervalOn = true;
                            }
                            else {
                                console.log("error transfering "+ xhrBUFFER.status);
                                intervalOn = true;
                            }
                        }
                    }
                    xhrBUFFER.open("POST", "/POST_MONITORING_DATA", true);
                    xhrBUFFER.send(dataToSend);

		    // In case of synchronous communication
                    //xhrBUFFER.open("POST", "/POST_MONITORING_DATA", false);
                    //xhrBUFFER.send(dataToSend);
                    //intervalOn = true; only if synchronous comm is on
                }
            }
            window.addEventListener('message',function(event) {
                if (event.source != window) {
                    return;
                }   
                if (event.data.type && (event.data.type == "FROM_CONTENT")) {
                    //sendToServer("\nemptybuffer--"+suffix+"\n", true);
                    logLine("\nemptybuffer--"+suffix+"\n" );
                }

            },false);
    }
   function findproto(obj) {
        var tname="";
        try{
            if ( (obj!== null) || (obj !== undefined) ) {
                var objprototype =  Object.getPrototypeOf(obj); // Catch since sometime these are from two origins TODO
                if (objprototype!==null) {

                    var name = objprototype.constructor.name;
                    if (name=="")
                        name = "0";

                    tname += name;
                }
                return tname;
            }
            return "";
        } catch(e) {
            return "";
        }
    }
   function addObjectId (obj) {
        try {
            if (((typeof obj === 'object')||(typeof obj === 'function'))&&
            (obj !== null)&&(obj !== undefined)) { 
                if (!obj.hasOwnProperty("__objectID__")) {
                    var SUFFIX;
                    if (typeof window === 'undefined')
                        SUFFIX = 'S2';
                    else { 
                        SUFFIX = suffix;
                    }
                    var objidvalue = objectId + "" +  SUFFIX;
                    objectId++;
                    Object.defineProperty(obj, "__objectID__", { enumerable: false, value: objidvalue, writable: false });
                    return {stat: 2 , oid:objidvalue};
                }
                else {
                    var oidval = Object.getOwnPropertyDescriptor(obj, "__objectID__").value;
                    return {stat:1, oid: oidval};
                }
            }
            else 
                return {stat:-1, oid: -1};

        } catch(e) {
            return {stat:-1, oid: -1};
        }
    }
    function logLine(line) {
        if (COMMUNICATION===1)
            if (line.length > 0)
                sendToServer(line, false);   
    }
    function generateGetPutLog(iid, action, base, prop) {
        var res1 = addObjectId(base);
        if ( res1.stat > 0) {
            var line="";
            var res2 = addObjectId(prop);
            if (res2.stat > 0 ) 
                line = [iid, action, res1.oid, constants.UNKNOWN , res2.oid, constants.UNKNOWN, "\n"].join();
            else 
               line = [iid, action, res1.oid, constants.UNKNOWN, "\n"].join(); 
           logLine(line);
        }
    }
    this[ this.consts.logGetFieldDot ] = function(iid, baseobj, propname) {
        if ( Logging === 1 ) {
            eval = originalEval;
            var prop = eval("baseobj."+propname);
            eval = wrapEval(eval);
            generateGetPutLog(iid, constants.logGetFieldDot, baseobj, prop);
        }
        return baseobj;
    }
    this[ this.consts.logGetFieldBracket ] = function(iid, baseobj, propname) {
        if (Logging === 1) {
            var prop = baseobj[ propname ];
            generateGetPutLog(iid, constants.logGetFieldBracket, baseobj, prop);
        }
        return baseobj;
    }

    this[ this.consts.logFuncDeclaration ]  = function (iid, funcobj, isCtr) {
        if (Logging === 1) {
            var res = addObjectId(funcobj);
            if ( res.stat > 0) {
                var line = [iid,constants.logFuncDeclaration,res.oid,"\n"].join(); 
                logLine(line);     
            }
        }
    }

    this[ this.consts.logFuncCall ] = function(iid, func, isConstructor) {
        if (Logging === 1) {
            var res = addObjectId(func);
            if (res.stat>0) {
                var line = [iid, constants.logFuncCall, res.oid, "\n"].join(); 
                logLine(line);    
            }
        }
        return func;
    }

    this[ this.consts.logPutFieldDot ] = function(iid, baseobj, propname) {
        if (Logging === 1) {
            //To distinguish add from update:
            //check to see if obj[name] already exist or not! if not this means
            //that this is an add of property.
            var realobj; 
            try {
                eval = originalEval;
                realobj = eval("baseobj."+propname); 
                eval = wrapEval(eval);
            } catch(e) {
            }
            generateGetPutLog(iid, constants.logPutFieldDot, baseobj, realobj);
        }
        return baseobj;
    }

    this[ this.consts.logPutFieldBracket ] = function(iid, baseobj, propname, realobj ) {
        if (Logging === 1) 
           generateGetPutLog(iid, constants.logPutFieldBracket, baseobj, realobj);
        return baseobj;
    }

    this[ this.consts.logPutDotNull ] = function(iid, baseobj, propname) {
        if (Logging === 1) {
            var realobj;
            try {
                eval = originalEval;
                realobj = eval("baseobj."+propname); 
                eval = wrapEval(eval);
            } catch(e) {
            }
            generateGetPutLog(iid, constants.logPutDotNull, baseobj, realobj);
        }
        return baseobj;
    }

    this[ this.consts.logPutBracketNull ] = function(iid, baseobj, propname, realobj ) {
        if (Logging === 1) 
            generateGetPutLog(iid, constants.logPutBracketNull, baseobj, realobj);
        return baseobj;
    }

    function generateRightSide(iid, action, baseobj ) {
        if (Logging===1) {
            var res = addObjectId(baseobj);
            if (res.stat > 0 ) {
                var line = [iid, action, res.oid, constants.UNKNOWN, "\n"].join();
                logLine(line);    
            }
        }
    }

    this[ this.consts.logRightSidePutBracket ] = function(iid, obj) {
        if (Logging===1) 
            generateRightSide(iid, constants.logRightSidePutBracket, obj);
        return obj;
    }
    this[ this.consts.logRightSidePutDot ]  = function(iid, obj) {
        if (Logging===1) 
           generateRightSide(iid, constants.logRightSidePutDot, obj);
        return obj;
    }

    this[ this.consts.logNewObject ] = function(iid, obj, objtype ) {
        if (Logging===1) {
            var res = addObjectId(obj);
            if (res.stat>0) {
                var line = [iid, constants.logNewObject, res.oid, objtype, "\n"].join();
                logLine(line);
            }
        }
        return obj;
    }

   this[ this.consts.logNewFunction ] = function(iid, obj, objtype ) {
        if (Logging===1) {
            var res = addObjectId(obj);
            if (res.stat>0) {
                var line = [iid, constants.logNewFunction, res.oid, "\n"].join(); 
                logLine(line);
            }
        }
        return obj;
    }


    this[ this.consts.logMethodCall ] = function(iid, baseobj, methodname, type) { 
        if (Logging===1) { 
            // The methodname is used for finding the location in the code in case of
            // push/pop or call/apply
            var methodobj;

            eval = originalEval;
            if (type !== undefined) {
                methodobj = baseobj[methodname];
            }
            else {
                methodobj = eval("baseobj."+methodname);
            }

            eval = wrapEval(eval);
            var resBase=addObjectId(baseobj);
            if (resBase.stat>0) {
            var line="";
                var resMethod = addObjectId(methodobj);
                if (resMethod.stat > 0) {
                    line = [iid,constants.logMethodCall, resBase.oid,"F", 
                            resMethod.oid, "F", methodname, "\n"].join(); 
                }
                else 
                    line = [iid,constants.logMethodCall, resBase.oid, "F", methodname, "\n"].join(); 
                logLine(line);
            }
        } 
        return baseobj;
    }

    this[ this.consts.logRead ] = function(iid, obj) {
        if (Logging===1) {
            var res = addObjectId(obj);
            if (res.stat > 0 ) {
            var line = [iid,constants.logRead, res.oid, constants.UNKNOWN, "\n"].join(); 
                logLine(line);
            }
        }
        return obj;
    }

    this[ this.consts.logReadUndefined ] = function (iid, obj) { 
        if (Logging===1) {
            var res = addObjectId(obj);
            if ( res.stat > 0 ) {
                var line = [iid, constants.logReadUndefined, res.oid, constants.UNKNOWN, "\n"].join();
                logLine(line);   
            }
        }
        return obj;
    }

    this[ this.consts.logWrite ] = function (iid, left, right) {
        if (Logging===1) {
            var line="";
            var resleft = addObjectId(left);
            var resright = addObjectId(right);
            if ( (resright.stat > 0 ) && ( resleft.stat > 0 ) ) 
                line = [iid, constants.logWrite, resright.oid, constants.UNKNOWN, resleft.oid, constants.UNKNOWN, "\n"].join();
            else if ( (resright.stat > 0 ) ) 
                line = [iid, constants.logWrite, resright.oid, constants.UNKNOWN, constants.UNKNOWN, "\n"].join();
            else if ( ( resleft.stat > 0 ) ) 
                line = [iid, constants.logWrite, constants.UNKNOWN, constants.UNKNOWN, resleft.oid, constants.UNKNOWN, "\n"].join();

            logLine(line);
        }
        return right;
    }

    this[ this.consts.logWriteUndefined ] = function(iid, left, right) {
        if (Logging===1) {
            var resRight = addObjectId(right);
            if ( resRight.stat > 0 ) {
                var line = [iid, constants.logWriteUndefined, resRight.oid, constants.UNKNOWN, "\n"].join();
                logLine(line);   
            }
        }
        return right;
    }
    this[ this.consts.logWriteNull ] = function (iid, left, right) {
        if (Logging===1) {
            var res = addObjectId(left);
            if (res.stat > 0 ) {
                var line = [iid, constants.logWriteNull, res.oid, constants.UNKNOWN, "\n"].join();
                logLine(line);
            }
        }
        return right;
    }
   this[this.consts.logWriteUndefinedNull] = function (iid, left, right) {
        //This never generate anythings, since left is undefined and right is null 
        return right;
    }
    })();
