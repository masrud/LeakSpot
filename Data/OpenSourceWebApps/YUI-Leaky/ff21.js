/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("querystring-stringify-simple",function(e,t){var n=e.namespace("QueryString"),r=encodeURIComponent;n.stringify=function(t,n){var i=[],s=n&&n.arrayKey?!0:!1,o,u,a;for(o in t)if(t.hasOwnProperty(o))if(e.Lang.isArray(t[o]))for(u=0,a=t[o].length;u<a;u++)i.push(r(s?o+"[]":o)+"="+r(t[o][u]));else i.push(r(o)+"="+r(t[o]));return i.join("&")}},"3.14.1",{requires:["yui-base"]});
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("io-base",function(e,t){function o(t){var n=this;n._uid="io:"+s++,n._init(t),e.io._map[n._uid]=n}var n=["start","complete","end","success","failure","progress"],r=["status","statusText","responseText","responseXML"],i=e.config.win,s=0;o.prototype={_id:0,_headers:{"X-Requested-With":"XMLHttpRequest"},_timeout:{},_init:function(t){var r=this,i,s;r.cfg=t||{},e.augment(r,e.EventTarget);for(i=0,s=n.length;i<s;++i)r.publish("io:"+n[i],e.merge({broadcast:1},t)),r.publish("io-trn:"+n[i],t)},_create:function(t,n){var r=this,s={id:e.Lang.isNumber(n)?n:r._id++,uid:r._uid},o=t.xdr?t.xdr.use:null,u=t.form&&t.form.upload?"iframe":null,a;return o==="native"&&(o=e.UA.ie&&!l?"xdr":null,r.setHeader("X-Requested-With")),a=o||u,s=a?e.merge(e.IO.customTransport(a),s):e.merge(e.IO.defaultTransport(),s),s.notify&&(t.notify=function(e,t,n){r.notify(e,t,n)}),a||i&&i.FormData&&t.data instanceof i.FormData&&(s.c.upload.onprogress=function(e){r.progress(s,e,t)},s.c.onload=function(e){r.load(s,e,t)},s.c.onerror=function(e){r.error(s,e,t)},s.upload=!0),s},_destroy:function(t){i&&!t.notify&&!t.xdr&&(u&&!t.upload?t.c.onreadystatechange=null:t.upload?(t.c.upload.onprogress=null,t.c.onload=null,t.c.onerror=null):e.UA.ie&&!t.e&&t.c.abort()),t=t.c=null},_evt:function(t,r,i){var s=this,o,u=i.arguments,a=s.cfg.emitFacade,f="io:"+t,l="io-trn:"+t;this.detach(l),r.e&&(r.c={status:0,statusText:r.e}),o=[a?{id:r.id,data:r.c,cfg:i,arguments:u}:r.id],a||(t===n[0]||t===n[2]?u&&o.push(u):(r.evt?o.push(r.evt):o.push(r.c),u&&o.push(u))),o.unshift(f),s.fire.apply(s,o),i.on&&(o[0]=l,s.once(l,i.on[t],i.context||e),s.fire.apply(s,o))},start:function(e,t){this._evt(n[0],e,t)},complete:function(e,t){this._evt(n[1],e,t)},end:function(e,t){this._evt(n[2],e,t),this._destroy(e)},success:function(e,t){this._evt(n[3],e,t),this.end(e,t)},failure:function(e,t){this._evt(n[4],e,t),this.end(e,t)},progress:function(e,t,r){e.evt=t,this._evt(n[5],e,r)},load:function(e,t,r){e.evt=t.target,this._evt(n[1],e,r)},error:function(e,t,r){e.evt=t,this._evt(n[4],e,r)},_retry:function(e,t,n){return this._destroy(e),n.xdr.use="flash",this.send(t,n,e.id)},_concat:function(e,t){return e+=(e.indexOf("?")===-1?"?":"&")+t,e},setHeader:function(e,t){t?this._headers[e]=t:delete this._headers[e]},_setHeaders:function(t,n){n=e.merge(this._headers,n),e.Object.each(n,function(e,r){e!=="disable"&&t.setRequestHeader(r,n[r])})},_startTimeout:function(e,t){var n=this;n._timeout[e.id]=setTimeout(function(){n._abort(e,"timeout")},t)},_clearTimeout:function(e){clearTimeout(this._timeout[e]),delete this._timeout[e]},_result:function(e,t){var n;try{n=e.c.status}catch(r){n=0}n>=200&&n<300||n===304||n===1223?this.success(e,t):this.failure(e,t)},_rS:function(e,t){var n=this;e.c.readyState===4&&(t.timeout&&n._clearTimeout(e.id),setTimeout(function(){n.complete(e,t),n._result(e,t)},0))},_abort:function(e,t){e&&e.c&&(e.e=t,e.c.abort())},send:function(t,n,i){var s,o,u,a,f,c,h=this,p=t,d={};n=n?e.Object(n):{},s=h._create(n,i),o=n.method?n.method.toUpperCase():"GET",f=n.sync,c=n.data,e.Lang.isObject(c)&&!c.nodeType&&!s.upload&&e.QueryString&&e.QueryString.stringify&&(n.data=c=e.QueryString.stringify(c));if(n.form){if(n.form.upload)return h.upload(s,t,n);c=h._serialize(n.form,c)}c||(c="");if(c)switch(o){case"GET":case"HEAD":case"DELETE":p=h._concat(p,c),c="";break;case"POST":case"PUT":n.headers=e.merge({"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},n.headers)}if(s.xdr)return h.xdr(p,s,n);if(s.notify)return s.c.send(s,t,n);!f&&!s.upload&&(s.c.onreadystatechange=function(){h._rS(s,n)});try{s.c.open(o,p,!f,n.username||null,n.password||null),h._setHeaders(s.c,n.headers||{}),h.start(s,n),n.xdr&&n.xdr.credentials&&l&&(s.c.withCredentials=!0),s.c.send(c);if(f){for(u=0,a=r.length;u<a;++u)d[r[u]]=s.c[r[u]];return d.getAllResponseHeaders=function(){return s.c.getAllResponseHeaders()},d.getResponseHeader=function(e){return s.c.getResponseHeader(e)},h.complete(s,n),h._result(s,n),d}}catch(v){if(s.xdr)return h._retry(s,t,n);h.complete(s,n),h._result(s,n)}return n.timeout&&h._startTimeout(s,n.timeout),{id:s.id,abort:function(){return s.c?h._abort(s,"abort"):!1},isInProgress:function(){return s.c?s.c.readyState%4:!1},io:h}}},e.io=function(t,n){var r=e.io._map["io:0"]||new o;return r.send.apply(r,[t,n])},e.io.header=function(t,n){var r=e.io._map["io:0"]||new o;r.setHeader(t,n)},e.IO=o,e.io._map={};var u=i&&i.XMLHttpRequest,a=i&&i.XDomainRequest,f=i&&i.ActiveXObject,l=u&&"withCredentials"in new XMLHttpRequest;e.mix(e.IO,{_default:"xhr",defaultTransport:function(t){if(!t){var n={c:e.IO.transports[e.IO._default](),notify:e.IO._default==="xhr"?!1:!0};return n}e.IO._default=t},transports:{xhr:function(){return u?new XMLHttpRequest:f?new ActiveXObject("Microsoft.XMLHTTP"):null},xdr:function(){return a?new XDomainRequest:null},iframe:function(){return{}},flash:null,nodejs:null},customTransport:function(t){var n={c:e.IO.transports[t]()};return n[t==="xdr"||t==="flash"?"xdr":"notify"]=!0,n}}),e.mix(e.IO.prototype,{notify:function(e,t,n){var r=this;switch(e){case"timeout":case"abort":case"transport error":t.c={status:0,statusText:e},e="failure";default:r[e].apply(r,[t,n])}}})},"3.14.1",{requires:["event-custom-base","querystring-stringify-simple"]});
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("json-stringify",function(e,t){var n=":",r=e.config.global.JSON;e.mix(e.namespace("JSON"),{dateToString:function(e){function t(e){return e<10?"0"+e:e}return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+n+t(e.getUTCMinutes())+n+t(e.getUTCSeconds())+"Z"},stringify:function(){return r.stringify.apply(r,arguments)},charCacheThreshold:100})},"3.14.1",{requires:["yui-base"]});
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("event-simulate",function(e,t){(function(){function d(t,u,a,f,l,c,h,p,d,v,m){t||e.error("simulateKeyEvent(): Invalid target.");if(r(u)){u=u.toLowerCase();switch(u){case"textevent":u="keypress";break;case"keyup":case"keydown":case"keypress":break;default:e.error("simulateKeyEvent(): Event type '"+u+"' not supported.")}}else e.error("simulateKeyEvent(): Event type must be a string.");i(a)||(a=!0),i(f)||(f=!0),s(l)||(l=e.config.win),i(c)||(c=!1),i(h)||(h=!1),i(p)||(p=!1),i(d)||(d=!1),o(v)||(v=0),o(m)||(m=0);var g=null;if(n(e.config.doc.createEvent)){try{g=e.config.doc.createEvent("KeyEvents"),g.initKeyEvent(u,a,f,l,c,h,p,d,v,m)}catch(y){try{g=e.config.doc.createEvent("Events")}catch(b){g=e.config.doc.createEvent("UIEvents")}finally{g.initEvent(u,a,f),g.view=l,g.altKey=h,g.ctrlKey=c,g.shiftKey=p,g.metaKey=d,g.keyCode=v,g.charCode=m}}t.dispatchEvent(g)}else s(e.config.doc.createEventObject)?(g=e.config.doc.createEventObject(),g.bubbles=a,g.cancelable=f,g.view=l,g.ctrlKey=c,g.altKey=h,g.shiftKey=p,g.metaKey=d,g.keyCode=m>0?m:v,t.fireEvent("on"+u,g)):e.error("simulateKeyEvent(): No event simulation framework present.")}function v(t,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x){t||e.error("simulateMouseEvent(): Invalid target."),r(f)?!u[f.toLowerCase()]&&!a[f]&&e.error("simulateMouseEvent(): Event type '"+f+"' not supported."):e.error("simulateMouseEvent(): Event type must be a string."),i(l)||(l=!0),i(c)||(c=f!=="mousemove"),s(h)||(h=e.config.win),o(p)||(p=1),o(d)||(d=0),o(v)||(v=0),o(m)||(m=0),o(g)||(g=0),i(y)||(y=!1),i(b)||(b=!1),i(w)||(w=!1),i(E)||(E=!1),o(S)||(S=0),x=x||null;var T=null;if(n(e.config.doc.createEvent))T=e.config.doc.createEvent("MouseEvents"),T.initMouseEvent?T.initMouseEvent(f,l,c,h,p,d,v,m,g,y,b,w,E,S,x):(T=e.config.doc.createEvent("UIEvents"),T.initEvent(f,l,c),T.view=h,T.detail=p,T.screenX=d,T.screenY=v,T.clientX=m,T.clientY=g,T.ctrlKey=y,T.altKey=b,T.metaKey=E,T.shiftKey=w,T.button=S,T.relatedTarget=x),x&&!T.relatedTarget&&(f==="mouseout"?T.toElement=x:f==="mouseover"&&(T.fromElement=x)),t.dispatchEvent(T);else if(s(e.config.doc.createEventObject)){T=e.config.doc.createEventObject(),T.bubbles=l,T.cancelable=c,T.view=h,T.detail=p,T.screenX=d,T.screenY=v,T.clientX=m,T.clientY=g,T.ctrlKey=y,T.altKey=b,T.metaKey=E,T.shiftKey=w;switch(S){case 0:T.button=1;break;case 1:T.button=4;break;case 2:break;default:T.button=0}T.relatedTarget=x,t.fireEvent("on"+f,T)}else e.error("simulateMouseEvent(): No event simulation framework present.")}function m(t,u,a,f,h,p){t||e.error("simulateUIEvent(): Invalid target."),r(u)?(u=u.toLowerCase(),l[u]||e.error("simulateUIEvent(): Event type '"+u+"' not supported.")):e.error("simulateUIEvent(): Event type must be a string.");var d=null;i(a)||(a=u in c),i(f)||(f=u==="submit"),s(h)||(h=e.config.win),o(p)||(p=1),n(e.config.doc.createEvent)?(d=e.config.doc.createEvent("UIEvents"),d.initUIEvent(u,a,f,h,p),t.dispatchEvent(d)):s(e.config.doc.createEventObject)?(d=e.config.doc.createEventObject(),d.bubbles=a,d.cancelable=f,d.view=h,d.detail=p,t.fireEvent("on"+u,d)):e.error("simulateUIEvent(): No event simulation framework present.")}function g(t,n,r,i,s,o,u,a,f,l,c,h,d,v,m,g){var y;(!e.UA.ios||e.UA.ios<2)&&e.error("simulateGestureEvent(): Native gesture DOM eventframe is not available in this platform."),t||e.error("simulateGestureEvent(): Invalid target."),e.Lang.isString(n)?(n=n.toLowerCase(),p[n]||e.error("simulateTouchEvent(): Event type '"+n+"' not supported.")):e.error("simulateGestureEvent(): Event type must be a string."),e.Lang.isBoolean(r)||(r=!0),e.Lang.isBoolean(i)||(i=!0),e.Lang.isObject(s)||(s=e.config.win),e.Lang.isNumber(o)||(o=2),e.Lang.isNumber(u)||(u=0),e.Lang.isNumber(a)||(a=0),e.Lang.isNumber(f)||(f=0),e.Lang.isNumber(l)||(l=0),e.Lang.isBoolean(c)||(c=!1),e.Lang.isBoolean(h)||(h=!1),e.Lang.isBoolean(d)||(d=!1),e.Lang.isBoolean(v)||(v=!1),e.Lang.isNumber(m)||(m=1),e.Lang.isNumber(g)||(g=0),y=e.config.doc.createEvent("GestureEvent"),y.initGestureEvent(n,r,i,s,o,u,a,f,l,c,h,d,v,t,m,g),t.dispatchEvent(y)}function y(t,n,r,i,s,o,u,a,f,l,c,p,d,v,m,g,y,b,w){var E;t||e.error("simulateTouchEvent(): Invalid target."),e.Lang.isString(n)?(n=n.toLowerCase(),h[n]||e.error("simulateTouchEvent(): Event type '"+n+"' not supported.")):e.error("simulateTouchEvent(): Event type must be a string."),n==="touchstart"||n==="touchmove"?m.length===0&&e.error("simulateTouchEvent(): No touch object in touches"):n==="touchend"&&y.length===0&&e.error("simulateTouchEvent(): No touch object in changedTouches"),e.Lang.isBoolean(r)||(r=!0),e.Lang.isBoolean(i)||(i=n!=="touchcancel"),e.Lang.isObject(s)||(s=e.config.win),e.Lang.isNumber(o)||(o=1),e.Lang.isNumber(u)||(u=0),e.Lang.isNumber(a)||(a=0),e.Lang.isNumber(f)||(f=0),e.Lang.isNumber(l)||(l=0),e.Lang.isBoolean(c)||(c=!1),e.Lang.isBoolean(p)||(p=!1),e.Lang.isBoolean(d)||(d=!1),e.Lang.isBoolean(v)||(v=!1),e.Lang.isNumber(b)||(b=1),e.Lang.isNumber(w)||(w=0),e.Lang.isFunction(e.config.doc.createEvent)?(e.UA.android?e.UA.android<4?(E=e.config.doc.createEvent("MouseEvents"),E.initMouseEvent(n,r,i,s,o,u,a,f,l,c,p,d,v,0,t),E.touches=m,E.targetTouches=g,E.changedTouches=y):(E=e.config.doc.createEvent("TouchEvent"),E.initTouchEvent(m,g,y,n,s,u,a,f,l,c,p,d,v)):e.UA.ios?e.UA.ios>=2?(E=e.config.doc.createEvent("TouchEvent"),E.initTouchEvent(n,r,i,s,o,u,a,f,l,c,p,d,v,m,g,y,b,w)):e.error("simulateTouchEvent(): No touch event simulation framework present for iOS, "+e.UA.ios+"."):e.error("simulateTouchEvent(): Not supported agent yet, "+e.UA.userAgent),t.dispatchEvent(E)):e.error("simulateTouchEvent(): No event simulation framework present.")}var t=e.Lang,n=t.isFunction,r=t.isString,i=t.isBoolean,s=t.isObject,o=t.isNumber,u={click:1,dblclick:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,mousemove:1,contextmenu:1},a={MSPointerOver:1,MSPointerOut:1,MSPointerDown:1,MSPointerUp:1,MSPointerMove:1},f={keydown:1,keyup:1,keypress:1},l={submit:1,blur:1,change:1,focus:1,resize:1,scroll:1,select:1},c={scroll:1,resize:1,reset:1,submit:1,change:1,select
:1,error:1,abort:1},h={touchstart:1,touchmove:1,touchend:1,touchcancel:1},p={gesturestart:1,gesturechange:1,gestureend:1};e.mix(c,u),e.mix(c,f),e.mix(c,h),e.Event.simulate=function(t,n,r){r=r||{},u[n]||a[n]?v(t,n,r.bubbles,r.cancelable,r.view,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget):f[n]?d(t,n,r.bubbles,r.cancelable,r.view,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode):l[n]?m(t,n,r.bubbles,r.cancelable,r.view,r.detail):h[n]?e.config.win&&"ontouchstart"in e.config.win&&!e.UA.phantomjs&&!(e.UA.chrome&&e.UA.chrome<6)?y(t,n,r.bubbles,r.cancelable,r.view,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.touches,r.targetTouches,r.changedTouches,r.scale,r.rotation):e.error("simulate(): Event '"+n+"' can't be simulated. Use gesture-simulate module instead."):e.UA.ios&&e.UA.ios>=2&&p[n]?g(t,n,r.bubbles,r.cancelable,r.view,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.scale,r.rotation):e.error("simulate(): Event '"+n+"' can't be simulated.")}})()},"3.14.1",{requires:["event-base"]});
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("async-queue",function(e,t){e.AsyncQueue=function(){this._init(),this.add.apply(this,arguments)};var n=e.AsyncQueue,r="execute",i="shift",s="promote",o="remove",u=e.Lang.isObject,a=e.Lang.isFunction;n.defaults=e.mix({autoContinue:!0,iterations:1,timeout:10,until:function(){return this.iterations|=0,this.iterations<=0}},e.config.queueDefaults||{}),e.extend(n,e.EventTarget,{_running:!1,_init:function(){e.EventTarget.call(this,{prefix:"queue",emitFacade:!0}),this._q=[],this.defaults={},this._initEvents()},_initEvents:function(){this.publish({execute:{defaultFn:this._defExecFn,emitFacade:!0},shift:{defaultFn:this._defShiftFn,emitFacade:!0},add:{defaultFn:this._defAddFn,emitFacade:!0},promote:{defaultFn:this._defPromoteFn,emitFacade:!0},remove:{defaultFn:this._defRemoveFn,emitFacade:!0}})},next:function(){var e;while(this._q.length){e=this._q[0]=this._prepare(this._q[0]);if(!e||!e.until())break;this.fire(i,{callback:e}),e=null}return e||null},_defShiftFn:function(e){this.indexOf(e.callback)===0&&this._q.shift()},_prepare:function(t){if(a(t)&&t._prepared)return t;var r=e.merge(n.defaults,{context:this,args:[],_prepared:!0},this.defaults,a(t)?{fn:t}:t),i=e.bind(function(){i._running||i.iterations--,a(i.fn)&&i.fn.apply(i.context||e,e.Array(i.args))},this);return e.mix(i,r)},run:function(){var e,t=!0;if(this._executing)return this._running=!0,this;for(e=this.next();e&&!this.isRunning();e=this.next()){t=e.timeout<0?this._execute(e):this._schedule(e);if(!t)break}return e||this.fire("complete"),this},_execute:function(e){this._running=e._running=!0,this._executing=e,e.iterations--,this.fire(r,{callback:e});var t=this._running&&e.autoContinue;return this._running=e._running=!1,this._executing=!1,t},_schedule:function(t){return this._running=e.later(t.timeout,this,function(){this._execute(t)&&this.run()}),!1},isRunning:function(){return!!this._running},_defExecFn:function(e){e.callback()},add:function(){return this.fire("add",{callbacks:e.Array(arguments,0,!0)}),this},_defAddFn:function(t){var n=this._q,r=[];e.Array.each(t.callbacks,function(e){u(e)&&(n.push(e),r.push(e))}),t.added=r},pause:function(){return this._running&&u(this._running)&&this._running.cancel(),this._running=!1,this},stop:function(){return this._q=[],this._running&&u(this._running)&&(this._running.cancel(),this._running=!1),this},indexOf:function(e){var t=0,n=this._q.length,r;for(;t<n;++t){r=this._q[t];if(r===e||r.id===e)return t}return-1},getCallback:function(e){var t=this.indexOf(e);return t>-1?this._q[t]:null},promote:function(e){var t={callback:e},n;return this.isRunning()?n=this.after(i,function(){this.fire(s,t),n.detach()},this):this.fire(s,t),this},_defPromoteFn:function(e){var t=this.indexOf(e.callback),n=t>-1?this._q.splice(t,1)[0]:null;e.promoted=n,n&&this._q.unshift(n)},remove:function(e){var t={callback:e},n;return this.isRunning()?n=this.after(i,function(){this.fire(o,t),n.detach()},this):this.fire(o,t),this},_defRemoveFn:function(e){var t=this.indexOf(e.callback);e.removed=t>-1?this._q.splice(t,1)[0]:null},size:function(){return this.isRunning()||this.next(),this._q.length}})},"3.14.1",{requires:["event-custom"]});
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("gesture-simulate",function(e,t){function T(n){n||e.error(t+": invalid target node"),this.node=n,this.target=e.Node.getDOMNode(n);var r=this.node.getXY(),i=this._getDims();a=r[0]+i[0]/2,f=r[1]+i[1]/2}var t="gesture-simulate",n=e.config.win&&"ontouchstart"in e.config.win&&!e.UA.phantomjs&&!(e.UA.chrome&&e.UA.chrome<6),r={tap:1,doubletap:1,press:1,move:1,flick:1,pinch:1,rotate:1},i={touchstart:1,touchmove:1,touchend:1,touchcancel:1},s=e.config.doc,o,u=20,a,f,l={HOLD_TAP:10,DELAY_TAP:10,HOLD_PRESS:3e3,MIN_HOLD_PRESS:1e3,MAX_HOLD_PRESS:6e4,DISTANCE_MOVE:200,DURATION_MOVE:1e3,MAX_DURATION_MOVE:5e3,MIN_VELOCITY_FLICK:1.3,DISTANCE_FLICK:200,DURATION_FLICK:1e3,MAX_DURATION_FLICK:5e3,DURATION_PINCH:1e3},c="touchstart",h="touchmove",p="touchend",d="gesturestart",v="gesturechange",m="gestureend",g="mouseup",y="mousemove",b="mousedown",w="click",E="dblclick",S="x",x="y";T.prototype={_toRadian:function(e){return e*(Math.PI/180)},_getDims:function(){var e,t,n;return this.target.getBoundingClientRect?(e=this.target.getBoundingClientRect(),"height"in e?n=e.height:n=Math.abs(e.bottom-e.top),"width"in e?t=e.width:t=Math.abs(e.right-e.left)):(e=this.node.get("region"),t=e.width,n=e.height),[t,n]},_calculateDefaultPoint:function(t){var n;return!e.Lang.isArray(t)||t.length===0?t=[a,f]:(t.length==1&&(n=this._getDims[1],t[1]=n/2),t[0]=this.node.getX()+t[0],t[1]=this.node.getY()+t[1]),t},rotate:function(n,r,i,s,o,u,a){var f,l=i,c=s;if(!e.Lang.isNumber(l)||!e.Lang.isNumber(c)||l<0||c<0)f=this.target.offsetWidth<this.target.offsetHeight?this.target.offsetWidth/4:this.target.offsetHeight/4,l=f,c=f;e.Lang.isNumber(a)||e.error(t+"Invalid rotation detected."),this.pinch(n,r,l,c,o,u,a)},pinch:function(n,r,i,s,o,a,f){var g,y,b=u,w,E=0,S=i,x=s,T,N,C,k,L,A,O,M,_,D={start:[],end:[]},P={start:[],end:[]},H,B;r=this._calculateDefaultPoint(r),(!e.Lang.isNumber(S)||!e.Lang.isNumber(x)||S<0||x<0)&&e.error(t+"Invalid startRadius and endRadius detected.");if(!e.Lang.isNumber(o)||o<=0)o=l.DURATION_PINCH;if(!e.Lang.isNumber(a))a=0;else{a%=360;while(a<0)a+=360}e.Lang.isNumber(f)||(f=0),e.AsyncQueue.defaults.timeout=b,g=new e.AsyncQueue,N=r[0],C=r[1],O=a,M=a+f,D.start=[N+S*Math.sin(this._toRadian(O)),C-S*Math.cos(this._toRadian(O))],D.end=[N+x*Math.sin(this._toRadian(M)),C-x*Math.cos(this._toRadian(M))],P.start=[N-S*Math.sin(this._toRadian(O)),C+S*Math.cos(this._toRadian(O))],P.end=[N-x*Math.sin(this._toRadian(M)),C+x*Math.cos(this._toRadian(M))],k=1,L=s/i,g.add({fn:function(){var t,n,r,i;t={pageX:D.start[0],pageY:D.start[1],clientX:D.start[0],clientY:D.start[1]},n={pageX:P.start[0],pageY:P.start[1],clientX:P.start[0],clientY:P.start[1]},i=this._createTouchList([e.merge({identifier:E++},t),e.merge({identifier:E++},n)]),r={pageX:(D.start[0]+P.start[0])/2,pageY:(D.start[0]+P.start[1])/2,clientX:(D.start[0]+P.start[0])/2,clientY:(D.start[0]+P.start[1])/2},this._simulateEvent(this.target,c,e.merge({touches:i,targetTouches:i,changedTouches:i,scale:k,rotation:O},r)),e.UA.ios>=2&&this._simulateEvent(this.target,d,e.merge({scale:k,rotation:O},r))},timeout:0,context:this}),H=Math.floor(o/b),T=(x-S)/H,A=(L-k)/H,_=(M-O)/H,B=function(t){var n=S+T*t,r=N+n*Math.sin(this._toRadian(O+_*t)),i=C-n*Math.cos(this._toRadian(O+_*t)),s=N-n*Math.sin(this._toRadian(O+_*t)),o=C+n*Math.cos(this._toRadian(O+_*t)),u=(r+s)/2,a=(i+o)/2,f,l,c,p;f={pageX:r,pageY:i,clientX:r,clientY:i},l={pageX:s,pageY:o,clientX:s,clientY:o},p=this._createTouchList([e.merge({identifier:E++},f),e.merge({identifier:E++},l)]),c={pageX:u,pageY:a,clientX:u,clientY:a},this._simulateEvent(this.target,h,e.merge({touches:p,targetTouches:p,changedTouches:p,scale:k+A*t,rotation:O+_*t},c)),e.UA.ios>=2&&this._simulateEvent(this.target,v,e.merge({scale:k+A*t,rotation:O+_*t},c))};for(y=0;y<H;y++)g.add({fn:B,args:[y],context:this});g.add({fn:function(){var t=this._getEmptyTouchList(),n,r,i,s;n={pageX:D.end[0],pageY:D.end[1],clientX:D.end[0],clientY:D.end[1]},r={pageX:P.end[0],pageY:P.end[1],clientX:P.end[0],clientY:P.end[1]},s=this._createTouchList([e.merge({identifier:E++},n),e.merge({identifier:E++},r)]),i={pageX:(D.end[0]+P.end[0])/2,pageY:(D.end[0]+P.end[1])/2,clientX:(D.end[0]+P.end[0])/2,clientY:(D.end[0]+P.end[1])/2},e.UA.ios>=2&&this._simulateEvent(this.target,m,e.merge({scale:L,rotation:M},i)),this._simulateEvent(this.target,p,e.merge({touches:t,targetTouches:t,changedTouches:s,scale:L,rotation:M},i))},context:this}),n&&e.Lang.isFunction(n)&&g.add({fn:n,context:this.node}),g.run()},tap:function(t,r,i,s,o){var u=new e.AsyncQueue,a=this._getEmptyTouchList(),f,h,d,v,m;r=this._calculateDefaultPoint(r);if(!e.Lang.isNumber(i)||i<1)i=1;e.Lang.isNumber(s)||(s=l.HOLD_TAP),e.Lang.isNumber(o)||(o=l.DELAY_TAP),h={pageX:r[0],pageY:r[1],clientX:r[0],clientY:r[1]},f=this._createTouchList([e.merge({identifier:0},h)]),v=function(){this._simulateEvent(this.target,c,e.merge({touches:f,targetTouches:f,changedTouches:f},h))},m=function(){this._simulateEvent(this.target,p,e.merge({touches:a,targetTouches:a,changedTouches:f},h))};for(d=0;d<i;d++)u.add({fn:v,context:this,timeout:d===0?0:o}),u.add({fn:m,context:this,timeout:s});i>1&&!n&&u.add({fn:function(){this._simulateEvent(this.target,E,h)},context:this}),t&&e.Lang.isFunction(t)&&u.add({fn:t,context:this.node}),u.run()},flick:function(n,r,i,s,o){var u;r=this._calculateDefaultPoint(r),e.Lang.isString(i)?(i=i.toLowerCase(),i!==S&&i!==x&&e.error(t+"(flick): Only x or y axis allowed")):i=S,e.Lang.isNumber(s)||(s=l.DISTANCE_FLICK),e.Lang.isNumber(o)?o>l.MAX_DURATION_FLICK&&(o=l.MAX_DURATION_FLICK):o=l.DURATION_FLICK,Math.abs(s)/o<l.MIN_VELOCITY_FLICK&&(o=Math.abs(s)/l.MIN_VELOCITY_FLICK),u={start:e.clone(r),end:[i===S?r[0]+s:r[0],i===x?r[1]+s:r[1]]},this._move(n,u,o)},move:function(t,n,r){var i;e.Lang.isObject(n)?(e.Lang.isArray(n.point)?n.point=this._calculateDefaultPoint(n.point):n.point=this._calculateDefaultPoint([]),e.Lang.isNumber(n.xdist)||(n.xdist=l.DISTANCE_MOVE),e.Lang.isNumber(n.ydist)||(n.ydist=0)):n={point:this._calculateDefaultPoint([]),xdist:l.
DISTANCE_MOVE,ydist:0},e.Lang.isNumber(r)?r>l.MAX_DURATION_MOVE&&(r=l.MAX_DURATION_MOVE):r=l.DURATION_MOVE,i={start:e.clone(n.point),end:[n.point[0]+n.xdist,n.point[1]+n.ydist]},this._move(t,i,r)},_move:function(t,n,r){var i,s,o=u,d,v,m,g=0,y;e.Lang.isNumber(r)?r>l.MAX_DURATION_MOVE&&(r=l.MAX_DURATION_MOVE):r=l.DURATION_MOVE,e.Lang.isObject(n)?(e.Lang.isArray(n.start)||(n.start=[a,f]),e.Lang.isArray(n.end)||(n.end=[a+l.DISTANCE_MOVE,f])):n={start:[a,f],end:[a+l.DISTANCE_MOVE,f]},e.AsyncQueue.defaults.timeout=o,i=new e.AsyncQueue,i.add({fn:function(){var t={pageX:n.start[0],pageY:n.start[1],clientX:n.start[0],clientY:n.start[1]},r=this._createTouchList([e.merge({identifier:g++},t)]);this._simulateEvent(this.target,c,e.merge({touches:r,targetTouches:r,changedTouches:r},t))},timeout:0,context:this}),d=Math.floor(r/o),v=(n.end[0]-n.start[0])/d,m=(n.end[1]-n.start[1])/d,y=function(t){var r=n.start[0]+v*t,i=n.start[1]+m*t,s={pageX:r,pageY:i,clientX:r,clientY:i},o=this._createTouchList([e.merge({identifier:g++},s)]);this._simulateEvent(this.target,h,e.merge({touches:o,targetTouches:o,changedTouches:o},s))};for(s=0;s<d;s++)i.add({fn:y,args:[s],context:this});i.add({fn:function(){var t={pageX:n.end[0],pageY:n.end[1],clientX:n.end[0],clientY:n.end[1]},r=this._createTouchList([e.merge({identifier:g},t)]);this._simulateEvent(this.target,h,e.merge({touches:r,targetTouches:r,changedTouches:r},t))},timeout:0,context:this}),i.add({fn:function(){var t={pageX:n.end[0],pageY:n.end[1],clientX:n.end[0],clientY:n.end[1]},r=this._getEmptyTouchList(),i=this._createTouchList([e.merge({identifier:g},t)]);this._simulateEvent(this.target,p,e.merge({touches:r,targetTouches:r,changedTouches:i},t))},context:this}),t&&e.Lang.isFunction(t)&&i.add({fn:t,context:this.node}),i.run()},_getEmptyTouchList:function(){return o||(o=this._createTouchList([])),o},_createTouchList:function(n){var r=[],i,o=this;return!!n&&e.Lang.isArray(n)?e.UA.android&&e.UA.android>=4||e.UA.ios&&e.UA.ios>=2?(e.each(n,function(t){t.identifier||(t.identifier=0),t.pageX||(t.pageX=0),t.pageY||(t.pageY=0),t.screenX||(t.screenX=0),t.screenY||(t.screenY=0),r.push(s.createTouch(e.config.win,o.target,t.identifier,t.pageX,t.pageY,t.screenX,t.screenY))}),i=s.createTouchList.apply(s,r)):e.UA.ios&&e.UA.ios<2?e.error(t+": No touch event simulation framework present."):(i=[],e.each(n,function(e){e.identifier||(e.identifier=0),e.clientX||(e.clientX=0),e.clientY||(e.clientY=0),e.pageX||(e.pageX=0),e.pageY||(e.pageY=0),e.screenX||(e.screenX=0),e.screenY||(e.screenY=0),i.push({target:o.target,identifier:e.identifier,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}),i.item=function(e){return i[e]}):e.error(t+": Invalid touchPoints passed"),i},_simulateEvent:function(t,r,s){var o;i[r]?n?e.Event.simulate(t,r,s):this._isSingleTouch(s.touches,s.targetTouches,s.changedTouches)?(r={touchstart:b,touchmove:y,touchend:g}[r],s.button=0,s.relatedTarget=null,o=r===g?s.changedTouches:s.touches,s=e.mix(s,{screenX:o.item(0).screenX,screenY:o.item(0).screenY,clientX:o.item(0).clientX,clientY:o.item(0).clientY},!0),e.Event.simulate(t,r,s),r==g&&e.Event.simulate(t,w,s)):e.error("_simulateEvent(): Event '"+r+"' has multi touch objects that can't be simulated in your platform."):e.Event.simulate(t,r,s)},_isSingleTouch:function(e,t,n){return e&&e.length<=1&&t&&t.length<=1&&n&&n.length<=1}},e.GestureSimulation=T,e.GestureSimulation.defaults=l,e.GestureSimulation.GESTURES=r,e.Event.simulateGesture=function(n,i,s,o){n=e.one(n);var u=new e.GestureSimulation(n);i=i.toLowerCase(),!o&&e.Lang.isFunction(s)&&(o=s,s={}),s=s||{};if(r[i])switch(i){case"tap":u.tap(o,s.point,s.times,s.hold,s.delay);break;case"doubletap":u.tap(o,s.point,2);break;case"press":e.Lang.isNumber(s.hold)?s.hold<l.MIN_HOLD_PRESS?s.hold=l.MIN_HOLD_PRESS:s.hold>l.MAX_HOLD_PRESS&&(s.hold=l.MAX_HOLD_PRESS):s.hold=l.HOLD_PRESS,u.tap(o,s.point,1,s.hold);break;case"move":u.move(o,s.path,s.duration);break;case"flick":u.flick(o,s.point,s.axis,s.distance,s.duration);break;case"pinch":u.pinch(o,s.center,s.r1,s.r2,s.duration,s.start,s.rotation);break;case"rotate":u.rotate(o,s.center,s.r1,s.r2,s.duration,s.start,s.rotation)}else e.error(t+": Not a supported gesture simulation: "+i)}},"3.14.1",{requires:["async-queue","event-simulate","node-screen"]});
/*
YUI 3.14.1 (build 63049cb)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("node-event-simulate",function(e,t){e.Node.prototype.simulate=function(t,n){e.Event.simulate(e.Node.getDOMNode(this),t,n)},e.Node.prototype.simulateGesture=function(t,n,r){e.Event.simulateGesture(this,t,n,r)}},"3.14.1",{requires:["node-base","event-simulate","gesture-simulate"]});
