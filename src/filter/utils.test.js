import { filterByProperty, filterUniqueStrings } from "./utils";

describe("filter utils", () => {
  describe("filterUniqueStrings", () => {
    test("Filters out duplicate strings", () => {
      expect(
        filterUniqueStrings([
          "apple",
          "banana",
          "cherry",
          "apple",
          "date",
          "banana",
        ]),
      ).toEqual(["apple", "banana", "cherry", "date"]);
    });
    test("Handles empty input array", () => {
      expect(filterUniqueStrings([])).toEqual([]);
    });

    test("Handles input with all unique strings", () => {
      expect(filterUniqueStrings(["one", "two", "three"])).toEqual([
        "one",
        "two",
        "three",
      ]);
    });
    test("Handles input with one repeated string", () => {
      expect(filterUniqueStrings(["apple", "apple", "apple"])).toEqual([
        "apple",
      ]);
    });
    test("Checks if the output array contains only unique strings", () => {
      expect(
        filterUniqueStrings([
          "apple",
          "banana",
          "cherry",
          "apple",
          "date",
          "banana",
        ]),
      ).toEqual(["apple", "banana", "cherry", "date"]);
    });
    test("Checks if the output array length is correct", () => {
      expect(
        filterUniqueStrings([
          "apple",
          "banana",
          "cherry",
          "apple",
          "date",
          "banana",
        ]),
      ).toHaveLength(4);
    });
    // test("Checks if the function throws an error with invalid input", () => {
    //   expect(filterUniqueStrings("invalid")).toThrow("invalid input");
    // });
  });

  describe("filterByProperty", () => {
    test("Filters objects with specified property", () => {
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { color: "yellow" },
            { name: "cherry", color: "red" },
          ],
          "name",
        ),
      ).toEqual([
        { name: "apple", color: "red" },
        { name: "cherry", color: "red" },
      ]);
    });
    test("Handles empty input array", () => {
      expect(filterByProperty([], "name")).toEqual([]);
    });

    test("Handles objects with property having falsy values", () => {
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { size: 0 },
            { name: "cherry", color: "red" },
          ],
          "size",
        ),
      ).toEqual([{ size: 0 }]);
    });

    test("Checks if the output array contains only objects with the specified property", () => {
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { color: "yellow" },
            { name: "cherry", color: "red" },
          ],
          "name",
        ),
      ).toEqual([
        { name: "apple", color: "red" },
        { name: "cherry", color: "red" },
      ]);
    });
    // test("Checks if the function throws an error with invalid input", () => {
    //   expect(filterByProperty("invalid", "name")).toThrow("invalid input");
    // });
  });
});
