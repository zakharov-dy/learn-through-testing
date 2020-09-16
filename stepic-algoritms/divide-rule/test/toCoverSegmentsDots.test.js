const assert = require("chai").assert;
const pointsLineSegments = require("../pointsLineSegments");

describe("тесты уже пишу", function () {
    it("тест 1", function () {
        assert.equal(pointsLineSegments([1, 6, 11], [0, 7], [5, 10]), "1 0 0");
    });

    it("тест 4", function () {
        assert.equal(pointsLineSegments([1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 3, 3], [3, 3, 3, 4, 5, 6]), "2 3 6 3 2 1");
    });

    it("тест 6", function () {
        assert.equal(pointsLineSegments([-3, -1, 0, 2, 3], [-2, 0, -1, -1, 0, -2, 1, 2, 1, 2], [3, 3, 0, 3, 1, -1, 3, 3, 2, 3]), "0 4 5 7 6");
    });


});
