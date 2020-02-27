# strip-slashes

[![version](https://img.shields.io/npm/v/strip-slashes.svg?style=flat-square)](http://npm.im/strip-slashes)
[![install size](https://packagephobia.now.sh/badge?p=strip-slashes)](https://packagephobia.now.sh/result?p=strip-slashes)
[![downloads](https://img.shields.io/npm/dm/strip-slashes.svg?style=flat-square)](http://npm-stat.com/charts.html?package=strip-slashes)
[![MIT License](https://img.shields.io/npm/l/strip-slashes.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Build Status](https://github.com/varundevpro/npm-strip-slashes/workflows/CI/badge.svg?branch=master)](https://github.com/VarunDevPro/npm-strip-slashes/actions)

## Purpose

The purpose of this package is to remove multiple slashes which are added during concatenation of the relative or absolute paths in the code.

## Usage

```javascript
var normalizePath = require("./index");
console.log(normalizePath("//blog///first-post/"));
// output → /blog/first-post/
```

## Contributing

Read the contributing [guidelines](https://github.com/VarunDevPro/npm-strip-slashes/blob/master/.github/CONTRIBUTING.md)

### Code of Conduct

We adopt a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/VarunDevPro/npm-strip-slashes/blob/master/.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## License

[MIT](https://github.com/VarunDevPro/npm-strip-slashes/blob/master/LICENSE)
