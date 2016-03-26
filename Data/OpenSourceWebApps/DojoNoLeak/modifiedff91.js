JSProf.LFC(32097, define, false)(JSProf.LNE(32086, ["./Evented"], 10), JSProf.LNF(32096, function (Evented) {
    // module:
    //		dojo/topic
    var hub = JSProf.LNE(32088, new (JSProf.LFC(32087, Evented, true))(), 'Evented');
    return JSProf.LNE(32095, {
        publish: JSProf.LNF(32091, function (topic, event) {
            // summary:
            //		Publishes a message to a topic on the pub/sub hub. All arguments after
            //		the first will be passed to the subscribers, so any number of arguments
            //		can be provided (not just event).
            // topic: String
            //		The name of the topic to publish to
            // event: Object
            //		An event to distribute to the topic listeners
            return JSProf.LMC(32090, hub.emit, 'apply').apply(JSProf.LRE(32089, hub), arguments);
        }, 12),
        subscribe: JSProf.LNF(32094, function (topic, listener) {
            // summary:
            //		Subscribes to a topic on the pub/sub hub
            // topic: String
            //		The topic to subscribe to
            // listener: Function
            //		A function to call when a message is published to the given topic
            return JSProf.LMC(32093, hub.on, 'apply').apply(JSProf.LRE(32092, hub), arguments);
        }, 12)
    }, 11);
}, 12));