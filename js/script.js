
var whatIsMyName = function(name){
	alert(name);
}



var car = { /** curly brackets signify an object */
	make: 'VW',
	type: 'UP',
	colour: 'Red',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
	turnOn: function (){
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar:function (isOn) {
		console.log('turn car'+isOn);
		if (isOn == true) {
			this.isTurnedOn=true;
		}else{
			this.isTurnedOn=false;
		}
	}

};	
console.log('hello there');