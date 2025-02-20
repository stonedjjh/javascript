const multiplesOf3Or5 = require("./multiplesof3or5");
test("multiplesOf3Or5(10) should return 23", () => {
  expect(multiplesOf3Or5(10)).toBe(23);
});

test("multiplesOf3Or5(49) should return 543", () => {
  expect(multiplesOf3Or5(49)).toBe(543);
});

test("multiplesOf3Or5(1000) should return 233168", () => {
  expect(multiplesOf3Or5(1000)).toBe(233168);
});

test("multiplesOf3Or5(8456) should return 16687353", () => {
  expect(multiplesOf3Or5(8456)).toBe(16687353);
});

test("multiplesOf3Or5(19564) should return 89301183", () => {
  expect(multiplesOf3Or5(19564)).toBe(89301183);
});
