// The insurance guy laughs, he's just kidding. He just needs an updated list. 
// You just need one of those Rammstein Vodka bottles.

// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle 
// that matches the given number.
function getVodkaBottle(obj, num) {
	for(let drink in obj) {
		if(obj[drink] == num && drink.includes("Rammstein")) {return drink}
	}
}