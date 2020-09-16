const assert = require("chai").assert;
const f = require("../1");

describe("покрыть отрезки точками", function() {
  it("[[1, 3], [2, 5], [3, 6]] => 3", function() {
    assert.equal(f([[1, 3], [2, 5], [3, 6]]), "3");
  });

  it("[[4, 7], [1, 3], [2, 5], [5, 6]] => 3 6", function() {
    assert.equal(f([[4, 7], [1, 3], [2, 5], [5, 6]]), "3 6");
  });
});
