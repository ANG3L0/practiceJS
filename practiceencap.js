//self-executing function examples

var foo = "outer"; //global
//this fucking thing just executes by itself in its own namespace WHAT THE FUCK
(function() {
    var foo = "inner";
    console.log(foo);
})();
console.log(foo);
/*
inner (from inside self-executing function)
outer (from global var)
*/

//just an anonymous function here
var anon = function(){
    var foo = "inner";
    console.log(foo);
};

//self-executing function again:
//The outer ( and ) encloses the function, and then the () at the end before ; executes it.
(function(){
    var foo = "inner";
    console.log(foo);
})();

//Can also pass in variables into self-executing functions by giving inputs to it:
var bar = "allowed";
(function(aa){
    var foo = "inner";
    console.log(foo + " " + aa);
})(bar);
// inner allowed

//Passing stuff into and out of self-executing function
var bar = "allowed";
//result is the RESULT of a function who has gotten enclosed and cannot read stuff from outside except explicitly from inputs and it self-executes
var result = (function(aa) {
    var foo = "inner";
    var out = foo + " " + aa;
    console.log(out);
    return {"val": out};
})(bar);
console.log(result); //Key value pair val -> "inner allowed"
