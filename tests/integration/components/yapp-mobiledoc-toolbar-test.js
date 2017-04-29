import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('yapp-mobiledoc-toolbar', 'Integration | Component | yapp mobiledoc toolbar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{yapp-mobiledoc-toolbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#yapp-mobiledoc-toolbar}}
      template block text
    {{/yapp-mobiledoc-toolbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
