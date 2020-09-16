var assert = require("assert");
const hugeFibonacciModul = require("../hugeFibonacciModul");

const calculatePizanoLength = n => hugeFibonacciModul.calculatePizano(n).length;
const main = hugeFibonacciModul.main;

describe("hugeFibonacciModul", function() {
  //bigInt очень медленный
  this.timeout(15000);
  describe("calculatePizanoLength", function() {
    it("n=2", function() {
      assert(calculatePizanoLength(2), 3);
    });
    it("n=5", function() {
      assert(calculatePizanoLength(5), 20);
    });
    it("n=7", function() {
      assert(calculatePizanoLength(7), 16);
    });
    it("n=10", function() {
      assert(calculatePizanoLength(10), 60);
    });
    it("n=11", function() {
      assert(calculatePizanoLength(11), 10);
    });
    it("n=15", function() {
      assert(calculatePizanoLength(15), 40);
    });
    it("n=16", function() {
      assert(calculatePizanoLength(16), 24);
    });
    it("n=123456", function() {
      assert(calculatePizanoLength(123456), 15456);
    });
    it("n=123456", function() {
      assert(calculatePizanoLength(987654), 332808);
    });
  });
  describe("hugeFibonacciModul", function() {
    it("остаток от деления 10 числа Фибоначчи на 2.", function() {
      assert(main(10, 2), 1);
    });
    it("остаток от деления 2011 числа Фибоначчи на 5.", function() {
      assert(main(5, 2011), 4);
    });
  });
});
