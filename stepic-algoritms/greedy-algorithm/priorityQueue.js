class PriorityQueueMax {
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
    while (values[parentIndex] < value) {
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

  extractMax() {
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
      (left && values[currentIndex] < left) ||
      (right && values[currentIndex] < right)
    ) {
      const buffer = values[currentIndex];
      if (!right || (right && values[currentIndex] < left && left > right)) {
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
  const [length, ...tasks] = input;
  const priorityQueue = new PriorityQueueMax();
  tasks.forEach(t =>
    t === "ExtractMax"
      ? console.log(priorityQueue.extractMax())
      : priorityQueue.insert(+t.split(" ")[1])
  );
});
