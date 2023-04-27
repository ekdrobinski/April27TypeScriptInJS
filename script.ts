function exponentialRecurive(base: number, exponent:number):number {
  if (exponent === 0) {return 1};
  let total = (base *= exponentialRecurive(base,exponent-1))
     //console.log(total) - logs the iterations to get to total product
  return total
}
console.log(exponentialRecurive(2,5));

//addition function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3)); // Output: 5


//multiply function
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(2, 3)); // Output: 6
