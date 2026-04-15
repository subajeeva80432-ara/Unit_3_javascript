// JavaScript Data Types & Operators

// --------------------
// Primitive Data Types
// --------------------
let num = 10;            // Number
let name = "Rindu";      // String
let isTrue = true;       // Boolean
let x;                   // Undefined
let y = null;            // Null

console.log(num, name, isTrue, x, y);

// --------------------
// Reference Data Types
// --------------------
let person = {
  name: "Rindu",
  age: 20
};

let arr = [1, 2, 3];

function greet() {
  console.log("Hello");
}

console.log(person);
console.log(arr);
greet();

// --------------------
// Primitive vs Reference
// --------------------

// Primitive Copy
let a = 10;
let b = a;
b = 20;

console.log("Primitive:", a, b);

// Reference Copy
let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log("Reference:", obj1.value, obj2.value);

// --------------------
// Arithmetic Operators
// --------------------
let p = 10, q = 5;

console.log("Add:", p + q);
console.log("Sub:", p - q);
console.log("Mul:", p * q);
console.log("Div:", p / q);
console.log("Mod:", p % q);

// --------------------
// Assignment Operators
// --------------------
let r = 10;

r += 5;  // 15
r -= 3;  // 12
r *= 2;  // 24
r /= 4;  // 6

console.log("Assignment:", r);

// --------------------
// Logical Operators
// --------------------
let m = true;
let n = false;

console.log("AND:", m && n);
console.log("OR:", m || n);
console.log("NOT:", !m);