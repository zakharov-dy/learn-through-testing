//https://stepik.org/lesson/13239/step/5

//abacabad
// a: 0
// b: 10
// c: 110
// d: 111

//очередь с приоритетами (куча через полное двоичное дерево)
class PriorityQueueMin {
  constructor(initValues = []) {
    this.values = [];
    initValues.forEach(v => this.insert(v));
  }

  insert(value) {
    this.values.push(value);
    const { values } = this;
    let index = this.values.length - 1;

    if (index === 0) {
      return;
    }

    let parentIndex = Math.floor((index - 1) / 2);
    while (values[parentIndex].w > value.w) {
      let buffer = values[parentIndex];
      values[parentIndex] = value;
      values[index] = buffer;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      if (index <= 0) {
        return;
      }
    }
  }

  extractMin() {
    let { values } = this;
    const first = values[0];
    const lastIndex = values.length - 1;
    values[0] = values[lastIndex];
    values[lastIndex] = first;
    const result = values.pop();

    let currentIndex = 0;
    let leftIndex = 1;
    let rightIndex = 2;

    let left = values[leftIndex];
    let right = values[rightIndex];

    while (
      (left && values[currentIndex].w > left.w) ||
      (right && values[currentIndex].w > right.w)
      ) {
      const buffer = values[currentIndex];
      if (!right || (right && values[currentIndex].w > left.w && left.w < right.w)) {
        values[currentIndex] = values[leftIndex];
        values[leftIndex] = buffer;
        currentIndex = leftIndex;
      } else {
        values[currentIndex] = values[rightIndex];
        values[rightIndex] = buffer;
        currentIndex = rightIndex;
      }

      leftIndex = currentIndex * 2 + 1;
      rightIndex = leftIndex + 1;
      right = values[rightIndex];
      left = values[leftIndex];
    }
    return result;
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

  const priorityQueue = new PriorityQueueMin(
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
    const v1 = priorityQueue.extractMin();
    const v2 = priorityQueue.extractMin();
    const tree = {
      0: v2,
      1: v1,
      w: v1.w + v2.w
    };

    priorityQueue.insert(tree);
  }

  const tree = priorityQueue.extractMin();
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
