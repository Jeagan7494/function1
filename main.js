var tripleFive = function() {
	for(var i = 0; i < 3; i++) {
		console.log("Five!")
	}
	};
tripleFive();

var lastLetter = function(str) {
	return str[str.length-1];
};
	console.log(lastLetter('hello'))
	console.log(lastLetter('island'));

var square = function(number) {
	return (number*number);
};
console.log(square(3))
console.log(square(5));

var negate = function(number) {
	return (number*(-1))

};
	console.log(negate(5))
	console.log(negate(-8));

var toArray = function(a, b, c) {
	return [a, b, c]
};
console.log(toArray(1, 4, 5))
console.log(toArray(8, 9, 10));

var startsWithA = function(str) {
	if (str[0] === 'a') {
		return true
	} else {
		return false
	}
};
console.log(startsWithA('aardvark'))
console.log(startsWithA('bear'));

var excite = function(str) {
	return str + '!!!'
};
console.log(excite('yes'))
console.log(excite('no'));

var sun = function(str) {
	if (str.indexOf('sun') >= 0) {
		return true
	} else {
		return false
	}
};
console.log(sun('sundries'))
console.log(sun('assunder'))
console.log(sun('catapult'));

var tiny = function(number) {
	return (number > 0 && number < 1)
}
console.log(tiny(0.3))
console.log(tiny(14))
console.log(tiny(-5));

var getSeconds = function(timespan) {
	 
}
	console.log(getSeconds('01:30'))



















