import Ember from 'ember';
import layout from '../templates/components/yapp-mobiledoc-link-prompt';

let { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['YappMobiledocLinkPrompt', 'medium-toolbar-arrow-under'],
  didInsertElement() {
    this.$('input').focus();
  }
});
