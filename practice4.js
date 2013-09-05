//JSON!
var log = console.log;
Object.getOwnPropertyNames(JSON);

var jsdata = '[{"asdf":9, "bar":10}, 18, "baz"]';
var data = JSON.parse(jsdata);
log(data[0].asdf);

//Using stringify

var dt = new Date('2003-05-23T17:00:00Z');
var rex = /(cr|l)/;
var data3 = [9, {"foo": dt, "bar": rex, "baz": {"quux": "a", "alpha": [77,3]}},11];
log(data3); //string

var data3str = JSON.stringify(data3);
var data4 = JSON.parse(data3str);
log(data4);

//Error handlings
Object.getOwnPropertyNames(Error);

//try/catch
var div = function(a,b){
    try{
	if (b===0) {
	    throw new Error("Divided by zero");
	} else {
	    return a/b;
	} catch(e) {
	    log('name\n%s\n\nmessage\n%s\n\nstack\ns%s', e.name, e.message, e.stack);
	}
    }
};

var div2 = function(a, b) {
    if (b === 0){
	return new Error("Divided by Zero");
    } else {
	return a/b;
    }
};

//Email error example
var Email = function(emstr) {
    var regex = /([^@]+)@([^\.]+)\.([^\.]+)/;
    if (regex.test(emstr)){
	var match = regex.exec(emstr);
	this.user = match[1];
	this.domain = match[2];
	this.tld = match[3];
	console.log(match);
	this.valueOf = function(){
	    return this.value;
	};
	this.toString = function(){
	    return this.user + '@' + this.domain + '.' + this.tld;
	};
    } else {
	throw new EmailFormatException(emstr);
    }
};

var EmailFormatException = function(value){
    this.value = value;
    this.message = "not in a@b.c form";
    this.toString = function() {
	return this.value + this.message;
    };
};

var EMAIL_INVALID = -1;
var EMAIL_UNKNOWN = -1;

var parseEmail = function(instr){
    try {
	em = new Email(instr);
    } catch (e) {
	if (e instanceof EmailFormatException) {
	    return EMAIL_INVALID;
	} else {
	    return EMAIL_UNKNOWN;
	}
    }
    return em;
};

//Have to include "new" otherwise just has var as returned val rather than the object itself
var foo = Email('john@gmail.com');
var bar = new Email('joe@gmail.com');

parseEmail('john@gmailcom');
parseEmail('johngmail.com');
parseEmail('john@gmail.com');

