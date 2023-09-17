function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`);
} // we are not returning anything here. void means this function doesn't have a return statement it doesn't return aynthing.

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
//and now what we are saying to TS is that "combinedvalues" should accept any function that takes 2 parameters and each parameters are numbers and we return a number. Therefore, combineValues = printResult will throw an error.

combineValues = add; //combineValues is function type now
// combineValues = printResult; //this will be undefined if let combineValues: Function;
//this will also throw an error when let combineValues: (a: number, b: number) => number; because "combinedvalues" should accept any function that takes 2 parameters and each parameters are numbers and we return a number.

// combineValues = 5 // this would throw an error at runtime.

console.log(combineValues(8, 6));

addAndHandle(3, 5, (result) => {
  console.log(result);
});
