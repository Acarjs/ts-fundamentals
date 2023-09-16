// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple type of array. Now TS understand that we have a 2 length of array and it must be number and string.
// } = {
//   name: 'Anil',
//   age: 32,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author'], // TS understands that we have an array which types number or strings.
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Anil',
  age: 32,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin'); //push is allowed in tuples!!!
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['sports', 'football'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()) //ERROR - because the map method is available for arrays but not for strings
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
