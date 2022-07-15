import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  product: DS.belongsTo('i-i-s-shop-test-product', { inverse: null, async: false }),
  storeHouse: DS.belongsTo('i-i-s-shop-test-store-house', { inverse: 'storeProduct', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-shop-test-store-product.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-shop-test-store-product.validations.product.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  storeHouse: {
    descriptionKey: 'models.i-i-s-shop-test-store-product.validations.storeHouse.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('StoreProductE', 'i-i-s-shop-test-store-product', {
    product: belongsTo('i-i-s-shop-test-product', 'Товар', {
      name: attr('~', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'name' }),
    amount: attr('Количество', { index: 2 })
  });
};
