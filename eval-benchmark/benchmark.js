var nativeRandomLCG = function (seed) {
    return function () {
        seed = (214013 * seed + 2531011) % 0x100000000;
        return seed * (1.0 / 4294967296.0);
    };
};

var evalRandomLCG = function (seed) {
    var randomLCG = eval("(" + nativeRandomLCG.toString() + ")");
    return randomLCG(seed);
};

var test = function (cycle) {
    for (var i = 1; i < arguments.length; i++) {
        var suite = arguments[i];
        
        var start = new Date();
        
        var target = suite.target;
        for (var j = 0; j < cycle; j++) {
            target();
        }
        
        var timePassed = new Date() - start;
        console.log(suite.name + ": " + timePassed + "ms")
    }
}

var nativeSuite = {
    name: "native",
    target: nativeRandomLCG(100)
};

var evalSuite = {
    name: "eval",
    target: evalRandomLCG(100)
};

var iterations = [100, 200, 300];

for (var round = 0; round < iterations.length; round++) {
    console.log("Round " + round);
    test(iterations[round] * 1000 * 1000, nativeSuite, evalSuite);
    console.log("");
}