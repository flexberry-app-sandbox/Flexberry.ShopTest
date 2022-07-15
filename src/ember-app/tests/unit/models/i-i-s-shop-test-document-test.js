import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shop-test-document', 'Unit | Model | i-i-s-shop-test-document', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-shop-test-document',
    'model:i-i-s-shop-test-employee',
    'model:i-i-s-shop-test-invoice-item',
    'model:i-i-s-shop-test-invoice',
    'model:i-i-s-shop-test-order-item',
    'model:i-i-s-shop-test-order',
    'model:i-i-s-shop-test-product',
    'model:i-i-s-shop-test-store-house',
    'model:i-i-s-shop-test-store-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
