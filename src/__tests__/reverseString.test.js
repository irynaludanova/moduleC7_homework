import { reverseString } from "../reverseString.js";

describe("tests for reverseString function", () => {
  it("Test reverse string 'abc' -> 'cba'", () => {
    expect(reverseString("abc")).toBe("cba");
  }),
    it("Test reverse string 'ABCDEFG' -> 'GFEDCBA'", () => {
      expect(reverseString("ABCDEFG")).toBe("GFEDCBA");
    });
});
