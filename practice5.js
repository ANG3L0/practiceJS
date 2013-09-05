#!/usr/bin/env node

// Implementation 1: procedural
var log = console.log;
var n = 5;
var out = [];
for (var i = 0; i < n; i++){
    out.push(i*i);
}
log(out);


//Implementation 2: functional programming
var sq = function(x) { return x*x };
var cub = function(x) { return x*x*x };
var loop = function(n, fn){
    var out = [];
    for (var i = 0; i < n; i++){
	out.push(fn(i));
    }
    return out;
};

var loopeven = function(n,fn){
    var out = [];
    for (var i = 0; i < n; i++){
	if (i%2 === 0){
	    out.push(fn(i));
	} else {
	    out.push(i);
	}
    }
    return out;
};

log(loop(n,sq)); //square fn
log(loop(n,cub)); //cubic fn
log(loopeven(n,sq)); //square on even indices and return idx otherwise
log(loopeven(n,cub)); //Same as above for cubed

//Implementation 3: using underscorejs.org

var uu = require('underscore');
//range: generate an array of numbers from 0 to n
//map: apply a function to the specified array range(incl 0 ,excl n)
log( uu.map(uu.range(0,n),sq) );
log( uu.map(uu.range(0,n),cub) );

