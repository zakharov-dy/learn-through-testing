//https://stepik.org/lesson/13239/step/5

//abacabad
// a: 0
// b: 10
// c: 110
// d: 111

//очередь с приоритетами через сортируемый массив
class PriorityQueue {
  // n*log(n)
  static sort(arr) {
    return arr.sort((a, b) => b.w - a.w);
  }

  constructor(initValues) {
    this.values = PriorityQueue.sort(initValues) || [];
  }

  add(value) {
    this.values.push(value);
    this.values = PriorityQueue.sort(this.values);
  }

  // n(1)
  getMin() {
    return this.values.pop();
  }
}

//кодирование Хаффмана
function f(str) {
  const obj = {};

  // O(n)
  for (let i in str) {
    const s = str[i];
    if (Number.isInteger(obj[s])) {
      obj[s] += 1;
    } else {
      obj[s] = 1;
    }
  }


  const objKeysLength = Object.keys(obj).length;

  const priorityQueue = new PriorityQueue(
    Object.keys(obj).map(k => ({ v: k, w: obj[k] }))
  );

  if (priorityQueue.values.length === 1) {
    return { [priorityQueue.values[0].v]: "0" };
  }

  // let tree = {};

  // O(n)
  // что должно получиться при abacabad
  // tree = {
  //   0: "a",
  //   1: {
  //     0: "b",
  //     1: {
  //       0: "c",
  //       1: "d"
  //     }
  //   }
  // };

  //

  //O(n^2*log(n));
  while (priorityQueue.values.length !== 1) {
    const v1 = priorityQueue.getMin();
    const v2 = priorityQueue.getMin();
    const tree = {
      0: v2,
      1: v1,
      w: v1.w + v2.w
    };

    priorityQueue.add(tree);
  }

  const tree = priorityQueue.getMin();
  tree.path = "";
  let binaryArr = [tree];

  // vocabulary = { "0": "a", "10": "b", "110": "c", "111": "d" };
  const vocabulary = {};

  // обход бинарного дерева без рекурсии
  while (Object.keys(vocabulary).length !== objKeysLength) {
    const next = [];
    binaryArr.forEach(e => {
      const path0 = `${e.path}0`;
      const path1 = `${e.path}1`;
      if (typeof e[0].v === "string") {
        vocabulary[e[0].v] = path0;
      } else {
        e[0].path = path0;
        next.push(e[0]);
      }
      if (typeof e[1].v === "string") {
        vocabulary[e[1].v] = path1;
      } else {
        e[1].path = path1;
        next.push(e[1]);
      }
    });
    binaryArr = next;
  }

  return vocabulary;
}

// f("abacabad");

function encode(str, vocabulary) {
  let result = "";
  for (let i in str) {
    result += vocabulary[str[i]];
  }
  return result;
}

module.exports = f;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", function(str) {
  if (!str) {
    return;
  }
  const vocabulary = f(str);
  const result = encode(str, vocabulary);
  console.log(`${Object.keys(vocabulary).length} ${result.length}`);
  for (let i in vocabulary) {
    console.log(`${i}: ${vocabulary[i]}`);
  }
  console.log(result);
});
