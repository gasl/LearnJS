/**
 * romanMapper contains the mapping of roman numbers and arabic equivalents.
 */
var romanMapper = {
	"1000" : "M",
	"900" : "CM",
	"500" : "D",
	"400" : "CD",
	"100" : "C",
	"90" : "XC",
	"50" : "L",
	"40" : "XL",
	"10" : "X",
	"9" : "IX",
	"5" : "V",
	"4" : "IV",
	"1" : "I"
};

/**
 * Keeps the arabic significant numbers sorted in descending order.
 */
var arabicKeys = Object.keys(romanMapper)
	.sort(function sortNumber(a, b) {
		return b - a;
	});

/**
 * This string function repeats a character x number of times
 * @param {Number} times Repeat x times
 * @param {String} character The character to repeat
 */
function repeatChar(times, character) {
	return new Array(times + 1).join(character);
}

/**
 * Calculate the roman equivalent to the given arabic number.
 * @param {Number} number the arabic number to be calculated into a roman one
 */
function calculateRoman(number) {

	if (number < 1) {
		throw new Error("Invalid roman number! It should be positive!");
	}

	var result = "";

	arabicKeys.forEach(function(value) {
		
		var divider = Math.floor(number / value);
		number = number % value;

		if (divider) {
			result += repeatChar(divider, romanMapper[value]);
		}
	});

	return result;
}

console.log(3, calculateRoman(2011));

//====================================================================================================================================================================================
// I  	The easiest way to note down a number is to make that many marks - little I's.
// Thus I means 1, II means 2, III means 3. However, four strokes seemed like too many....
// V
// So the Romans moved on to the symbol for
// 5 - V. Placing I in front of the V —
// or placing any smaller number in front of any larger number — indicates subtraction.
// So IV means 4. After V comes a series of additions - VI means 6, VII means 7, VIII means 8.
//
// X 	X means 10. But wait — what about 9? Same deal. IX means to subtract I from X, leaving 9.
// Numbers in the teens, twenties and thirties follow the same form as the first
// set, only with X's indicating the number of tens. So XXXI is 31, and XXIV is 24.
//
// L 	L means 50.
// Based on what you've learned, I bet you can figure out what 40
// is. If you guessed XL, you're right = 10 subtracted from 50. And thus 60, 70,
// and 80 are LX, LXX and LXXX.
//
// C stands for centum, the Latin word for 100.
//
// A centurion led 100 men.
// We still use this in words like "century" and "cent." The subtraction rule
// means 90 is written as XC. Like the X's and L's, the C's are tacked on to
// the beginning of numbers to indicate how many hundreds there are: CCCLXIX is 369.
//
// D 	D stands for 500. As you can probably guess by this time, CD means 400.
// So CDXLVIII is 448. (See why we switched systems?)
// M 	M is 1,000. You see a lot of Ms because Roman numerals are used a lot to
// indicate dates. For instance, this page was written in the year of Nova Roma's
// founding, 1998 CE (Common Era; Christians use AD for Anno Domini, "year of our Lord").
// That year is written as MCMXCVIII. But wait! Nova Roma counts years from the
// founding of Rome, ab urbe condita. By that reckoning Nova Roma was founded in 2751 a.u.c. or MMDCCLI.
//====================================================================================================================================================================================
