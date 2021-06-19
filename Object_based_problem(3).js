// Sort Authors Last Names Alphabetically
/*sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]) ➞ [
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
] */
function sortByLastName(books) {
	
	function compare( a, b ) {
		if ( a.author.split(" ")[1] > b.author.split(" ")[1] ){
    	return 1;
 	 	}
  	if ( a.author.split(" ")[1] < b.author.split(" ")[1] ){
   		return -1;
  	}
  	return 0;
	}

	return books.sort(compare);
}