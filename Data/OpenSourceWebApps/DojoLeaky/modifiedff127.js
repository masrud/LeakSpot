JSProf.LFC(42659, define, false)(JSProf.LNE(42585, [
    '../json',
    '../_base/kernel',
    '../_base/array',
    '../has',
    '../has!dom?../selector/_loader'
], 10), JSProf.LNF(42658, function (JSON, kernel, array, has) {
    JSProf.LFD(42657, handle);
    JSProf.LMC(42587, has, 'add').add('activex', typeof JSProf.LRU(42586, typeof ActiveXObject === 'undefined' ? undefined : ActiveXObject) !== 'undefined');
    JSProf.LMC(42590, has, 'add').add('dom-parser', JSProf.LNF(42589, function (global) {
        return 'DOMParser' in JSProf.LRE(42588, global);
    }, 12));
    var handleXML;
    if (JSProf.LFC(42591, has, false)('activex')) {
        // GUIDs obtained from http://msdn.microsoft.com/en-us/library/ms757837(VS.85).aspx
        var dp = JSProf.LNE(42592, [
                'Msxml2.DOMDocument.6.0',
                'Msxml2.DOMDocument.4.0',
                'MSXML2.DOMDocument.3.0',
                'MSXML.DOMDocument'
            ], 10);
        var lastParser;
        handleXML = JSProf.LWR(42625, handleXML, JSProf.LNF(42624, function (response) {
            JSProf.LFD(42623, createDocument);
            var result = JSProf.LGD(42593, response, 'data').data;
            var text = JSProf.LGD(42594, response, 'text').text;
            if (JSProf.LRE(42595, result) && JSProf.LFC(42596, has, false)('dom-qsa2.1') && !JSProf.LGD(42597, result, 'querySelectorAll').querySelectorAll && JSProf.LFC(42598, has, false)('dom-parser')) {
                // http://bugs.dojotoolkit.org/ticket/15631
                // IE9 supports a CSS3 querySelectorAll implementation, but the DOM implementation
                // returned by IE9 xhr.responseXML does not. Manually create the XML DOM to gain
                // the fuller-featured implementation and avoid bugs caused by the inconsistency
                result = JSProf.LWR(42603, result, JSProf.LMC(42602, JSProf.LNE(42600, new (JSProf.LFC(42599, DOMParser, true))(), 'DOMParser'), 'parseFromString').parseFromString(JSProf.LRE(42601, text), 'application/xml'));
            }
            function createDocument(p) {
                try {
                    var dom = JSProf.LNE(42606, new (JSProf.LFC(42605, ActiveXObject, true))(JSProf.LRE(42604, p)), 'ActiveXObject');
                    JSProf.LPD(42607, dom, 'async').async = JSProf.LRSP(42607, false);
                    JSProf.LMC(42609, dom, 'loadXML').loadXML(JSProf.LRE(42608, text));
                    result = JSProf.LWR(42611, result, JSProf.LRE(42610, dom));
                    lastParser = JSProf.LWR(42613, lastParser, JSProf.LRE(42612, p));
                } catch (e) {
                    return false;
                }
                return true;
            }
            if (!JSProf.LRE(42614, result) || !JSProf.LGD(42615, result, 'documentElement').documentElement) {
                // The creation of an ActiveX object is expensive, so we cache the
                // parser type to avoid trying all parser types each time we handle a
                // document. There is some concern that some parser types might fail
                // depending on the document being parsed. If parsing using the cached
                // parser type fails, we do the more expensive operation of finding one
                // that works for the given document.
                // https://bugs.dojotoolkit.org/ticket/15246
                if (!JSProf.LRE(42616, lastParser) || !JSProf.LFC(42618, createDocument, false)(JSProf.LRE(42617, lastParser))) {
                    JSProf.LMC(42621, array, 'some').some(JSProf.LRE(42619, dp), JSProf.LRE(42620, createDocument));
                }
            }
            return JSProf.LRE(42622, result);
        }, 12));
    }
    var handleNativeResponse = JSProf.LNF(42636, function (response) {
            if (!JSProf.LFC(42626, has, false)('native-xhr2-blob') && JSProf.LGD(42627, response.options, 'handleAs').handleAs === 'blob' && typeof JSProf.LRU(42628, typeof Blob === 'undefined' ? undefined : Blob) !== 'undefined') {
                return JSProf.LNE(42634, new (JSProf.LFC(42633, Blob, true))(JSProf.LNE(42630, [JSProf.LGD(42629, response.xhr, 'response').response], 10), JSProf.LNE(42632, { type: JSProf.LMC(42631, response.xhr, 'getResponseHeader').getResponseHeader('Content-Type') }, 11)), 'Blob');
            }
            return JSProf.LGD(42635, response.xhr, 'response').response;
        }, 12);
    var handlers = JSProf.LNE(42643, {
            'javascript': JSProf.LNF(42639, function (response) {
                return JSProf.LMC(42638, kernel, 'eval').eval(JSProf.LGD(42637, response, 'text').text || '');
            }, 12),
            'json': JSProf.LNF(42642, function (response) {
                return JSProf.LMC(42641, JSON, 'parse').parse(JSProf.LGD(42640, response, 'text').text || null);
            }, 12),
            'xml': handleXML,
            'blob': handleNativeResponse,
            'arraybuffer': handleNativeResponse,
            'document': handleNativeResponse
        }, 11);
    function handle(response) {
        var handler = JSProf.LGE(42644, handlers, JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2 = response.options.handleAs)[JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2];
        JSProf.LPD(42650, response, 'data').data = JSProf.LRSP(42650, JSProf.LRE(42645, handler) ? JSProf.LFC(42647, handler, false)(JSProf.LRE(42646, response)) : JSProf.LGD(42648, response, 'data').data || JSProf.LGD(42649, response, 'text').text);
        return JSProf.LRE(42651, response);
    }
    JSProf.LPD(42655, handle, 'register').register = JSProf.LRSP(42655, JSProf.LNF(42654, function (name, handler) {
        JSProf.LPE(42653, handlers, 'name')[name] = JSProf.LRPE(42653, JSProf.LRE(42652, handler));
    }, 12));
    return JSProf.LRE(42656, handle);
}, 12));