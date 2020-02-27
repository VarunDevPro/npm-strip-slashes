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
