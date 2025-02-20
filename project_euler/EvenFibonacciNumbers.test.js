const fiboEvenSum = require("./EvenFibonacciNumbers");

test("fiboEvenSum(10) should return a number", () => {
  expect(typeof fiboEvenSum(10)).toBe("number");
});

test("fiboEvenSum(10) should return an even value", () => {
  expect(fiboEvenSum(10) % 2).toBe(0);
});

test("fiboEvenSum(8) should return 10", () => {
  expect(fiboEvenSum(8)).toBe(10);
});

test("fiboEvenSum(10) should return 10", () => {
  expect(fiboEvenSum(10)).toBe(10);
});

test("fiboEvenSum(34) should return 44", () => {
  expect(fiboEvenSum(34)).toBe(44);
});

test("fiboEvenSum(60) should return 44", () => {
  expect(fiboEvenSum(60)).toBe(44);
});

test("fiboEvenSum(1000) should return 798", () => {
  expect(fiboEvenSum(1000)).toBe(798);
});

test("fiboEvenSum(100000) should return 60696", () => {
  expect(fiboEvenSum(100000)).toBe(60696);
});

test("fiboEvenSum(4000000) should return 4613732", () => {
  expect(fiboEvenSum(4000000)).toBe(4613732);
});
