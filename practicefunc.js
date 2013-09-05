//Scopes in JS

//Woops
var cc = 99; //by default shall be global
var foo = function(aa) {
    var bb = 7;
    console.log("aa = " + aa);
    console.log("bb = " + bb);
    console.log("cc = " + cc);
};
foo(22);
/*
aa = 22
bb = 7
cc = 99
*/

//Actual global intention
var dd = 33;
var bar = function(aa) {
    var bb = 7;
    console.log("aa = " + aa);
    console.log("bb = " + bb);
    console.log("dd = " + global.dd);
};
bar(22);
/*
aa = 22
bb = 7
cc = 33
*/

//Static declarations ovewrride global ones
var aa = 7;
var bb = 8;
var baz = function(aa) {
    var bb = 9;
    console.log("aa = " + aa);
    console.log("bb = " + bb);
};
baz(16);
/*
aa = 16
bb = 9
*/

//closure (dynamically defined function)

var buildfn= function(increment) {
    //newfn created on the fly
    var newfn = function adder(xx) { return xx + increment; };
    return newfn;
};
buildfn(10); //[Function: adder]
buildfn(10)(17); //10 + 17 = 27
var add3 = buildfn(3);
var add5 = buildfn(5);
add3(add5(17)); //5 + 17 = 22; 22 + 3 = 25

//another example: pass in function instead so fn may not only do addition

var buildfn2 = function(yy,binaryoperator) {
    var cc = 10;
    var newfn = function binop(xx) { return cc*binaryoperator(xx,yy) };
    return newfn;
};
var pow = function(aa,bb) { return Math.pow(aa,bb); };
var fn = buildfn2(3,pow);
fn(5); //= 10*3^5

//now pass in 2 functions
var compose = function(f, g) {
    var h = function(x) {
 	return f(g(x));
    };
    return h;
};

var jsdata = '[ {"asdf":9, "bar":10}, 18, "baz" ]';
var f1 = function(data) { return data[0].bar + 11;};
var f2 = JSON.parse;
f1(f2(jsdata)); //f1(json data) ==== 10 + 11;
var f1f2 = compose(f1,f2);
f1f2(jsdata); //same thing.

//Dynamically defined scope (this)

//Use a closure that doesn't take value from current context, but from some future context that is dynamically specified
var bb = 10;
var static_closure = function(aa) {
    return aa + bb;
};
static_closure(3); //10+3 = 13

var dynamic_closure = function(aa) {
    return aa + this.bb;
};

var context1 = {
    'fn': dynamic_closure,
    'bb': 10
};

context1.fn(3); //10 under context1 + 3 = 13

var context2 = {
    'fn': dynamic_closure,
    'bb': Math.random()
};
//this is pointing to the object context2 so this.bb is Math.random()
context2.fn(3); //=3 + random number < 1

//easier than using the "this" keyword is to pass in the object itself
var simpler_than_dynamic_closure = function(aa, obj) {
    return aa + obj.bb;
};
simpler_than_dynamic_closure(3, context2);
