function array(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    if(arr.has(7))
    {
      return true;
    }
  }
  return false;
}
// let arr = [];
// let x=prompt("Enter the size :");
// for(let i=0;i<x;i++)
// {
//   let value=prompt("enter value V:");
//   arr.push(value);
// }
// if(array(arr)==true)
// {
//   alert("Yes,7 is present.");
// }
// else
// {
//   alert("Not present.");
// }
