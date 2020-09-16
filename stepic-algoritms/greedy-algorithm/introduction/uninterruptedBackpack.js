//https://stepik.org/lesson/Введение-13238/step/10?unit=3424

function f(obj) {
  let bagValue = 0;
  let res = 0;
  // 120, 100, 60
  const keysOfObj = Object.keys(obj).sort((a, b) => b - a);
  let currentKeyI = 0;

  while (bagValue !== bagMaxValue && keysOfObj[currentKeyI]) {
    const price = keysOfObj[currentKeyI];
    const cursor = obj[price];
    const remainder = +bagMaxValue - bagValue;

    if (cursor <= remainder) {
      // Если помещается в рюкзак, кладем всё целиком
      bagValue += +cursor;
      res += +price * cursor;
      currentKeyI += 1;
    } else {
      // Кладем остаток
      res += +price * remainder;
      return +res.toFixed(3);
    }
  }

  return +res.toFixed(3);
}

module.exports = f;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const obj = {};
let bagMaxValue;
let isFirstLine = true;

rl.on("line", function(str) {
  if (isFirstLine) {
    bagMaxValue = +str.split(" ")[1];
    isFirstLine = false;
  } else {
    const [k, v] = str.split(" ");
    obj[k / v] = v;
  }
}).on("close", () => {
  console.log(f(obj));
});
