function firstMultiples(noOfMultiples, number, divisor) {
  let result = [];
  if (number % divisor === 0) {
    divisor = 1;
  }
  for (let i = 0; i < noOfMultiples; i++) {
    let formula = number * (divisor * (i + 1));
    result.push(formula);
  }
  return result;
}
console.log(firstMultiples(10, 6, 6));


function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
    if (typeof i !== "number") console.log("not a number");  
    if  (i % 3 === 0) console.log("fizz");
    if (i % 5 === 0) console.log("buzz");
    else console.log(num)
    }
};
console.log(fizzbuzz(15));
