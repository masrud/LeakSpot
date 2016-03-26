JSProf.LFC(30483, define, false)(JSProf.LNE(30472, ["./Evented"], 10), JSProf.LNF(30482, function (Evented) {
    // module:
    //		dojo/topic
    var hub = JSProf.LNE(30474, new (JSProf.LFC(30473, Evented, true))(), 'Evented');
    return JSProf.LNE(30481, {
        publish: JSProf.LNF(30477, function (topic, event) {
            // summary:
            //		Publishes a message to a topic on the pub/sub hub. All arguments after
            //		the first will be passed to the subscribers, so any number of arguments
            //		can be provided (not just event).
            // topic: String
            //		The name of the topic to publish to
            // event: Object
            //		An event to distribute to the topic listeners
            return JSProf.LMC(30476, hub.emit, 'apply').apply(JSProf.LRE(30475, hub), arguments);
        }, 12),
        subscribe: JSProf.LNF(30480, function (topic, listener) {
            // summary:
            //		Subscribes to a topic on the pub/sub hub
            // topic: String
            //		The topic to subscribe to
            // listener: Function
            //		A function to call when a message is published to the given topic
            return JSProf.LMC(30479, hub.on, 'apply').apply(JSProf.LRE(30478, hub), arguments);
        }, 12)
    }, 11);
}, 12));