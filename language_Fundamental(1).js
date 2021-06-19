// How Many Days Between Two Dates

function getDays(date1, date2) {
	var Difference = date2.getTime() - date1.getTime();
 

var Difference_In_Days = Difference / (1000 * 3600 * 24);
	return  Difference_In_Days;
 
}
