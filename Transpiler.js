function trans(name = "Uma Mishra")
{
    console.log(name);
}
  
trans("Shivani"); //Shivani
trans();          //Uma Mishra




// Transpiler :
function trans()
{
   
    var a = (arguments[0] !== undefined) ? arguments[0] : "Uma Mishra";
    console.log(a);
}
  
trans("Shivani"); 
trans(); 