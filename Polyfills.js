const arr =[1,2,3,4,5];

Array.prototype.forEach = null;
if(!Array.prototype.forEach)    // if in  Internet explorer forEach is not available then this piece of code is filled in that browser.
{
    Array.prototype.forEach = function(callbackfunction)
    {
        for(let val of this)
        {
            callbackfunction(val);
        }
    }
}




arr.forEach((val)=>{
    console.log(val*5);
});