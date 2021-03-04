type Combinable = number | string;

let qwer: Combinable

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Ingo",
//     age: 38,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"]
// }

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 10,
  AUTHOR,
}

const person = {
  name: "Ingo",
  age: 38,
  hobbies: ["Sports", "Cooking"],
  role: [Role.AUTHOR],
};

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 12.8;
let y: "asdf" | "qwer"
y = "asdf"

let x: any[];
x = ["asdf", 4];

const result = add(number1, number2);

console.log(result);
console.log(person.name + person.age);
console.log(person.role[0]);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}


function newAdd(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValues: (a: number, b: number) => number
combineValues = add