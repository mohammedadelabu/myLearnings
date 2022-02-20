// // Given a string s, return the longest palindromic substring in s.

// // Example 1:

// // Input: s = "babad"
// // Output: "bab"
// // Explanation: "aba" is also a valid answer.
// // Example 2:

// // Input: s = "cbbd"
// // Output: "bb"

// var longestPalindrome = function(s) {
//     const stringLength = s.length;

//     if( s === "" || stringLength == 0 ){
//         return s;
//     }

//     let maxLength = 1;
//     let low, high;
//     let start = 0;

//     for(i = 1; i < stringLength; i++){
//         // check for even length palindrome substring
//         low = i - 1;
//         high = i;

//         while(low >= 0 && high < stringLength && s[low] === s[high]){
//             if( high - low + 1 > maxLength ){
//                 start = low;
//                 maxLength = high - low + 1;
//             }
//             low--;
//             high++;
//         }

//         // check for odd length palindrome substring
//         low = i - 1;
//         high = i + 1;

//         while(low >= 0 && high < stringLength && s[low] === s[high]){
//             if( high - low + 1 > maxLength ){
//                 start = low;
//                 maxLength = high - low + 1;
//             }
//             low--;
//             high++;
//         }
//     }

//     return s.substring(start, start + maxLength);
// };

// console.log(longestPalindrome('acbab'));
// console.log(longestPalindrome('cabart'));




// // Given a string s, find the length of the longest substring without repeating characters.
// var lengthOfLongestSubstring = function(s) {
//     let max_len = 0;
//     let curr = 0;
//     let hash = {}; 
//     if(s.length < 2) {
//         return s.length;
//     }
//     for(let i = 0; i < s.length;  i++) {
//         if(hash[s[i]] == null) {
//             curr += 1;
//         } else {
//             curr = Math.min(i - hash[s[i]], curr + 1);
//         }
//         max_len = Math.max(max_len, curr);
//         hash[s[i]] = i; //save the index
//     }
//     return max_len;
// };

// console.log(lengthOfLongestSubstring('abracadabra'));
// console.log(lengthOfLongestSubstring('nfffpdmpifuifuioty'));

// const binaryTreeCompare = (a, b) => {
//     let [data1, data2] =[a,b]
//     let dataArray=[]
//       if (!data1 && !data2) return true;
//       else if (!data1 || !data2) return false;
//       else {
//         dataArray.map((val)=>{
//             console.log(val)
//         })
//         return (
//           data1.val === data2.val &&
//           binaryTreeCompare(data1.left, data2.left) &&
//           binaryTreeCompare(data1.right, data2.right)
//         );
//       }
//     };



//     function primeString(s) {
//         let response
//         let data = s.length, count = 1;
//         while(count < data) {
//           if(data % count == 0) {
//             let test = true;
//             let ss = s.slice(0, count), i = count;
//             for(; i < data; i+=count) {
//               if(ss != s.slice(i, i + count)) { test = false; break; }
//             }
//             if(test) return false;
//           }
//           count++;
//         }
//         return true;
//       }



const palindrome = (s) => {
    let max = [0, 1];

    for(let i = 0; i < s.length; i++){
        let odd = getPal(i-1, i+1, s);
        let even = getPal(i+1, i, s);
        let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    
        max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
        
    }
    
    return s.slice(max[0], max[1]);
}

const getPal = (left, right, s) => {
    while(left >= 0 && right < s.length){
        if(s[left] !== s[right]) break;
        left--;
        right++
    }
    return [left+1, right];
}

console.log(palindrome('cabada'));




// test('update profile picture', async () => {

//     const response = await supertest(app)
//       .put('/profile/picture')
//       .set('Authorization', `Bearer ${token}`)
//       .attach('profilePic', `${__dirname}/File/dream1.jpeg`);

//     expect(response.status).toBe(201);
//     expect(response.body.status).toBe('successful!');
//   });

// });

const customer1 = { name: "Mohammed", age: 25, school: "OAU", department: 'Physics' };
const customer2 = { name: "Vicky", age: 28, school: "ABU", department: 'Animal Science' };
const customer3 = { name: "Chidera", age: 29, school: "UNIPORT", department: "Computer Sc." };
const customer4 = { name: "Naheem", age: 25, school: "OAU", department:"Pharmacy" };
const customer5 = { name: "Robert", age: 27, school: "DELSU", department: "Computer Sc." };
console.log('%c Customers', 'color: red; font-weight: bold;');

console.log({customer1, customer2, customer3, customer4, customer5});
console.table({customer1, customer2, customer3, customer4, customer5});