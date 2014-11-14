module.exports = function(tokens) {
  var output = [];
  var operators = [];

  for (var i=0; i < tokens.length; i++) {
    var token = tokens[i];
    if (token.type === "NUMBER") {
      // token is a number
      output.push(token);

    } else if (token.type === "OPERATOR") {
      if (token.value === ")") {
        // if token is a closing paren
        while (true) {
          if (operators.length === 0) {
            throw new Error("mismatched parens...");
          } else if(operators[operators.length - 1].value === "(") {
            operators.pop();
            break;
          } else {
            output.push(operators.pop());
          }
        }
      } else {
        // token is an operator
        if (!!operators.length &&
            (operators[operators.length - 1].precedence === token.precedence)) {
          // operators precedence is equal to the other one on
          output.push(operators.pop());
        }
        operators.push(token);
      }
    } else {
      throw new Error("What the fuck was that?");
    }
  }

  while (operators.length > 0) {
    output.push(operators.pop());
  }

  return output;
};
