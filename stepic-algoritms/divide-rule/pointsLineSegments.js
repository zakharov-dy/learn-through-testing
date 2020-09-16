// https://stepik.org/lesson/13249/step/6

// Идея: чтобы найти отрезки, которые не пересекаются с точкой нужно отсечь отрезки левее и правее точки
// Чтобы не перебирать все отрезки всех точек проще всего отсортировать концы отрезков и после первой неудачной попытки далее не перебирать.
const pointsLineSegments = (
    simplePoints,
    startPointsOfLines,
    endPointsOfLines
) => {
    const linesLength = startPointsOfLines.length;
    startPointsOfLines = startPointsOfLines.sort(sortLinesUp);
    endPointsOfLines = endPointsOfLines.sort(sortLinesDown);

    const points = simplePoints
        .map((value, index) => ({
            index,
            value,
            // кол-во начал правее точки
            leftPointCount: 0,
            // кол-во концов левее точки
            rightPointCount: 0
        }))
        .sort(sortPointUp);

    let index = 0;
    let point = points[0];
    let pointIndex = 0;
    let currentStartElement = startPointsOfLines[index];
    while (index !== linesLength) {
        if (currentStartElement > point.value) {
            point.leftPointCount = linesLength - index;
            pointIndex += 1;
            if (pointIndex === points.length) {
                break;
            }

            point = points[pointIndex];
        } else {
            index += 1;
            currentStartElement = startPointsOfLines[index];
        }
    }

    points.sort(sortPointDown);

    index = 0;
    point = points[0];
    pointIndex = 0;
    let currentEndElement = endPointsOfLines[index];
    while (index !== linesLength) {
        if (currentEndElement < point.value) {
            point.rightPointCount = linesLength - index;
            pointIndex += 1;
            if (pointIndex === points.length) {
                break;
            }
            point = points[pointIndex];
        } else {
            index += 1;
            currentEndElement = endPointsOfLines[index];
        }
    }

    const pointsToResultMapper = a =>
        // кол-во отрезков - общее число отрезков минус отрезки правее и левее точки
        linesLength - a.rightPointCount - a.leftPointCount;

    console.log(
        points
            .sort(sortPointByIndex)
            .map(pointsToResultMapper)
            .join(" ")
    );
    return points
        .sort(sortPointByIndex)
        .map(pointsToResultMapper)
        .join(" ")
};

const input = [];
const sortLinesUp = (a, b) => a - b;
const sortPointUp = (a, b) => a.value - b.value;
const sortLinesDown = (a, b) => b - a;
const sortPointDown = (a, b) => b.value - a.value;
const sortPointByIndex = (a, b) => a.index - b.index;

const prepare = () => {
    let [linesLength, pointsLength] = input.shift().split(' ');
    const points = input
        .pop()
        .split(" ")
        .map(a => +a);
    points.length = +pointsLength
    let startPointsOfLines = [];
    let endPointsOfLines = [];

    input.forEach(str => {
        const [startPoint, endPoint] = str.split(" ");
        startPointsOfLines.push(+startPoint);
        endPointsOfLines.push(+endPoint);
    });
    pointsLineSegments(points, startPointsOfLines, endPointsOfLines);
};

module.exports = pointsLineSegments;

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });
// rl.on("line", function (str) {
//     input.push(str.trim());
// }).on("close", () => {
//     prepare();
// });
