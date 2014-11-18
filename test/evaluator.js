var assert = require('assert'),
    evaluator = require('../index').evaluator;

// 1 1 + => 2
assert.equal(evaluator([
  {type: "NUMBER", value: "1"},
  {type: "NUMBER", value: "1"},
  {type: "OPERATOR", value: "+", precedence:1}
]), 2);
