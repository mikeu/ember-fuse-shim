# ember-fuse-shim
[![Build Status](https://travis-ci.org/mikeu/ember-fuse-shim.svg?branch=master)](https://travis-ci.org/mikeu/ember-fuse-shim)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A simple Ember addon to provide [Fuse.js](http://fusejs.io/) as an importable
ES6 module in your Ember applications.

## Installation

* `ember install ember-fuse-shim`

## Usage

Anywhere you want to use Fuse.js, simply import it:

```js
// app/some-file.js
import Fuse from 'fuse';
```

For more on how to use Fuse, check out the
[Fuse.js documentation](http://fusejs.io/)

## Issues

Please use the [issue tracker](https://github.com/mikeu/ember-fuse-shim/issues)
to report any problems with the addon.

## Development

* `git clone https://github.com/mikeu/ember-fuse-shim`
* `cd ember-fuse-shim`
* `npm install`

### Running the dummy app for testing

* `ember serve`
* Visit [http://localhost:4200](http://localhost:4200) to see the example.
* Visit [http://localhost:4200/tests](http://localhost:4200/tests) to see the tests.

### Tests from the command line

* `npm test`

This will run `ember try:each` to test the addon against multiple Ember versions.
