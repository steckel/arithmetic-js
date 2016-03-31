import TOKEN_TYPE from "./token-type";

const PRECEDENCE_MAP = {
  [TOKEN_TYPE.SUBTRACTION]: 1,
  [TOKEN_TYPE.ADDITION]: 1,
  [TOKEN_TYPE.MULTIPLICATION]: 2,
  [TOKEN_TYPE.DIVISION]: 2
};

/**
 * Sort the input using "Shunting-Yard" algorithm: return input sorted in
 * Reverse Polish Notation order.
 *
 * @param {ArithmeticToken[]} tokens
 * @return {ArithmeticToken[]}
 */
export default function(tokens) {
  let output = [];
  let operators = [];

  for (let i=0; i < tokens.length; i++) {
    let token = tokens[i];

    switch (token.type) {
      case TOKEN_TYPE.VALUE:
        output.push(token);
        break;
      case TOKEN_TYPE.LEFT_PARENTHESIS:
        operators.push(token);
        break;
      case TOKEN_TYPE.RIGHT_PARENTHESIS:
        while (true) {
          if (operators.length === 0) {
            throw new Error("mismatched parenthesis");
          } else if(operators[operators.length - 1].type === TOKEN_TYPE.LEFT_PARENTHESIS) {
            operators.pop();
            break;
          } else {
            output.push(operators.pop());
          }
        }
        break;
      case TOKEN_TYPE.ADDITION:
      case TOKEN_TYPE.SUBTRACTION:
      case TOKEN_TYPE.MULTIPLICATION:
      case TOKEN_TYPE.DIVISION:
        if (operators.length > 0) {
          let tokenPrecedence = PRECEDENCE_MAP[token.type];
          let lastOperatorPrecedence = PRECEDENCE_MAP[operators[operators.length - 1].type];
          // operators precedence is equal to the other one on
          if (lastOperatorPrecedence === tokenPrecedence) output.push(operators.pop());
        }
        operators.push(token);
        break;
      default:
        throw new Error(`Unrecognized TOKEN_TYPE: ${token.type}`);
    }
  }

  while (operators.length > 0) {
    output.push(operators.pop());
  }

  return output;
}
