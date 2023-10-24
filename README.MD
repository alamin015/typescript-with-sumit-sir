## TypeScript Practice with Sumit Saha

### Date: 10/24/2023

```ts
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
```

> [!IMPORTANT]
> Typescript : Types practice

```ts
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
```

> [!IMPORTANT]
> I tried to learn interface in typescript

```ts
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
```
