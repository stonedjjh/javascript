const largestPalindromeProduct = require("./largestPalindromeProduct");
test("largestPalindromeProduct(2) should return a number", () => {
  expect(typeof largestPalindromeProduct(2)).toBe("number");
});

test("largestPalindromeProduct(2) should return 9009", () => {
  expect(largestPalindromeProduct(2)).toBe(9009);
});

test("largestPalindromeProduct(3) should return 906609", () => {
  expect(largestPalindromeProduct(3)).toBe(906609);
});
