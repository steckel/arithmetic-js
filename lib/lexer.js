var DIGITS_REGEXP = /[\d\.]/;
var OPERATORS_REGEXP = /[\+\-\/\*]/;

module.exports = {
  scan: function(str) {
    var tokens = [];

    var i = 0;
    while(i < str.length) {
      var character = str[i];

      if (character === " ") {
        // ignore spaces
      } else if (character.match(OPERATORS_REGEXP) !== null) {
        // tokenize operators

        tokens.push({
          type: "OPERATOR",
          value: character
        });
      } else if (character.match(DIGITS_REGEXP) !== null) {
        // tokenize digit

        var value = '';
        while (true) {
          value += str[i];
          if (i + 1 === str.length) break;
          if (str[i + 1].match(DIGITS_REGEXP) === null) break;
          // continue consuming characters as long as they
          // are there and are digits.
          i++;
        }

        tokens.push({
          type: "NUMBER",
          value: value
        });
      } else if (character.match(/\%/) !== null) {
        // tokenize "%" as "(n / 100)"

        if (tokens[tokens.length - 1].type !== "NUMBER") {
          throw new Error("Unexpected use of % (not following a number...?)");
        }
        var prevNumberToken = tokens.pop();

        tokens.push({
          type: "OPERATOR",
          value: "("
        },
        prevNumberToken,
        {
          type: "OPERATOR",
          value: "/"
        },
        {
          type: "NUMBER",
          value: "100"
        },
        {
          type: "OPERATOR",
          value: ")"
        });
      } else {
        throw new Error("Unexpected input '" + character +"'");
      }

      i++;
      continue;
    }

    return tokens;
  }
};
