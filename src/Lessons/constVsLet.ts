// Example 1: Using const -> it's actually a constant 
let age:string | number = 25;
// The value of 'age' is assigned as 25 and cannot be reassigned; const is immutable.
//age = 30; // Error: Cannot assign to 'age' because it is a constant
//->Type literal-like behavior on primitives constants
age='23'


const person = { 
    name: 'John', 
    age: 30,
    status:{
        married:true,
        children:2,
    }
};
// The 'person' object is assigned to a constant and its properties can be accessed and modified.
person.age = 35;
person.name = 'John Doe';//Type literals do not work on objects: 
//TS won't complain if you try to assign a different value to a property of a const object

// Example 2: Using let
let score: number = 80;
// The value of 'score' can be reassigned; TS simply sees the type of 'score' as number vs type literal 80 if it was const
score = 90;

let message: string;
// The 'message' variable is declared without an initial value and can be assigned later.
// Const cant be declared without an initial value
message = 'Hello, World!';

/**
Recap:
- Use const for primitive values that you don't want to change.
- Use let for values that you want to change.
- TypeScript will infer the value of const as a type literal (for primitive values) 
- However, TypeScript will infer the value of let as a general type (for primitive values)
- In the case of objects, TypeScript will infer the value of const as a general type (for objects)
 */