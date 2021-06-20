let name1 = {firstname : "uma", lastname : "mishra"};
let name2 = {firstname : "shivani",lastname : "sharma"};

let printName = function(a,b)
{
  console.log(this.firstname + " " + this.lastname + " " + a +" " + b);
}

//function borrowing
printName.call(name1,"Chandigarh", "Delhi"); //function call
printName.apply(name1,["Pune", "delhi"]);    // function apply

let z = printName.bind(name2,"Banglore", "Rajasthan"); //function binding

z();