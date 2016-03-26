
(function() {
  var ownerDoc = document.currentScript.ownerDocument;
  var proto = Object.create(HTMLElement.prototype);
  proto.createdCallback = function() {
    var templ = ownerDoc.querySelector('template');
    this.createShadowRoot().appendChild(templ.content.cloneNode(true));
  };
  window.DoodleNotifier = document.registerElement('doodle-notifier', {
    prototype: proto
  });
})()
