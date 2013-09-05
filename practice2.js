var ex2 = "Alpha Beta Gamma Epsilon Omicron Theta Pi";
var re2g = /(\w+a )/g;

var allmatches = function(rex,str) {
    var matches = [];
    var match;
    while(true){
	match = rex.exec(str);
	if (match!==null) matches.push(match);
	else break;
    }
    return matches;
}
allmatches(re2g,ex2);

var pgurl = "postgres://myuser:mypass@example.com:5432/mydbpass";
var pgregex = /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
var flag = pgregex.test(pgurl);
var out = pgregex.exec(pgurl);

var uu = require('underscore');
var parsedburl = function(dburl) {
    var dbregex = /([^:]+):\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
    var out = dbregex.exec(dburl);
    var fields = ['protocol','user','pass','host','port','dbpass'];
    return uu.object(uu.zip(fields, out.slice(1,out.length)));
}
console.log(parsedburl(pgurl));


