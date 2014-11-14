var assert = require('assert'),
    shuntingYard = require('../index').shuntingYard;

var tokens = shuntingYard([
  {type: "NUMBER", value: "1"},
  {type: "OPERATOR", value: "+", precedence:1},
  {type: "NUMBER", value: "1"}
]);
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "1"},
  {type: "NUMBER", value: "1"},
  {type: "OPERATOR", value: "+", precedence:1}
]);

// 3 - 4 + 5 => 3 4 - 5 +
var tokens = shuntingYard([
  {type: "NUMBER", value: "3"},
  {type: "OPERATOR", value: "-", precedence:1},
  {type: "NUMBER", value: "4"},
  {type: "OPERATOR", value: "+", precedence:1},
  {type: "NUMBER", value: "5"}
]);
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "3"},
  {type: "NUMBER", value: "4"},
  {type: "OPERATOR", value: "-", precedence:1},
  {type: "NUMBER", value: "5"},
  {type: "OPERATOR", value: "+", precedence:1}
]);
