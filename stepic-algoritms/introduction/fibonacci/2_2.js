var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", function(number) {
  let arr = [0, 1];
  for (let i = 2; i <= number; i++) {
    const res = ((arr[0] % 10) + (arr[1] % 10)) % 10;
    arr = [arr[1], res];
  }
  console.log(arr[1]);
});
