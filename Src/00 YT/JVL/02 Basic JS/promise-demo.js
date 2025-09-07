const { log } = require("console");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    log("Top Inner Resolve");
    resolve(); // Execute to Success
    log("Bottom Inner Resolve");
    reject(); // Not executed
    log("Bottom Bottom Inner Resolve");
  }, 2000);
  log("Outer Resolve");
});

promise
  .then(() => {
    log("Success");
  })
  .catch(() => {
    log("Failed");
  })
  .finally(() => {
    log("Finally");
  });
