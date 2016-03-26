JSProf.LFC(10061, define, false)(JSProf.LNE(9944, [
    "../_base/lang",
    "../_base/array"
], 10), JSProf.LNF(10060, function (lang, array) {
    // module:
    //		dojo/date/stamp
    var stamp = JSProf.LNE(9945, {}, 11);
    JSProf.LMC(9947, lang, 'setObject').setObject("dojo.date.stamp", JSProf.LRE(9946, stamp));
    // Methods to convert dates to or from a wire (string) format using well-known conventions
    JSProf.LPD(9998, stamp, 'fromISOString').fromISOString = JSProf.LRSP(9998, JSProf.LNF(9997, function (formattedString, defaultTime) {
        // summary:
        //		Returns a Date object given a string formatted according to a subset of the ISO-8601 standard.
        //
        // description:
        //		Accepts a string formatted according to a profile of ISO8601 as defined by
        //		[RFC3339](http://www.ietf.org/rfc/rfc3339.txt), except that partial input is allowed.
        //		Can also process dates as specified [by the W3C](http://www.w3.org/TR/NOTE-datetime)
        //		The following combinations are valid:
        //
        //		- dates only
        //			- yyyy
        //			- yyyy-MM
        //			- yyyy-MM-dd
        //		- times only, with an optional time zone appended
        //			- THH:mm
        //			- THH:mm:ss
        //			- THH:mm:ss.SSS
        //		- and "datetimes" which could be any combination of the above
        //
        //		timezones may be specified as Z (for UTC) or +/- followed by a time expression HH:mm
        //		Assumes the local time zone if not specified.  Does not validate.  Improperly formatted
        //		input may return null.  Arguments which are out of bounds will be handled
        //		by the Date constructor (e.g. January 32nd typically gets resolved to February 1st)
        //		Only years between 100 and 9999 are supported.
        // formattedString:
        //		A string such as 2005-06-30T08:05:00-07:00 or 2005-06-30 or T08:05:00
        // defaultTime:
        //		Used for defaults for fields omitted in the formattedString.
        //		Uses 1970-01-01T00:00:00.0Z by default.
        if (!JSProf.LGD(9948, stamp, '_isoRegExp')._isoRegExp) {
            JSProf.LPD(9949, stamp, '_isoRegExp')._isoRegExp = JSProf.LRSP(9949, /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
        }
        var match = stamp._isoRegExp.exec(JSProf.LRE(9950, formattedString)), result = null;
        if (JSProf.LRE(9951, match)) {
            JSProf.LMC(9952, match, 'shift').shift();
            if (JSProf.LGE(9953, match, 1)[1]) {
                match[1]--;
            }
            // Javascript Date months are 0-based
            if (JSProf.LGE(9954, match, 6)[6]) {
                match[6] *= 1000;
            }
            // Javascript Date expects fractional seconds as milliseconds
            if (JSProf.LRE(9955, defaultTime)) {
                // mix in defaultTime.  Relatively expensive, so use || operators for the fast path of defaultTime === 0
                defaultTime = JSProf.LWR(9959, defaultTime, JSProf.LNE(9958, new (JSProf.LFC(9957, Date, true))(JSProf.LRE(9956, defaultTime)), 'Date'));
                JSProf.LMC(9969, array, 'forEach').forEach(JSProf.LMC(9964, array, 'map').map(JSProf.LNE(9960, [
                    "FullYear",
                    "Month",
                    "Date",
                    "Hours",
                    "Minutes",
                    "Seconds",
                    "Milliseconds"
                ], 10), JSProf.LNF(9963, function (prop) {
                    return JSProf.LMC(9962, defaultTime, JSProf.TMPS.t4c7cc0afe8d04ca072406be36eb7376b378274d4 = "get" + JSProf.LRE(9961, prop), 1)[JSProf.TMPS.t4c7cc0afe8d04ca072406be36eb7376b378274d4]();
                }, 12)), JSProf.LNF(9968, function (value, index) {
                    JSProf.LPE(9967, match, 'index')[index] = JSProf.LRPE(9967, JSProf.LGE(9965, match, 'index')[index] || JSProf.LRE(9966, value));
                }, 12));
            }
            result = JSProf.LWR(9979, result, JSProf.LNE(9978, new (JSProf.LFC(9977, Date, true))(JSProf.LGE(9970, match, 0)[0] || 1970, JSProf.LGE(9971, match, 1)[1] || 0, JSProf.LGE(9972, match, 2)[2] || 1, JSProf.LGE(9973, match, 3)[3] || 0, JSProf.LGE(9974, match, 4)[4] || 0, JSProf.LGE(9975, match, 5)[5] || 0, JSProf.LGE(9976, match, 6)[6] || 0), 'Date'));
            //TODO: UTC defaults
            if (JSProf.LGE(9980, match, 0)[0] < 100) {
                JSProf.LMC(9982, result, 'setFullYear').setFullYear(JSProf.LGE(9981, match, 0)[0] || 1970);
            }
            var offset = 0, zoneSign = JSProf.LGE(9983, match, 7)[7] && match[7].charAt(0);
            if (JSProf.LRE(9984, zoneSign) != 'Z') {
                offset = JSProf.LWR(9988, offset, (JSProf.LGE(9985, match, 8)[8] || 0) * 60 + (JSProf.LFC(9987, Number, false)(JSProf.LGE(9986, match, 9)[9]) || 0));
                if (JSProf.LRE(9989, zoneSign) != '-') {
                    offset *= -1;
                }
            }
            if (JSProf.LRE(9990, zoneSign)) {
                offset -= JSProf.LMC(9991, result, 'getTimezoneOffset').getTimezoneOffset();
            }
            if (JSProf.LRE(9992, offset)) {
                JSProf.LMC(9995, result, 'setTime').setTime(JSProf.LMC(9993, result, 'getTime').getTime() + JSProf.LRE(9994, offset) * 60000);
            }
        }
        return JSProf.LRE(9996, result);    // Date or null
    }, 12));
    /*=====
    var __Options = {
    	// selector: String
    	//		"date" or "time" for partial formatting of the Date object.
    	//		Both date and time will be formatted by default.
    	// zulu: Boolean
    	//		if true, UTC/GMT is used for a timezone
    	// milliseconds: Boolean
    	//		if true, output milliseconds
    };
    =====*/
    JSProf.LPD(10058, stamp, 'toISOString').toISOString = JSProf.LRSP(10058, JSProf.LNF(10057, function (dateObject, options) {
        // summary:
        //		Format a Date object as a string according a subset of the ISO-8601 standard
        //
        // description:
        //		When options.selector is omitted, output follows [RFC3339](http://www.ietf.org/rfc/rfc3339.txt)
        //		The local time zone is included as an offset from GMT, except when selector=='time' (time without a date)
        //		Does not check bounds.  Only years between 100 and 9999 are supported.
        //
        // dateObject:
        //		A Date object
        var _ = JSProf.LNF(10002, function (n) {
                return JSProf.LRE(9999, n) < 10 ? "0" + JSProf.LRE(10000, n) : JSProf.LRE(10001, n);
            }, 12);
        options = JSProf.LWR(10005, options, JSProf.LRE(10003, options) || JSProf.LNE(10004, {}, 11));
        var formattedDate = JSProf.LNE(10006, [], 10), getter = JSProf.LGD(10007, options, 'zulu').zulu ? "getUTC" : "get", date = "";
        if (JSProf.LGD(10008, options, 'selector').selector != "time") {
            var year = JSProf.LMC(10010, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10009, getter) + "FullYear", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]();
            date = JSProf.LWR(10023, date, JSProf.LMC(10022, JSProf.LNE(10021, [
                JSProf.LMC(10013, "0000", 'substr').substr(JSProf.LGD(10012, JSProf.LRE(10011, year) + "", 'length').length) + JSProf.LRE(10014, year),
                JSProf.LFC(10017, _, false)(JSProf.LMC(10016, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10015, getter) + "Month", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]() + 1),
                JSProf.LFC(10020, _, false)(JSProf.LMC(10019, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10018, getter) + "Date", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]())
            ], 10), 'join').join('-'));
        }
        JSProf.LMC(10025, formattedDate, 'push').push(JSProf.LRE(10024, date));
        if (JSProf.LGD(10026, options, 'selector').selector != "date") {
            var time = JSProf.LMC(10037, JSProf.LNE(10036, [
                    JSProf.LFC(10029, _, false)(JSProf.LMC(10028, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10027, getter) + "Hours", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]()),
                    JSProf.LFC(10032, _, false)(JSProf.LMC(10031, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10030, getter) + "Minutes", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]()),
                    JSProf.LFC(10035, _, false)(JSProf.LMC(10034, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10033, getter) + "Seconds", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]())
                ], 10), 'join').join(':');
            var millis = JSProf.LMC(10039, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10038, getter) + "Milliseconds", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]();
            if (JSProf.LGD(10040, options, 'milliseconds').milliseconds) {
                time += "." + (JSProf.LRE(10041, millis) < 100 ? "0" : "") + JSProf.LFC(10043, _, false)(JSProf.LRE(10042, millis));
            }
            if (JSProf.LGD(10044, options, 'zulu').zulu) {
                time += "Z";
            } else if (JSProf.LGD(10045, options, 'selector').selector != "time") {
                var timezoneOffset = JSProf.LMC(10046, dateObject, 'getTimezoneOffset').getTimezoneOffset();
                var absOffset = JSProf.LMC(10048, Math, 'abs').abs(JSProf.LRE(10047, timezoneOffset));
                time += (JSProf.LRE(10049, timezoneOffset) > 0 ? "-" : "+") + JSProf.LFC(10051, _, false)(Math.floor(JSProf.LRE(10050, absOffset) / 60)) + ":" + JSProf.LFC(10053, _, false)(JSProf.LRE(10052, absOffset) % 60);
            }
            JSProf.LMC(10055, formattedDate, 'push').push(JSProf.LRE(10054, time));
        }
        return JSProf.LMC(10056, formattedDate, 'join').join('T');    // String
    }, 12));
    return JSProf.LRE(10059, stamp);
}, 12));