// Create a function which returns how many Friday 13ths there are in a given year. in javaacsrip
function howUnlucky(y) {
	var d = new Date();
    var counter = 0;
    var month;

    for(month=0;month<12;month++)
    {
     d.setFullYear(y, month,13);
        if (d.getDay() == 5)
        {
          counter++;
        }
    }

    return counter;   
}