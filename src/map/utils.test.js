import { capitalizeValues, findDuplicates } from "./utils";

describe("map", () => {
  describe("capitalizeValues", () => {
    test("Capitalize all strings in the array", () => {
      expect(capitalizeValues(["apple", "banana", "cherry"])).toEqual([
        "Apple",
        "Banana",
        "Cherry",
      ]);
    });

    test("Handle empty input array", () => {
      expect(capitalizeValues([])).toEqual([]);
    });

    test("Capitalize strings with spaces", () => {
      expect(capitalizeValues(["hello world", "goodbye space"])).toEqual([
        "Hello world",
        "Goodbye space",
      ]);
    });
    // test("Original array remains unchanged", () => {
    //   expect(capitalizeValues(["abc", "def"])).toEqual(["abc", "def"]);
    // });

    test("Capitalize strings with special characters", () => {
      expect(capitalizeValues(["!@#", "$%^"])).toEqual(["!@#", "$%^"]);
    });

    test("Capitalize and check mixed case strings", () => {
      expect(capitalizeValues(["loRem", "IpSum", "DoLor"])).toEqual([
        "Lorem",
        "Ipsum",
        "Dolor",
      ]);
    });
  });

  describe("findDuplicates", () => {
    test("Find duplicates in an array", () => {
      expect(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 7])).toEqual([2, 3]);
    });

    test("Handle array with no duplicates", () => {
      expect(findDuplicates([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([]);
    });

    test("Find duplicates with negative numbers", () => {
      expect(findDuplicates([1, -2, 3, -2, 4, 5, 3, -6, 7])).toEqual([-2, 3]);
    });

    test("Find duplicates with floating-point numbers", () => {
      expect(findDuplicates([1.5, 2.3, 1.5, 4.8, 2.3])).toEqual([1.5, 2.3]);
    });
    test("Handle empty input array", () => {
      expect(findDuplicates([])).toEqual([]);
    });
  });
});
