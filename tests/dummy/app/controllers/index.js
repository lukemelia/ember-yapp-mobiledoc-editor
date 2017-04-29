import Ember from 'ember';
import { MOBILEDOC_VERSION } from 'mobiledoc-kit/renderers/mobiledoc';

const EMPTY_MOBILEDOC = {
  version: MOBILEDOC_VERSION,
  markups: [],
  atoms: [],
  cards: [],
  sections: []
};

export default Ember.Controller.extend({
  init(){
    this._super(...arguments);
    this.set('myMobileDoc', EMPTY_MOBILEDOC);
  },
  myMobileDoc: null,
  actions: {
    mobiledocWasUpdated(val) {
      this.set('myMobileDoc', val);
    }
  }
});
