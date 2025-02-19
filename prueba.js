"use strict";
let x = 5;

for (let i = 0; i < 10; i++) {
  console.log(`${i} x ${x} = ${i * x}`);
}

{
  let x = 10;
  console.log(x);
}

console.log(x++);
console.log(++x);