var assert = require('assert'),
    Lexer = require('../index').Lexer;

var tokens = Lexer.scan("1+ 1");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "1"},
  {type: "OPERATOR", value: "+"},
  {type: "NUMBER", value: "1"}
]);

var tokens = Lexer.scan("100-1");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "100"},
  {type: "OPERATOR", value: "-"},
  {type: "NUMBER", value: "1"}
]);

var tokens = Lexer.scan("10 - 1.5");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "10"},
  {type: "OPERATOR", value: "-"},
  {type: "NUMBER", value: "1.5"}
]);

var tokens = Lexer.scan("52 * 2");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "52"},
  {type: "OPERATOR", value: "*"},
  {type: "NUMBER", value: "2"}
]);

var tokens = Lexer.scan("5/2");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "5"},
  {type: "OPERATOR", value: "/"},
  {type: "NUMBER", value: "2"}
]);

var tokens = Lexer.scan("100 * 2%");
assert.deepEqual(tokens, [
  {type: "NUMBER", value: "100"},
  {type: "OPERATOR", value: "*"},
  {type: "OPERATOR", value: "("},
  {type: "NUMBER", value: "2"},
  {type: "OPERATOR", value: "/"},
  {type: "NUMBER", value: "100"},
  {type: "OPERATOR", value: ")"}
]);
