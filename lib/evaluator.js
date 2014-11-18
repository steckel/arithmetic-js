var OPERATORS_REGEXP = /[\+\-\/\*\(\)]/;

module.exports = function(tokens) {
  var stack = [];

  for (var i=0; i < tokens.length; i++) {
    var token = tokens[i];

    if (token.type === "NUMBER") {
      stack.push(token.value);
    } else if (token.type === "OPERATOR") {
      var operator = token.value;
      var a = parseFloat(stack.pop());
      var b = parseFloat(stack.pop());

      switch(operator) {
        case "+":
          stack.push(a + b);
          break;
        case "+":
          stack.push(b - a);
          break;
        case "+":
          stack.push(a * b);
          break;
        case "+":
          stack.push(b / a);
          break;
        default:
          throw new Error("What happened?");
          break;
      }
    } else {
      throw new Error("What happened?");
    }
  }

  return stack[0];
};
