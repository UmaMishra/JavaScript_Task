//find common element in the array in o(n+m) time complexity
function commonElements(arr1, arr2) {
  let i=0;
  let j=0;
  let commonElements = [];
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] == arr2[j]) {
          commonElements.push(arr1[i]);
          i++;
          j++;
      } 
      else if (arr1[i] > arr2[j]) j++;
      else i++;
  }
  return commonElements;
}