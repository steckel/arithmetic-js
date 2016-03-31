import TOKEN_TYPE from "./token-type";

const DIGITS_REGEXP = /[\d\.]/;

/**
 * @typedef {object} ArithmeticToken
 * @property {TOKEN_TYPE} type
 * @property {number} [value] - associated value when type is TOKEN_TYPE.VALUE
 */

/**
 * Returns an Array of ArithmeticTokens for given arithmetic expression.
 *
 * @param {string} str - string arithmetic expression
 * @return {ArithmeticToken[]}
 */
export default function(str) {
  let tokens = [];
  let i = 0;

  while(i < str.length) {
    let character = str[i];

    if (character.match(DIGITS_REGEXP) !== null) {
      let value = "";
      while (true) {
        value += str[i];
        if (i + 1 === str.length) break;
        if (str[i + 1].match(DIGITS_REGEXP) === null) break;
        // continue consuming characters as long as they
        // are there and are digits.
        i++;
      }

      tokens.push({ type: TOKEN_TYPE.VALUE, value: parseFloat(value) });
    } else {
      switch (character) {
        case " ":
          // no-op
          break;
        case "(":
          tokens.push({ type: TOKEN_TYPE.LEFT_PARENTHESIS});
          break;
        case ")":
          tokens.push({ type: TOKEN_TYPE.RIGHT_PARENTHESIS});
          break;
        case "+":
          tokens.push({ type: TOKEN_TYPE.ADDITION});
          break;
        case "-":
          tokens.push({ type: TOKEN_TYPE.SUBTRACTION});
          break;
        case "*":
          tokens.push({ type: TOKEN_TYPE.MULTIPLICATION});
          break;
        case "/":
          tokens.push({ type: TOKEN_TYPE.DIVISION});
          break;
        case "%": {
          // TODO: Consider throwing this into the parser/shunting-yard sort
          if (tokens[tokens.length - 1].type !== TOKEN_TYPE.VALUE) {
            throw new Error("Unsupported use of % (not following a number)");
          }
          let prevNumberToken = tokens.pop();
          tokens.push(
            { type: TOKEN_TYPE.LEFT_PARENTHESIS },
            prevNumberToken,
            { type: TOKEN_TYPE.DIVISION },
            { type: TOKEN_TYPE.VALUE, value: "100" },
            { type: TOKEN_TYPE.RIGHT_PARENTHESIS }
          );
          break;
        }
        default: {
          throw new Error("Unhandled operator");
        }
      }
    }

    i++;
  }

  return tokens;
}
