JSProf.LFC(18777, define, false)(JSProf.LNE(18755, [
    "dojo/_base/kernel",
    "dojo/_base/lang",
    "./sync",
    "./_atBindingExtension"
], 10), JSProf.LNF(18776, function (kernel, lang, sync) {
    JSProf.LMC(18756, kernel, 'experimental').experimental("dojox.mvc");
    var at = JSProf.LNF(18767, function (target, targetProp) {
            // summary:
            //		Returns a pointer to data binding target (a dojo/Stateful property), called at handle, which is used for start synchronization with data binding source (another dojo/Stateful property).
            // description:
            //		Typically used in data-dojo-props so that a widget can synchronize its attribute with another dojo/Stateful, like shown in the example.
            // target: dojo/Stateful|String
            //		dojo/Stateful to be synchronized.
            // targetProp: String
            //		The property name in target to be synchronized.
            // returns:
            //		A pointer to data binding target (a dojo/Stateful property), called at handle, which is used for start synchronization with data binding source (another dojo/Stateful property).
            // example:
            //		Two seconds later, the text box changes from "Foo" to "Bar" as the "value" property in model changes.
            // |		<html>
            // |			<head>
            // |				<script src="/path/to/dojo-toolkit/dojo/dojo.js" type="text/javascript" data-dojo-config="parseOnLoad: 0"></script>
            // |				<script type="text/javascript">
            // |					require([
            // |						"dojo/parser", "dojo/Stateful", "dijit/form/TextBox", "dojo/domReady!"
            // |					], function(parser, Stateful){
            // |						model = new Stateful({value: "Foo"});
            // |						setTimeout(function(){ model.set("value", "Bar"); }, 2000);
            // |						parser.parse();
            // |					});
            // |				</script>
            // |			</head>
            // |			<body>
            // |				<script type="dojo/require">at: "dojox/mvc/at"</script>
            // |				<input type="text" data-dojo-type="dijit/form/TextBox" data-dojo-props="value: at(model, 'value')">
            // |			</body>
            // |		</html>
            // example:
            //		Edit in text box is reflected to the text next to it.
            // |		<html>
            // |			<head>
            // |				<script src="/path/to/dojo-toolkit/dojo/dojo.js" type="text/javascript" data-dojo-config="parseOnLoad: 0"></script>
            // |				<script type="text/javascript">
            // |					require([
            // |						"dojo/parser", "dojo/Stateful", "dojo/domReady!"
            // |					], function(parser, Stateful){
            // |						model = new Stateful({value: "Foo"});
            // |						parser.parse();
            // |					});
            // |				</script>
            // |			</head>
            // |			<body>
            // |				<script type="dojo/require">at: "dojox/mvc/at"</script>
            // |				<input type="text" data-dojo-type="dijit/form/TextBox" data-dojo-props="value: at(model, 'value')">
            // |				<span data-dojo-type="dijit/_WidgetBase" data-dojo-props="_setValueAttr: {node: 'domNode', type: 'innerText'}, value: at(model, 'value')"></span>
            // |			</body>
            // |		</html>
            return JSProf.LNE(18766, {
                atsignature: "dojox.mvc.at",
                target: target,
                targetProp: targetProp,
                bindDirection: sync.both,
                direction: JSProf.LNF(18759, function (bindDirection) {
                    JSProf.LPD(18758, this, 'bindDirection').bindDirection = JSProf.LRSP(18758, JSProf.LRE(18757, bindDirection));
                    return this;
                }, 12),
                transform: JSProf.LNF(18762, function (converter) {
                    JSProf.LPD(18761, this, 'converter').converter = JSProf.LRSP(18761, JSProf.LRE(18760, converter));
                    return this;
                }, 12),
                equals: JSProf.LNF(18765, function (equals) {
                    JSProf.LPD(18764, this, 'equalsCallback').equalsCallback = JSProf.LRSP(18764, JSProf.LRE(18763, equals));
                    return this;
                }, 12)
            }, 11);
        }, 12);
    /*=====
    	at.handle = {
    		// summary:
    		//		A handle of data binding target (a dojo/Stateful property), which is used for start synchronization with data binding source (another dojo/Stateful property).
    
    		// target: dojo/Stateful|String
    		//		The data binding literal or dojo/Stateful to be synchronized.
    		target: new dojo/Stateful(),
    
    		// targetProp: String
    		//		The property name in target to be synchronized.
    		targetProp: "",
    
    		// bindDirection: Number
    		//		The data binding bindDirection, choose from: dojox/mvc/sync.from, dojox/mvc/sync.to or dojox/mvc/sync.both.
    		bindDirection: dojox/mvc/sync.both,
    
    		// converter: dojox/mvc/sync.converter
    		//		Class/object containing the converter functions used when the data goes between data binding target (e.g. data model or controller) to data binding origin (e.g. widget).
    		converter: null,
    
    		direction: function(bindDirection){
    			// summary:
    			//		Sets data binding bindDirection.
    			// bindDirection: Number
    			//		The data binding bindDirection, choose from: dojox/mvc/sync.from, dojox/mvc/sync.to or dojox/mvc/sync.both.
    		},
    
    		transform: function(converter){
    			// summary:
    			//		Attach a data converter.
    			// converter: dojox/mvc/sync.converter
    			//		Class/object containing the converter functions used when the data goes between data binding target (e.g. data model or controller) to data binding origin (e.g. widget).
    		},
    
    		equals: function(equals){
    			// summary:
    			//		Sets a function to check if a value has really been changed when source/target dojo/Stateful changes.
    			// equals: Function
    			//		The function to check for the change.
    			//		Should take two arguments, and should return true when those two are considered equal.
    		}
    	};
    	=====*/
    // Data binding bindDirections
    JSProf.LPD(18769, at, 'from').from = JSProf.LRSP(18769, JSProf.LGD(18768, sync, 'from').from);
    JSProf.LPD(18771, at, 'to').to = JSProf.LRSP(18771, JSProf.LGD(18770, sync, 'to').to);
    JSProf.LPD(18773, at, 'both').both = JSProf.LRSP(18773, JSProf.LGD(18772, sync, 'both').both);
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(18775, lang, 'setObject').setObject("dojox.mvc.at", JSProf.LRE(18774, at));
}, 12));