//https://stepik.org/lesson/13238/step/11?unit=3424

function f(num) {
  let res = "";
  let current = 1;
  while (num > current * 2) {
    num -= current;
    res += ` ${current}`;
    current += 1;
  }

  if (num !== 0) {
    res += ` ${num}`;
  }

  return res.trim();
}

module.exports = f;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", function(str) {
  const res = f(+str);
  console.log(res.split(" ").length);
  console.log(res);
});
