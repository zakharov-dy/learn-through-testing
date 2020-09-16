//https://stepik.org/lesson/13239/step/6

function f(codingMsg, vocabulary) {
  let buffer = '';
  let res = '';
  for (let i in codingMsg) {
    buffer += codingMsg[i];
    if(vocabulary[buffer]){
      res += vocabulary[buffer];
      buffer = '';
    }
  }

  return res
}

module.exports = f;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const input = [];

rl.on("line", function(str) {
  input.push(str);
}).on("close", () => {
  const codingMsg = input.pop();
  const vocabulary = {};
  while (input.length !== 1){
    const [k, v] = input.pop().split(': ');
    vocabulary[v] = k;
  }

  console.log(f(codingMsg, vocabulary));
});
