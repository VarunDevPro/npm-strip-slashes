# strip-slashes

[![version][version-badge]][package]
[![install size][bundle-badge]][packagephobia]
[![downloads][downloads-badge]][npmstats]
[![MIT License][license-badge]][license]
[![Build Status][ci-badge]][gh-actions]
[![PRs Welcome][prs-badge]][prs]

## Purpose

The purpose of this package is to remove multiple slashes which are added during concatenation of the relative or absolute paths in the code.

## Usage

```javascript
var normalizePath = require("strip-slashes");
console.log(normalizePath("//blog///first-post/"));
// output → /blog/first-post/
console.log(normalizePath("https:////npm.im//strip-slashes"));
// output → https://npm.im/strip-slashes
```

## Contributing

Read the contributing [guidelines](https://github.com/VarunDevPro/npm-strip-slashes/blob/master/.github/CONTRIBUTING.md)

## Code of Conduct

We adopt a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/VarunDevPro/npm-strip-slashes/blob/master/.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## License

[MIT][license]

<!-- [license]: http://opensource.org/licenses/MIT -->

[ci-badge]: https://github.com/varundevpro/npm-strip-slashes/workflows/CI/badge.svg?branch=master
[downloads-badge]: https://img.shields.io/npm/dm/strip-slashes.svg?style=flat-square
[npmstats]: http://npm-stat.com/charts.html?package=strip-slashes
[license-badge]: https://img.shields.io/npm/l/strip-slashes.svg?style=flat-square
[license]: https://github.com/VarunDevPro/npm-strip-slashes/blob/master/LICENSE
[bundle-badge]: https://packagephobia.now.sh/badge?p=strip-slashes
[packagephobia]: https://packagephobia.now.sh/result?p=strip-slashes
[gh-actions]: https://github.com/VarunDevPro/npm-strip-slashes/actions
[version-badge]: https://img.shields.io/npm/v/strip-slashes.svg?style=flat-square
[package]: http://npm.im/strip-slashes
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
