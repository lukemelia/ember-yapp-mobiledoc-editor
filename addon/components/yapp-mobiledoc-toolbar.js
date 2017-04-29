import Ember from 'ember';
import layout from '../templates/components/yapp-mobiledoc-toolbar';

export default Ember.Component.extend({
  layout,
  classNames: ['YappMobiledocToolbar'],
  tagName: 'div',
  editor: null // passed in
});
