// // First promise returns an array after a delay js const 
// const getProducts = () => { return new Promise((resolve, reject) => { return setTimeout( () => resolve([{ id: 'product1' }, { id: 'product2' }, { id: 'product3'}, { id: 'product4'}]), 1000 ) }) }

// // this promise depends on the result of the previous promise
// const getProductId = (category) => {
//     return new Promise((resolve, reject) => {
//       return setTimeout(() => resolve(category.id), 1000)
//     })
//   }

//   const capitalizeId = (id) => {
//     return new Promise((resolve, reject) => {
//       return setTimeout(() => resolve(id.toUpperCase()), 700)
//     })
//   }

//   const capitalizeProductsIds = async () => {
//     const products = await getProducts()
  
//     for (let product of products) {
//       const productId = await getProductId(product);
//       console.log(productId);
  
//       const capitalizedId = await capitalizeId(productId);
//       console.log(capitalizedId);
//     }
  
//     console.log(products);
//   }
  
//   capitalizeProductsIds()


// var promises = [obj1, obj2].map(function(obj){
//   return db.query('obj1.id').then(function(results){
//     obj1.rows = results
//     return obj1
//  })
// })
// Promise.all(promises).then(function(results) {
//    console.log(results)
// })

let answer = function squared(num){
    return num*num;
}
console.log(answer(10));

answers =(num)=>num*num;
console.log(answers(11));

function copyArrayAndMultiplyby2(arrays, instructions) {
    let output = [];
    for (const array of arrays) {
        output.push(array * 2);
    }
    return output;
}
console.log(copyArrayAndMultiplyby2([1,2,3,4,5]));

//let product = 
function copyArrayAndMultiplyby22(arrays) {
    return arrays.map(x=>x*2);
}
console.log(copyArrayAndMultiplyby22([1,2,3,4,5]));

given=(array)=>array.map(x => x / 2)
console.log(given([1,2,3,4,5]));

// function maxArea(A, len)
//     {
//         let area = 0;
//         for (let i = 0; i < len; i++) {
//             for (let j = i + 1; j < len; j++) {
//                 // Calculating the max area
//                 area = Math.max(area, Math.min(A[j], A[i]) * (j - i));
//             }
//         }
//         return area;
//     }
 
//       let a = [ 1, 5, 4, 3 ];
//     let b = [ 3, 1, 2, 4, 5 ];
  
//     let len1 = a.length;
//     document.write(maxArea(a, len1) + "</br>");
  
//     let len2 = b.length;
//     document.write(maxArea(b, len2));

/**
 * You are given an array of positive integers where each integer represents the height of a vertical line on a chart. find two lines which together with the x axis forms a container that would hold the greatest amount of water, return the area of water it would hold.
 
 * Examples
 * [7, 1, 2, 3, 9] => 28
 * [0, 1, 2, 3, 4] 7 * 4 
 * [0] => 0
 * [7] => 0
 * [6, 9, 3, 4, 5, 8] => 32
 * [4, 8, 1, 2, 3, 9] => 32
 */

function maxArea(array){
        let area = 0;
        //let size = array.length
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                // Calculating the max area
                area = Math.max(area, Math.min(array[j], array[i]) * (j - i));
                console.log(area);
            }
        }
        return area;
    }
console.log(maxArea([7, 1, 2, 3, 9]));
// console.log(maxArea([4, 1, 2, 3, 9]));
// console.log(maxArea([6, 9, 3, 4, 5, 8]));
// console.log(maxArea([4, 8, 1, 2, 3, 9]));

function arrange(arr) {
    if (arr.length <= 1) {
        return 0;
    }
    let newArr = [...arr]
    let sorted = newArr.sort((a, b) => a-b)
    console.log(sorted)
    
    let max = Math.max(...sorted);
    console.log(max)
    
    let n = arr.indexOf(9)
    console.log(n)
    
    sorted.pop()
    
    let secondMax = Math.max(...sorted);
    console.log(secondMax)
    
    let m = arr.indexOf(secondMax)
    console.log(m)
    
    let index = Math.abs(n-m)
    console.log(index)
    
    let result = secondMax * index
    console.log(result)
    
    return result
}
console.log(arrange([7, 1, 2, 3, 9]));
console.log(arrange([6, 1, 8, 8, 9]));

const calcArea = (arr) => {
    let area = 0;
 
    for (let i = 0; i < arr.length; i++) {
       for (let j = i; j < arr.length; j++) {
         const length = Math.min(arr[i], arr[j]);
         const breadth = j - i;
 
         const newArea = length * breadth;
 
         if (newArea > area) {
           area = newArea;
         }
       }
    }
 
    return area;
  }
 
  console.log(calcArea([4, 8, 1, 2, 3, 9]))