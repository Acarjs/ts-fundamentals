let userInput: unknown;
let userName: string = '';

userInput = 5;
userInput = 'Anil';

if (typeof userInput === 'string') {
  userName = userInput;
}

console.log(userName);

function generateError(message: string, code: number): never {
  throw {
    message: message,
    code: 500,
  };
}

generateError('An error occurred!', 500);
