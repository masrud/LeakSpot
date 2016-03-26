JSProf.LFC(42661, define, false)(JSProf.LNE(42587, [
    '../json',
    '../_base/kernel',
    '../_base/array',
    '../has',
    '../has!dom?../selector/_loader'
], 10), JSProf.LNF(42660, function (JSON, kernel, array, has) {
    JSProf.LFD(42659, handle);
    JSProf.LMC(42589, has, 'add').add('activex', typeof JSProf.LRU(42588, typeof ActiveXObject === 'undefined' ? undefined : ActiveXObject) !== 'undefined');
    JSProf.LMC(42592, has, 'add').add('dom-parser', JSProf.LNF(42591, function (global) {
        return 'DOMParser' in JSProf.LRE(42590, global);
    }, 12));
    var handleXML;
    if (JSProf.LFC(42593, has, false)('activex')) {
        // GUIDs obtained from http://msdn.microsoft.com/en-us/library/ms757837(VS.85).aspx
        var dp = JSProf.LNE(42594, [
                'Msxml2.DOMDocument.6.0',
                'Msxml2.DOMDocument.4.0',
                'MSXML2.DOMDocument.3.0',
                'MSXML.DOMDocument'
            ], 10);
        var lastParser;
        handleXML = JSProf.LWR(42627, handleXML, JSProf.LNF(42626, function (response) {
            JSProf.LFD(42625, createDocument);
            var result = JSProf.LGD(42595, response, 'data').data;
            var text = JSProf.LGD(42596, response, 'text').text;
            if (JSProf.LRE(42597, result) && JSProf.LFC(42598, has, false)('dom-qsa2.1') && !JSProf.LGD(42599, result, 'querySelectorAll').querySelectorAll && JSProf.LFC(42600, has, false)('dom-parser')) {
                // http://bugs.dojotoolkit.org/ticket/15631
                // IE9 supports a CSS3 querySelectorAll implementation, but the DOM implementation
                // returned by IE9 xhr.responseXML does not. Manually create the XML DOM to gain
                // the fuller-featured implementation and avoid bugs caused by the inconsistency
                result = JSProf.LWR(42605, result, JSProf.LMC(42604, JSProf.LNE(42602, new (JSProf.LFC(42601, DOMParser, true))(), 'DOMParser'), 'parseFromString').parseFromString(JSProf.LRE(42603, text), 'application/xml'));
            }
            function createDocument(p) {
                try {
                    var dom = JSProf.LNE(42608, new (JSProf.LFC(42607, ActiveXObject, true))(JSProf.LRE(42606, p)), 'ActiveXObject');
                    JSProf.LPD(42609, dom, 'async').async = JSProf.LRSP(42609, false);
                    JSProf.LMC(42611, dom, 'loadXML').loadXML(JSProf.LRE(42610, text));
                    result = JSProf.LWR(42613, result, JSProf.LRE(42612, dom));
                    lastParser = JSProf.LWR(42615, lastParser, JSProf.LRE(42614, p));
                } catch (e) {
                    return false;
                }
                return true;
            }
            if (!JSProf.LRE(42616, result) || !JSProf.LGD(42617, result, 'documentElement').documentElement) {
                // The creation of an ActiveX object is expensive, so we cache the
                // parser type to avoid trying all parser types each time we handle a
                // document. There is some concern that some parser types might fail
                // depending on the document being parsed. If parsing using the cached
                // parser type fails, we do the more expensive operation of finding one
                // that works for the given document.
                // https://bugs.dojotoolkit.org/ticket/15246
                if (!JSProf.LRE(42618, lastParser) || !JSProf.LFC(42620, createDocument, false)(JSProf.LRE(42619, lastParser))) {
                    JSProf.LMC(42623, array, 'some').some(JSProf.LRE(42621, dp), JSProf.LRE(42622, createDocument));
                }
            }
            return JSProf.LRE(42624, result);
        }, 12));
    }
    var handleNativeResponse = JSProf.LNF(42638, function (response) {
            if (!JSProf.LFC(42628, has, false)('native-xhr2-blob') && JSProf.LGD(42629, response.options, 'handleAs').handleAs === 'blob' && typeof JSProf.LRU(42630, typeof Blob === 'undefined' ? undefined : Blob) !== 'undefined') {
                return JSProf.LNE(42636, new (JSProf.LFC(42635, Blob, true))(JSProf.LNE(42632, [JSProf.LGD(42631, response.xhr, 'response').response], 10), JSProf.LNE(42634, { type: JSProf.LMC(42633, response.xhr, 'getResponseHeader').getResponseHeader('Content-Type') }, 11)), 'Blob');
            }
            return JSProf.LGD(42637, response.xhr, 'response').response;
        }, 12);
    var handlers = JSProf.LNE(42645, {
            'javascript': JSProf.LNF(42641, function (response) {
                return JSProf.LMC(42640, kernel, 'eval').eval(JSProf.LGD(42639, response, 'text').text || '');
            }, 12),
            'json': JSProf.LNF(42644, function (response) {
                return JSProf.LMC(42643, JSON, 'parse').parse(JSProf.LGD(42642, response, 'text').text || null);
            }, 12),
            'xml': handleXML,
            'blob': handleNativeResponse,
            'arraybuffer': handleNativeResponse,
            'document': handleNativeResponse
        }, 11);
    function handle(response) {
        var handler = JSProf.LGE(42646, handlers, JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2 = response.options.handleAs)[JSProf.TMPS.t3ca5f0139ef2f4af7db6209d866c46cf190824d2];
        JSProf.LPD(42652, response, 'data').data = JSProf.LRSP(42652, JSProf.LRE(42647, handler) ? JSProf.LFC(42649, handler, false)(JSProf.LRE(42648, response)) : JSProf.LGD(42650, response, 'data').data || JSProf.LGD(42651, response, 'text').text);
        return JSProf.LRE(42653, response);
    }
    JSProf.LPD(42657, handle, 'register').register = JSProf.LRSP(42657, JSProf.LNF(42656, function (name, handler) {
        JSProf.LPE(42655, handlers, 'name')[name] = JSProf.LRPE(42655, JSProf.LRE(42654, handler));
    }, 12));
    return JSProf.LRE(42658, handle);
}, 12));