//the fuck is currying?

var sq = function(x) { return x*x };
var cu = function(x) { return x*x*x };
//write general loop eqn first
var loop = function (n, fn){
    var out = [];
    for (var i = 0; i < n; i++){
	out.push(fn(i));
    }
    return out;
}; 

//Now use .bind method on functions to do partial eval of function

loop(10,sq);
var loopN = loop.bind(null, 10); //n=10; loopN only takes in the latter arg now (anon func)
loopN(sq);

var uu = require('underscore');
loop6 = uu.partial(loop, 6);
loop6(cu);
