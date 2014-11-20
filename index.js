var lexer = require('./lib/lexer'),
    shuntingYard = require('./lib/shunting-yard'),
    evaluator = require('./lib/evaluator');

function parse(mathString) {
  var tokens = lexer(mathString);
  var rvpnTokens = shuntingYard(tokens);
  return evaluator(rvpnTokens);
}

parse.lexer = lexer;
parse.shuntingYard = shuntingYard;
parse.evaluator = evaluator;

module.exports = parse;
