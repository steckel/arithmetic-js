import { deepEqual } from "assert";
import lexer from "../lib/lexer";

describe("lexer", () => {
  it("works", () => {
    deepEqual(lexer("1 + 1"), [
     {type: "VALUE", value: 1},
     {type: "ADDITION"},
     {type: "VALUE", value: 1}
    ]);

    deepEqual(lexer("100-1"), [
     {type: "VALUE", value: 100},
     {type: "SUBTRACTION"},
     {type: "VALUE", value: 1}
    ]);

    deepEqual(lexer("10 - 1.5"), [
     {type: "VALUE", value: 10},
     {type: "SUBTRACTION"},
     {type: "VALUE", value: 1.5}
    ]);

    deepEqual(lexer("52 * 2"), [
     {type: "VALUE", value: 52},
     {type: "MULTIPLICATION"},
     {type: "VALUE", value: 2}
    ]);

    deepEqual(lexer("5/2"), [
     {type: "VALUE", value: 5},
     {type: "DIVISION"},
     {type: "VALUE", value: 2}
    ]);

    deepEqual(lexer("100 * 2%"), [
     {type: "VALUE", value: 100},
     {type: "MULTIPLICATION"},
     {type: "LEFT_PARENTHESIS"},
     {type: "VALUE", value: 2},
     {type: "DIVISION"},
     {type: "VALUE", value: 100},
     {type: "RIGHT_PARENTHESIS"}
    ]);

    deepEqual(lexer("5 * (5+2)"), [
     {type: "VALUE", value: 5},
     {type: "MULTIPLICATION"},
     {type: "LEFT_PARENTHESIS"},
     {type: "VALUE", value: 5},
     {type: "ADDITION"},
     {type: "VALUE", value: 2},
     {type: "RIGHT_PARENTHESIS"}
    ]);
  });
});
