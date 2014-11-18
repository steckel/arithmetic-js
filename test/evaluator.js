var assert = require('assert'),
    evaluator = require('../index').evaluator;

// 1 1 + => 2
assert.equal(evaluator([
  {type: "NUMBER", value: "1"},
  {type: "NUMBER", value: "1"},
  {type: "OPERATOR", value: "+", precedence:1}
]), 2);

// 2 1 - => 1
assert.equal(evaluator([
  {type: "NUMBER", value: "2"},
  {type: "NUMBER", value: "1"},
  {type: "OPERATOR", value: "-", precedence:1}
]), 1);

// 5 2 * => 10
assert.equal(evaluator([
  {type: "NUMBER", value: "5"},
  {type: "NUMBER", value: "2"},
  {type: "OPERATOR", value: "*", precedence:2}
]), 10);

// 10 2 / => 5
assert.equal(evaluator([
  {type: "NUMBER", value: "10"},
  {type: "NUMBER", value: "2"},
  {type: "OPERATOR", value: "/", precedence:2}
]), 5);
