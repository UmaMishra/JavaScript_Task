function sumMissingNumbers(arr){
    let res = 0
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      if(!arr.includes(i))res+=i   
    } 
    return res
   }