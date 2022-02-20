function getCommits(repo) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("Calling GitHub API....");
            resolve(["commit",repo])    
        }, 2000);

    }).then((res)=>{
        res
    })
}
getCommits('chidera')

function myDisplay(color, size, isBright){
    let myPromise = new Promise((resolve, reject) => {
      if(color.split("").includes("b")){
        resolve("Acceptable");
      } else {
        reject("Unacceptable");
      }
    });
    let yourPromise = new Promise((resolve, reject) =>{
      if(size > 1000){
        resolve("Large");
      } else if (size >=500 && size < 1000){
        resolve("Medium");
      }else{
        reject("Too small");
      }
    });
    let ourPromise = new Promise((resolve, reject) =>{
      if(isBright){
        resolve("Bright");
      } else {
        reject("Dark");
      }
    });
    return [myPromise, yourPromise, ourPromise];
  }
  myDisplay("brown", 999, false)