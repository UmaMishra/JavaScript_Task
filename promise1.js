const p1 = new Promise((resolve,reject)=>{
    let email_id1 = "abcdef";
    let email_id2 = "jdgskfk";
    if(email_id1 ==email_id2)
    {
      resolve("Coorect");
    }
    else
    {
      reject("Not match");
    }
  })
  p1.then((ans)=>{
    console.log(ans);
  }).catch((error)=>{
    console.log(error);
  })