import { sumNestedArrays, calculateFactorial } from "./utils";

describe("reduce utils", () => {
  describe("sumNestedArrays", () => {
    test("Sum numbers in a nested array", () => {
      expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toBe(21);
    });
    test("Sum numbers in an empty nested array", () => {
      expect(sumNestedArrays([])).toBe(0);
    });
    // test("Ensure original array remains unchanged", () => {
    //   expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toEqual([
    //     [1, 2],
    //     [3, 4, 5],
    //     [6],
    //   ]);
    // });
    // test("Check if the output is a number", () => {
    //   expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toBeInstanceOf(Number);
    // });
  });
  describe("calculateFactorial", () => {
    test("Calculate factorial of 0", () => {
      expect(calculateFactorial(0)).toBe(1);
    });
    test("Calculate factorial of 1", () => {
      expect(calculateFactorial(1)).toBe(1);
    });
    test("Calculate factorial of 5", () => {
      expect(calculateFactorial(5)).toBe(120);
    });
    test("Calculate factorial of 10", () => {
      expect(calculateFactorial(10)).toBe(3628800);
    });
    // test("Check if the output is a number", () => {
    //   expect(calculateFactorial(5)).toBeInstanceOf(Number);
    // });
    // test("Handle negative input", () => {
    //   expect(calculateFactorial(-5)).toThrowError("error");
    // });
  });
});
