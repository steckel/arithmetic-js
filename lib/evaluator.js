import TOKEN_TYPE from "./token-type";

function popTuple(stack) {
  return { a: stack.pop(), b: stack.pop() };
}

/**
 * Evaluates an array of ArithmeticTokens sorted in Reverse Polish Notation.
 *
 * @param {ArithmeticToken[]} tokens
 * @return {number}
 */
export default function(tokens) {
  let stack = [];

  for (let i=0; i < tokens.length; i++) {
    let token = tokens[i];

    switch (token.type) {
      case TOKEN_TYPE.VALUE:
        stack.push(token.value);
        break;
      case TOKEN_TYPE.ADDITION: {
        let { a, b } = popTuple(stack);
        stack.push(a + b);
        break;
      }
      case TOKEN_TYPE.SUBTRACTION: {
        let { a, b } = popTuple(stack);
        stack.push(b - a);
        break;
      }
      case TOKEN_TYPE.MULTIPLICATION: {
        let { a, b } = popTuple(stack);
        stack.push(a * b);
        break;
      }
      case TOKEN_TYPE.DIVISION: {
        let { a, b } = popTuple(stack);
        stack.push(b / a);
        break;
      }
      default:
        throw new Error("Unexpected TOKEN_TYPE");
    }
  }

  return stack[0];
}
