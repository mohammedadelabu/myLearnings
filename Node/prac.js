// const shiftedDiff = (first, second) => {
//     let answer = "";
//     let firstSplit = first.split("");
//     firstSplit
//     let secondSplit = second.split("");
//     for(let i = 0; i < firstSplit.length; i++){
//       let firstAns = firstSplit[i];
//         console.log(firstAns);
  
//     }
  
//     //return 0;
//   };
//   console.log(shiftedDiff("fatigue", "efatigu"));


  const shiftedDiff = (first, second) => {
    let answer = "";
    let firstSplit = first.split("");
    let secondSplit = second.split("");
    for(let i = 0; i < firstSplit.length; i++){
      let firstAns = firstSplit[i];
        console.log(firstAns);
    }
    let copy = [...second];
    for (let i = 0; i < copy.length; i++) {
      if (first === copy.join('')){
        return i;
      } 
      copy.push(copy.shift());
    }
  
    return -1;
  }
  console.log(shiftedDiff("fatigue", "uefatig"));
