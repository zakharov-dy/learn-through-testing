const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const max = (a, b) => (a > b ? [a, b] : [b, a]);

const calculate = (a, b) => (b === 0 ? a : calculate(b, a % b));

rl.on("line", function(line) {
  const [a, b] = line.split(" ");

  console.log(calculate(...max(Number(a), Number(b))));
  rl.close();
});
