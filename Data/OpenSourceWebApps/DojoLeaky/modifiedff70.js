JSProf.LFC(25369, define, false)(JSProf.LNE(25360, [
    "dojo/_base/config",
    "dojo/has",
    "dijit/_WidgetBase",
    "./atBindingExtension"
], 10), JSProf.LNF(25368, function (config, has, _WidgetBase, atBindingExtension) {
    JSProf.LMC(25364, has, 'add').add("mvc-extension-per-widget", JSProf.LGD(25363, JSProf.LGE(25361, config, 'mvc')["mvc"] || JSProf.LNE(25362, {}, 11), 'extensionPerWidget').extensionPerWidget);
    if (!JSProf.LFC(25365, has, false)("mvc-extension-per-widget")) {
        JSProf.LFC(25367, atBindingExtension, false)(JSProf.LGD(25366, _WidgetBase, 'prototype').prototype);
    }
}, 12));