//chaining

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let num=10;
      resolve(num);
    },3000);
  }).then((ans)=>{
    console.log(ans);
    return "Uma Mishra"
  }).then((ans)=>{
    console.log(ans);
    return 21;
  }).then((ans)=>{
    console.log(ans);
  }).catch((error)=>{
    console.log(error);
  }).finally(()=>{
    console.log("Finished");
  })
  