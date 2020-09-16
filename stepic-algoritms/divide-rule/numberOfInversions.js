const mergeSort = arr => {
    if (arr.length === 1) {
        return arr;
    }
    const middleIndex = Math.ceil(arr.length / 2);

    const firstArr = mergeSort(arr.slice(0, middleIndex));
    const secondArr = mergeSort(arr.slice(middleIndex));
    // Наивный алгоритм
    // firstArr.forEach(f =>
    //     secondArr.forEach(s => {
    //         if (f > s) {
    //             inversionsResult += 1;
    //         }
    //     })
    // );
    return merge(firstArr, secondArr);
};

const merge = (a = [], b = []) => {
    const res = [];
    while (!(a.length === 0 && b.length === 0)) {
        if (a.length === 0) {
            res.push(...b);
            b = [];
            continue;
        }

        if (b.length === 0) {
            res.push(...a);
            a = [];
            continue;
        }

        if (a[0] <= b[0]) {
            res.push(a.shift());
        } else {
            // a[0] > b[0]
            inversionsResult += a.length;
            res.push(b.shift());
        }
    }
    return res;
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = [];
let first = true;
let inversionsResult = 0;

rl.on("line", function (str) {
    if (first) {
        first = false;
    } else {
        input.push(...str.split(" "));
        rl.close();
    }
}).on("close", () => {
    mergeSort(input.map(a => +a));
    console.log(inversionsResult);
});
