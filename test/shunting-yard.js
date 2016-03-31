import { deepEqual } from "assert";
import shuntingYard from "../lib/shunting-yard";

describe("Shunting Yard", () => {
  it("1 + 1 => 1 1+", () => {
    var tokens = shuntingYard([
      {type: "VALUE", value: 1},
      {type: "ADDITION"},
      {type: "VALUE", value: 1}
    ]);
    deepEqual(tokens, [
      {type: "VALUE", value: 1},
      {type: "VALUE", value: 1},
      {type: "ADDITION"}
    ]);
  });

  it("3 - 4 + 5 => 3 4 - 5 +", () => {
    var tokens = shuntingYard([
      {type: "VALUE", value: 3},
      {type: "SUBTRACTION"},
      {type: "VALUE", value: 4},
      {type: "ADDITION"},
      {type: "VALUE", value: 5}
    ]);
    deepEqual(tokens, [
      {type: "VALUE", value: 3},
      {type: "VALUE", value: 4},
      {type: "SUBTRACTION"},
      {type: "VALUE", value: 5},
      {type: "ADDITION"}
    ]);
  });

  it("3 - 4 * 5 => 3 4 5 * -", () => {
    var tokens = shuntingYard([
      {type: "VALUE", value: 3},
      {type: "SUBTRACTION"},
      {type: "VALUE", value: 4},
      {type: "MULTIPLICATION"},
      {type: "VALUE", value: 5}
    ]);
    deepEqual(tokens, [
      {type: "VALUE", value: 3},
      {type: "VALUE", value: 4},
      {type: "VALUE", value: 5},
      {type: "MULTIPLICATION"},
      {type: "SUBTRACTION"}
    ]);
  });

  it("(3 - 4) * 5 => 3 4 - 5 *", () => {
    var tokens = shuntingYard([
      {type: "LEFT_PARENTHESIS"},
      {type: "VALUE", value: 3},
      {type: "SUBTRACTION"},
      {type: "VALUE", value: 4},
      {type: "RIGHT_PARENTHESIS"},
      {type: "MULTIPLICATION"},
      {type: "VALUE", value: 5}
    ]);

    deepEqual(tokens, [
      {type: "VALUE", value: 3},
      {type: "VALUE", value: 4},
      {type: "SUBTRACTION"},
      {type: "VALUE", value: 5},
      {type: "MULTIPLICATION"}
    ]);
  });
});
