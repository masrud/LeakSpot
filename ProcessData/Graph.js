/*
 * Copyright (C) 2014 Masoomeh
 */

module.exports = function(node_list, recency_map, MAP, addnodes, modified) {
    return new GraphStruct(node_list, recency_map, MAP, addnodes, modified);
}

GraphStruct = function(nodes_list, recency_map, MAP, addnodes, modified)
{
    this._node_dict = {};  //maps object ids to objects
    this._recency_map = recency_map;
    this._nodes_list = nodes_list;
    this.extranodes=[];
    this._added_nodes_list = nodes_list;
    this.marked=[];
    this.UNKNOWN= '-1';
    this.NodesCausingLeaks=[];
    this._add_nodes_boolean = addnodes;
    this.MAP = MAP;
    if ( modified!== undefined )
        this._modified_init();
    else
        this._init();
}

GraphStruct.prototype = 
{
    runTarjan: function() {
        var tarjan = new Tarjan (this);
        this._SCC = tarjan.run();
    },
    updateNodeWithSCCNum: function() {
        for (var i=0; i < this._SCC.length; i++) {
            var cc = this._SCC[i];
            var SCCNumber = i;
            for (var j=0; j < cc.length; j++) {
                var node = cc[j];
                console.log("----");
                console.log(node);
                this._node_dict[ node.id ].SCCNum = SCCNumber;
            }
        }
    },
    dfs: function(id, number) {
        if ( this.marked.indexOf(id) < 0 )
            this.marked.push(id);
        else
            return;
    
        if ( this._node_dict[ id ] === undefined )
            return;

       this._node_dict[ id ].componentNumber = number;     

        var edges = this._node_dict[ id ].edges_from;
        for (e in edges) {
            this.dfs(edges[e].to_node_id, number); 
        }

        edges = this._node_dict[ id ].edges_to;
        for (e in edges) {
            this.dfs(edges[e].from_node_id, number); 
        }
    },

    assignComponentNumber: function() {
        var componetn_number=1;
        this.marked=[];
        for (var node_id in this._node_dict) {
            this.dfs( node_id , componetn_number); 
            componetn_number++;
        }
    },

    makeConnectedComponentsFindLeakCause: function() {
        var connectedComponents={};
        for (var node_id in this._node_dict) {
            if ( connectedComponents[ this._node_dict[ node_id ].componentNumber ] === undefined )
                connectedComponents[ this._node_dict[ node_id ].componentNumber ] = [];
            connectedComponents[ this._node_dict[ node_id ].componentNumber ].push(node_id);
        }
        console.log(" connectedComponents ");
        console.log(connectedComponents);

        var visited=[];
        var that = this;
        function directedDFS(id) {
            if ( visited.indexOf(id) < 0 )
                visited.push(id);
            else
                return;

            if ( that._node_dict[ id ] === undefined )
                return;

            var edges = that._node_dict[ id ].edges_from;
            for (e in edges) {
                directedDFS(edges[e].to_node_id); 
            }
        }
        for (var i in connectedComponents) {
            var CC= connectedComponents[i];
            for (var j=0; j< CC.length; j++ ) {
              //if there is any path from CC[j] to all the nodes in the connected components
              //RUN a DFS on the nodes 
              //see if those are all included in the CC
              visited=[];
              var insertinLeakyNodes=true;
              directedDFS(CC[j]);

              for (var k=0; k< CC.length; k++) {
                if ( visited.indexOf(CC[k]) < 0 ) {
                    insertinLeakyNodes=false;
                }
              }
              if (insertinLeakyNodes)
                  this.NodesCausingLeaks.push( CC[j] );
            }
        }
        console.log("this.NodesCausingLeaks");
        console.log(this.NodesCausingLeaks);
    }, 

    dfsSim: function(siteid) 
    {
        if ( this.marked.indexOf(siteid) < 0 ) {
            this.marked.push(siteid);
        }
        else
            return;

        //console.log(siteid);
        
        if ( (siteid===this.UNKNOWN) ) 
            return;
        var sitetolist=[];
        for (var id in this._recency_map) {
            if ( this.MAP[id] === true ) {
                if ( this._recency_map[id].allocSite === siteid ) {

                    //It needs to cover all the references that are made to objects 
                    //allocated at this point, not some of them
                    for (var j=0; j < this._recency_map[id].pointers.length; j++) {

                        //TODO: check to see if the p
                        //actually just insert referrer ObjId, since it is easier to check whether it is included or not!!!
                        if ( sitetolist.indexOf( this._recency_map[id].pointers[j].referrerObjId ) < 0 )
                            if (this.MAP[ this._recency_map[id].pointers[j].referrerObjId ] === true)
                                 sitetolist.push( this._recency_map[id].pointers[j].referrerObjId );
                        //sitetolist.push( this._recency_map[id].pointers[j] );  
                    }
                }
            }
        }
        if (sitetolist.length===0)
            return;
           

        for ( var i = 0; i < sitetolist.length; i++ ) {
            var entry_referrerObjId = sitetolist[i];
            if (entry_referrerObjId !== this.UNKNOWN)  {
                //console.log("........");
                //console.log("this.UNKNOWN");
                //console.log(this.UNKNOWN);
                //console.log(entry.referrerObjId);
                //console.log(entry);
                var parent_node_id = this._recency_map[ entry_referrerObjId ].allocSite ;
                if ( this._added_nodes_list.indexOf(parent_node_id) < 0 ) {
                    this._added_nodes_list.push(parent_node_id);
                    this.dfsSim(parent_node_id);
                }
            }
        }
    },

    _init: function()
    {
        var nodes = this._nodes_list;
        this.marked=[];

        console.log("_added_nodes_boolean: " + this._add_nodes_boolean);
        if (this._add_nodes_boolean) {

            for (var i=0; i < nodes.length; i++)
                this.dfsSim(nodes[i]);

            console.log("added_nodes_list");
            nodes = this._added_nodes_list;
            console.log(nodes.length);
            console.log(nodes); 
        }

        for (var i = 0 ; i < nodes.length; i += 1) {
            this.ReadNodeToIndex(i);
        }
        for (node_id in this._node_dict) {
            var node = this._node_dict[node_id];
            for (e in node.edges_to) {
                var edge = node.edges_to[ e ];
               console.log(edge);
                if (( edge.from_node_id  !== this.UNKNOWN ) && (edge.to_node_id !== this.UNKNOWN) )
                    if (this._node_dict[ edge.from_node_id ] !==undefined)
                        this._node_dict[ edge.from_node_id ].AddEdgeFrom(edge);
 //               else {
   //                 if ( this.extranodes.indexOf( edge.from_node_id) < 0 )
     //                   this.extranodes.push(edge.from_node_id);
             //   }//
                    
                edge.SetToNode(node);
                if  ((  edge.from_node_id  !== this.UNKNOWN ) && ( edge.to_node_id !== this.UNKNOWN))
//                if ( this._node_dict[ edge.from_node_id ] !== undefined )
                    edge.SetFromNode( this._node_dict[ edge.from_node_id ] );
            }
        }

        this.assignComponentNumber();
        this.makeConnectedComponentsFindLeakCause();
        this.runTarjan();
        console.log(" this._node_dict ===== ");
        console.log(this._node_dict);

        this.updateNodeWithSCCNum();
        console.log(" this._node_dict ===== ");
        console.log(this._node_dict);
        for (var mnode_id in this._node_dict) {
             var mnode = this._node_dict[mnode_id];
             var mid = mnode.SCCNum;
             console.log("MAP: nodeSCCNum: "+  mnode_id + " SCCNumm: "+mid);
        }
    },

    _modified_init: function()
    {
        var nodes = this._nodes_list;
        this.marked=[];

        console.log("_added_nodes_boolean: " + this._add_nodes_boolean);
        if (this._add_nodes_boolean) {

            for (var i=0; i < nodes.length; i++)
                this.dfsSim(nodes[i]);

            console.log("added_nodes_list");
            nodes = this._added_nodes_list;
            console.log(nodes.length);
            console.log(nodes); 
        }

        for (var i = 0 ; i < nodes.length; i += 1) {
            this.ReadNodeToIndex(i);
        }
        for (node_id in this._node_dict) {
            var node = this._node_dict[node_id];
            for (e in node.edges_to) {
                var edge = node.edges_to[ e ];
               console.log(edge);
               if (( edge.from_node_id  !== this.UNKNOWN ) && (edge.to_node_id !== this.UNKNOWN) ) {
                   if (this._node_dict[ edge.from_node_id ] ===undefined) {
                        this._node_dict[ edge.from_node_id ] =  this.createNode (edge.from_node_id);
                   }
                  this._node_dict[ edge.from_node_id ].AddEdgeFrom(edge);
                   
               }
                edge.SetToNode(node);
                if  ((  edge.from_node_id  !== this.UNKNOWN ) && ( edge.to_node_id !== this.UNKNOWN))
                    edge.SetFromNode( this._node_dict[ edge.from_node_id ] );
            }
        }

        this.assignComponentNumber();
        this.makeConnectedComponentsFindLeakCause();
        this.runTarjan();
        console.log(" this._node_dict ===== ");
        console.log(this._node_dict);

        this.updateNodeWithSCCNum();
        console.log(" this._node_dict ===== ");

    },

    ReadNodeToIndex: function(nodeIndex)
    {
        var siteid = this._nodes_list[ nodeIndex ];

        var graphNode = this.createNode (siteid); //the allocation site id!

        var recencymap = this._recency_map;

        //here it is considering all references from all objects, whether they
        //are alive or not. But above in the dfsSim it is just considering those
        // nodes which are live, therefore, when making the graph (for visualization),
        //only live nodes are drawn. Although there may be references in graph 
        //structure
        for (var id in recencymap) {
                if ( recencymap[id].allocSite === siteid ) {
                    var sitestolist = recencymap[id].pointers;
                    //console.log(recencymap[id]);

                    for ( var edgeIndex = 0; edgeIndex < sitestolist.length; edgeIndex++ ) {
                        edge = this.ReadEdgeToIndex( graphNode.node_id, sitestolist[edgeIndex]);
                        if (edge)
                            graphNode.AddEdgeTo(edge);
                    }
                }
            
        }
        this._node_dict[ graphNode.node_id ] = graphNode;
    },

    ReadEdgeToIndex: function(node_id, edge_info)
    {
        var edge_refer_type = edge_info.type;
        var edge_refer_point = edge_info.reflocation;

        if ( (edge_info.referrerObjId !== this.UNKNOWN) && (this.MAP[edge_info.referrerObjId] === true) )  {

            var parent_node_id = this._recency_map[ edge_info.referrerObjId ].allocSite ;
            console.log("...... parent_node_id."+parent_node_id + " edge_info.referrerObjId = " + edge_info.referrerObjId);

            return new GEdge(parent_node_id, node_id, edge_refer_type, edge_refer_point );
        }
        else {
            //console.log("...."+edge_info.referrerObjId);
            return false;
        }
    },

    createNode: function(node_id)
    {
        return new GNode(node_id);
    },

    convertToVISLibFormatSCC: function() 
    {
        /*{from: 3, to: 1, style: 'arrow'},
        nodes = [
        {id: 4, label: 'box', shape: 'box', group: 'group_x'}
        ];*/
        var nodes=[];
        var edges=[];
        function contains(edge) {
            for (var i=0; i<edges.length; i++) {
                if ( (edges[i].from === edge.from) && (edges[i].to === edge.to) ) {
                    return false;
                }
            }
            return true;
        }

        for (var node_id in this._node_dict) {
            var node = this._node_dict[node_id];
            var id = node.SCCNum;
            if ( nodes.indexOf(id) < 0 )
                nodes.push(id);

            for (e in node.edges_from) {
                var tni = node.edges_from[ e ].to_node_id;

                var tosccnum = this._node_dict[tni].SCCNum;

                var edge = {from: id , to: tosccnum};
                if (contains(edge))
                    edges.push(edge);
            }
        }

        var nodesStr="nodes = [ "; 
        var edgesStr="edges = [ ";
        for (var id in nodes) {
            nodesStr += " { id: ";  
            nodesStr += id + ", ";
            nodesStr += "label: \'"
            nodesStr += id;
            nodesStr += "\', ";

            nodesStr += "group: ";
            nodesStr += id;
            nodesStr += ", ";

            nodesStr += "shape: \'circle\' ";
            nodesStr += "},\n";
        }
        nodesStr = nodesStr.slice(0,-2); //to remove the last comma
        nodesStr += " ] ";

        for (e in edges) {
            var edge = edges[ e ];
            edgesStr += "  {";
            edgesStr += " from: ";
            edgesStr += edge.from;
            edgesStr += ", to: ",
            edgesStr += edge.to ;
            edgesStr += ", style: " ;
            edgesStr += "\'arrow\'}," 
            edgesStr += "\n";
        }
        edgesStr = edgesStr.slice(0,-2);
        edgesStr += " ] ";

        return {edges: edgesStr, nodes: nodesStr};
    },

    convertToVISLibFormat: function() 
    {
        /*{from: 3, to: 1, style: 'arrow'},
        nodes = [
        {id: 4, label: 'box', shape: 'box', group: 'group_x'}
        ];*/

        var NodesWithIncomingEdges=[];
        var NodesWithOutgoingEdges=[];

        var refinedNodes=[];
        var allNodes=[];
        for (var node_id in this._node_dict) {
            allNodes.push(node_id);
        }
        for (var node_id in this._node_dict) {
            var nd = this._node_dict[node_id];
	    var putDecide = false;
            if (( nd.edges_to.length > 0 ) ) {
                //var putDecide=false;
                for (e in nd.edges_to) {
                    var tni = nd.edges_to[ e ].from_node_id;
                    if (allNodes.indexOf(tni) < 0)
                        putDecide=true
                }
                if (putDecide)
                    refinedNodes.push(node_id)
            }
        }
        console.log("all_nodes_length== "+ allNodes.length);
        console.log(" refinedNodes.length==========");
        console.log(refinedNodes.length);
        console.log("refined nodes========");
        console.log(refinedNodes);

	var refinedReferenceSites=[];

        //convert the _node_dict data structure into a JSON data structure to be used by the visualizer
        var nodesStr="nodes = [ "; 
            var edgesStr="edges = [ ";
                for (var node_id in this._node_dict) {
                    nodesStr += " { id: ";  
                    nodesStr += node_id + ", ";
                    nodesStr += "label: \'"
                    nodesStr += node_id;
                    nodesStr += "\', ";

                    if ( refinedNodes.indexOf(node_id) >=0 ) {
                        //nodesStr += "group: ";
                        nodesStr += "color: ";
                        nodesStr += " \'pink\'";
                        //nodesStr += 29;
                        nodesStr += ", ";
                    }
                    else {
                        //nodesStr += "group: ";
                        nodesStr += "color: ";
                        nodesStr += " \'yellow\'";
                        //nodesStr += 1;
                        nodesStr += ", ";
 
                    }
                    //nodesStr += this._node_dict[node_id].componentNumber;

                    /*if ( this._node_dict[node_id].edges_to.length===0 )
                        nodesStr += "shape: \'star\' ";
                    else    
                        nodesStr += "shape: \'circle\' ";*/


                    //if ( this.NodesCausingLeaks.indexOf(node_id) >= 0 )
                    
		    //if ( this._node_dict[node_id].edges_to.length ==0 )
                    //    nodesStr += "shape: \'star\' ";
                    //else    
                        nodesStr += "shape: \'circle\' ";
                        
                    nodesStr += "},\n";


                    var nd = this._node_dict[node_id];
                    for (e in nd.edges_from) {
                        var tni = nd.edges_from[ e ].to_node_id;
                        
                        NodesWithOutgoingEdges.push(node_id);
                        if (node_id !== tni)
                            NodesWithIncomingEdges.push(tni);

			if ( refinedNodes.indexOf( tni) >= 0 )  {  //only add the edges if it points to a refined node! MARCH

                        edgesStr += "  {";
                        edgesStr += " from: ";
                        edgesStr += node_id;
                        edgesStr += ", to: ",
                        edgesStr += tni ;
                        edgesStr += ", style: " ;
                        edgesStr += "\'arrow\'," 
                        edgesStr += " label: " ;
                        edgesStr += nd.edges_from[ e ].refer_point;
                        edgesStr += "}," 
                        edgesStr += "\n";

			if ( refinedReferenceSites.indexOf( nd.edges_from[ e ].refer_point ) < 0 )
				 refinedReferenceSites.push( nd.edges_from[ e ].refer_point );

			}
                    }
                    /*for (e in nd.edges_to) {
                        var tni = nd.edges_to[ e ].from_node_id;
                        edgesStr += "  {";
                        edgesStr += " from: ";
                        edgesStr += tni;
                        edgesStr += ", to: ",
                        edgesStr += node_id ;
                        edgesStr += ", style: " ;
                        edgesStr += "\'arrow\'}," 
                        edgesStr += "\n";
                    }*/

                }
                edgesStr = edgesStr.slice(0,-2);
                nodesStr = nodesStr.slice(0,-2); //to remove the last comma
                nodesStr += " ] ";
                edgesStr += " ] ";

                var resultStarNodes=[];
                for (var jj=0; jj<NodesWithOutgoingEdges.length; jj++) {
                    if ( NodesWithIncomingEdges.indexOf( NodesWithOutgoingEdges[jj] ) < 0 ) {
                        if ( resultStarNodes.indexOf(NodesWithOutgoingEdges[jj]) < 0 )
                        resultStarNodes.push(NodesWithOutgoingEdges[jj] );
                    }
                }
                console.log("=====================No Incoming Edge Nodes======================");
                console.log(resultStarNodes);

		console.log(refinedReferenceSites.length);
		console.log("============ refinedReferenceSites =====================");
		console.log(refinedReferenceSites);
                                //console.log(NodesWithOutgoingEdges);
                //console.log(NodesWithIncomingEdges);

                return {edges: edgesStr, nodes: nodesStr};
    },
    convertToJsonForceDirected: function()
    {
        //convert the _node_dict data structure into a JSON data structure to be used by the visualizer
        var str="[ "; 
        for (var node_id in this._node_dict) {
            str += " { \n";  
                str += "\"adjacencies\": [\n" ;

                    var colorStr="#007EAA";
                    if ( this._node_dict[node_id].edges_to.length===0 )
                        colorStr = "#CC0000";

                    var nd = this._node_dict[node_id];
                    var edgeStr=""
                    for (e in nd.edges_from) {

                        //var fni = nd.edges_to[ e ].from_node_id;
                        var tni = nd.edges_from[ e ].to_node_id;

                        edgeStr += "  {\n";
                            edgeStr += "    \"nodeTo\":\""; edgeStr += tni;  edgeStr += "\",\n"; 
                            edgeStr += "    \"nodeFrom\":\""; edgeStr += node_id;  edgeStr += "\",\n";
                            edgeStr += " \"$direction\": [\"" + node_id + "\",\"" + tni + "\"],\n";
                            edgeStr += "    \"data\": {\n";  
                            edgeStr+= "      \"$color\": \"#557EAA\", \n";  
                            edgeStr+= "      \"$type\": \"arrow\"";  
                            edgeStr += "    }\n"; 
                            edgeStr += "  }";    
                            //if ( e < ( nd.edges_to.length - 1 ))
                            edgeStr+= ","; 
                            edgeStr += "\n";
                    }
                    edgeStr = edgeStr.slice(0,-2);
                    str += edgeStr;
                    str += " ], \n";
                    //str += " \"data\": {\n  \"$color\": \"#83548B\", \n  \"$type\": \"circle\", \n  \"$dim\": 10 \n },\n";
                    str += " \"data\": {\n  \"$color\": \"" + colorStr +"\", \n  \"$type\": \"circle\", \n  \"$dim\": 10 \n },\n";
                    str += " \"id\": \"";  str += node_id;  str += "\",\n" ;
                    str += " \"name\": \""; str += node_id ; str += "\" \n";
                    str += " } , ";
        }

        str = str.slice(0,-2); //to remove the last comma
        str += " ] ";

        return str;
    }
}

GNode = function( node_id )
{
    this.edges_to = [];
    this.edges_from = []
    this.node_id = node_id;
//    this.type_string = type_string;
}

GNode.prototype = {
    AddEdgeFrom: function(edge)
    {

      this.edges_from.push(edge);
    },

    AddEdgeTo: function(edge)
    {
      //TODO: if such a node already exists, just 
      // increase the weight of that edge, otherwise,
      // insert the edge into the list.
      var list = this.edges_to; insert = true;
      for (var c=0; c < list.length; c++) {
          if ( (list[c].from_node_id === edge.from_node_id) && 
               (list[c].to_node_id === edge.to_node_id ) ) {
              insert = false;
              list[c].weight++;
              break;
          }
      }
      if (insert)
        this.edges_to.push(edge);
    }
};

GEdge = function(from_node_id, to_node_id, refer_type, refer_point)
{
    this.from_node_id = from_node_id;
    this.to_node_id = to_node_id;
    this.from_node = {};
    this.to_node = {};
    this.refer_type = refer_type;
    this.refer_point = refer_point;
    this.weight = 1;
}

GEdge.prototype = {

    SetFromNode: function(node)
    {
      this.from_node = node;
    },

    SetToNode: function(node)
    {
      this.to_node = node;
    }
}

Tarjan = function(graph) 
{
   this._indexes = {};
   this._lowlinks = {};
   this._index = 0;
   this._stack = [];
   this._stackPresence = {};
   this._graph = graph;
   this._scc = [];
}

Tarjan.prototype = {

    run: function()
    {
       for (var node_id in this._graph._node_dict) {
         var nd = this._graph._node_dict[node_id];
         //console.log(node_id + "   " + this._indexes[node_id]);
         if (this._indexes[node_id] === undefined )
           //this.strongconnect(this._graph._node_dict[ node_id ]);
           this.strongconnect( node_id );


        } 
        return this._scc;
     },

     stackcontains: function (nodeid) 
     {
       /*for (var i in this._stack){
         if (this._stack[i]  && this._stack[i] == nodeid  ){
           return true;
         }
       }
       return false;*/
       if (this._stackPresence[nodeid] === undefined)
        return false;
       else
        return true;
     },

     strongconnect: function(nodeid)
     {
         this._indexes[nodeid] = this._index  
         this._lowlinks[nodeid] = this._index;
         this._index = this._index + 1;
         this._stack.push (nodeid); this._stackPresence[nodeid] = 1;
         var node = this._graph._node_dict[nodeid];

         for (e in node.edges_from) {
           var v = nodeid;
           var w = node.edges_from[ e ].to_node_id;
           if ( this._indexes[w] === undefined ) { 
             this.strongconnect( w );
             this._lowlinks[v] = Math.min(this._lowlinks[v], this._lowlinks[w]);
           } else if ( this.stackcontains ( w) ) {
             this._lowlinks[v] = Math.min(this._lowlinks[v], this._indexes[w]);
           }
         }

         // If v is a root node, pop the stack and generate an SCC
         if (this._lowlinks[nodeid] == this._indexes[nodeid]){
           // start a new strongly connected component
           var vertices = [];
           var w = null;
           if (this._stack.length>0){
             do {
               w = this._stack.pop();  this._stackPresence[w] = undefined;
               // add w to current strongly connected component
               var t={};
               t.id = w;
               //t.c = this._graph._node_dict[ w ].class_name ;
               //t.d = this._graph._node_dict[ w ].distance ;
               t.outd = this._graph._node_dict[ w ].edges_from.length;
               t.ind =  this._graph._node_dict[ w ].edges_to.length;
               vertices.push(t);
             } while (nodeid !== w);
           }
           // output the current strongly connected component
           // ... i'm going to push the results to a member scc array variable
           if (vertices.length>0){
             console.log("stronglyConnectedComponents "+ this._scc.length);
             this._scc.push(vertices);
             for (var i in vertices) {
               console.log(vertices[i]  );
               }
             //setTimeout(function(){ this.writeToFile( vertices )}, 1000);
             // this.writeToFile( vertices );
           }
         }
        }
};
