// // let database = [
// //     {name: "Hassan", stack: "node", id:1},
// //     {name: "Bond", stack: "allStacks", id:2}
// // ]

// // let body = {
// //     name: "Hassan Millions"
// // }

// // let hassanId = 1;

// // let user = database.find(user => user.id === hassanId)

// // // user.name = body.name || user.name;
// // // user.stack = body.stack || user.stack;

// // if(body.name) {user.name = body.name}
// // if(body.stack) {user.stack = body.stack}

// // user

// // // if(body.fullname) customerMatch.fullname = body.fullname;
// //   // if(body.email) customerMatch.email = body.email;
// //   // if(body.gender) customerMatch.gender = body.gender;
// //   // if(body.phone) customerMatch.phone = body.phone;
// //   // if(body.address) customerMatch.address = body.address;
// //   // if(body.notes) customerMatch.notes = body.notes;

const pali = (s) => {
  let max = [0, 1];
  for(let i = 0; i < s.length; i++){
      let even = getPali(i-1, i, s);
      let odd = getPali(i-1, i+1, s);

      let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
  }
  return s.slice(max[0], max[1]);
};

const getPali = (left, right, s) => {
    while(left >= 0 && right < s.length){
        if(s[left] !== s[right])break;
            left--;
            right++;
        }
        return [left+1, right];
}

console.log(pali("madmame"));



const palind = (s) => {
    let max = [0, 1];

    for(let i = 0; i < s.length; i++) {
        let odd = getPalin(i-1, i+1, s);
        let even = getPalin(i-1, i, s);
        let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;

    }
    return s.slice(max[0], max[1]);
}

const getPalin = (left, right, s) => {
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) break;
        left--;
        right++;
    }
    return [left+1, right];
}

console.log(palind('acbab'));
console.log(palind('cabart'));