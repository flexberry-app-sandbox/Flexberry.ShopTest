import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shop-test-invoice', 'Unit | Serializer | i-i-s-shop-test-invoice', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-shop-test-invoice',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-shop-test-invoice-status',
    'transform:i-i-s-shop-test-order-status',
    'transform:i-i-s-shop-test-position-list',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
