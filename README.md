# arithmetic-js

Basic arithmetic without `eval()`.

```javascript
import arithmetic from "arithmetic-js"

arithmetic("100 * 13 + (75% - 0.05) * 10 + 30"); // 1337
```

`arithmetic-js` was built primarily for use behind a proprietary
[css-calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) polyfill to
satisfy a [Content Security Policy](http://content-security-policy.com/) which
banned the use of `eval()`.

It can be useful for evaluating basic arithmetic expressions from dynamic
sources.

## differences between `eval()` and `arithmetic-js`

The primary difference between `eval()` and `arithmetic-js` is that
`arithmetic-js` is not intended to execute arbitrary JavaScript.

Other than that, use of the `%` is interpreted as a percentage operand and not
modulo.

```javascript
arithmetic("100 * 13 + (75% - 0.05) * 10 + 30");
// 100 * 13 + (.75 - 0.05) * 10 + 30 === 1337

eval("100 * 13 + (75% - 0.05) * 10 + 30");
// 100 * 13 + (75 % -0.05) * 10 + 30 === 1330.5
```
