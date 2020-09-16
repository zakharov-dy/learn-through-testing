// https://stepik.org/lesson/13252/step/3
// arr = n натуральных чисел, не превышающих 10. Выведите упорядоченную по неубыванию последовательность этих чисел.
const countingSort = (arr) => {
    let counter = [];
    for (let i = 0; i < 11; i++) {
        counter[i] = 0;
    }

    arr.forEach(num => counter[num]+=1);
    counter.forEach((_, i) => counter[i] = i === 0 ? counter[i] : counter[i] + counter[i - 1]);
    const res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res[counter[arr[i]] - 1] = arr[i];
        counter[arr[i]]--;
    }
    console.log(res.join(' '))
};

const prepare = (input) => {
    const arr = input[1].split(" ").map(a => +a);
    countingSort(arr)
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = [];
rl.on("line", function (str) {
    input.push(str);
}).on("close", () => {
    prepare(input)
});
