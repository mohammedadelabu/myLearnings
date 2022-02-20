// const longestPalindrome = (s) => {
//   // Expand around the center technique
//   let start = 0; // start of sol
//   let end = 0; //end of sol
//   for (let i = 0; i < s.length; i++) {
//     //loop through each character
//     let oddPalindrome = true; //bool to check whether palindrome is odd or even in length
//     let lenOdd = expandAroundCenter(s, i, i); //length of odd palindrome
//     let lenEven = expandAroundCenter(s, i, i + 1); //length of even palindrome
//     let lenMax = Math.max(lenOdd, lenEven); //get the max
//     if (lenMax === lenEven) {
//       oddPalindrome = false;
//     }
//     if (lenMax > end - start + 1) {
//       //end - start + 1 = length of current longest palindrome
//       if (oddPalindrome) {
//         //odd case
//         //make sure to floor since javascript has no types
//         start = i - Math.floor(lenMax / 2); //since i is the center/ divide length by two and subtract
//         end = i + Math.floor(lenMax / 2); //vice versa
//       } else {
//         start = i - lenMax / 2 + 1; //center is off by 1 so add one. no floor since length is even
//         end = i + 1 + lenMax / 2 - 1; //center is forward by one so substract one
//       }
//     }
//   }
//   return s.substring(start, end + 1); //dont for get that substr function xs [x,y)
// };
// const expandAroundCenter = (s, left, right) => {
//   //first two conditions prevent an infinite loop
//   //second condition verifies its a palindrome
//   while (left >= 0 && right < s.length && s[left] == s[right]) {
//     left--;
//     right++;
//   }
//   //the loop will exit once it verifies that there isn't a palindrome any more. So L and R are both off by one.
//   right = right - 1; //correct off by one error
//   left = left + 1;
//   return right - left + 1; //return length
// };

// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("bc"));

// const longestPalindromes = (s) => {
//   let max = [0, 1];
//   for (let i = 0; i < s.length; i++) {
//     let even = getDrome(i - 1, i, s);
//     let odd = getDrome(i - 1, i + 1, s);
//     let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

//     max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
//   }
//   return s.slice(max[0], max[1]);
// };

// const getDrome = (left, right, s) => {
//     while(left>=0 && right < s.length){
//         if(s[left] !== s[right]) break;
//         left--;
//         right++;
//     }
//     return [left + 1, right];
// }

// console.log(longestPalindromes("babad"));

// const getPalindrome = (s) => {
//     let max = [0, 1];
//     for(let i = 0; i < s.length; i++) {
//         let odd = getDromes(i-1, i+1, s);
//         let even = getDromes(i-1, i, s);
//         let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

//         max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
//     }
//     return s.slice(max[0], max[1]);
// }

// const getDromes = (left, right, s) => {
//     while(left >= 0 && right < s.length){
//         if(s[left] !== s[right]) break;
//         left--;
//         right++;
//     }
//     return [left+1, right];
// }

// console.log(getPalindrome('bastatad'));

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
// The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots,
// the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding
// triangle number of the sequence.

// Examples
// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220

const getSolution = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};
console.log(getSolution(215));

// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

// Notes
// The first array always has two elements.
// Use the spread syntax to solve this challenge.

const tuckIn = (arr1, arr2) => {
  let shortArr = [...arr1];
  let longArr = [...arr2];
  let combArr = shortArr.concat(longArr);
  // let combArr = longArr.push(shortArr);
  console.log(combArr);
  let result = combArr.sort((a, b) => a - b);
  console.log(result);
  return result;
};
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35])); //➞ [15, 45, 75, 35, 150]

const tuckIns = (arr1, arr2) => {
  arr2.push(arr1[1]);
  console.log(arr2);
  arr2.unshift(arr1[0]);
  console.log(arr2);
  return arr2;
};
console.log(tuckIns([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIns([15, 150], [45, 75, 35]));

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
// On the other hand, swapping 43 gives us 34, and 43 > 34.
// Examples
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true
// Notes
// Numbers with two identical digits (third example) should yield true (you can't do better).

const largestSwap = (num) => {
  let rev = Number(String(num).split("").reverse().join(""));
  if (rev > num) return true;
  return false;
};
console.log(largestSwap(72));

// console.log(largestSwap(27));//false
// console.log(largestSwap(43));//true

function mutateTheArray(n, a) {
  let b = [];

  for (let i=0; i <= n-1; i++) {
      if (i==0) {
          b[0] = a[0] + a[1];
      } else if (i == n-1) { // <- here
          b[i] = a[i-1] + a[i];
      } else {
          b[i] = a[i-1] + a[i] + a[i+1];
      }
  }
  return b;
}
console.log(mutateTheArray(5, [4, 0, 1, -2, 3]));