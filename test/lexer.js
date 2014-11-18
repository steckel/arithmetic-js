var assert = require('assert'),
    lexer = require('../index').lexer;

var tokens = lexer("1+ 1");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "1"},
  {type: "OPERATOR", value: "+", precedence:1},
  {type: "NUMBER", value: "1"}
]);

var tokens = lexer("100-1");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "100"},
  {type: "OPERATOR", value: "-", precedence:1},
  {type: "NUMBER", value: "1"}
]);

var tokens = lexer("10 - 1.5");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "10"},
  {type: "OPERATOR", value: "-", precedence:1},
  {type: "NUMBER", value: "1.5"}
]);

var tokens = lexer("52 * 2");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "52"},
  {type: "OPERATOR", value: "*", precedence:2},
  {type: "NUMBER", value: "2"}
]);

var tokens = lexer("5/2");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "5"},
  {type: "OPERATOR", value: "/", precedence:2},
  {type: "NUMBER", value: "2"}
]);

var tokens = lexer("100 * 2%");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "100"},
  {type: "OPERATOR", value: "*", precedence:2},
  {type: "OPERATOR", value: "("},
  {type: "NUMBER", value: "2"},
  {type: "OPERATOR", value: "/", precedence:2},
  {type: "NUMBER", value: "100"},
  {type: "OPERATOR", value: ")"}
]);

var tokens = lexer("5 * (5+2)");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "5"},
  {type: "OPERATOR", value: "*", precedence:2},
  {type: "OPERATOR", value: "("},
  {type: "NUMBER", value: "5"},
  {type: "OPERATOR", value: "+", precedence:1},
  {type: "NUMBER", value: "2"},
  {type: "OPERATOR", value: ")"}
]);
