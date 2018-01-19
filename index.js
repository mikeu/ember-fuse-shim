'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {

  name: 'ember-fuse-shim',

  included () {
    this._super.included.apply(this, arguments);
    this.import('vendor/fuse.js');
    this.import('vendor/shims/fuse.js');
  },

  treeForVendor (vendorTree) {
    const fusePath = path.dirname(require.resolve('fuse.js'));
    const fuseTree = new Funnel(fusePath, {
      include: [new RegExp(/\.js(?:\.map)?$/)],
    });

    return new MergeTrees([vendorTree, fuseTree]);
  },

};
