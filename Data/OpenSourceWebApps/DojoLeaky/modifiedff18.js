JSProf.LFC(10677, define, false)(JSProf.LNE(10560, [
    "../_base/lang",
    "../_base/array"
], 10), JSProf.LNF(10676, function (lang, array) {
    // module:
    //		dojo/date/stamp
    var stamp = JSProf.LNE(10561, {}, 11);
    JSProf.LMC(10563, lang, 'setObject').setObject("dojo.date.stamp", JSProf.LRE(10562, stamp));
    // Methods to convert dates to or from a wire (string) format using well-known conventions
    JSProf.LPD(10614, stamp, 'fromISOString').fromISOString = JSProf.LRSP(10614, JSProf.LNF(10613, function (formattedString, defaultTime) {
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
        if (!JSProf.LGD(10564, stamp, '_isoRegExp')._isoRegExp) {
            JSProf.LPD(10565, stamp, '_isoRegExp')._isoRegExp = JSProf.LRSP(10565, /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
        }
        var match = stamp._isoRegExp.exec(JSProf.LRE(10566, formattedString)), result = null;
        if (JSProf.LRE(10567, match)) {
            JSProf.LMC(10568, match, 'shift').shift();
            if (JSProf.LGE(10569, match, 1)[1]) {
                match[1]--;
            }
            // Javascript Date months are 0-based
            if (JSProf.LGE(10570, match, 6)[6]) {
                match[6] *= 1000;
            }
            // Javascript Date expects fractional seconds as milliseconds
            if (JSProf.LRE(10571, defaultTime)) {
                // mix in defaultTime.  Relatively expensive, so use || operators for the fast path of defaultTime === 0
                defaultTime = JSProf.LWR(10575, defaultTime, JSProf.LNE(10574, new (JSProf.LFC(10573, Date, true))(JSProf.LRE(10572, defaultTime)), 'Date'));
                JSProf.LMC(10585, array, 'forEach').forEach(JSProf.LMC(10580, array, 'map').map(JSProf.LNE(10576, [
                    "FullYear",
                    "Month",
                    "Date",
                    "Hours",
                    "Minutes",
                    "Seconds",
                    "Milliseconds"
                ], 10), JSProf.LNF(10579, function (prop) {
                    return JSProf.LMC(10578, defaultTime, JSProf.TMPS.t4c7cc0afe8d04ca072406be36eb7376b378274d4 = "get" + JSProf.LRE(10577, prop), 1)[JSProf.TMPS.t4c7cc0afe8d04ca072406be36eb7376b378274d4]();
                }, 12)), JSProf.LNF(10584, function (value, index) {
                    JSProf.LPE(10583, match, 'index')[index] = JSProf.LRPE(10583, JSProf.LGE(10581, match, 'index')[index] || JSProf.LRE(10582, value));
                }, 12));
            }
            result = JSProf.LWR(10595, result, JSProf.LNE(10594, new (JSProf.LFC(10593, Date, true))(JSProf.LGE(10586, match, 0)[0] || 1970, JSProf.LGE(10587, match, 1)[1] || 0, JSProf.LGE(10588, match, 2)[2] || 1, JSProf.LGE(10589, match, 3)[3] || 0, JSProf.LGE(10590, match, 4)[4] || 0, JSProf.LGE(10591, match, 5)[5] || 0, JSProf.LGE(10592, match, 6)[6] || 0), 'Date'));
            //TODO: UTC defaults
            if (JSProf.LGE(10596, match, 0)[0] < 100) {
                JSProf.LMC(10598, result, 'setFullYear').setFullYear(JSProf.LGE(10597, match, 0)[0] || 1970);
            }
            var offset = 0, zoneSign = JSProf.LGE(10599, match, 7)[7] && match[7].charAt(0);
            if (JSProf.LRE(10600, zoneSign) != 'Z') {
                offset = JSProf.LWR(10604, offset, (JSProf.LGE(10601, match, 8)[8] || 0) * 60 + (JSProf.LFC(10603, Number, false)(JSProf.LGE(10602, match, 9)[9]) || 0));
                if (JSProf.LRE(10605, zoneSign) != '-') {
                    offset *= -1;
                }
            }
            if (JSProf.LRE(10606, zoneSign)) {
                offset -= JSProf.LMC(10607, result, 'getTimezoneOffset').getTimezoneOffset();
            }
            if (JSProf.LRE(10608, offset)) {
                JSProf.LMC(10611, result, 'setTime').setTime(JSProf.LMC(10609, result, 'getTime').getTime() + JSProf.LRE(10610, offset) * 60000);
            }
        }
        return JSProf.LRE(10612, result);    // Date or null
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
    JSProf.LPD(10674, stamp, 'toISOString').toISOString = JSProf.LRSP(10674, JSProf.LNF(10673, function (dateObject, options) {
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
        var _ = JSProf.LNF(10618, function (n) {
                return JSProf.LRE(10615, n) < 10 ? "0" + JSProf.LRE(10616, n) : JSProf.LRE(10617, n);
            }, 12);
        options = JSProf.LWR(10621, options, JSProf.LRE(10619, options) || JSProf.LNE(10620, {}, 11));
        var formattedDate = JSProf.LNE(10622, [], 10), getter = JSProf.LGD(10623, options, 'zulu').zulu ? "getUTC" : "get", date = "";
        if (JSProf.LGD(10624, options, 'selector').selector != "time") {
            var year = JSProf.LMC(10626, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10625, getter) + "FullYear", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]();
            date = JSProf.LWR(10639, date, JSProf.LMC(10638, JSProf.LNE(10637, [
                JSProf.LMC(10629, "0000", 'substr').substr(JSProf.LGD(10628, JSProf.LRE(10627, year) + "", 'length').length) + JSProf.LRE(10630, year),
                JSProf.LFC(10633, _, false)(JSProf.LMC(10632, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10631, getter) + "Month", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]() + 1),
                JSProf.LFC(10636, _, false)(JSProf.LMC(10635, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10634, getter) + "Date", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]())
            ], 10), 'join').join('-'));
        }
        JSProf.LMC(10641, formattedDate, 'push').push(JSProf.LRE(10640, date));
        if (JSProf.LGD(10642, options, 'selector').selector != "date") {
            var time = JSProf.LMC(10653, JSProf.LNE(10652, [
                    JSProf.LFC(10645, _, false)(JSProf.LMC(10644, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10643, getter) + "Hours", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]()),
                    JSProf.LFC(10648, _, false)(JSProf.LMC(10647, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10646, getter) + "Minutes", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]()),
                    JSProf.LFC(10651, _, false)(JSProf.LMC(10650, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10649, getter) + "Seconds", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]())
                ], 10), 'join').join(':');
            var millis = JSProf.LMC(10655, dateObject, JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879 = JSProf.LRE(10654, getter) + "Milliseconds", 1)[JSProf.TMPS.te3e3892dcc7f2a7c9177090f43f81daed7f7d879]();
            if (JSProf.LGD(10656, options, 'milliseconds').milliseconds) {
                time += "." + (JSProf.LRE(10657, millis) < 100 ? "0" : "") + JSProf.LFC(10659, _, false)(JSProf.LRE(10658, millis));
            }
            if (JSProf.LGD(10660, options, 'zulu').zulu) {
                time += "Z";
            } else if (JSProf.LGD(10661, options, 'selector').selector != "time") {
                var timezoneOffset = JSProf.LMC(10662, dateObject, 'getTimezoneOffset').getTimezoneOffset();
                var absOffset = JSProf.LMC(10664, Math, 'abs').abs(JSProf.LRE(10663, timezoneOffset));
                time += (JSProf.LRE(10665, timezoneOffset) > 0 ? "-" : "+") + JSProf.LFC(10667, _, false)(Math.floor(JSProf.LRE(10666, absOffset) / 60)) + ":" + JSProf.LFC(10669, _, false)(JSProf.LRE(10668, absOffset) % 60);
            }
            JSProf.LMC(10671, formattedDate, 'push').push(JSProf.LRE(10670, time));
        }
        return JSProf.LMC(10672, formattedDate, 'join').join('T');    // String
    }, 12));
    return JSProf.LRE(10675, stamp);
}, 12));