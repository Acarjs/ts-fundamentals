//Now when working with union types, like this and this,it can be cumbersome to always repeat the union type. You might want to trade a new type which reinstalls this union type. And you can do that with another cool types feature, the feature of type aliases.

//Alliases - you can name whatever you want
type Combinable = number | string;
type ConversionDestructor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDestructor //literal types
) {
  let result: number | string;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(32, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Anil', 'Dominika', 'as-text');
console.log(combinedNames);
