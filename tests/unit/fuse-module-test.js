import { module, test } from 'qunit';
import Fuse from 'fuse';

module('Fuse.js as an ES6 module');

test('it exists', function (assert) {
  assert.ok(Fuse);
});

test('it provides the expected constructor', function (assert) {
  assert.ok(new Fuse([], {}));
});
