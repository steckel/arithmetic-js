var assert = require('assert'),
    parse = require('../index');

assert(parse("1 + 1") === 2);
assert(parse("2 - 1") === 1);

assert(parse("3 * 3") === 9);
assert(parse("9 / 3") === 3);

assert(parse("(5 + 6) * 5") === 55);

assert(parse("11 * 50%") === 5.5);
