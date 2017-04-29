import MobiledocEditor from 'ember-mobiledoc-editor/components/mobiledoc-editor/component';
import layout from '../templates/components/yapp-mobiledoc-editor';

export default MobiledocEditor.extend({
  layout,
  hasSelection: false,
  didInsertElement(){
    this._super(...arguments);
    let mobiledocEditor = this.get('editor');
    mobiledocEditor.cursorDidChange(this._onCursorDidChange.bind(this, mobiledocEditor));
  },
  _onCursorDidChange(mobiledocEditor) {
    let hasSelection = mobiledocEditor.cursor.hasSelection();
    this.set('hasSelection', hasSelection);
    this.set('selectionRange', hasSelection ? mobiledocEditor.cursor.selection.getRangeAt(0) : null);
  }
});
