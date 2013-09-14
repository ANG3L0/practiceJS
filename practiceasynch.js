#!/usr/bin/env node

var request = require('request');
var apiurl = 'http://nodejs.org/api/index.json';
var fs = require('fs');
var outfile = 'index3.json';

setTimeout(function(){
    request(apiurl, function(error, response, body){
	if (!error && response.statusCode == 200){
	    fs.writeFile(outfile, body, function (err) {
		if (err) throw err;
		var timestamp = new Date();
		console.log("Invoked first1, happens second at %s", new Date());
		console.log("Write %s %s", outfile, timestamp);
	    });
	}
    });

}, 3000);

console.log("Invoked second, happens first at %s", new Date());

//Less messy way: modularization
var outfile = 'index4.json';

var cb_writefile = function (err) {
    if (err) throw err;
    var timestamp = new Date();
    console.log("Invoked first2, happens second at %s", new Date());
    console.log("Wrote %s %s", outfile, timestamp);
};

var cb_parsebody = function(error, response, body) {
    if (!error && response.statusCode == 200){
	fs.writeFile(outfile, body, cb_writefile);
    }
};

request(apiurl, cb_parsebody);
console.log("Invoked second, happens first at %s", new Date());

//Least messy way: do not have outfile be imported in enclosing scope to local scopes
//Allows for referential transparency when viewing this make_request tidbit from the outside
//referential transparency: func(x) === func(x) which is not true for cb_writefile since outfile/OUTFILE can change

var make_request = function(apiurl, OUTFILE){
    var cb_writefile = function (err) {
	if (err) throw err;
	var timestamp = new Date();
	console.log("Wrote %s %s", OUTFILE, timestamp);
    };
    var cb_parsebody = function(error, response, body){
	if (!error && response.statusCode == 200){
	    fs.writeFile(OUTFILE, body, cb_writefile);
	}
    };
    
    request(apiurl, cb_parsebody);
};
var outfile = 'index-scoped.json';
make_request(apiurl, outfile);
//Now can optionally pass in another file since we scoped OUTFILE well w.r.t. outside world
var another_outfile = 'index-another.json';
make_request(apiurl, another_outfile);
