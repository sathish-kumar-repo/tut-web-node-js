//! Non Blocking Code

// Next execute timer related code
setTimeout(() => {
  console.log("Timer is Done");
}, 1);

// First Execute this
console.log("Hi");
console.log("Hello");

// ! Actually Js see like

console.log("Hi");
console.log("Hello");

setTimeout(() => {
  console.log("Timer is Done");
}, 1);
