import sum from "./sum";

test("add 1 + 2 to equal 5", () => {
  expect(sum(1, 2)).toBe(5);
});

test("add 5 + 5 to equal 10", () => {
  expect(sum(5, 5)).toBe(10);
});
