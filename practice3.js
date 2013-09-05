//Math and string examples

//Math examples
var log = console.log;
log(Object.getOwnPropertyNames(Math));

var randint = function(a,b) {
    var frac = Math.random();
    return Math.floor((b-a)*frac + a);
}

log(Math.pow(Math.E, Math.LN2));
log(Math.pow(Math.E, Math.LN10));
log(Math.pow(10,Math.LOG10E) - Math.E);
log(Math.pow(2,Math.LOG2E) - Math.E);

var log2 = function(xx) {
    return Math.log(xx)/Math.LN2;
}

var doublingtime = function(start,stop,init,fin){
    var dt = stop - start;
    var fold = fin/init;
    return dt/log2(fold);
}

log(doublingtime(0,10,1,16));
var tau = doublingtime(0,24,1,9);
log(tau);
Math.pow(2,24/tau);


//String examples

//String as an array of characters
var log = console.log;
var sx1 = "The quick brown fox jumped over the lazy dogs.";
sx1.charAt(10);
sx1.slice(10,13);
sx1.substring(10,13);
sx1.substr(10,13); //Starts at 10, goes 13 after 10 (same as substring(10,23))
sx1.length;

//String compare
var sx2 = "alpha";
var sx3 = "beta";
log(sx2 < sx3);

//Replace substrings
var sx4= sx2.replace('ph','foo');
log(sx2);
log(sx4);

var sx5 = sx2.replace(/a$/,'bar'); //Regex replacement
log(sx2);
log(sx5);

//Case change
log(sx2.toUpperCase());

//Trim strings
var sx6 = " " + ['Field1','Field2','Field3'].join("\t") + "\n";
var sx7 = sx6.trimRight();
var sx8 = sx6.trimLeft();
var sx9 = sx6.trim();
log(sx6);
log(sx7);
log(sx8);
log(sx9);

//Split strings
var fields = sx9.split("\t");
log(fields);
