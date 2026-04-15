// Scope

let globalVar = "I am global";

function test() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}

test();

// Closure
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter();
counter();