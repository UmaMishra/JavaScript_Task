let p1 = Promise.resolve(10);
let p2 = Promise.reject(20);
let p3 = new Promise((resolve,reject)=>{
  setTimeout(resolve,1000,3);
});

let p = [p1,p2,p3];
Promise.allSettled(p).then((res)=>{
  console.log(res);
}).catch((error)=>{
  console.log("failed");
})