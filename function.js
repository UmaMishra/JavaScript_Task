// Function declaration
//We can call print function before and after the definition of the function.
print(10,20);
function print(a,b){
    console.log(a+b);
}
//print(10,20);

  

//Function Expression
var num = function print(a,b)
{
    console.log(a+b);    
};
//print(10,20); //error
num(10,20);  //30

//arrow function 

var short = (a)=>{
    console.log(a);
}
short("Uma Mishra");
