var year=2000;
var month=02;
var day=29;
var hour=12;
var minute=30;
var second=15;
var millisecond=93;
var milliseconds_since_jan_1_1970=86400*10*1000;
var iso_timestamp='2003-05-23T17:00:00Z';

var log = console.log;

var dt0=Date();
var dt1=new Date();
var dt2=new Date(milliseconds_since_jan_1_1970);
var dt3=new Date(iso_timestamp);
var dt4=new Date(year,month,day);
var dt5=new Date(year,month,day,hour,minute,second,millisecond);

var milliseconds_per_year=86400*1000*365;
var years_from_epoch = function(ms) {
    log(Math.floor(ms/milliseconds_per_year));
};
//ms since epoch
years_from_epoch(Date.now());
//ms since iso timestamp
years_from_epoch(Date.parse('2003-05-23T17:00:00Z'));
//ms since constructor time (year 2000)
years_from_epoch(Date.UTC(year,month,day,hour,minute,second,millisecond));

log(dt3);
log(dt4);
var ddt = dt3 - dt4;
var ddt2 = dt3.getTime() - dt4.getTime();

//Get JSON data, parsing strings into Date instances, and then return docs structure
var data2docs = function(data) {
    var docs = [];
    var offset = 'T12:00:00-05:00'; //specifies time and timezone
    var dt, ii, dtnew;
    for (ii=0;ii<data.results.length;ii+=1){
	dt = data.results[ii].publication_date; //looks like: '2012-12-14'
	dtnew = new Date(dt+offset);
	docs.push({'title':data.results[ii].title, 'publication_date': dtnew});
    }
    return docs;
};
var docs2console = function(docs){
    for (var ii=0; ii<docs.length; ii+=1){
	doc = docs[ii];
	log('Date: %s\nTitle: %s\n',doc.publication_date,doc.title);
    }
};
var apiurl="https://www.federalregister.gov/api/v1/articles/" +
"03-12969,2012-30312,E8-24781.json?fields%5B%5D=title" +
"&fields%5B%5D=publication_date";
var request = require('request');
var printdata = function (apiurl){
    request(apiurl, function(error, response, body){
	if (!error && response.statusCode==200){
	    data = JSON.parse(body);
	    docs2console(data2docs(data));
	}
    });
};
log(apiurl);
printdata(apiurl);
