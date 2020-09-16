var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", function(number) {
  const arr = [0, 1];
  while (true) {
    if (arr[number]) {
      console.log(arr[number]);
      return arr[number];
    } else {
      arr.push(((arr[arr.length - 2] % 10) + (arr[arr.length - 1] % 10)) % 10);
    }
  }
});
