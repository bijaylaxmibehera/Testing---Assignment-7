import { findLastNegativeNumber, findLongestWord } from "./utils";

describe("find utils", () => {
  describe("findLongestWord", () => {
    test("Find longest word in a sentence", () => {
      expect(
        findLongestWord("The quick brown fox jumps over the lazy dog."),
      ).toContain("quick");
    });
    test("Find longest word in a sentence with a single word", () => {
      expect(findLongestWord("Hello")).toContain("Hello");
    });
    test("Find longest word in an empty string", () => {
      expect(findLongestWord("")).toBeUndefined(undefined);
    });
    test("Check if the output is a string", () => {
      expect(
        typeof findLongestWord("The quick brown fox jumps over the lazy dog."),
      ).toBe("string");
    });
  });
  describe("findLastNegativeNumber", () => {
    test("Find last negative number", () => {
      expect(findLastNegativeNumber([3, -7, -2, 9, -5])).toBe(-5);
    });
    test("Find last negative number in an array with no negative numbers", () => {
      expect(findLastNegativeNumber([3, 7, 2, 9, 5])).toBeUndefined(undefined);
    });
    test("Find last negative number in an array with decimal numbers", () => {
      expect(findLastNegativeNumber([3.5, -7.2, -2.1, 9.7, 5.3])).toBe(-2.1);
    });
    test("Check if the output is a number", () => {
      expect(typeof findLastNegativeNumber([3, -7, -2, 9, -5])).toBe("number");
    });
    // test("Check if the function throws an error with invalid input", () => {
    //   expect(findLastNegativeNumber("invalid")).toThrow("invalid input");
    // });
  });
});
