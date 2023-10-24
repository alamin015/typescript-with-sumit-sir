let UserName: string;
let age: number;

// UserName = 98 / there is a type error
UserName = "hasim amla"; // thats the correcr value assign
const allAgeArr = [8, 8, 23, 67, 9];
// allAgeArr.push("hhx");  only number can be pushed into the array

allAgeArr.push(0);

// object
let myObj = {
  name: "alamin",
  age: 12,
};

// myObj.name = 76 'number' is not assignable to type 'string'
myObj.name = "hasim"; // thats the correct

// lets talk about type
type User = {
  studentName: string;
  age: number;
};

let stdObj: User = {
  studentName: "asraful",
  age: 54,
};

// optional Chaining it means phone is not mandatory
type optionalObj = {
  userName: string;
  age: number;
  phone?: string;
};

let tryObj: optionalObj = {
  userName: "hhh",
  age: 76,
  //   phone: "777777" if i comment this line there is no error
};

// now its time to practice interface

interface worker {
  name: string;
  age: number;
  id: number;
  gender: string;
  isMarried: true | false;
  phone?: number;
}

let trObj: worker = {
  name: "akash",
  age: 76,
  id: 788,
  gender: "male",
  isMarried: false,
  phone: +8801318509643,
};

// Function Type

const myFunc = (a: number, b: number) => {
  console.log(a + b);
};
// myFunc(2,"2") there is type error

/*
 * function return and optional chaining
 */

const func = (a: number, b: number, c?: boolean): string => {
  return `values are ${a}, ${b}, ${c}`;
};

func(2, 3);

// Function signature

let addNumbers: (x: number, y: number) => number; //it is a signature i mean structure

addNumbers = (a, b) => {
  console.log(a + b);
  return a + b;
};
