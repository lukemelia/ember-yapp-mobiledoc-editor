import Ember from 'ember';
import layout from '../templates/components/tether-to-range';

let { Component } = Ember;

const TOP_PADDING = 10;

export default Component.extend({
  layout,
  classNames: ['mobiledoc-selection-tether'],
  left: 0,
  top: 0,
  didReceiveAttrs() {
    this._super(...arguments);
    let range = this.get('range');
    if (range) {
      this.set('rect', range.getBoundingClientRect());
    }
  },

  didRender() {
    this._super(...arguments);
    Ember.run.schedule('afterRender', () => {
      let rect = this.get('rect');
      let selectionCenter = rect.left + (rect.width / 2);
      let $el = this.$();
      let left = selectionCenter - ($el.width() / 2);
      let top = rect.top - $el.height() - TOP_PADDING;
      this.$().css({
        position: 'fixed',
        left: `${left}px`,
        top: `${top}px`
      });
    });
  }
});
