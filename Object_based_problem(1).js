// Being a very frugal gentleman (yet disliking looking like a cheapskate), 
// he decides to use a very simple rule. In any selection of two or more wines, he
// will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the 
// wine he will buy for the party. If given an empty array, return null. If given an
// array of only one, Atticus will buy that wine.

function chosenWine(wines)
{
  wines = wines.sort(function(a,b){
    return a.price - b.price;
  });
  if (wines.length == 0) return null;
  if (wines.length == 1) return wines[0].name;
  return wines[1].name;
}
