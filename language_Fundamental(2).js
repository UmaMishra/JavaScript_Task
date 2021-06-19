// Frequency Distribution
function getFrequencies(arr) {

    let obj = {}; 
  
    for (let i=0; i<arr.length; i++){
      let element = arr[i]; 
  
      if (obj[element] !== undefined){
        obj[element] += 1;
      }
  
      else {
        obj[element] === 1; 
      }
    }
    return obj
  }
