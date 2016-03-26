JSProf.LFD(246, ShowBox);
JSProf.LFD(247, AddResult);
JSProf.LFD(248, AddError);
JSProf.LFD(249, AddScore);
JSProf.LFD(250, Run);
JSProf.LFD(251, CheckCompatibility);
JSProf.LFD(252, Load);
var completed = 0;
var benchmarks = JSProf.LMC(2, BenchmarkSuite, 'CountBenchmarks').CountBenchmarks();
var success = true;
var latencyBenchmarks = JSProf.LNE(3, [
        "Splay",
        "Mandreel"
    ], 10);
var skipBenchmarks = typeof JSProf.LRE(4, skipBenchmarks) === "undefined" ? JSProf.LNE(5, [], 10) : JSProf.LRE(6, skipBenchmarks);
function ShowBox(name) {
    var box = JSProf.LMC(8, document, 'getElementById').getElementById("Box-" + JSProf.LRE(7, name));
    JSProf.LPD(9, box.style, 'visibility').visibility = JSProf.LRSP(9, 'visible');
    var bar = JSProf.LPD(12, JSProf.LMC(10, document, 'getElementById').getElementById("progress-bar").style, 'width').width = JSProf.LRSP(12, "" + ++completed / JSProf.LRE(11, benchmarks) * 100 + "%");
    JSProf.LMC(19, latencyBenchmarks, 'forEach').forEach(JSProf.LNF(18, function (entry) {
        if (JSProf.LMC(13, name, 'valueOf').valueOf() === JSProf.LMC(14, entry, 'valueOf').valueOf()) {
            var box1 = JSProf.LMC(16, document, 'getElementById').getElementById("Box-" + JSProf.LRE(15, name) + "Latency");
            JSProf.LPD(17, box1.style, 'visibility').visibility = JSProf.LRSP(17, 'visible');
        }
    }, 12));
}
function AddResult(name, result) {
    console.log(JSProf.LRE(20, name) + ': ' + JSProf.LRE(21, result));
    var box = JSProf.LMC(23, document, 'getElementById').getElementById("Result-" + JSProf.LRE(22, name));
    JSProf.LPD(25, box, 'innerHTML').innerHTML = JSProf.LRSP(25, JSProf.LRE(24, result));
}
function AddError(name, error) {
    console.log(JSProf.LRE(26, name) + ": " + JSProf.LGD(27, error, 'message').message);
    if (JSProf.LRE(28, error) == "TypedArrayUnsupported") {
        JSProf.LFC(30, AddResult, false)(JSProf.LRE(29, name), '<b>Unsupported<\/b>');
    } else if (JSProf.LRE(31, error) == "PerformanceNowUnsupported") {
        JSProf.LFC(33, AddResult, false)(JSProf.LRE(32, name), '<b>Timer error<\/b>');
    } else {
        JSProf.LFC(35, AddResult, false)(JSProf.LRE(34, name), '<b>Error</b>');
    }
    success = JSProf.LWR(36, success, false);
}
function AddScore(score) {
    var status = JSProf.LMC(37, document, 'getElementById').getElementById("main-banner");
    if (JSProf.LRE(38, success)) {
        JSProf.LPD(40, status, 'innerHTML').innerHTML = JSProf.LRSP(40, "Octane Score: " + JSProf.LRE(39, score));
    } else {
        JSProf.LPD(42, status, 'innerHTML').innerHTML = JSProf.LRSP(42, "Octane Score (incomplete): " + JSProf.LRE(41, score));
    }
    JSProf.LPD(44, JSProf.LMC(43, document, 'getElementById').getElementById("progress-bar-container").style, 'visibility').visibility = JSProf.LRSP(44, 'hidden');
    JSProf.LPD(46, JSProf.LMC(45, document, 'getElementById').getElementById("bottom-text").style, 'visibility').visibility = JSProf.LRSP(46, 'visible');
    JSProf.LMC(49, JSProf.LMC(47, document, 'getElementById').getElementById("inside-anchor"), 'removeChild').removeChild(JSProf.LMC(48, document, 'getElementById').getElementById("bar-appendix"));
    JSProf.LPD(51, JSProf.LMC(50, document, 'getElementById').getElementById("alertbox").style, 'visibility').visibility = JSProf.LRSP(51, 'hidden');
}
function Run() {
    JSProf.LPD(53, JSProf.LMC(52, document, 'getElementById').getElementById("main-banner"), 'innerHTML').innerHTML = JSProf.LRSP(53, "Running Octane...");
    // append the progress bar elements..
    JSProf.LPD(55, JSProf.LMC(54, document, 'getElementById').getElementById("bar-appendix"), 'innerHTML').innerHTML = JSProf.LRSP(55, "<br/><div class=\"progress progress-striped\" id=\"progress-bar-container\" style=\"visibility:hidden\"><div class=\"bar\"style=\"width: 0%;\" id=\"progress-bar\"></div></div>");
    var anchor = JSProf.LMC(56, document, 'getElementById').getElementById("run-octane");
    var parent = JSProf.LMC(57, document, 'getElementById').getElementById("main-container");
    JSProf.LMC(59, parent, 'appendChild').appendChild(JSProf.LMC(58, document, 'getElementById').getElementById("inside-anchor"));
    JSProf.LMC(61, parent, 'removeChild').removeChild(JSProf.LRE(60, anchor));
    JSProf.LPD(63, JSProf.LMC(62, document, 'getElementById').getElementById("startup-text"), 'innerHTML').innerHTML = JSProf.LRSP(63, "");
    JSProf.LPD(65, JSProf.LMC(64, document, 'getElementById').getElementById("progress-bar-container").style, 'visibility').visibility = JSProf.LRSP(65, 'visible');
    JSProf.LMC(68, BenchmarkSuite, 'RunSuites').RunSuites(JSProf.LNE(66, {
        NotifyStart: ShowBox,
        NotifyError: AddError,
        NotifyResult: AddResult,
        NotifyScore: AddScore
    }, 11), JSProf.LRE(67, skipBenchmarks));
}
function CheckCompatibility() {
    // If no Typed Arrays support, show warning label.
    var hasTypedArrays = typeof JSProf.LRU(69, typeof Uint8Array === 'undefined' ? undefined : Uint8Array) != "undefined" && typeof JSProf.LRU(70, typeof Float64Array === 'undefined' ? undefined : Float64Array) != "undefined" && typeof JSProf.LGD(73, JSProf.LNE(72, new (JSProf.LFC(71, Uint8Array, true))(0), 'Uint8Array'), 'subarray').subarray != "undefined";
    if (!JSProf.LRE(74, hasTypedArrays)) {
        console.log("Typed Arrays not supported");
        JSProf.LPD(76, JSProf.LMC(75, document, 'getElementById').getElementById("alertbox").style, 'display').display = JSProf.LRSP(76, "block");
    }
    if (JSProf.LMC(77, window.document.URL, 'indexOf').indexOf('skip_zlib=1') >= 0)
        JSProf.LMC(78, skipBenchmarks, 'push').push("zlib");
    if (JSProf.LMC(79, window.document.URL, 'indexOf').indexOf('auto=1') >= 0)
        JSProf.LFC(80, Run, false)();
}
function Load() {
    setTimeout(JSProf.LRE(81, CheckCompatibility), 200);
}