// https://stepik.org/lesson/13228/step/6
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", function(number) {
  const arr = [0, 1];
  while (!arr[number]) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  console.log(arr[number]);
});
