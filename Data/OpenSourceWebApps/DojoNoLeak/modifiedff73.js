JSProf.LFC(26193, define, false)(JSProf.LNE(26184, [
    "dojo/_base/config",
    "dojo/has",
    "dijit/_WidgetBase",
    "./atBindingExtension"
], 10), JSProf.LNF(26192, function (config, has, _WidgetBase, atBindingExtension) {
    JSProf.LMC(26188, has, 'add').add("mvc-extension-per-widget", JSProf.LGD(26187, JSProf.LGE(26185, config, 'mvc')["mvc"] || JSProf.LNE(26186, {}, 11), 'extensionPerWidget').extensionPerWidget);
    if (!JSProf.LFC(26189, has, false)("mvc-extension-per-widget")) {
        JSProf.LFC(26191, atBindingExtension, false)(JSProf.LGD(26190, _WidgetBase, 'prototype').prototype);
    }
}, 12));