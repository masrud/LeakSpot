HeapProcess = new ( function() {

    require('./HeapSnapshot.js');
    require('./HeapSnapshotLoader.js');
    require('./JSHeapSnapshot.js');
    require('./GraphMapSnapshot.js');
    require('./utility.js');
    require('./FileUtils.js');
    var readline=require('readline');
    var fs = require('fs');

    var heapSnapshotFile;
    var secondSnapshotFile;
    var nodeDifferenceFile;
    var nodeVisualizeListFile;
    var fileList=[];

    function makeGraphMap (result) {
        //	console.log( " meta information: " , result._metaNode );
        var graphmap = new GraphMap(result);
        //	console.log("original node count:  " + result.nodeCount);
        //	console.log("map length: " + graphmap.mapLength());
        //	console.log("total size: " + result.totalSize );
        //	console.log("--------------------------------");
        return graphmap;
    }

    var resultNodeDegrees = [];

    function createWebSnapshot(fileSnapshot) {
        var snapshotLoader = new HeapSnapshotLoader();
        snapshotLoader.write(fileSnapshot);
        snapshotLoader.close();
        return snapshotLoader.buildSnapshot();
    }

    this.getObjectIDs = function(fileSnapshot, node_list, func) {
    	console.log("nnnnnnnnn");
        var Snapshot = fs.readFileSync(fileSnapshot, 'utf8');
        var result = createWebSnapshot(Snapshot);
        function inserintolist(oid) {
            if ( node_list.indexOf(oid) < 0 )
                node_id.push(oid);
        }

        //This is the list of uninteresting edge types
        //var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut', 'context', 'element', 'invisible'];
        var graphmap = makeGraphMap( result );

        for (var i in graphmap._node_dict) {
            var str = i+ " " + graphmap._node_dict[i].class_name + " " ;
            EdgesTo = graphmap._node_dict[i].edges_to;

            for (var j in EdgesTo) {
                if ( EdgesTo[j].name_string == '__objectID__') {
                    var name = graphmap._node_dict[i].class_name;
                    var re = /[0-9]S{1}[0-9]/i;
                    var found = name.match(re);
                    if (found !== null) {
                        node_list.push(name);
                        //process.stdout.write(str);
                        //process.stdout.write( EdgesTo[j].from_node_id + " -  " + EdgesTo[j].to_node_id + " " + EdgesTo[j].type_string + " "+EdgesTo[j].name_string );
                        //process.stdout.write("\n"); 
                    }
                }
            }
        }
        func();
        
        /* for (var i in graphmap._node_dict) {
            for (var j=0; j< graphmap._node_dict[i].edges_from.length; j++) {
            var edge = graphmap._node_dict[i].edges_from[j];
            if (edge.name == '__objectID__') {
            var tonodeid = edge.to_node_id;
            }
            console.log(graphmap._node_dict[tonodeid]);
            }
            }
            */
    }

})();
