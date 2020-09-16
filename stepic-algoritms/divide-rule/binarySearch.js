function f(sortedArr, e) {
  let i = 0;
  let j = sortedArr.length - 1;
  while (i <= j) {
    const currentIndex = Math.floor((j + i) / 2);
    if (e === sortedArr[currentIndex]) {
      return currentIndex + 1;
    }

    if (+e < +sortedArr[currentIndex]) {
      j = currentIndex - 1;
    }

    if (+e > +sortedArr[currentIndex]) {
      i = currentIndex + 1;
    }
  }
  return -1;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const input = [];

rl.on("line", function(str) {
  const [l, ...arr] = str.split(" ");
  input.push(arr);
}).on("close", () => {
  const [sortedArr, elements] = input;
  console.log(elements.map(e => f(sortedArr, e)).join(" "));
});
