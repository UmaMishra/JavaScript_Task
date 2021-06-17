const food = {name:"Uma",
            age : 21};

const clone = { ...food }; //deep copy (using spread operator)

const val = JSON.parse(JSON.stringify(food));   //deep copy(JSON.stringify)

clone.name="Mishra";
val.name="Harry";
console.log(clone.name); //Mishra
console.log(food.name); //Uma
console.log(val.name); //Harry