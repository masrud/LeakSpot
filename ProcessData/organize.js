/*
Assumptions: there is at most 9 frames so the suffix for object ids 
would be S1 to S9, if there is more need to be taken care of
*/


UTILS = new ( function() {

    require('../Proxy/lib/profilerLib.js');
    var loggerLib = JSProf;
    var fs = require('fs');
    var readline=require('readline');
    var constants = {
        allocationAccessType : "allocation"
    };

    var lastLines = [];
    var sizeLastLinesBuffer=7000;
    function insertIntoLastLinesBuffer(line) {
        if ( lastLines.length < sizeLastLinesBuffer )
            lastLines.push( line );
        else {    
            lastLines.shift();
            lastLines.push(line);
        }
    }

    this.printFile = function (arrayin, filename) {
        var str="";

        for (var i=0; i<arrayin.length; i++) {
            str +=  arrayin[i].X ; str += " ";
            str += arrayin[i].Y; str += "\n";
        }

        fs.writeFileSync(filename, str, 'utf-8', function (err) {
                console.log('It\'s saved!');
                if (err) {throw err;};
                });
    }

    this.writeToFile = function(str, filename) {
        fs.writeFileSync(filename, str, 'utf-8', function (err) {
            console.log('It\'s saved!');
            if (err) {throw err;};
        });
    }

    function findLocationsinLastLines(line, funcname) {
        var locationid = JSProf.consts.UNKNOWN;
        for (var  j = lastLines.length-1; j>=0; j--) {
                var tempwords = lastLines[j].split(',');
                if (tempwords[1]===JSProf.consts.logMethodCall) {
                    if (tempwords[6] === funcname) {
                        locationid=tempwords[0];
                        break;
                    }
                    // Also check the name of method in the line and the passed
                    // argument to make sure it is the right one.
                }    
            }
        return locationid;    
    }


    function findEquivalentObjId(line, usesite, refertype) {
        var wantedid=JSProf.consts.UNKNOWN;
        var matchrefer;

        if (refertype==JSProf.consts.logRightSidePutBracket)
            matchrefer = JSProf.consts.logPutFieldBracket;
        else if (refertype==JSProf.consts.logRightSidePutDot)
            matchrefer = JSProf.consts.logPutFieldDot;


        for (var  j = lastLines.length-1; j>=0; j--) {
            var tempwords = lastLines[j].split(',');
            if (tempwords[0]===usesite) {
                if (tempwords[1] === matchrefer) {
                    wantedid=tempwords[2];
                    break;
                }
            }    
        }
        return wantedid;
    }

    this.readProfilingData = function(file, MAP, endline, obj_recency_map, allocsite_map, id_type_map, refpoints_map, set_null_map, refined_empty_list, func) {

        //It assumes that the first 'emptybuffer' line in the input data is sent after warmup
        //Therefore, when the counter of 'emptybuffer' lines turn 1 (level variable), then it
        // starts processing.

        var current=1;
        var follow=1;
        var that = this;
        var level = 0;
        var stopProcessing =false;

        this.readFileLineByLine(file, function(line) {
            insertIntoLastLinesBuffer(line);

            var result1=false, result2=false;    
            follow++;
            if (!stopProcessing) {
                result1 = that.processAllocationLine(line, obj_recency_map, allocsite_map, id_type_map, current) ;
                result2 = that.processAccessLine(line, obj_recency_map, current) ;
                if( result1 || result2)
                    current++;  
                that.processReferenceCreation(line, obj_recency_map, current, refpoints_map, MAP);
             }

            if ( line.match('emptybuffer') ) {
                level++;
                refined_empty_list.push(current);
                if ( (endline !== undefined) && ( level >= endline))
                    stopProcessing=true;
            }
        }, function() {
            func(current);
        });
    }

    function insertIntoIdTypeMap(id_type_map, obj_id, obj_kind) {
        if (id_type_map[obj_id] === undefined) {           
            id_type_map[obj_id] = [];
        }
        if (id_type_map[obj_id].indexOf(obj_kind)<0) 
            id_type_map[obj_id].push(obj_kind);
    }
 
    /*
    Process all objects, later use the MAP info to determine live objects.
    */
    this.processAllocationLine = function(line, obj_recency_map, allocsite_map, id_type_map, current) {
        var match1 = line.match(JSProf.consts.logNewObject+","),   //LNE 
        match2 = line.match(JSProf.consts.logFuncDeclaration+","),  //LFD
        match4 = line.match(JSProf.consts.DOMCreateElement + ","), 
        match5 = line.match(JSProf.consts.objectCreate+ ","),   //object.create
        match6 = line.match(JSProf.consts.logNewFunction+","); //LNF

        var funcname;
        if (match4)
            funcname = "createElement";
        else if (match5)
            funcname = "create"; 

        var words = line.split(',');
        var objid, objkind, allocsite;

        if (match1 || match2 || match6) {
            objid = words[2];
            if (match2)
                objkind = 'FunctionDeclaration';
            if (match1) {
                objkind = words[3];  
            }  
            if (match6)
                objkind = 'Function';
            allocsite = words[0];
        }
        if (match4 || match5) {
            objid = words[2];
            objkind = words[3];
            allocsite = findLocationsinLastLines(line, funcname );
        }

        if (match1 || match2 || match4 || match5 || match6) {
            if (id_type_map!== null){  
            //    insertIntoIdTypeMap(id_type_map, objid, objkind); 
            }
            if (obj_recency_map !== null) {
                insertIntoObjMap (obj_recency_map, objid, objkind, current, allocsite, constants.allocationAccessType); 
                if (( allocsite_map !== null ) ) {
                    createMap(allocsite_map, allocsite, objid, objkind, current);
                }
            }
            return true;
        }
        return false;
    }

    function createMap(map, locsite, obj_id, obj_kind, time ) {
                if (map[locsite] === undefined) {
                        map[locsite] = { Kind: obj_kind, time_oid_list: [] }; 
                }
                map[locsite].time_oid_list.push({time: time, oid: obj_id});
                map[locsite].Kind = obj_kind;
    }

    function insertIntoObjMap (obj_recency_map, obj_id, obj_kind, use_time, use_site, access_type) {

        var alloctime, allocsite, lastusetime, lastusesite, modifytime, modifysite, modifytype;
        
        modifytime = JSProf.consts.UNKNOWN;
        modifysite = JSProf.consts.UNKNOWN;
        modifytype = JSProf.consts.UNKNOWN;

        //Check to see if this is a selfie allocation site

        var element = obj_recency_map[obj_id];

        if (access_type === constants.allocationAccessType){
            if (element===undefined) {
                alloctime = use_time;
                allocsite = use_site;
                lastusetime = JSProf.consts.UNKNOWN ;
                lastusesite = JSProf.consts.UNKNOWN ;
            }
            else {
                //This object is accessed/referenced before allocation.
                //probably a self access in constructor!
                if (element.allocTime !== JSProf.consts.UNKNOWN) {
                    element.selfie = true;
                }
                alloctime = use_time;
                allocsite = use_site;
                lastusetime = element.lastUseTime;
                lastusesite = element.lastUseSite;
            }
        }
        else {
            if (element===undefined) {
                alloctime = JSProf.consts.UNKNOWN;
                allocsite = JSProf.consts.UNKNOWN;
                lastusetime = use_time ;
                lastusesite = use_site ;
            }
            else {
                alloctime = element.allocTime;
                allocsite = element.allocSite;
                lastusetime = use_time ;
                lastusesite = use_site ;
            }
        }

        if (element===undefined) {
                obj_recency_map[ obj_id ] =
                                        {kind: obj_kind, allocTime: alloctime, 
                                         lastUseTime: lastusetime, allocSite:allocsite,
                                         lastUseSite: lastusesite, 
                                         accessType: access_type,
                                         lastModifyTime: modifytime,
                                         lastModifySite: modifysite,
                                         modifyType: modifytype,
                                         pointers:[], refCount:0} ;
        }
        else {
            element.Kind = obj_kind;
            element.allocTime = alloctime;
            element.allocSite = allocsite;
            element.lastUseTime = lastusetime;
            element.lastUseSite = lastusesite;
            element.accessType = access_type;
            obj_recency_map[obj_id] =  element; 
        }
    }

    function updateReferencesObjectRecencyMap (obj_recency_map, obj_id, obj_kind, refer_site, refer_type, referrer_object_id, timee, MAP) {
        var alloctime, allocsite, lastusetime, lastusesite, modifytime, modifysite, modifytype;
        alloctime = JSProf.consts.UNKNOWN;
        allocsite = JSProf.consts.UNKNOWN;
        lastusetime = JSProf.consts.UNKNOWN;
        lastusesite = JSProf.consts.UNKNOWN;
        accesstype = JSProf.consts.UNKNOWN;
        modifytime = JSProf.consts.UNKNOWN;
        modifysite = JSProf.consts.UNKNOWN;
        modifytype = JSProf.consts.UNKNOWN;

        var element = obj_recency_map[obj_id];

        if (element===undefined) {
            obj_recency_map[obj_id] = {kind: obj_kind, allocTime: alloctime, 
                lastUseTime: lastusetime, allocSite:allocsite,
                lastUseSite: lastusesite, accessType: accesstype,
                lastModifyTime: timee,
                lastModifySite: refer_site,
                modifyType: modifytype,
                pointers:[], refCount:0};
        }
        else {
            //only insert in pointers list if the pointer is not repetitive!
            var insert=true;
            var list = element.pointers;
            for (var i=0; i < list.length; i++) {
                if ( ( list[i].reflocation === refer_site) && (list[i].type === refer_type) ) {
                    insert = false;
                    break;
                }
            }

            var referrerallocsite = JSProf.consts.UNKNOWN;
            //if ( obj_recency_map[referrer_object_id] !== undefined) {
                //referrerallocsite = obj_recency_map[referrer_object_id].allocSite;
                //}

                if (insert) {
                    if (MAP[referrer_object_id] === true) {
                        obj_recency_map[obj_id].refCount++;
                        obj_recency_map[obj_id].pointers.push({reflocation:refer_site, type: refer_type, referrerAllocSite: referrerallocsite, referrerObjId: referrer_object_id });
                    }
                }
        }
    }

    function updateModificationObjectRecencyMap (obj_recency_map, obj_id, obj_kind, modify_time, modify_site, modify_type) {
        
        var alloctime, allocsite, lastusetime, lastusesite, lastmodifytime, lastmodifysite;
        alloctime = JSProf.consts.UNKNOWN;
        allocsite = JSProf.consts.UNKNOWN;
        lastusetime = JSProf.consts.UNKNOWN;
        lastusesite = JSProf.consts.UNKNOWN;
        accesstype = JSProf.consts.UNKNOWN; 
        lastmodifytime = modify_time;
        lastmodifysite = modify_site;
        modifytype=modify_type;

        var element = obj_recency_map[obj_id];
        if (element===undefined) {
                obj_recency_map[obj_id]= {kind: obj_kind, allocTime: alloctime, 
                                         lastUseTime: lastusetime, allocSite:allocsite,
                                         lastUseSite: lastusesite, 
                                         lastModifyTime: lastmodifytime,
                                         lastModifySite: lastmodifysite,
                                         accessType: accesstype, modifyType: modifytype,
                                         pointers:[], refCount:0};
        }
        else {
            element.lastModifyTime = modify_time;
            element.lastModifySite = modify_site;
            element.modifyType = modifytype;
            obj_recency_map[obj_id] = element;

            /*obj_recency_map[obj_id].lastModifyTime = modify_time;
            obj_recency_map[obj_id].lastModifySite = modify_site;
            obj_recency_map[obj_id].modifyType = modifytype;*/
        }
    }

    this.processAccessLine = function (line, obj_recency_map, current) {

        var match1 = line.match(JSProf.consts.logGetFieldBracket+","), 
        match2 = line.match(JSProf.consts.logGetFieldDot+","),    //"LGE, LGD"
        match3 = line.match(JSProf.consts.logMethodCall+","), 
        match4 = line.match(JSProf.consts.logFuncCall+","),               //LMC. LFC
        match5 = line.match(JSProf.consts.logRead+","), 
        match6 = line.match(JSProf.consts.logReadUndefined+","),                //LRE  LRU
        match7 = line.match(JSProf.consts.logArrayPush+",");  // Array Psuh (accesses to a and obj; i.e. a.push(obj)  TODO
        
        var accesstype, words, objid, action, usesite;
        if (match1) accesstype = JSProf.consts.logGetFieldBracket;
        if (match2) accesstype = JSProf.consts.logGetFieldDOT;
        if (match3) accesstype = JSProf.consts.logMethodCall;
        if (match4) accesstype = JSProf.consts.logFuncCall;
        if (match5) accesstype = JSProf.consts.logRead;
        if (match6) accesstype = JSProf.consts.logReadUndefined;

        if (match1 || match2 || match3 || match4 || match5 || match6 ) {
            words = line.split(','); 
            var usesite = words[0];
            var objid = words[2];
            var objkind = words[3];

            if (match4)
                objkind="Function";

            if (obj_recency_map !== null) {
                    insertIntoObjMap(obj_recency_map, objid, objkind, current, usesite, accesstype);

                if (match1 || match2 || match3) {
                    var objid2=words[4];
                    var objkind2 = words[5];
                    if ( (objid2!==undefined) && (objkind2 !== undefined) )
                        insertIntoObjMap(obj_recency_map, objid2, objkind2, current, usesite, accesstype);
                }
                return true;
            }
        }
        return false;
    }

    this.processReferenceCreation = function (line, obj_recency_map, current, reference_points_map, MAP) {

        var match1 = line.match(JSProf.consts.logRightSidePutBracket+","), //RPE RSP APPchild
        match2 = line.match(JSProf.consts.logRightSidePutDot+","),         
        match5 = line.match(JSProf.consts.logWrite+","),           // WU W 
        match6 = line.match(JSProf.consts.logWriteUndefined+","),
        match7 = line.match(JSProf.consts.logArrayPush+","),  // Array Psuh Pop
        match8 = line.match(JSProf.consts.logArrayPop+",");

        if (match1 || match2 || match5 || match6 || match7 || match8) {

            var funcname;
            if (match7)    
                funcname = "push";
            else if (match8)    
                funcname = "pop";

            var usesite, objid, objkind, refertype, objid2, objkind2;
            var words = line.split(','); 
            var referrerobjectid = JSProf.consts.UNKNOWN;

            if (match1) refertype  = JSProf.consts.logRightSidePutBracket;
            if (match2) refertype = JSProf.consts.logRightSidePutDot;
            if (match5) refertype = JSProf.consts.logWrite;
            if (match6) refertype = JSProf.consts.logWriteUndefined;
            if (match7) refertype = JSProf.consts.logArrayPush;
            if (match8) refertype = JSProf.consts.logArrayPop;

            if (match1||match2||match5||match6) {
                usesite = words[0];
                objid = words[2];
                objkind = words[3];
            }

            if (match1 || match2) {
                referrerobjectid = findEquivalentObjId(line, usesite, refertype); 
            }
            if (match7 || match8)
                referrerobjectid = words[2];

            if (match5)    
                referrerobjectid = words[4];

            var match = match1||match2||match5||match6||match7||match8;

            if (match7|| match8) {
                           usesite = findLocationsinLastLines(line, funcname);                
                            

                objid=words[4];
                objkind=words[5];

                objid2=words[2];
                objkind=words[3];
            }
            if (obj_recency_map !== null) {   
                if (match) {
                    if (objid !== JSProf.consts.UNKNOWN) { //for the case of W and WU this is needed
                        // should not update lastusesite! so we define a new function:
                        //if ((objid!==JSProf.consts.UNKNOWN) && (objkind!==JSProf.consts.UNKNOWN)) 
                        if ((objid!==JSProf.consts.UNKNOWN)) {
                            updateReferencesObjectRecencyMap(obj_recency_map, objid, objkind, usesite, refertype, referrerobjectid, current, MAP);

                            if (reference_points_map!==null) {
                                createMap(reference_points_map, usesite, objid, objkind, current);
                            }
                        }
                    }
                    if (match7|| match8) {
                        if ((objid!==undefined) && (objkind!==undefined))
                            insertIntoObjMap(obj_recency_map, objid2, objkind2, current, usesite, accesstype); //update access
                    }
                }
            }
        }
    }

    this.createStalenessArray = function(list, MAP, obj_map_recency, current_time ) {
        var dataArray=[];
        var accessed=[];
        function insertIntoList(oid) {
                var element = obj_map_recency[oid];
                var staleness;

                if ( element !== undefined ) {
                    
                    if (accessed.indexOf(oid) < 0 ) {
                        //To handle the case that the object is never been used, 
                        //we do the following:

                        var lastusetimeobject=0;
                        if ( element.lastUseTime !== JSProf.consts.UNKNOWN ) {
                            lastusetimeobject = element.lastUseTime;
                            staleness = current_time - lastusetimeobject;

			    //Here the staleness is computed, later in the other code
			    //it is divided by the maximum to compute relative staleness

                        }    
                        else if ( element.allocTime !== JSProf.consts.UNKNOWN )    {
                            lastusetimeobject = element.allocTime;
                            staleness = current_time - lastusetimeobject;

                         }  

                         else if (element.lastModifyTime !== JSProf.consts.UNKNOWN) {
                             lastusetimeobject = element.lastModifyTime;
                             staleness = current_time - lastusetimeobject;
                         }
                         
                        else {
                            console.log("oid = " + oid);
                            console.log(JSON.stringify(element));
                            throw "Staleness Undefined";
                           }

                        dataArray.push(staleness);  //Staleness Definition Applies here:
                        accessed.push(oid);
                    }
                }
        }

        for (i=0; i<list.length; i++) {
            var oid = list[i].oid;
            if (MAP !== null ) {
                if ( ( MAP[oid] !== undefined ) && (MAP[oid] === true) ) {
                    insertIntoList(oid);
                }
            }
            else{
                insertIntoList(oid)
            }
        }
        return dataArray;
    }

  this.createTimeCountArray = function(list, MAP) {
      var count=0;
      var time_count=[];
      var accessed=[];
      //console.log(list);
      function insertIntoAccess(oid) {
          //The following check is there to avoid the cases where the same object
          // is being accessed. This is especially true for method accesses, when
          // the same method is being called.
          if ( accessed.indexOf(oid) < 0 ) {
              count++;
              accessed.push(oid);
          }
      }

      for (i=0; i<list.length; i++) {
          var oid = list[i].oid;
          if (MAP !== null ) {
              if ( ( MAP[oid] !== undefined ) && (MAP[oid] === true) ) {
                  insertIntoAccess(oid);
              }
          }
          else{   
              insertIntoAccess(oid)
          }   
          time_count.push({time: list[i].time, count: count});
      }
      return time_count;
  }

  this.readFileLineByLine = function(file, func, funEnd) {
      var rd = readline.createInterface({
          input: fs.createReadStream(file),
          output: process.stdout,
          terminal: false
      });
      rd.on('line', function(line) {
          func(line);

      }).on("close", function() {
          funEnd();
      });
  }
})();
