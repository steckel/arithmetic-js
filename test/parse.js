import { strictEqual } from "assert";
import parse from "../lib/index";

describe("parse", () => {
  it("works", () => {
    strictEqual(parse("1 + 1"), 2);
    strictEqual(parse("2 - 1"), 1);

    strictEqual(parse("3 * 3"), 9);
    strictEqual(parse("9 / 3"), 3);

    strictEqual(parse("(5 + 6) * 5"), 55);

    strictEqual(parse("11 * 50%"), 5.5);
  });
});
