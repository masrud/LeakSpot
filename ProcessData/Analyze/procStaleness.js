var fs = require('fs');
var readline=require('readline');
var stats = require('statistics');

require('../organize');
require('../processHeapSnapshot/process');
var graphProc = require('../Graph');

var liveObjectList=[];
var MAP={};
var SiteNumberThreshold = 0;

/* The following thresholds are used to help in generating a sparse 
allocation-site graph and removing those single nodes
*/
var CCThreshold = 0;
var SlopeThreshold=0.9;
var NEWNUMBER=11;

function find_allocation_sites(obj_map_recency, list, allocationSites) {

	for (var i=0; i< list.length; i++) { 
		var s =  obj_map_recency[ list[i] ].allocSite;
		//console.log(list);
		if ( allocationSites.indexOf( s ) < 0 )
			allocationSites.push( s );
	}
}

function collectiveStaleness(site_map, obj_map_recency, leaked_objects, leaked_sites,  current_time, warmup, time_after_warmup, prefix, endTime, REF, tosendToRef)
{
	var numbersites=0;
	var statistics = new stats();
	for (var i in site_map) {
		numbersites++;
		var maxStaleness=0;
		var newlist = [];
		var stalenessarray=[];
		var listsite=[];

		console.log("----REF IS--------------" + REF);
		var decideToContinue=true;   //based on the type of refernce and whether the referrer is still alive or not!!!

		/*if (REF) {
			decideToContinue=false;
			var tsite = site_map[i].time_oid_list;
			for (var index=0; index< tsite.length; index++) {
			var objid = tsite[index].oid;
			var objectPointed  = obj_map_recency[objid];
			var pointers = objectPointed.pointers;
			console.log("obbjid=== " + objid +   "  i==== " + i);
			console.log(pointers);
			if ( tosendToRef.indexOf( objectPointed.allocSite ) >= 0 ) {
			for (var kk=0; kk< pointers.length; kk++) {
			if ( ( pointers[kk].reflocation === i) && ( pointers[kk].referrerObjId !== '-1')  && 
			( ( pointers[kk].type=== 'LRSP') || ( pointers[kk].type=== 'LRPE' )  )  ) {
			//console.log("equal..........");
			if  ( MAP [pointers[kk].referrerObjId] === true  ) {
			decideToContinue=true;
			}
			}
			}
			}

			}
			console.log("decideToContinue =======" + decideToContinue);
			} */

			if (decideToContinue) {
				if (warmup!==undefined) {
					listsite = site_map[i].time_oid_list;
					for (var index=0; index< listsite.length; index++) {
						if ( listsite[index].time > time_after_warmup )
							newlist.push(listsite[index]);
					}
				}
				else
					newlist = site_map[i].time_oid_list;

				console.log("newlist: site" + i);
				console.log(newlist);
				stalenessarray = UTILS.createStalenessArray(newlist, MAP, obj_map_recency, current_time );
				console.log("============"+warmup);
				console.log("time_after_warmup"+time_after_warmup);
				console.log(stalenessarray);

				//Otherwise it means that the object at this allocation 
				//site is not alive and there is no point in reporting anything
				if ( stalenessarray.length > 0 ) {

					var allocsiteKind = obj_map_recency[ newlist[0].oid ].kind;

					var max = (current_time - time_after_warmup)+1;

					for (var q=0; q< stalenessarray.length; q++)
						stalenessarray[q] = stalenessarray[q]/max ;

					console.log("modified staleness array:" + current_time);
					console.log(stalenessarray);

					var statdata = new stats();
					statdata.pdf(1000, stalenessarray, 0, 1);
					//statdata.pdf(10000000, stalenessarray, 0, 1);
					statdata.normallize_pdf();

					statdata.cdf();
					var list = [];
					statdata.copyToArray(statdata.cdfmap, list);

					//if (list.length > 1 ) {
						statdata.printToFile(statdata.pdfmap, 'staledatapdf'+prefix+i);
						statdata.printToFile(statdata.cdfmap, 'staledatacdf'+prefix+i);
						//}
						var result = statistics.Regression(list);
						console.log(prefix + " Site: " + i + " numberOfObjects: " + 
							list.length+" slope: "+result.slope+" intercept: "+
						result.inter+" corcoef: "+result.cor+" "+ " kind: "+allocsiteKind);

					//here just record the data, put processing based on threshold for later using scripts
					if ( list.length > 1 )
						leaked_sites.push(i);

					for (var hh=0; hh<newlist.length; hh++) {
						leaked_objects.push( newlist[hh].oid ); 
					}

					numbersites++;
				}
			}
	}
	console.log("number of sites collective staleness == " + numbersites);
}

function normalizeDataArray (dataArray, current, time_after_warmup) {
    console.log("NormalizeDataArray" + current + "  " + time_after_warmup);
    for (var i=0; i < dataArray.length; i++) {
       dataArray[i].X =  (dataArray[i].X - time_after_warmup) / (current - time_after_warmup) ;
    }
}

function timeCountgraph(map, leaked_Objects, leaked_Sites, warmup, time_after_warmup, prefix, endTime, current, REF, recency_map, tosendToRef)
{
	var numbersites=0;
	var statistics = new stats();
	for (var i in map) {
		numbersites++;
		var time_count=[];
		var newlist = [];
		console.log("time count site "+i);
		console.log(map[i]);

		var decideToContinue=true;   //based on the type of refernce and whether the referrer is still alive or not
		var tsite = map[i].time_oid_list;
		/*
		if (REF) {
		decideToContinue = false;

		for (var index=0; index< tsite.length; index++) {
		var objid = tsite[index].oid;
		var objectPointed  = recency_map[objid];
		var pointers = objectPointed.pointers;
		//console.log("obbjid=== " + objid +   "  i==== " + i);
		//console.log(pointers);
		if ( tosendToRef.indexOf( objectPointed.allocSite ) >= 0 ) {
		for (var kk=0; kk< pointers.length; kk++) {
		if ( ( pointers[kk].reflocation === i) && ( pointers[kk].referrerObjId !== '-1')  && 
		( ( pointers[kk].type=== 'LRSP') || ( pointers[kk].type=== 'LRPE' )  )  ) {
		//console.log("equal..........");
		if  ( MAP [pointers[kk].referrerObjId] === true  ) {
		decideToContinue=true;
		}
		}
		}
		}

		}
		//console.log("decideToContinue =======" + decideToContinue);
		} */

		if (decideToContinue) {
			if (warmup !== undefined) {
				//first create a list of objects that are allocated after the first GC and then
				//continue with that
				var listsite = map[i].time_oid_list;
				for (var index=0; index< listsite.length; index++) {

					if (endTime !== undefined) {
						if ( ( listsite[index].time > time_after_warmup ) && ( listsite[index].time <= endTime ))
							newlist.push(listsite[index]);
					}
					else {
						if ( listsite[index].time > time_after_warmup )
							newlist.push(listsite[index]);
					}
				}
			}
			else {
				newlist = map[i].time_oid_list;
			}

			console.log("timecount newlist : site: " + i );
			console.log(newlist);
			time_count = UTILS.createTimeCountArray (newlist, MAP);
			var dataArray=[];
			var filename = "dataTimeCount" + prefix + i + "";

			if (time_count.length > SiteNumberThreshold) {
				for (var k=0; k<time_count.length; k++)  {
					dataArray.push({X: time_count[k].time, Y: time_count[k].count});
				}
				console.log("data array befor normalizing X-axis data");
				console.log(dataArray);

				normalizeDataArray(dataArray, current, time_after_warmup);

				console.log("data array after normalizing X-axis data");
				console.log(dataArray);


				var result = statistics.Regression(dataArray);
				console.log(dataArray);

				console.log(prefix + " Site: " + i + " numberOfObjects:"+" "+ 
					time_count.length+" slope: "+result.slope+" intercept: "+
				result.inter+" corcoef: "+result.cor+" ");


			if ((result.slope >= 0) && (result.slope < SlopeThreshold) && (result.cor>=CCThreshold) && (time_count.length > NEWNUMBER) ) {
				leaked_Sites.push(i);
				for (var hh=0; hh<newlist.length; hh++) {
					leaked_Objects.push( newlist[hh].oid ); 
				}
			}
			UTILS.printFile(dataArray, filename);
			}
			numbersites++;    
		}
	} 
	console.log("number of sites time count graph == " + numbersites);
}

function processLiveListSnapshot(fileLiveObjs, file, site, warmup,  end_of_testing, end_of_validation)
{
    HeapProcess.getObjectIDs(fileLiveObjs, liveObjectList, function()
    {
        var liveObjectListLength = liveObjectList.length;
        for (var j=0; j<liveObjectListLength; j++)
            MAP[ liveObjectList[j] ] = true;

                processFile(file, warmup, end_of_testing, end_of_validation);
    });
}

function produce_site_analysis(allocsite_map, obj_recency_map, refpoints_map, setnull_map, current_time, warmup, time_after_warmup, endTime) {

	var leakedObjectsTimeCount=[];
	var leakedObjectsStaleness=[];
	var leakedObjectsContainers=[];
	var leakedSitesTimeCount=[];
	var leakedSitesStaleness=[];
	var overlapLeakedSitesTimeStaleness=[];

	var tosendToRef=[];
	console.log("******Allocation Site TimeCount***********************");
	timeCountgraph(allocsite_map, leakedObjectsTimeCount, leakedSitesTimeCount, warmup, time_after_warmup, "AllocationTimeCount", endTime, current_time, false);
	console.log("leakedSitesTimeCount= "+leakedSitesTimeCount.length);
	console.log(leakedSitesTimeCount);
	tosendToRef = leakedSitesTimeCount;

	console.log("******Allocation Site Staleness***********************");
	collectiveStaleness(allocsite_map, obj_recency_map, leakedObjectsStaleness, leakedSitesStaleness, current_time, warmup, time_after_warmup, "AllocationStaleness", "endTime", false);
	console.log(" leakedSitesStaleness = " + leakedSitesStaleness.length);
	console.log(leakedSitesStaleness);

	//Find overlap between these two methods

	overlapLeakedSitesTimeStaleness=leakedSitesTimeCount;
	console.log("overlapLeakedSitesTimeStaleness= "+ overlapLeakedSitesTimeStaleness.length );
	console.log(overlapLeakedSitesTimeStaleness);
	//overlapLeakedSitesTimeStaleness=leakedSitesStaleness;

	var graphmap = new graphProc(overlapLeakedSitesTimeStaleness, obj_recency_map, MAP, false);
	var strObject  = graphmap.convertToVISLibFormatSCC();
	UTILS.writeToFile (strObject.nodes, 'graphNodes.json');
	UTILS.writeToFile (strObject.edges, 'graphEdges.json');

	strObject  = graphmap.convertToVISLibFormat();
	UTILS.writeToFile(strObject.nodes, 'graphNodesOriginal.json');
	UTILS.writeToFile(strObject.edges, 'graphEdgesOriginal.json'); 

	leakedObjectsTimeCount=[];
	leakedObjectsStaleness=[];
	leakedSitesTimeCount=[];
	leakedSitesStaleness=[];
	overlapLeakedSitesTimeStaleness=[];

	console.log("********Reference Point TimeCount*********************");
	//    timeCountgraph(refpoints_map, leakedObjectsTimeCount, leakedSitesTimeCount, warmup, time_after_warmup, "RefTimeCount", endTime, current_time, true, obj_recency_map, tosendToRef);
	timeCountgraph(refpoints_map, leakedObjectsTimeCount, leakedSitesTimeCount, warmup, time_after_warmup, "RefTimeCount", endTime, current_time);
	console.log("leakedSitesTimeCount: RefPoint === " + leakedSitesTimeCount.length);
	console.log(leakedSitesTimeCount);

	console.log("**********Reference Point Staleness*******************");
	//    collectiveStaleness(refpoints_map, obj_recency_map, leakedObjectsStaleness, leakedSitesStaleness, current_time, warmup, time_after_warmup, "RefStaleness", "endTime", true, tosendToRef);
	collectiveStaleness(refpoints_map, obj_recency_map, leakedObjectsStaleness, leakedSitesStaleness, current_time, warmup, time_after_warmup, "RefStaleness", endTime);
	console.log(" leakedSitesStaleness: RefPoint ==== " + leakedSitesStaleness.length);
	console.log(leakedSitesStaleness);

}


function processFile(file, warmup, end_of_testing, end_of_validation) 
{
    var overlapTimeStaleness=[];
    var overlapLeaked=[];
    var overlapLeakedStrict=[];
    var containers={}

    var setNullMap = {};
    var objRecencyMap = {};

    var allocSiteMap = {};
    var refPointsMap={};
    var idTypeMap = {};
    var emptylist = [];
    var refinedEmptyList = [];

            UTILS.readProfilingData(file, MAP, end_of_validation, objRecencyMap, 
                allocSiteMap, idTypeMap, refPointsMap, setNullMap, refinedEmptyList, 
                function(currentTime) 
                {
                    console.log("currentTime= " );
                    console.log(currentTime);
                    console.log("..........objRecencyMap {............");
                    for (var i in objRecencyMap) {
                        console.log(i);
                        console.log(objRecencyMap[i]);
                    }
                    console.log(".......... } ENDobjRecencyMap............");

                    console.log(MAP);
                    var timeAfterWarmup = refinedEmptyList[end_of_testing];  //Assumes firs emptyline is sent after warmup.
                    console.log("end of testing = " + end_of_testing);
                    console.log("timeAfterWarmup = " + timeAfterWarmup);
                    console.log("endOf Testing = " + end_of_testing);
                    console.log(refinedEmptyList);
                    var endTime = refinedEmptyList[end_of_validation];
                    console.log("endtime = " + endTime);

                    produce_site_analysis(allocSiteMap, objRecencyMap, refPointsMap, setNullMap, currentTime, warmup, timeAfterWarmup, endTime);   
                });
}

/* 
   First arg: name of the js file
   Second arg: heapsnapshot
   Third arg: profiler data
   Fourth arg: the name of website/benchmark
   Fifth arg: whether warmup or not
   Sixth arg: endofTesting
   Seventh arg: endofValidation
*/
process.argv.forEach(function (val, index, array) {
	console.log(index + ': ' + val);
    if (index==2) {
        processLiveListSnapshot(array[2], array[3], array[4], array[5], array[6], array[7]);
    }
});

