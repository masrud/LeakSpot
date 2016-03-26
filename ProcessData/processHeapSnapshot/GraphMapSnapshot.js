/*
 * Copyright (C) 2012 Masoomeh
 */
/**
 * @constructor
 * @param {JSHeapSnapshot=} jsheapsnapshot
 */
GraphMap = function(jsheapsnapshot)
{
    this._node_dict = {};  //maps object ids to objects
    this._snapshot = jsheapsnapshot;
    this._init();
    this.mark={};
    this._visited={};
    this.computedList={};
    this._node_names={};
}

GraphMap.prototype = {

   _init: function()
    {
      var nodes = this._snapshot._nodes;
      var nodesLength = this._snapshot._nodes.length;
      var nodeCount = this._snapshot.nodeCount
      var nodeFieldCount = this._snapshot._nodeFieldCount;

      //console.log("node field count = "); console.log(nodeFieldCount);
      //console.log(nodes);  console.log(nodeCount);

      for (var nodeIndex = 0 ; nodeIndex < nodes.length; nodeIndex += nodeFieldCount) {
        //console.log("node Index = " );
        //console.log(nodeIndex);
        this.ReadNodeFromIndex(nodeIndex);
      }

      /*for (node_id in this._node_dict) {
        var nd = this._node_dict[node_id];
        console.log( nd );
      }*/

      for (node_id in this._node_dict) {
        var nd = this._node_dict[node_id];
        //console.log(nd.edges_from);
        for (e in nd.edges_from) {
          //console.log( nd.edges_from[ e ].to_node_id );
          //console.log( this._node_dict[ nd.edges_from[ e ].to_node_id ] );
          var ed = nd.edges_from[ e ];
          //console.log(ed);
          //console.log( this._node_dict[ ed.to_node_id ] );
          this._node_dict[ ed.to_node_id ].AddEdgeTo(ed);
          ed.SetFromNode(nd);
          ed.SetToNode( this._node_dict[ ed.to_node_id ] );
        }
      }
      
      /*for (node_id in this._node_dict) { 
        console.log( this._node_dict[node_id] );
      }*/
    },

    /*
      Reads the data for a node from the heap snapshot.
      If the index contains an interesting node, construct a node object and 
      add it to _node_dict map.
    
      Args: 

    */

    findNoDataTypeIntersection: function(newObjsList)
    {
        var list=[];
        for (node in this._node_dict) {
            var nd = this._node_dict[ node ];
            var edgesFrom = nd.edges_from;
            var oldOwned=[];
            var newOwned=[];
            for (var i=0; i<edgesFrom.length; i++) {
                var nid = edgesFrom[i].to_node_id;
                var nidType = this._node_dict[ nid ].class_name;  
                
                if ( !this.booleanBinarySearch( nid, newObjsList ) ) {
                    oldOwned.push( nidType );
                }
                else {
                    newOwned.push( nidType );
                }
            }
//            console.log(nd.node_id);
//            console.log(oldOwned);
//            console.log(newOwned);
            var determine = false;
            for (var i=0; i < oldOwned.length; i++) {
                for (var j=i+1; j < newOwned.length; j++) {

//                        console.log( oldOwned[i] );
//                        console.log( newOwned[j] );
                    if ( oldOwned[i] == newOwned[j] ) {
                        determine = true;
                        break;
                    }
                }
            }
            if (!determine)
                list.push( nd.node_id );
        }
        return list;
    },

    /*
       Since most of the nodes are removed, first I just delete every node, without
       updating the whole graphMap (in function removeNode). At the end, I go through
       all the node and update the edgesTo and edgesFrom lists. 
     */
    removeNodes: function(idToDelete)
    {
        //console.log( this._node_dict  );
        //console.log(idToDelete);
        if ( this._node_dict[idToDelete] !== undefined ) {
           delete this._node_dict[ idToDelete ];
        }
        //else
          //  console.log(" It is node defined ");
    },
    
    /*
     This function removes the node information that are included in the
     edgesto and edgesfrom. The removeNode function just removes a node,
     by deleting it from the map, however it does not update the information of
     the neighboring nodes. The following function first goes through the map
     to find a list of objects available in the map. Then it goes through the node
     list again and updates the related information for each node. 
    */
   adjustMap: function()
   {
         var currentlist=[];
         for (var node in this._node_dict) {
             currentlist.push( this._node_dict[node].node_id );
         }
         console.log(" ........currentlist.............. ");
         console.log(currentlist);

         for (var node in this._node_dict) {
             var nd = this._node_dict[ node ];
             var edgesTo = nd.edges_to;
             for (var i=edgesTo.length-1; i>=0; i--) {
                 var fromnodeid = edgesTo[i].from_node_id;
                 if ( !this.booleanBinarySearch( fromnodeid , currentlist) )
                     this._node_dict[ node].edges_to.splice(i, 1);

             }

             var edgesFrom = nd.edges_from;
             for (var i=edgesFrom.length-1; i>=0; i--) {
                 var tonodeid = edgesFrom[i].to_node_id;
                 if ( !this.booleanBinarySearch( tonodeid , currentlist) ) {
                     this._node_dict[ node ].edges_from.splice(i, 1);
                 }
             }
         }
     },

   findLeafs: function()
   {
       var result=[];
       for (node_id in this._node_dict) {
           var nd = this._node_dict[node_id];
           if ( nd.edges_from.length === 0 )
                result.push( this._node_dict[ node_id ].node_id);
      }
      return result;
   },

   findNonOwners: function()
    {
        var result= [];
                
        //find those nodes that do not own a node uniquely. Actually, it goes
        //through all the nodes and if the parent of a node share its ownership
        //with other nodes, then the parent node is marked to be deleted.

        console.log("........................Inside findNonOwners .............");
        var nodePresentResult={};

        for (node_id in this._node_dict) {
            var nd = this._node_dict[node_id];
            if ( nd.edges_from.length > 0 ) {  // if the node is not a leaf
                var boolNodeOwner=false;
                for ( var i=0; i < nd.edges_from.length; i++ ) {
                    var nid = nd.edges_from[i].to_node_id;
                    if (   this._node_dict [  nid ].edges_to.length == 1  ){
                        boolNodeOwner=true;
                        break;
                    }
                }
                if ( !boolNodeOwner ) {
                    if ( nodePresentResult[node_id] === undefined ) {
                        result.push( this._node_dict [ node_id ].node_id );
                        //console.log( fromNodeId );
                        nodePresentResult[ node_id ]=true;
                    }
                }
            }
        }
        return result;
    },

    booleanBinarySearch: function( key, list )
    {
        var imin=0; 
        var imax=list.length -1; 
        while (imax >= imin)
        {
            imid = Math.floor( (imin+imax) /2 ); //check to see if this is integer.
            //       console.log(imid);
            if ( list[imid] < key )
                imin = imid + 1;
            else if (  list[imid] > key  )
                imax = imid - 1;
            else {
                //return imid;
                return true;
            }
        }
        return false;
    },

    XOR: function(a , b)
    {
        if( ( a && !b ) || ( !a && b ) ) {
            return true;
        }
        return false;
    },

    findNoAgeIntersection: function(newObjsList)
    {
        //if all the objects pointed to by a node are in OLD set or
        //if all the objects pointed to by a node are in NEW set
        //then the node needs to be removed since there is no age intersection
        //in its references

        var list=[];

        console.log("Inside find no age intersection ");
        //console.log( newObjsList );
        for (var node in this._node_dict){
            var nd = this._node_dict[node];
            if ( nd.edges_from.length > 0 ) {
                var nid = nd.edges_from[0].to_node_id;
                var determineNodeOR  = this.booleanBinarySearch( this._node_dict [  nid ].node_id , newObjsList);
                var determineNodeAND = determineNodeOR; 

                for (var i=1; i<nd.edges_from.length; i++){ 
                    var nid = nd.edges_from[i].to_node_id;
                    var temp = this.booleanBinarySearch( this._node_dict [  nid ].node_id , newObjsList) ;
                    determineNodeOR  =  determineNodeOR   || temp;
                    determineNodeAND =  determineNodeAND  && temp;
                }

/*
                if (nd.edges_from.length == 1) {
                    if ( determineNodeOR  ) 
                        list.push(this._node_dict[node].node_id );
                }else if ( determineNodeOR && !determineNodeAND  )
                    list.push(this._node_dict[node].node_id );
*/
//The above is actually the nodes that should be included not to be removed. The following is the list of
//nodes that need to be removed

                if (nd.edges_from.length == 1) {
                    if ( !determineNodeOR  ) 
                        list.push(this._node_dict[node].node_id );
                }else if ( ! ( determineNodeOR && !determineNodeAND  ) )
                    list.push(this._node_dict[node].node_id );
            }
        }
        return list;
    },

    findNoFringe: function( fringeList )
    {
        //find those objects that own no objects on the fringe.
        var list=[];
        for (var node in this._node_dict){
            var nd = this._node_dict[node];
            if ( nd.edges_from.length > 0 ) {
                
                var determine=false;
                for (var i=1; i<nd.edges_from.length; i++){ 
                    var nid = nd.edges_from[i].to_node_id;
                    var determine = this.booleanBinarySearch( this._node_dict [  nid ].node_id , fringeList) ;
                    if (determine){
                        break;
                    }
                }
                if (!determine)
                    list.push(nd.node_id );
            }
        }
        return list;
    },

    mapLength: function()
    {
      var count=0;
      for (var i in this._node_dict )
        count++;
      return count;
      
    },

    listAll: function()
             {
                 var list=[];
                 for (var node in this._node_dict)
                     list.push( this._node_dict[node].node_id);
                 return list;
             },

    ReadNodeFromIndex: function(nodeIndex)
    {
        if ( nodeIndex + this._snapshot._nodeFieldCount >  this._snapshot._nodes.length )
          console.log("ERROR: snapshot node list too short");

        var type_ind = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeTypeOffset];
        var type_string = this._snapshot._nodeTypes [type_ind];
        //console.log(" type _string n= " + type_string);

        //if ( ( this.IsNodeTypeUninteresting(type_string) ) || ( !this.canBeQueried(nodeIndex) ) )
        if ( ( this.IsNodeTypeUninteresting(type_string) )  )
          return;

        var node_name_ind = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeNameOffset];
        var node_id  = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeIdOffset];
        var class_name; 

//        if (type_string == 'object')
          class_name = this._snapshot._strings[ node_name_ind  ];
  //      else
    //      class_name = type_string;
     
        //console.log(class_name);
        if ( class_name === 'objectNumber' )
            console.log(  );
        var nodeDistance = this._snapshot._nodeDistances [ nodeIndex / this._snapshot._nodeFieldCount  ]; 

        var nodeDominator = this._snapshot._dominatorsTree [ nodeIndex / this._snapshot._nodeFieldCount ];
        var nodeDominatorIndex = this._snapshot._nodes[  nodeDominator * this._snapshot._nodeFieldCount + this._snapshot._nodeIdOffset ];

        var graphNode = this.createNode (node_id, type_string, class_name, nodeDistance, nodeIndex, nodeDominatorIndex);
  
        if (type_string == 'string')
          graphNode.string = this._snapshot._strings[ node_name_ind ];

        for (var edgeIndex = this.edgeIndexStart( nodeIndex ) ; edgeIndex < this.edgeIndexEnd( nodeIndex ); edgeIndex += this._snapshot._edgeFieldsCount ) {
          var edge = this.ReadEdgeFromIndex( graphNode.node_id, edgeIndex );
          if (edge)
            graphNode.AddEdgeFrom(edge);
        }
        this._node_dict[ graphNode.node_id ] = graphNode;
    },

    ReadEdgeFromIndex: function(node_id, edge_index)
    {
      if (  edge_index + this._snapshot._edgeFieldsCount   > this._snapshot._containmentEdges.length )
        console.log("Snapshot Edge List too short");

      var edge_type_index = this._snapshot._containmentEdges [ edge_index + this._snapshot._edgeTypeOffset ];
      var edge_type_string = this._snapshot._edgeTypes[ edge_type_index ];
      //console.log("Inside Read Edge From Index");
      //console.log(edge_type_string);
      
      if ( this.IsEdgeTypeUninteresting(edge_type_string) )
        return null;

      var child_node_name_or_index = this._snapshot._containmentEdges[ edge_index +  this._snapshot._edgeNameOffset];
      var child_node_index   = this._snapshot._containmentEdges[ edge_index + this._snapshot._edgeToNodeOffset];

      var child_node_type_index = this._snapshot._nodes[ child_node_index + this._snapshot._nodeTypeOffset  ];
      var child_node_type_string = this._snapshot._nodeTypes[ child_node_type_index  ];

      var child_node_id = this._snapshot._nodes[ child_node_index + this._snapshot._nodeIdOffset ];

      //if  ( this.IsNodeTypeUninteresting(child_node_type_string) ||  (!this.canBeQueried(child_node_index)) )
      if  ( this.IsNodeTypeUninteresting(child_node_type_string)  )
        return null;

      var child_name_string = '';

      if ( ( edge_type_string == 'element'  ) || ( child_node_name_or_index >= this._snapshot._strings.length) )
        child_name_string = String(child_node_name_or_index ) ; 
      else
        child_name_string = this._snapshot._strings[ child_node_name_or_index ];

      return new GraphEdge(node_id, child_node_id, edge_type_string, child_name_string );
    },

    createNode: function(node_id, type_string, class_name, nodeDistance, node_index, nodeDominatorIndex)
    {
      return new GraphNode(node_id, type_string, class_name, nodeDistance, node_index, nodeDominatorIndex);
    },

    IsNodeTypeUninteresting: function(type_string)
    {
        //	return false;
        /*
        Returns true if the node is of an uninteresting type and should not be included in the 
        heap graph
        */
        //      var uninteresting_types = [ 'code', 'number', 'native', 'synthetic'];
        //      var uninteresting_types = ['hidden', 'code', 'number', 'synthetic', 'native'];
        //var uninteresting_types = ['hidden', 'code', 'number', 'synthetic', 'native'];
        //var uninteresting_types = ['hidden', 'code', 'number'];
        //var uninteresting_types = ['hidden', 'code', 'number', 'native', 'synthetic'];
        //var uninteresting_types = ['hidden', 'code', 'number', 'native', 'synthetic', 'regexp', 'string', 'array', 'Object', 'object'];
        var uninteresting_types = ['hidden', 'code', 'number', 'synthetic'];
        //string, Object, object, Array, array these are left.
        var uninteresting_types = [];
        for (var i in uninteresting_types){
            //console.log(uninteresting_types[i]);
            if ( uninteresting_types[i] === type_string ) 
                return true;

        }
        return false;
    },

    IsEdgeTypeUninteresting: function(edge_type_string)
    {
        //	return false;
        //var uninteresting_types = ['weak', 'hidden', 'internal'];
        //var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut', 'context'];
        //var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut', 'context', 'invisible']; 
        //var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut', 'context', 'element', 'property', 'invisible'];
       // var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut', 'element', 'property', 'invisible'];
        //var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut', 'context', 'element', 'property'];
//        var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut', 'context', 'element', 'invisible'];
//        var uninteresting_types=[];
        var uninteresting_types = ['weak', 'hidden', 'internal', 'shortcut'];
//        var uninteresting_types = ['weak', 'hidden', 'shortcut'];
        for (var i in uninteresting_types) {
            if (uninteresting_types[i] === edge_type_string)
                return true;
        }
        return false;
    },

    edgeIndexStart: function (nodeIndex)
    {
      var nodeOrdinal = nodeIndex / this._snapshot._nodeFieldCount;
      return this._snapshot._firstEdgeIndexes[ nodeOrdinal ];
    },
    
    edgeIndexEnd: function (nodeIndex)
    {
      var nodeOrdinal = nodeIndex / this._snapshot._nodeFieldCount;
      return this._snapshot._firstEdgeIndexes[ nodeOrdinal + 1];
    },

    dispose: function()
    {
      delete this._node_dict;
    },

    convertToJsonForceDirected: function()
    {
      //convert the _node_dict data structure into a JSON data structure to be used by the visualizer
      var str=""; 


      for (var node_id in this._node_dict) {
        str += " { \n";  
        str += "\"adjacencies\": [\n" ;

        var nd = this._node_dict[node_id];
        var edgeStr=""
         for (e in nd.edges_from) {
          var tni = nd.edges_from[ e ].to_node_id;
          console.log( node_id, "   ", tni );
          
          edgeStr += "  {\n";
          edgeStr += "    \"nodeTo\":\""; edgeStr += tni;  edgeStr += "\",\n"; 
          edgeStr += "    \"nodeFrom\":\""; edgeStr += node_id;  edgeStr += "\",\n";
          edgeStr += "    \"data\": {\n";  edgeStr+= "      \"$color\": \"#557EAA\"";  edgeStr += "    }\n"; 
          edgeStr += "  }";    if ( e < ( nd.edges_from.length - 1 )) edgeStr+= ",";
          edgeStr += "\n";
        }

        str += edgeStr;
        str += " ], \n";
        str += " \"data\": {\n  \"$color\": \"#83548B\", \n  \"$type\": \"circle\", \n  \"$dim\": 10 \n },\n";
        str += " \"id\": \"";  str += node_id;  str += "\",\n" ;
        str += " \"name\": \""; str += node_id ; str += "\" \n";
        str += " } , ";
        
      }
      str = str.slice(0,-2);

      console.log( str );
    },

    
    convertToJsonForceDirectedSubset: function()
    {
      //Make subset:
      var subset_nodes = {};
      for (var node_id in this._node_dict) {
        var nd = this._node_dict[node_id];
        //if ( (nd.class_name =='HTMLDivElement' ) || (nd.type == 'HTMLDivElement') )
        if ( (nd.class_name =='MyObj' )  )
          subset_nodes [node_id] = nd;
      }
      
      var temp = {};
      for (var node_id in subset_nodes) {
        var nd = subset_nodes[node_id];
        for (var i=0; i< nd.edges_to.length; i++) {
          temp [  (nd.edges_to)[i].from_node_id  ] = (nd.edges_to)[i].from_node;
        }
      
/*        for (var i=0; i< nd.edges_from.length; i++) {
          temp [  (nd.edges_from)[i].to_node_id  ] = (nd.edges_from)[i].to_node;
        }*/
      }

      for (var node_id in temp) {
        subset_nodes [ node_id ] = temp [node_id];
      }



      var count=0;
      for (i in subset_nodes )
        count++;
      console.log( " subset_nodes.length = " + count);

      //convert the _node_dict data structure into a JSON data structure to be used by the visualizer
      var str=""; 

      for (var node_id in subset_nodes) {
        str += " { \n";  
        str += "\"adjacencies\": [\n" ;

        var nd = subset_nodes[node_id];
        var edgeStr=""
         for (e in nd.edges_from) {
          var tni = nd.edges_from[ e ].to_node_id;
          //console.log( node_id, "   ", tni );
          
          edgeStr += "  {\n";
          edgeStr += "    \"nodeTo\":\""; edgeStr += tni;  edgeStr += "\",\n"; 
          edgeStr += "    \"nodeFrom\":\""; edgeStr += node_id;  edgeStr += "\",\n";
          edgeStr += "    \"data\": {\n";  edgeStr+= "      \"$color\": \"#557EAA\"";  edgeStr += "    }\n"; 
          edgeStr += "  }";    if ( e < ( nd.edges_from.length - 1 )) edgeStr+= ",";
          edgeStr += "\n";
        }

        str += edgeStr;
        str += " ], \n";
        str += " \"data\": {\n  \"$color\": \"#83548B\", \n  \"$type\": \"circle\", \n  \"$dim\": 10 \n },\n";
        str += " \"id\": \"";  str += node_id;  str += "\",\n" ;
        str += " \"name\": \""; str += node_id ; str += "\" \n";
        str += " } , ";
        
      }
      str = str.slice(0,-2);
      return str;
    },

    LinearSearch: function(key, list)
    {
        for (var i=0; i<list.length; i++) {
            if (key==list[i])
                return true;
        }
        return false;
    },

    makeJsonGraphFromSet: function(subset_nodes)
    {
      var count=0;
      for (i in subset_nodes ){
        //console.log( subset_nodes[i]);
        count++;
      }
      console.log( " subset_nodes.length = " + count);
      //convert the _node_dict data structure into a JSON data structure to be used by the visualizer
      var str=""; var graphArray = [];
      var colors = [ "#dd99dd", "#cc0000", "#fff", "#557EAA", "#C74243", "#83548B", "#dd99dd", "#cc0000", "#fff", "#557EAA", "#C74243", "#83548B" ];

      for (var node_id in subset_nodes) {
        str  = " { \n";  
        str += "\"adjacencies\": [\n" ;

        var nd = subset_nodes[node_id];
        var edgeStr=""
         for (e in nd.edges_from) {
          var tni = nd.edges_from[ e ].to_node_id;
          //console.log( node_id, "   ", tni );
          edgeStr += "  {\n";
          edgeStr += "    \"nodeTo\":\""; edgeStr += tni;  edgeStr += "\",\n"; 
          edgeStr += "    \"nodeFrom\":\""; edgeStr += node_id;  edgeStr += "\",\n";
        //edgeStr += "    \"data\": {\n";  edgeStr+= "      \"$color\": \"#557EAA\",\n";   
          edgeStr += "    \"data\": {\n";  edgeStr+= "      \"$color\": \""; edgeStr+= colors[e]; edgeStr+= "\",\n";   
          //edgeStr += "\"$type\":\"arrow\",\n";

          //if there is also an edge from tni to nodeid replace arrow with double_arrow
          
            var boolVal=false;
            for ( var tt in this._node_dict[tni].edges_from ){
              if ( node_id == this._node_dict[tni].edges_from[tt].to_node_id ) {
                boolVal = true; break;
              }
            }
          if (boolVal)
            edgeStr += "\"$type\":\"double_arrow\",\n";
          else
            edgeStr += "\"$type\":\"arrow\",\n";

          edgeStr += "\"$dim\":\"10\",\n";

          edgeStr +=  "\"weight\": 5,\n";

 
          edgeStr+=" \"$direction\":\[\""; edgeStr+= node_id; edgeStr+="\", \"";  edgeStr+= tni; edgeStr += "\"\] ";   
          //console.log(node_id, tni);
          edgeStr += "    }\n"; 
          edgeStr += "  }";    if ( e < ( nd.edges_from.length - 1 )) edgeStr+= ",";
          edgeStr += "\n";
        }
      
        //console.log(edgeStr);

        str += edgeStr;
        str += " ], \n";
        if ( ( nd.class_name == 'HTMLDivElement' )  )
          str += " \"data\": {\n  \"$color\": \"#83548B\", \n  \"$type\": \"circle\", \n  \"$dim\": 5 \n },\n";
        else
          str += " \"data\": {\n  \"$color\": \"#C74243\", \n  \"$type\": \"triangle\", \n  \"$dim\": 2 \n },\n";

        str += " \"id\": \"";  str += node_id;  str += "\",\n" ;
        str += " \"name\": \""; str += node_id ; str += "\" \n";
        str += " } ";
        graphArray.push ( JSON.parse ( str )  );
      }
      return graphArray;
    },

    extend_nodes:  function( subset_nodes ) {
        var temp = {};
        var return_nodes = {};
        for (var node_id in subset_nodes) {

            var nd = subset_nodes[node_id];
            for (var i=0; i< nd.edges_to.length; i++) {
                temp [  (nd.edges_to)[i].from_node_id  ] = (nd.edges_to)[i].from_node;
            }
            /*   for (var i=0; i< nd.edges_from.length; i++) {
                 temp [  (nd.edges_from)[i].to_node_id  ] = (nd.edges_from)[i].to_node;
                 }*/
        }

        for (var node_id in temp) {
            return_nodes [ node_id ] = temp [node_id];
        }

        for (var node_id in subset_nodes) {
            return_nodes [ node_id ] = subset_nodes [node_id];
        }

        /***********************************************/
        /*      var temp = {};
                for (var node_id in subset_nodes) {

                var nd = subset_nodes[node_id];
                for (var i=0; i< nd.edges_to.length; i++) {
                temp [  (nd.edges_to)[i].from_node_id  ] = (nd.edges_to)[i].from_node;
                }
                }
                for (var node_id in temp) {
                subset_nodes [ node_id ] = temp [node_id];
                }*/
        /***********************************************/
        return return_nodes;
    },

    selectNodesBasedOnList: function(nodeList)
    {
        var subset_nodes = {};
        for (var node_id in this._node_dict) {
            var nd = this._node_dict[node_id];
            if ( this.LinearSearch( nd.node_id, nodeList) )
                subset_nodes [node_id] = nd;
        }
        extended_subset_nodes = this.extend_nodes( subset_nodes );
        return this.makeJsonGraphFromSet( extended_subset_nodes );
    },

    selectNodesBasedOnFilter: function(filternode)
    {
	    console.log("  fileternode ============== " + filternode );

      // NOTE:  In the first part (when making only subset_nodes ), just the to_nodes are considered.
      // and in teh next part when making the json structure the nodes_from are considered

      //Make subset:
      var subset_nodes = {};
      for (var node_id in this._node_dict) {
        var nd = this._node_dict[node_id];
        //if ( (nd.class_name =='HTMLDivElement' ) || (nd.type == 'HTMLDivElement') )
        //if ( (nd.class_name =='Leaker' )  )
        if ( (nd.class_name ==filternode )  )
       // if ( (nd.class_name =='HTMLButtonElement' )  )
          subset_nodes [node_id] = nd;
      }
        
      extended_subset_nodes = this.extend_nodes( subset_nodes );
      return this.makeJsonGraphFromSet( extended_subset_nodes );

    },

listOfFilterNodes: function(filternode)
{
    console.log("  fileternode ============== " + filternode );
    var listnodes = [];
    for (var node_id in this._node_dict) {
        var nd = this._node_dict[node_id];
        if ( (nd.class_name ==filternode )  )
            listnodes.push( node_id );
    }
    return listnodes;
},



    convertToJsonForceDirected: function()
    {
      //convert the _node_dict data structure into a JSON data structure to be used by the visualizer
      var str=""; 


      for (var node_id in this._node_dict) {
        str += " { \n";  
        str += "\"adjacencies\": [\n" ;

        var nd = this._node_dict[node_id];
        var edgeStr=""
         for (e in nd.edges_from) {
          var tni = nd.edges_from[ e ].to_node_id;
          console.log( node_id, "   ", tni );
          
          edgeStr += "  {\n";
          edgeStr += "    \"nodeTo\":\""; edgeStr += tni;  edgeStr += "\",\n"; 
          edgeStr += "    \"nodeFrom\":\""; edgeStr += node_id;  edgeStr += "\",\n";
          edgeStr += "    \"data\": {\n";  edgeStr+= "      \"$color\": \"#557EAA\"";  edgeStr += "    }\n"; 
          edgeStr += "  }";    if ( e < ( nd.edges_from.length - 1 )) edgeStr+= ",";
          edgeStr += "\n";
        }

        str += edgeStr;
        str += " ], \n";
        str += " \"data\": {\n  \"$color\": \"#83548B\", \n  \"$type\": \"circle\", \n  \"$dim\": 10 \n },\n";
        str += " \"id\": \"";  str += node_id;  str += "\",\n" ;
        str += " \"name\": \""; str += node_id ; str += "\" \n";
        str += " } , ";
        
      }
      str = str.slice(0,-2);

      //console.log( str );
      return str;
    },

    BFS: function(nodesToVisit, nodesToVisitLength)
    {
      var edgeFieldsCount = this._snapshot._edgeFieldsCount;
      var nodeFieldCount = this._snapshot._nodeFieldCount;
      var containmentEdges = this._snapshot._containmentEdges;
      console.log(" Inside BFS " );
      var index = 0;
      while ( index < nodesToVisitLength) {
        var nodeIndex = nodesToVisit[index++];
        console.log(nodeIndex + "   " + this._snapshot._nodes [ nodeIndex + this._snapshot._nodeIdOffset ]); 
        var nodeOrdinal = nodeIndex / this._snapshot._nodeFieldCount;
        var firstEdgeIndex = this._snapshot._firstEdgeIndexes[nodeOrdinal];
        var edgesEnd = this._snapshot._firstEdgeIndexes[nodeOrdinal + 1];

        for (var edgeIndex = firstEdgeIndex; edgeIndex < edgesEnd; edgeIndex += edgeFieldsCount) {
          var edgeType = containmentEdges[edgeIndex + this._snapshot._edgeTypeOffset];
          //if (edgeType == edgeWeakType)
            //continue;
          var childNodeIndex = containmentEdges[edgeIndex + this._snapshot._edgeToNodeOffset];
          var childNodeOrdinal = childNodeIndex / nodeFieldCount;
          //console.log("chld node ordinal " + childNodeOrdinal+ "  " + nodeFieldsCount );
          //console.log(this._snapshot);
          if (this._visited[childNodeOrdinal] === true)
            continue;
          this._visited[childNodeOrdinal] = true;
          nodesToVisit[nodesToVisitLength++] = childNodeIndex;
        }
      }

    },
    
    DFS: function(nodeIndex, dfsVisited)
    {
        nodeOrdinal = nodeIndex / this._snapshot._nodeFieldCount;
        var firstEdgeIndex = this._snapshot._firstEdgeIndexes[nodeOrdinal];
        var edgesEnd = this._snapshot._firstEdgeIndexes[nodeOrdinal + 1];
        dfsVisited[nodeOrdinal] = true;
        console.log( this._snapshot._nodes[ nodeIndex + this._snapshot._nodeIdOffset  ] );

        for (var edgeIndex = firstEdgeIndex; edgeIndex < edgesEnd; edgeIndex += this._snapshot._edgeFieldsCount) {
          var childNodeIndex = this._snapshot._containmentEdges[edgeIndex + this._snapshot._edgeToNodeOffset];
          var childNodeOrdinal = childNodeIndex / this._snapshot._nodeFieldCount;
          if (! dfsVisited[childNodeOrdinal ] )
            this.DFS(childNodeIndex, dfsVisited ); 
        }
    },  

    DFSStr: function(nodeIndex, dfsVisited)
    {
        nodeOrdinal = nodeIndex / this._snapshot._nodeFieldCount;
        var firstEdgeIndex = this._snapshot._firstEdgeIndexes[nodeOrdinal];
        var edgesEnd = this._snapshot._firstEdgeIndexes[nodeOrdinal + 1];
        dfsVisited[nodeOrdinal] = true;
        console.log( this._snapshot._nodes[ nodeIndex + this._snapshot._nodeIdOffset  ] );

        for (var edgeIndex = firstEdgeIndex; edgeIndex < edgesEnd; edgeIndex += this._snapshot._edgeFieldsCount) {
          var childNodeIndex = this._snapshot._containmentEdges[edgeIndex + this._snapshot._edgeToNodeOffset];
          var childNodeOrdinal = childNodeIndex / this._snapshot._nodeFieldCount;
          if (! dfsVisited[childNodeOrdinal ] )
            this.DFS(childNodeIndex, dfsVisited ); 
        }
    },  

    convertToJsonRGraph: function()
    {
      this._visited={};
      var nodesToVisit = new Uint32Array(this._snapshot.nodeCount);
      var dfsVisited = {};
      var nodesToVisitLength = 0;
      nodesToVisit [ nodesToVisitLength++ ] = this._snapshot._rootNodeIndex;
      //this.BFS(nodesToVisit, nodesToVisitLength);
      this.DFS(this._snapshot._rootNodeIndex, dfsVisited);
    },
   
   /*
   This function finds all the path between the input node and the windows to 
   extract the name of the corresponding node/object. Challenges:
   1) If there are multiple paths to Window, which one is considered the name
   of the node?
   2) Does this work for all the nodes? Is this a general way for figuring out 
   the name of all the objects.
   3) Can we implement this using just the functionalities provided by 
   JavaScript? This makes this approach to work on all browser.
    The challenge here is that before getting to an object, how do you know 
    whether to continue or not? So, I'm not very optimistic about this
   */
  //Heuristics to extract smaller number : only accept those that have at least
  // 10 members


   extractContainers: function() {
       var result = [];
       for (var node_id in this._node_dict) {
           var node = this._node_dict[node_id];

//           if ( node.class_name == "Array" )
  //             result.push( node_id );

// I put all of them together to remove those Array objects that hold different
// type of objects, assuming those are cached containers

           if (( node.class_name == "object" ) || ( node.class_name == "Object") || (node.class_name == "Array" ) ) {

               if ( node.edges_from.length > 10 ) {
                   var allPropertiesAreElement=true;

                   //     console.log(upperLimit); console.log(allPropertiesAreElement);
                   for (var i=0; i<node.edges_from.length; i++) {
                       if ( (node.edges_from)[i].type_string == "element") 
                           allPropertiesAreElement = allPropertiesAreElement && true ;
                       else if ( node.edges_from[i].name_string !== "__proto__" )
                           allPropertiesAreElement = allPropertiesAreElement && false;
                   }
                   if ( allPropertiesAreElement == true )
                       result.push( node_id );
               }
           }
       }
       return result;
   },
/*
Todo: make this a memoized function so that the temporary results are memoized
right now I'm using computedList array for that purpose. but making it memoized
will be a good exercise for me
*/
   extractNames: function(nodeId) {
       var result=[];
       var node = this._node_dict[nodeId];
       const windowRE = /^Window/;
       var nodename=this.serializeObject( node.nodeIndex ).name;


       if ( this.mark[nodeId] == undefined )
           this.mark[nodeId]=1;
       else {
            //memoize the result and return it here
          // result.push(",,,,,");
//          console.log(" this.computedList[nodeId] " );
//          console.log(this.computedList[nodeId] );
          if ( this.computedList[nodeId] )
           return this.computedList[nodeId];
           else{
           result.push (nodename );
           return result;
           }
       }
       if ( windowRE.test(nodename) ) {
           result.push("window");
           this.computedList[nodeId] = result;
           console.log( " in windowRE test ");
//          console.log(this.computedList[nodeId] );
           return result;
       }
       if (node.edges_to.length == 0) {
           result.push( nodename );
           this.computedList[nodeId] = result;
           console.log( " length ==== 0 ");
//           console.log(this.computedList[nodeId] );
           return result;
       }
       //console.log(node.edges_to.length);
       for (var i=0; i<node.edges_to.length; i++) {
            
           var partResult = this.extractNames( node.edges_to[i].from_node_id );
           for (var j=0; j<partResult.length; j++) {
               if ( (node.edges_to)[i].name_string !== "__proto__" ) {
                   var temp = partResult[j] + " . " + (node.edges_to)[i].name_string;
                   result.push(temp);                 
               }
           }
       }
       this.computedList[nodeId] = result;
//       console.log("..........end .");
//           console.log(this.computedList[nodeId] );
       return result;
   }, 

  //  The following starts to find the name of all the nodes starting from the Root(Window)

  //The following is actually a BFS implementation

  findAllNodeNames: function(rootNode) {
    console.log(".........findAllNodeNames.............");
      var queue = new Array();
      queue.push(rootNode);
      this._visited[rootNode] = 1;
      var nodeNameEntry = {name: "window", rootNodeId: rootNode };
      this._node_names[rootNode] = nodeNameEntry;
      //this._node_names[rootNode] = "window";
      while (queue.length != 0) {
          var node = this._node_dict[ queue.pop() ];
          for (var i=0; i<node.edges_from.length; i++) {
              if ( (node.edges_from)[i].name_string !== "__proto__" ) {

                  var childNodeId = node.edges_from[i].to_node_id;
                  if ( this._visited[childNodeId] == undefined ) {
                      this._visited[childNodeId] = 1;
                      queue.push( childNodeId );
                      if ( node.edges_from[i].type_string == "element" ) {
                  //        this._node_names[childNodeId] = this._node_names[node.node_id] + "[" + node.edges_from[i].name_string + "]";
                        var tempName = this._node_names[node.node_id].name + "["+ node.edges_from[i].name_string + "]"; 
                        nodeNameEntry = {name: tempName, rootNodeId: rootNode };
                        this._node_names[childNodeId] = nodeNameEntry;
                      }
                      else {
                 //     queue.push( childNodeId );
                          //this._node_names[childNodeId] = this._node_names[node.node_id] + "." + node.edges_from[i].name_string;
                          var tempName = this._node_names[node.node_id].name + "." + node.edges_from[i].name_string;
                          nodeNameEntry = {name: tempName, rootNodeId: rootNode };
                          this._node_names[childNodeId] = nodeNameEntry;
                      }
                  }
              }
          }
      }
      console.log("end of looop ");
  },

    getNodeName: function(nodeId){
//        console.log("....................");
  //      console.log(nodeId);
    //    console.log(this._node_names[nodeId]);
        return this._node_names[nodeId];
    },

    findNodeNames: function() {

        var winIdList=[];
//      var winId = FindWindowNodeId();
      const windowRE = /^Window \//;
//      const windowRE = /Window \/ https:\/\/mail.google.com\/mail\/u\/0\/\?shva=1\#inbox/;
      for (var node_id in this._node_dict) {
          var node = this._node_dict[node_id];
          var nodename=this.serializeObject( node.nodeIndex ).name; 
          if ( windowRE.test(nodename) ) {
              var winId = node_id;
              winIdList.push(winId);
              console.log("win Id :");
              console.log(winId);
              //console.log(node);
          }
      }
      for (var i=0; i<winIdList.length; i++)
      //for (var i=0; i<1; i++)
          this.findAllNodeNames(winIdList[i]);
  },

/*
   extractNames: function(nodeId) {

       if ( this.mark[nodeId] == undefined )
           this.mark[nodeId]=1;
       else {
           return "";
       }

       var node = this._node_dict[nodeId];
       const windowRE = /^Window/;
       var nodename=this.serializeObject( node.nodeIndex ).name;
       if ( windowRE.test(nodename) ) {
           console.log(" It is window ");
           return "window";
       }

       var res="";
       if (node.edges_to.length > 0 ) {
           res = res + this.extractNames(node.edges_to[0].from_node_id) + " . " + node.edges_to[0].name_string  ;

           return res;
       }
   },
*/

    nodeDegrees: function()
    {
        var result = [];
        for (var node_id in this._node_dict) {
          var node = this._node_dict[node_id];
          var e = {};
          e.nid  = node_id;
          e.name = this.serializeObject( node.nodeIndex ).name;
          e.clss = node.class_name;
          e.type = this.serializeObject( node.nodeIndex ).type;
          e.distance = node.distance;
          e.node_to = node.edges_to.length;
          e.node_from = node.edges_from.length;
          e.retainedSize = this.serializeObject(node.nodeIndex).retainedSize;
          //e.nodename = this.getNodeName( node_id ).name;
//        e.dominator = node.dominatorIndex;

        /* if  ( e.node_from > 0 ) {
            e.node_to_id = (node.edges_from)[0].to_node_id;  
            e.node_from_id = (node.edges_from)[0].from_node_id;  
          }*/

          if  ( e.node_to > 0 ) {
            e.edgestr="";
            for (var i=0; i<e.node_to ;i++) {
              e.edgestr += (node.edges_to)[i].type_string;  
              e.edgestr += " -- ";
              e.edgestr += (node.edges_to)[i].name_string;  
              e.edgestr += " -- ";
              e.edgestr += (node.edges_to)[i].from_node_id;
              e.edgestr += " , ";
            }
          }

          if  ( e.node_from > 0 ) {
            e.edgestr +=":::";  e.edgesFROM=[];
            for (var i=0; i<e.node_from ;i++) {
              e.edgestr += (node.edges_from)[i].type_string;  
              e.edgestr += " -- ";
              e.edgestr += (node.edges_from)[i].name_string;  
              e.edgestr += " -- ";
              e.edgestr += (node.edges_from)[i].to_node_id;
              e.edgestr += " , ";

              e.edgesFROM.push({type: (node.edges_from)[i].type_string, name: (node.edges_from)[i].name_string, to_node_id: (node.edges_from)[i].to_node_id });
            }
          }
         
            e.dominator = node.dominatorIndex; 
            e.name_ = this.serializeObject( node.nodeIndex )._name;
          //if ( (!( ( e.node_to === 0 ) && ( e.node_from ===0 ) ) ) && ( this.isUserObject( node.nodeIndex) ) )
    
//          if (  this.canBeQueried( node.nodeIndex)  || ( e.type == 'native') )
    //      if (  this.isNodeUserObject (node.nodeIndex) )
          //if (  this.canBeQueried( node.nodeIndex)  )
            result.push(e);
          //console.log( node_id + "  " + node.edges_to.length );
          //console.log( node_id + "  " + node.edges_from.length ) ;
        }
        return result;
    },

    serializeObject: function(nodeIndex)
    {
      
      //var isHidden = ( this._type() === this._snapshot._nodeHiddenType );
      var id    = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeIdOffset ];
      var _name = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeNameOffset ];
      var _type = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeTypeOffset ];
      var name  = this._snapshot._strings[_name];
      var type  = this._snapshot._nodeTypes[_type];
      var isRoot =  ( nodeIndex === this._snapshot._rootNodeIndex );
      var retainedSize = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeRetainedSizeOffset ];
      var self_size = this._snapshot._nodes[ nodeIndex + this._snapshot._nodeSelfSizeOffset ];
      //const windowRE = /^Window/;
      //var isWindow = windowRE.test(this.name()) ;
      //var isDetachedDOMTreesRoot 
      //var isDetachedDOMTree
      //var isSynthetic
      return {id:id, _name:_name, _type:_type, name: name, type: type, isRoot: isRoot, retainedSize: retainedSize, selfSize:self_size };
    },

    canBeQueried: function(nodeIndex)
    {
      var flags = this._snapshot._flags[nodeIndex / this._snapshot._nodeFieldCount];
      return !!(flags & this._snapshot._nodeFlags.canBeQueried);
    },
 
    isNodeUserObject: function(nodeIndex)
    {
      var flags = this._snapshot._flags[nodeIndex / this._snapshot._nodeFieldCount];
      return !!(flags & this._snapshot._nodeFlags.pageObject);
    },
    nodeUserObject: function()
    {

        var result = [];
        var nodesLength = this._snapshot._nodes.length; 
        var nodeFieldCount = this._snapshot._nodeFieldCount;
        var nodes = this._snapshot._nodes;
        var nodeTypeOffset = this._snapshot._nodeTypeOffset;
        var nodeNameOffset = this._snapshot._nodeNameOffset;
        var nodeIdOffset =  this._snapshot._nodeIdOffset ;
        for (var nodeIndex = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount)
        {
            var e = {};
            e.is = this.canBeQueried(nodeIndex);
            e.nid =  nodes[nodeIndex + nodeIdOffset ];
            //console.log (nodeIdOffset);
            //console.log( nodeIndex );
            //console.log(nodes[nodeIndex + nodeIdOffset ]);
            var typei = nodes[nodeIndex + nodeTypeOffset];
            var type_str = this._snapshot._nodeTypes[ typei ];

            var type_ind = nodes[ nodeIndex + nodeTypeOffset];
            var type_string = this._snapshot._nodeTypes [type_ind];
            //console.log(" type _string n= " + type_string);
            var node_name_ind = nodes[ nodeIndex + nodeNameOffset];
            if (type_string == 'object')
              e.c = this._snapshot._strings[ node_name_ind  ];
            else
              e.c = type_string;
            result.push(e);
        }
        return result;



    },
 
    listNodesFromSnapshot: function()
    {
        var result = [];
        var nodesLength = this._snapshot._nodes.length; 
        var nodeFieldCount = this._snapshot._nodeFieldCount;
        
        for (var nodeIndex = 0; nodeIndex < nodesLength; nodeIndex += nodeFieldCount)
        {
            var e = {};
            e.nid =  this.serializeObject(nodeIndex).id;
            e.type = this.serializeObject(nodeIndex).type;
            e.name = this.serializeObject(nodeIndex).name;
            e.selfSize = this.serializeObject(nodeIndex).selfSize;
            if (  this.canBeQueried( nodeIndex) ) 
              result.push(e);
        }
        return result;
    },

	checkCycle: function(nodeId, arraynodes)
	    {
		for (var i=0; i< arraynodes.length; i++){
			if ( nodeId == arraynodes[i].to_node_id ){	
				return false;
			}
		}
		return true;
	    },

    makeTreeNode: function(list, level, cname)
		  {
			  if ( (list.length == 0) || (level == 6) )
				  //if ( (list.length == 0)  )
			  {
				  //console.log([]);
				  return [];
			  }
			  var newList = [];
			  var types_map = {};
			  for (var i=0; i<list.length; i++) //Make it just for the first element of the list
			  //for (var i=0; i<1; i++)
			  {
				  var node = this._node_dict[ list[i] ];
				  //console.log(" node edges_to_length : " ); console.log(node.edges_to.length);
				  for (var j=0; j< node.edges_to.length; j++) {
					  var fromNodeId = (node.edges_to)[j].from_node_id;
					  // To avoid cycles check if there is an edge from this node to fromNodeId
					  if ( this.checkCycle(fromNodeId, node.edges_from) ) {
						  newList.push(  fromNodeId ) ;
						  var className = this._node_dict[ fromNodeId ].class_name;
						  if ( types_map[ className ] === undefined )
							  types_map[ className ] = [];
						  types_map[ className ].push( fromNodeId ) ;
					 }
				  }
			  }
			  var childList = []; 
			  for (var class_name in types_map) {
				  var subset = types_map[class_name];
				  //console.log(subset);
				  childList.push( this.makeTreeNode( subset, level + 1, class_name ) );
			  }
			  return new TreeNode( list, childList, cname );
		  },
   makeTree: function(list)
    {
        treeId = 0;
        //console.log(" List of all nodes .............. ");
        //console.log( this._node_dict );
        var types_map = {};
        for (var i=0; i<list.length; i++)
        {
            if ( this._node_dict[ list[i] ] != undefined ) {   
                var className =  this._node_dict[ list[i] ].class_name; 
                console.log( list[i] ) ;
                console.log(className);
                var nodeId =  this._node_dict[ list[i] ].node_id; 
                if ( types_map[ className ] == undefined )
                    types_map[ className ] = [];

                types_map[ className ].push(list[i]) ;
            }
        }
        var childList = [];
        for (var class_name in types_map) {
            var subset = types_map[class_name];
            //console.log("In make Tree");
            //console.log( subset );
            childList.push( this.makeTreeNode( subset, 0, class_name ) );
        }       
        return new TreeNode( list, childList, 'IMAGINARYROOT');
    }

};
TreeNode = function(list, childrenList, classname)
{
  this.id = treeId; treeId++;
 // this.id = ;
  //this.data = list.toString();
  this.data = {a:1, b:2};
  this.name=classname+list.length;
  this.children = childrenList;
}

TreeNode.prototype = {
 insert: function()
  {
  }
}

/**
 * @constructor
 * @param {number=} node_id
 * @param {number=} type_string
 * @param {number=} class_name
 */
GraphNode = function( node_id, type_string, class_name, node_distance, node_index, nodeDominatorIndex )
{
    this.edges_to = [];
    this.edges_from = []
    this.node_id = node_id;
    this.type_string = type_string;
    this.class_name = class_name;
    this.string = '';
    //self.js_name = ''
    this.distance = node_distance;
    this.nodeIndex = node_index;
    this.dominatorIndex = nodeDominatorIndex;
    
}

GraphNode.prototype = {
    AddEdgeFrom: function(edge)
    {
      this.edges_from.push(edge);
    },

    AddEdgeTo: function(edge)
    {
      this.edges_to.push(edge);
    },

    className: function()
    {
    /*    var type = this.type();
        switch (type) {
        case "hidden":
            //return UIString("(system)");
            return "(system)";
        case "object":
        case "native":
            return this.name();
        case "code":
            //return UIString("(compiled code)");
            return "(compiled code)";
        default:
            return "(" + type + ")";
        }*/
      return this.class_name;
    },

    id: function()
    { 
      return this.node_id;
    }
};

/**
 * @constructor
 * @param {number=} from_node_id
 * @param {number=} to_node_id
 * @param {number=} type_string
 * @param {number=} name_string
 */
GraphEdge = function(from_node_id, to_node_id, type_string, name_string)
{
    this.from_node_id = from_node_id;
    this.to_node_id = to_node_id;
    this.from_node = {};
    this.to_node = {};
    this.type_string = type_string;
    this.name_string = name_string;
}

GraphEdge.prototype = {

    SetFromNode: function(node)
    {
      this.from_node = node;
    },

    SetToNode: function(node)
    {
      this.to_node = node;
    }
};


