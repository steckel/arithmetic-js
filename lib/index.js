import lexer from "./lexer";
import shuntingYard from "./shunting-yard";
import evaluator from "./evaluator";

/**
 * Evaluates given arithmetic expression and returns the result.
 *
 * @param {string} arithmeticExpression - e.g. (10% + 10/2 ) * 17
 * @return {number}
 */
export default function parse(arithmeticExpression) {
  return evaluator(shuntingYard(lexer(arithmeticExpression)));
}
