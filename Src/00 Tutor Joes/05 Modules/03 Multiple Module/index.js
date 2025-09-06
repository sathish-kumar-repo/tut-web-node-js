const math = require("./math");

console.log("Local Module");

const total = math.add(10, 25);
console.log("Total : " + total);
const difference = math.sub(10, 25);
console.log("Difference : " + difference);
