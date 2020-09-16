//https://stepik.org/lesson/13238/step/9

function f(arr) {
  arr = arr.sort((a, b) => a[1] - b[1]);
  let points = [];
  while (arr.length) {
    const cursor = +arr[0][1];
    points.push(cursor);
    arr = arr.filter(([a, b]) => cursor < +a || cursor > +b);
  }

  return points;
}

module.exports = f;

// var readline = require("readline");
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });
//
// let arr = [];
// rl.on("line", function(str) {
//   arr.push(str);
// }).on("close", () => {
//   arr.shift();
//   arr = arr.map(a => a.split(" "));
//   const res = f(arr);
//   console.log(res.length);
//   console.log(res.join(" "));
// });