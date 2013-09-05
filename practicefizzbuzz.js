#!/usr/bin/env node

var uu = require('underscore');
//Any returns true if any one is true
var anydivide = function(as,b) {
    var divfn = function(a) { return b % a === 0; };
    console.log('as: ' + as + ' b: ' + b);
    var b = uu.any(uu.map(as,divfn));
    console.log(b);
    return b;
};

var sum = function(arr){
    //reduce iterates over whatever is in the array with the function. function will sum adjacent idx
    return uu.reduce(arr, function(a,b) { return a + b; });
};

var fizzbuzz = function(factors,max) {
    var divfn = function(nn) { return anydivide(factors,nn); };
    var divisible = uu.filter(uu.range(1,max),divfn);
    console.log('divisible: ' + divisible);
    return sum(divisible);
};

console.log(fizzbuzz([3, 5], 10));
