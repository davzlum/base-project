import fibonacci from "./fibonacci";

describe("Given a fibonacci array", () => {
  test("position 1 should return the value 1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  test("position 5 should return the value 5", () => {
    expect(fibonacci(5)).toBe(5);
  });
  test("position 6 should return the value 8", () => {
    expect(fibonacci(6)).toBe(8);
  });
  test("position 60 should return the value 1548008755920", () => {
    expect(fibonacci(60)).toBe(1548008755920);
  });
});
