
function applyRemoval( gmap1, gmap2 , list1, list2, list3, list4, list5 ){
 
    for (var i=0; i < list1.length ; i++)
    	gmap2.removeNodes( list1[i] );

    console.log( " new length of map after leaf removal is : ");
    console.log( gmap2.mapLength() );

    for (var i=0; i < list2.length ; i++)
    	gmap2.removeNodes( list2[i] );

    console.log( " new length of map after nonOwner removal is : ");
    console.log( gmap2.mapLength() );

    for (var i=0; i < list3.length ; i++)
    	gmap2.removeNodes( list3[i] );
    console.log( " new length of map after noAgeIntersection removal is : ");
    console.log( gmap2.mapLength() );

    
    for (var i=0; i < list4.length ; i++)
    	gmap2.removeNodes( list4[i] );
    console.log( " new length of map after no data type intersect : ");
    console.log( gmap2.mapLength() );

    for (var i=0; i < list5.length ; i++)
    	gmap2.removeNodes( list5[i] );

    console.log( " new length of map is : ");
    console.log( gmap2.mapLength() );
    console.log( gmap2.listAll() );
    console.log( gmap2._node_dict);
    console.log("After Adjustment");
    gmap2.adjustMap();
    console.log( gmap2._node_dict ); 
}

function heuristics(file1, file2) {

	//var result1 = createWebSnapshot(heapSnapshotFile);
    //var result2 = createWebSnapshot(secondSnapshotFile);

	var result1 = createWebSnapshot(file1);
    var result2 = createWebSnapshot(file2);

	//var result1 = createMockSnapshot();
	//var result2 = createMockSnapshot();

	var graphmap1 = makeGraphMap( result1 );
	var nonOwner1 = graphmap1.findNonOwners();
	var leafs1 = graphmap1.findLeafs();
	console.log("........ nonOwner.length ............ ");
	console.log(nonOwner1.length);
	
	console.log("..........leafs.length..........");
	console.log(leafs1.length);
    console.log("#######################################");
	var graphmap2 = makeGraphMap( result2 );
	var nonOwner2 = graphmap2.findNonOwners();
	var leafs2 = graphmap2.findLeafs();
	console.log("........ nonOwner2.length ............ ");
	console.log(nonOwner2.length);
	console.log("..........leafs2.length..........");
	console.log(leafs2.length);

	//console.log(" nonOwner Index " );
	//console.log( nonOwner.indexOf(88951) );
	var str="Leafs\n";
	for (var i=0; i< leafs1.length; i++){
		str+= leafs1[i];
		str+="\n";
	}
	str+="NonOwner\n";
	for (var i=0; i< nonOwner1.length; i++){
		str+= nonOwner1[i];
		str+="\n";
	}
    //Compare the two heap snapshots to find the new objects. So, for each node Id in the second
    //heap snapshot, check to know if you see it in the first snapshot, and if not, it is a new objects.
    //To make it faster, perform each search using a binary search.

    //console.log(graphmap1._node_dict);
    //console.log(graphmap2._node_dict);
    
    var newObjectsList = compareTwoObjectMaps(graphmap1._node_dict, graphmap2._node_dict);
//    console.log( newObjectsList );

    //Find those objects that own only older or only new objects. If no object is added to
    //a data structure in any of the reference graph snapshots, then this object is an unchanging
    //data structure

    console.log( "find No Age Intersection:: :::::::::::::::: ");
    var noAgeIntersection = graphmap2.findNoAgeIntersection(newObjectsList);
    console.log ( noAgeIntersection.length );

    var fringeList =  extractFringeList(graphmap1._node_dict, graphmap2._node_dict, newObjectsList );
    console.log(fringeList);

    var nofringe = graphmap2.findNoFringe( fringeList );
    console.log("nofringe...........:");
    console.log( nofringe );

    var allLength= noAgeIntersection.length + leafs2.length + nonOwner2.length + nofringe.length;
    console.log ( allLength );

    var nodataTypeIntersect = graphmap2.findNoDataTypeIntersection( newObjectsList );
    console.log("............ nodataTypeIntersect ................");
    console.log( nodataTypeIntersect );

//	setTimeout( function() { filecreate.writeToFileRaw( str ) }, 3000 ) ;
//	var degreeresult = graphmap.nodeDegrees();
//	setTimeout( function() { filecreate.writeToFile( degreeresult) }, 3000 ) ;

    applyRemoval(graphmap1, graphmap2, leafs2, nonOwner2, noAgeIntersection, nodataTypeIntersect, nofringe);
    applyRemoval(graphmap1, graphmap2, leafs2, nonOwner2, noAgeIntersection, nodataTypeIntersect, nofringe);
}

function ApplyHeuristics() {
    heuristics(heapSnapshotFile, secondSnapshotFile);
}
