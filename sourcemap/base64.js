var _ = require("underscore");

var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var input = process.argv[2];

var numbers = [];
for (var i = 0; i < input.length; i++) {
    var c = input[i];
    numbers.push(map.indexOf(c));
}

console.log(numbers);
