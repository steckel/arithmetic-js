import { strictEqual } from "assert";
import evaluator from "../lib/evaluator";

describe("Evaluator", () => {
  describe("evaluates a sequence of tokens", () => {
    it("for addition", () => {
      strictEqual(evaluator([
        {type: "VALUE", value: 1},
        {type: "VALUE", value: 1},
        {type: "ADDITION"}
      ]), 2);
    });

    it("for subtraction", () => {
      strictEqual(evaluator([
        {type: "VALUE", value: 2},
        {type: "VALUE", value: 1},
        {type: "SUBTRACTION"}
      ]), 1);
    });

    it("for multiplication", () => {
      strictEqual(evaluator([
        {type: "VALUE", value: 5},
        {type: "VALUE", value: 2},
        {type: "MULTIPLICATION"}
      ]), 10);
    });

    it("for division", () => {
      strictEqual(evaluator([
        {type: "VALUE", value: 10},
        {type: "VALUE", value: 2},
        {type: "DIVISION"}
      ]), 5);
    });
  });
});
