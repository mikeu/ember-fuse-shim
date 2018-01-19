import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import Fuse from 'fuse';

export default Controller.extend({

  searcher: computed('list', 'opts', function () {
    const list = get(this, 'list');
    const opts = get(this, 'opts');

    return new Fuse(list, opts);
  }),

  searchResults: computed('searcher', 'searchTerm', function () {
    const searcher = get(this, 'searcher');
    const term = get(this, 'searchTerm');

    return searcher.search(term);
  }),

  init () {
    this._super(...arguments);

    set(this, 'list', [
      {n: 'Alice'},
      {n: 'Bob'},
      {n: 'Charlie'},
      {n: 'Alexa'},
      {n: 'Li\'l bub'},
    ]);
    set(this, 'opts', {
      keys: ['n'],
    });
  },

});
