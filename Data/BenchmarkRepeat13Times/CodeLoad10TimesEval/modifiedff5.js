// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Performance.now is used in latency benchmarks, the fallback is Date.now.
JSProf.LFD(1421, Benchmark);
JSProf.LFD(1422, BenchmarkResult);
JSProf.LFD(1423, BenchmarkSuite);
var performance = JSProf.LRE(618, performance) || JSProf.LNE(619, {}, 11);
JSProf.LPD(628, performance, 'now').now = JSProf.LRSP(628, JSProf.LFC(627, JSProf.LNF(626, function () {
    return JSProf.LGD(620, performance, 'now').now || JSProf.LGD(621, performance, 'mozNow').mozNow || JSProf.LGD(622, performance, 'msNow').msNow || JSProf.LGD(623, performance, 'oNow').oNow || JSProf.LGD(624, performance, 'webkitNow').webkitNow || JSProf.LGD(625, Date, 'now').now;
}, 12), false)());
// Simple framework for running the benchmark suites and
// computing a score based on the timing measurements.
// A benchmark has a name (string) and a function that will be run to
// do the performance measurement. The optional setup and tearDown
// arguments are functions that will be invoked before and after
// running the benchmark, but the running time of these functions will
// not be accounted for in the benchmark score.
function Benchmark(name, doWarmup, doDeterministic, deterministicIterations, run, setup, tearDown, rmsResult, minIterations) {
    JSProf.LPD(630, this, 'name').name = JSProf.LRSP(630, JSProf.LRE(629, name));
    JSProf.LPD(632, this, 'doWarmup').doWarmup = JSProf.LRSP(632, JSProf.LRE(631, doWarmup));
    JSProf.LPD(634, this, 'doDeterministic').doDeterministic = JSProf.LRSP(634, JSProf.LRE(633, doDeterministic));
    JSProf.LPD(636, this, 'deterministicIterations').deterministicIterations = JSProf.LRSP(636, JSProf.LRE(635, deterministicIterations));
    JSProf.LPD(638, this, 'run').run = JSProf.LRSP(638, JSProf.LRE(637, run));
    JSProf.LPD(642, this, 'Setup').Setup = JSProf.LRSP(642, JSProf.LRE(639, setup) ? JSProf.LRE(640, setup) : JSProf.LNF(641, function () {
    }, 12));
    JSProf.LPD(646, this, 'TearDown').TearDown = JSProf.LRSP(646, JSProf.LRE(643, tearDown) ? JSProf.LRE(644, tearDown) : JSProf.LNF(645, function () {
    }, 12));
    JSProf.LPD(649, this, 'rmsResult').rmsResult = JSProf.LRSP(649, JSProf.LRE(647, rmsResult) ? JSProf.LRE(648, rmsResult) : null);
    //this.minIterations = minIterations ? minIterations : 2;
    JSProf.LPD(650, this, 'minIterations').minIterations = JSProf.LRSP(650, 1);    //Masoomeh
}
// Benchmark results hold the benchmark and the measured time used to
// run the benchmark. The benchmark score is computed later once a
// full benchmark suite has run to completion. If latency is set to 0
// then there is no latency score for this benchmark.
function BenchmarkResult(benchmark, time, latency) {
    JSProf.LPD(652, this, 'benchmark').benchmark = JSProf.LRSP(652, JSProf.LRE(651, benchmark));
    JSProf.LPD(654, this, 'time').time = JSProf.LRSP(654, JSProf.LRE(653, time));
    JSProf.LPD(656, this, 'latency').latency = JSProf.LRSP(656, JSProf.LRE(655, latency));
}
// Automatically convert results to numbers. Used by the geometric
// mean computation.
JSProf.LPD(659, BenchmarkResult.prototype, 'valueOf').valueOf = JSProf.LRSP(659, JSProf.LNF(658, function () {
    return JSProf.LGD(657, this, 'time').time;
}, 12));
// Suites of benchmarks consist of a name and the set of benchmarks in
// addition to the reference timing that the final score will be based
// on. This way, all scores are relative to a reference run and higher
// scores implies better performance.
function BenchmarkSuite(name, reference, benchmarks) {
    JSProf.LPD(661, this, 'name').name = JSProf.LRSP(661, JSProf.LRE(660, name));
    JSProf.LPD(663, this, 'reference').reference = JSProf.LRSP(663, JSProf.LRE(662, reference));
    JSProf.LPD(665, this, 'benchmarks').benchmarks = JSProf.LRSP(665, JSProf.LRE(664, benchmarks));
    JSProf.LMC(666, BenchmarkSuite.suites, 'push').push(this);
}
// Keep track of all declared benchmark suites.
JSProf.LPD(668, BenchmarkSuite, 'suites').suites = JSProf.LRSP(668, JSProf.LNE(667, [], 10));
// Scores are not comparable across versions. Bump the version if
// you're making changes that will affect that scores, e.g. if you add
// a new benchmark or change an existing one.
JSProf.LPD(669, BenchmarkSuite, 'version').version = JSProf.LRSP(669, '9');
// Defines global benchsuite running mode that overrides benchmark suite 
// behavior. Intended to be set by the benchmark driver. Undefined 
// values here allow a benchmark to define behaviour itself.
JSProf.LPD(671, BenchmarkSuite, 'config').config = JSProf.LRSP(671, JSProf.LNE(670, {
    doWarmup: undefined,
    doDeterministic: undefined
}, 11));
// Override the alert function to throw an exception instead.
alert = JSProf.LWU(674, JSProf.I(typeof alert === 'undefined' ? undefined : alert), JSProf.LNF(673, function (s) {
    throw "Alert called with argument: " + JSProf.LRE(672, s);
}, 12));
// To make the benchmark results predictable, we replace Math.random
// with a 100% deterministic alternative.
JSProf.LPD(699, BenchmarkSuite, 'ResetRNG').ResetRNG = JSProf.LRSP(699, JSProf.LNF(698, function () {
    JSProf.LPD(697, Math, 'random').random = JSProf.LRSP(697, JSProf.LFC(696, JSProf.LNF(695, function () {
        var seed = 49734321;
        return JSProf.LNF(694, function () {
            // Robert Jenkins' 32 bit integer hash function.
            seed = JSProf.LWR(677, seed, JSProf.LRE(675, seed) + 0x7ed55d16 + (JSProf.LRE(676, seed) << 12) & 0xffffffff);
            seed = JSProf.LWR(680, seed, (JSProf.LRE(678, seed) ^ 0xc761c23c ^ JSProf.LRE(679, seed) >>> 19) & 0xffffffff);
            seed = JSProf.LWR(683, seed, JSProf.LRE(681, seed) + 0x165667b1 + (JSProf.LRE(682, seed) << 5) & 0xffffffff);
            seed = JSProf.LWR(686, seed, (JSProf.LRE(684, seed) + 0xd3a2646c ^ JSProf.LRE(685, seed) << 9) & 0xffffffff);
            seed = JSProf.LWR(689, seed, JSProf.LRE(687, seed) + 0xfd7046c5 + (JSProf.LRE(688, seed) << 3) & 0xffffffff);
            seed = JSProf.LWR(692, seed, (JSProf.LRE(690, seed) ^ 0xb55a4f09 ^ JSProf.LRE(691, seed) >>> 16) & 0xffffffff);
            return (JSProf.LRE(693, seed) & 0xfffffff) / 0x10000000;
        }, 12);
    }, 12), false)());
}, 12));
// Runs all registered benchmark suites and optionally yields between
// each individual benchmark to avoid running for too long in the
// context of browsers. Once done, the final score is reported to the
// runner.
JSProf.LPD(740, BenchmarkSuite, 'RunSuites').RunSuites = JSProf.LRSP(740, JSProf.LNF(739, function (runner, skipBenchmarks) {
    JSProf.LFD(738, RunStep);
    skipBenchmarks = JSProf.LWR(703, skipBenchmarks, typeof JSProf.LRE(700, skipBenchmarks) === 'undefined' ? JSProf.LNE(701, [], 10) : JSProf.LRE(702, skipBenchmarks));
    var continuation = null;
    var suites = JSProf.LGD(704, BenchmarkSuite, 'suites').suites;
    var length = JSProf.LGD(705, suites, 'length').length;
    JSProf.LPD(707, BenchmarkSuite, 'scores').scores = JSProf.LRSP(707, JSProf.LNE(706, [], 10));
    var index = 0;
    function RunStep() {
        while (JSProf.LRE(708, continuation) || JSProf.LRE(709, index) < JSProf.LRE(710, length)) {
            if (JSProf.LRE(711, continuation)) {
                continuation = JSProf.LWR(713, continuation, JSProf.LFC(712, continuation, false)());
            } else {
                var suite = JSProf.LGE(714, suites, JSProf.TMPS.tc6b873deb343b9701a103736048e58576f074585 = index++, suites[JSProf.TMPS.tc6b873deb343b9701a103736048e58576f074585])[JSProf.TMPS.tc6b873deb343b9701a103736048e58576f074585];
                if (JSProf.LGD(715, runner, 'NotifyStart').NotifyStart)
                    JSProf.LMC(717, runner, 'NotifyStart').NotifyStart(JSProf.LGD(716, suite, 'name').name);
                if (JSProf.LMC(719, skipBenchmarks, 'indexOf').indexOf(JSProf.LGD(718, suite, 'name').name) > -1) {
                    JSProf.LMC(721, suite, 'NotifySkipped').NotifySkipped(JSProf.LRE(720, runner));
                } else {
                    continuation = JSProf.LWR(724, continuation, JSProf.LMC(723, suite, 'RunStep').RunStep(JSProf.LRE(722, runner)));
                }
            }
            if (JSProf.LRE(725, continuation) && typeof JSProf.LRU(726, typeof window === 'undefined' ? undefined : window) != 'undefined' && JSProf.LGD(727, window, 'setTimeout').setTimeout) {
                JSProf.LMC(729, window, 'setTimeout').setTimeout(JSProf.LRE(728, RunStep), 25);
                return;
            }
        }
        // show final result
        if (JSProf.LGD(730, runner, 'NotifyScore').NotifyScore) {
            var score = JSProf.LMC(732, BenchmarkSuite, 'GeometricMean').GeometricMean(JSProf.LGD(731, BenchmarkSuite, 'scores').scores);
            var formatted = JSProf.LMC(734, BenchmarkSuite, 'FormatScore').FormatScore(100 * JSProf.LRE(733, score));
            JSProf.LMC(736, runner, 'NotifyScore').NotifyScore(JSProf.LRE(735, formatted));
        }
    }
    JSProf.LFC(737, RunStep, false)();
}, 12));
// Counts the total number of registered benchmarks. Useful for
// showing progress as a percentage.
JSProf.LPD(747, BenchmarkSuite, 'CountBenchmarks').CountBenchmarks = JSProf.LRSP(747, JSProf.LNF(746, function () {
    var result = 0;
    var suites = JSProf.LGD(741, BenchmarkSuite, 'suites').suites;
    for (var i = 0; JSProf.LRE(742, i) < JSProf.LGD(743, suites, 'length').length; i++) {
        result += JSProf.LGD(744, suites[i].benchmarks, 'length').length;
    }
    return JSProf.LRE(745, result);
}, 12));
// Computes the geometric mean of a set of numbers.
JSProf.LPD(756, BenchmarkSuite, 'GeometricMean').GeometricMean = JSProf.LRSP(756, JSProf.LNF(755, function (numbers) {
    var log = 0;
    for (var i = 0; JSProf.LRE(748, i) < JSProf.LGD(749, numbers, 'length').length; i++) {
        log += JSProf.LMC(751, Math, 'log').log(JSProf.LGE(750, numbers, 'i', numbers[i])[i]);
    }
    return Math.pow(JSProf.LGD(752, Math, 'E').E, JSProf.LRE(753, log) / JSProf.LGD(754, numbers, 'length').length);
}, 12));
// Computes the geometric mean of a set of throughput time measurements.
JSProf.LPD(765, BenchmarkSuite, 'GeometricMeanTime').GeometricMeanTime = JSProf.LRSP(765, JSProf.LNF(764, function (measurements) {
    var log = 0;
    for (var i = 0; JSProf.LRE(757, i) < JSProf.LGD(758, measurements, 'length').length; i++) {
        log += JSProf.LMC(760, Math, 'log').log(JSProf.LGD(759, measurements[i], 'time').time);
    }
    return Math.pow(JSProf.LGD(761, Math, 'E').E, JSProf.LRE(762, log) / JSProf.LGD(763, measurements, 'length').length);
}, 12));
// Computes the geometric mean of a set of rms measurements.
JSProf.LPD(777, BenchmarkSuite, 'GeometricMeanLatency').GeometricMeanLatency = JSProf.LRSP(777, JSProf.LNF(776, function (measurements) {
    var log = 0;
    var hasLatencyResult = false;
    for (var i = 0; JSProf.LRE(766, i) < JSProf.LGD(767, measurements, 'length').length; i++) {
        if (JSProf.LGD(768, measurements[i], 'latency').latency != 0) {
            log += JSProf.LMC(770, Math, 'log').log(JSProf.LGD(769, measurements[i], 'latency').latency);
            hasLatencyResult = JSProf.LWR(771, hasLatencyResult, true);
        }
    }
    if (JSProf.LRE(772, hasLatencyResult)) {
        return Math.pow(JSProf.LGD(773, Math, 'E').E, JSProf.LRE(774, log) / JSProf.LGD(775, measurements, 'length').length);
    } else {
        return 0;
    }
}, 12));
// Converts a score value to a string with at least three significant
// digits.
JSProf.LPD(782, BenchmarkSuite, 'FormatScore').FormatScore = JSProf.LRSP(782, JSProf.LNF(781, function (value) {
    if (JSProf.LRE(778, value) > 100) {
        return JSProf.LMC(779, value, 'toFixed').toFixed(0);
    } else {
        return JSProf.LMC(780, value, 'toPrecision').toPrecision(3);
    }
}, 12));
// Notifies the runner that we're done running a single benchmark in
// the benchmark suite. This can be useful to report progress.
JSProf.LPD(789, BenchmarkSuite.prototype, 'NotifyStep').NotifyStep = JSProf.LRSP(789, JSProf.LNF(788, function (result) {
    JSProf.LMC(784, this.results, 'push').push(JSProf.LRE(783, result));
    if (JSProf.LGD(785, this.runner, 'NotifyStep').NotifyStep)
        JSProf.LMC(787, this.runner, 'NotifyStep').NotifyStep(JSProf.LGD(786, result.benchmark, 'name').name);
}, 12));
// Notifies the runner that we're done with running a suite and that
// we have a result which can be reported to the user if needed.
JSProf.LPD(817, BenchmarkSuite.prototype, 'NotifyResult').NotifyResult = JSProf.LRSP(817, JSProf.LNF(816, function () {
    var mean = JSProf.LMC(791, BenchmarkSuite, 'GeometricMeanTime').GeometricMeanTime(JSProf.LGD(790, this, 'results').results);
    //console.log(this.results);
    var score = JSProf.LGE(792, this.reference, 0, this.reference[0])[0] / JSProf.LRE(793, mean);
    JSProf.LMC(795, BenchmarkSuite.scores, 'push').push(JSProf.LRE(794, score));
    if (JSProf.LGD(796, this.runner, 'NotifyResult').NotifyResult) {
        var formatted = JSProf.LMC(798, BenchmarkSuite, 'FormatScore').FormatScore(100 * JSProf.LRE(797, score));
        JSProf.LMC(801, this.runner, 'NotifyResult').NotifyResult(JSProf.LGD(799, this, 'name').name, JSProf.LRE(800, formatted));
    }
    if (JSProf.LGD(802, this.reference, 'length').length == 2) {
        var meanLatency = JSProf.LMC(804, BenchmarkSuite, 'GeometricMeanLatency').GeometricMeanLatency(JSProf.LGD(803, this, 'results').results);
        if (JSProf.LRE(805, meanLatency) != 0) {
            var scoreLatency = JSProf.LGE(806, this.reference, 1, this.reference[1])[1] / JSProf.LRE(807, meanLatency);
            JSProf.LMC(809, BenchmarkSuite.scores, 'push').push(JSProf.LRE(808, scoreLatency));
            if (JSProf.LGD(810, this.runner, 'NotifyResult').NotifyResult) {
                var formattedLatency = JSProf.LMC(812, BenchmarkSuite, 'FormatScore').FormatScore(100 * JSProf.LRE(811, scoreLatency));
                JSProf.LMC(815, this.runner, 'NotifyResult').NotifyResult(JSProf.LGD(813, this, 'name').name + "Latency", JSProf.LRE(814, formattedLatency));
            }
        }
    }
}, 12));
JSProf.LPD(823, BenchmarkSuite.prototype, 'NotifySkipped').NotifySkipped = JSProf.LRSP(823, JSProf.LNF(822, function (runner) {
    JSProf.LMC(818, BenchmarkSuite.scores, 'push').push(1);
    // push default reference score.
    if (JSProf.LGD(819, runner, 'NotifyResult').NotifyResult) {
        JSProf.LMC(821, runner, 'NotifyResult').NotifyResult(JSProf.LGD(820, this, 'name').name, "Skipped");
    }
}, 12));
// Notifies the runner that running a benchmark resulted in an error.
JSProf.LPD(832, BenchmarkSuite.prototype, 'NotifyError').NotifyError = JSProf.LRSP(832, JSProf.LNF(831, function (error) {
    if (JSProf.LGD(824, this.runner, 'NotifyError').NotifyError) {
        JSProf.LMC(827, this.runner, 'NotifyError').NotifyError(JSProf.LGD(825, this, 'name').name, JSProf.LRE(826, error));
    }
    if (JSProf.LGD(828, this.runner, 'NotifyStep').NotifyStep) {
        JSProf.LMC(830, this.runner, 'NotifyStep').NotifyStep(JSProf.LGD(829, this, 'name').name);
    }
}, 12));
// Runs a single benchmark for at least a second and computes the
// average time it takes to run a single iteration.
JSProf.LPD(883, BenchmarkSuite.prototype, 'RunSingleBenchmark').RunSingleBenchmark = JSProf.LRSP(883, JSProf.LNF(882, function (benchmark, data) {
    JSProf.LFD(881, Measure);
    var config = JSProf.LGD(833, BenchmarkSuite, 'config').config;
    var doWarmup = JSProf.LGD(834, config, 'doWarmup').doWarmup !== undefined ? JSProf.LGD(835, config, 'doWarmup').doWarmup : JSProf.LGD(836, benchmark, 'doWarmup').doWarmup;
    var doDeterministic = JSProf.LGD(837, config, 'doDeterministic').doDeterministic !== undefined ? JSProf.LGD(838, config, 'doDeterministic').doDeterministic : JSProf.LGD(839, benchmark, 'doDeterministic').doDeterministic;
    function Measure(data) {
        var elapsed = 0;
        var start = JSProf.LNE(841, new (JSProf.LFC(840, Date, true))(), 'Date');
        // Run either for 1 second or for the number of iterations specified
        // by minIterations, depending on the config flag doDeterministic.
        for (var i = 0; JSProf.LRE(842, doDeterministic) ? JSProf.LRE(843, i) < JSProf.LGD(844, benchmark, 'deterministicIterations').deterministicIterations : JSProf.LRE(845, elapsed) < 1000; i++) {
            JSProf.LMC(846, benchmark, 'run').run();
            //Masoomeh: run gc after every benchmark
            //console.log("running gc ");
            JSProf.LFC(847, gc, false)();
            JSProf.LFC(848, gc, false)();
            JSProf.LFC(849, gc, false)();
            elapsed = JSProf.LWR(853, elapsed, JSProf.LNE(851, new (JSProf.LFC(850, Date, true))(), 'Date') - JSProf.LRE(852, start));
        }
        if (JSProf.LRE(854, data) != null) {
            data.runs += JSProf.LRE(855, i);
            data.elapsed += JSProf.LRE(856, elapsed);
        }
    }
    // Sets up data in order to skip or not the warmup phase.
    if (!JSProf.LRE(857, doWarmup) && JSProf.LRE(858, data) == null) {
        data = JSProf.LWR(860, data, JSProf.LNE(859, {
            runs: 0,
            elapsed: 0
        }, 11));
    }
    if (JSProf.LRE(861, data) == null) {
        JSProf.LFC(862, Measure, false)(null);
        return JSProf.LNE(863, {
            runs: 0,
            elapsed: 0
        }, 11);
    } else {
        JSProf.LFC(865, Measure, false)(JSProf.LRE(864, data));
        // If we've run too few iterations, we continue for another second.
        //console.log("before deci "+ doDeterministic + "  "  + data.runs + " min " + benchmark.minIterations);
        if (JSProf.LGD(866, data, 'runs').runs < JSProf.LGD(867, benchmark, 'minIterations').minIterations)
            return JSProf.LRE(868, data);
        console.log("number of runs==" + JSProf.LGD(869, data, 'runs').runs);
        var usec = JSProf.LGD(870, data, 'elapsed').elapsed * 1000 / JSProf.LGD(871, data, 'runs').runs;
        console.log("micro seconds " + JSProf.LRE(872, usec));
        var rms = JSProf.LGD(873, benchmark, 'rmsResult').rmsResult != null ? JSProf.LMC(874, benchmark, 'rmsResult').rmsResult() : 0;
        JSProf.LMC(880, this, 'NotifyStep').NotifyStep(JSProf.LNE(879, new (JSProf.LFC(878, BenchmarkResult, true))(JSProf.LRE(875, benchmark), JSProf.LRE(876, usec), JSProf.LRE(877, rms)), 'BenchmarkResult'));
        return null;
    }
}, 12));
// This function starts running a suite, but stops between each
// individual benchmark in the suite and returns a continuation
// function which can be invoked to run the next benchmark. Once the
// last benchmark has been executed, null is returned.
JSProf.LPD(915, BenchmarkSuite.prototype, 'RunStep').RunStep = JSProf.LRSP(915, JSProf.LNF(914, function (runner) {
    JSProf.LFD(911, RunNextSetup);
    JSProf.LFD(912, RunNextBenchmark);
    JSProf.LFD(913, RunNextTearDown);
    JSProf.LMC(884, BenchmarkSuite, 'ResetRNG').ResetRNG();
    JSProf.LPD(886, this, 'results').results = JSProf.LRSP(886, JSProf.LNE(885, [], 10));
    JSProf.LPD(888, this, 'runner').runner = JSProf.LRSP(888, JSProf.LRE(887, runner));
    var length = JSProf.LGD(889, this.benchmarks, 'length').length;
    var index = 0;
    var suite = this;
    var data;
    // Run the setup, the actual benchmark, and the tear down in three
    // separate steps to allow the framework to yield between any of the
    // steps.
    function RunNextSetup() {
        if (JSProf.LRE(890, index) < JSProf.LRE(891, length)) {
            try {
                JSProf.LMC(892, suite.benchmarks[index], 'Setup').Setup();
            } catch (e) {
                JSProf.LMC(894, suite, 'NotifyError').NotifyError(JSProf.LRE(893, e));
                return null;
            }
            return JSProf.LRE(895, RunNextBenchmark);
        }
        JSProf.LMC(896, suite, 'NotifyResult').NotifyResult();
        return null;
    }
    function RunNextBenchmark() {
        try {
            data = JSProf.LWR(900, data, JSProf.LMC(899, suite, 'RunSingleBenchmark').RunSingleBenchmark(JSProf.LGE(897, suite.benchmarks, 'index', suite.benchmarks[index])[index], JSProf.LRE(898, data)));
        } catch (e) {
            JSProf.LMC(902, suite, 'NotifyError').NotifyError(JSProf.LRE(901, e));
            return null;
        }
        // If data is null, we're done with this benchmark.
        return JSProf.LRE(903, data) == null ? JSProf.LRE(904, RunNextTearDown) : JSProf.LFC(905, RunNextBenchmark, false)();
    }
    function RunNextTearDown() {
        try {
            JSProf.LMC(906, suite.benchmarks[index++], 'TearDown').TearDown();
        } catch (e) {
            JSProf.LMC(908, suite, 'NotifyError').NotifyError(JSProf.LRE(907, e));
            return null;
        }
        return JSProf.LRE(909, RunNextSetup);
    }
    // Start out running the setup.
    return JSProf.LFC(910, RunNextSetup, false)();
}, 12));