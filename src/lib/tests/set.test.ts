import { _set, _isObject } from "../set";

describe("Basic lib helpers", () => {
  describe("_isObject", () => {
    it("verify if it is an object", () => {
      expect(_isObject({ firstName: "Clément" })).toBe(true);
      expect(_isObject("i'm not an object")).toBe(false);
    });
  });
  describe("_set", () => {
    it("set with unique key", () => {
      const obj = { firstName: "Clément" };
      _set(obj, "lastName", "Faure");
      expect(obj).toEqual({ firstName: "Clément", lastName: "Faure" });
    });

    it("set with complex key", () => {
      const obj = { name: { first: "Clément" } };
      _set(obj, "name.last", "Faure");
      expect(obj).toEqual({ name: { first: "Clément", last: "Faure" } });
    });
  });
});
