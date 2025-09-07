const { log } = require("console");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sathish");
  }, 2000);
});

promise
  .then((name) => {
    log(name);
    return `Name is: ${name}`;
  })
  .then((name) => {
    log(name);
  });
