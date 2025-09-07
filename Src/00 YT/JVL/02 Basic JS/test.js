async function test() {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timer is Done");
    }, 3000);
  });
  console.log(res);
  console.log("Sathish");
}

test();
