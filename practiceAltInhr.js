
//Can use switch statements for stuff that do not different horribly much instead of explicit inheritence, which is a huge pain to look at.
function Car(make, model){
    this.make = make;
    this.model = model;
};
Car.prototype.toString = function(){
    return "Make: " + this.make + " | Model: " + this.model;
};
Car.prototype.serviceIntervals = function(){
    switch(this.make) {
	case 'Honda':
	    out = [10000, 20000, 30000];
	    break;
	case 'Mercedes':
	    out = [20000, 40000, 60000];
	    break;
	default:
	    out = [5000, 10000, 15000];
	    break;
    }
    return out;
};

var accord = new Car('Honda', 'Accord');
var merc = new Car('Mercedes', 'S-Class');
var misc = new Car('Chrysler', 'Eminem Ride');

accord.toString();
merc.toString();
misc.toString();
accord.serviceIntervals();
merc.serviceIntervals();
misc.serviceIntervals();

//Another alternative is to use variables to keep track of simple relationships instead of making a new class for every little thing.
function Wheel(isfront, isright){
    this.isfront = isfront;
    this.isright = isright;
};
Wheel.prototype.toString = function() {
    var pos1 = this.isfront ? 'f' : 'b'; //front/back
    var pos2 = this.isright ? 'r' : 'l'; //right/left
    return pos1 + pos2;
};

var wheel1 = new Wheel(true, true);
var wheel2 = new Wheel(true, false);
var wheel3 = new Wheel(false, true);
var wheel4 = new Wheel(false, false);

wheel1.toString();
wheel2.toString();
wheel3.toString();
wheel4.toString();

//underscore invoke: apply function to a list of inputs
var uu = require('underscore');
function Car(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
};
Car.prototype.toString = function() {
    var jsdata = {'make': this.make,
		  'model': this.model,
		  'wheels': uu.invoke(this.wheels, 'toString')}; //Looking at wheel's toString()
    var spacing = 2;
    return JSON.stringify(jsdata, null, spacing);
};

var civic = new Car('Honda', 'Civic', [wheel1, wheel2, wheel3, wheel4]);
console.log(civic.toString());
