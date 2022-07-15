import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import OrderStatusEnum from '../../../enums/i-i-s-shop-test-order-status';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-test-order-status', { defaultValue: OrderStatusEnum.New }),
  shipmentDate: DS.attr('date'),
  paymentDate: DS.attr('date'),
  totalSum: DS.attr('decimal'),
  manager: DS.belongsTo('i-i-s-shop-test-employee', { inverse: null, async: false }),
  orderItem: DS.hasMany('i-i-s-shop-test-order-item', { inverse: 'order', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-test-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDate: {
    descriptionKey: 'models.i-i-s-shop-test-order.validations.shipmentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  paymentDate: {
    descriptionKey: 'models.i-i-s-shop-test-order.validations.paymentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-test-order.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  manager: {
    descriptionKey: 'models.i-i-s-shop-test-order.validations.manager.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderItem: {
    descriptionKey: 'models.i-i-s-shop-test-order.validations.orderItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-shop-test-document'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrderE', 'i-i-s-shop-test-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    manager: belongsTo('i-i-s-shop-test-employee', 'Менеджер', {
      lastName: attr('~', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'lastName' }),
    totalSum: attr('Стоимость заказа', { index: 5 }),
    paymentDate: attr('Дата оплаты', { index: 6 }),
    shipmentDate: attr('Дата отгрузки', { index: 7 }),
    orderItem: hasMany('i-i-s-shop-test-order-item', 'Содержимое заказа', {
      product: belongsTo('i-i-s-shop-test-product', '~', {
        name: attr('~', { index: 0, hidden: true })
      }, { index: 1, hidden: true }),
      amount: attr('Количество', { index: 2 }),
      priceWTaxes: attr('Цена с налогом', { index: 3 }),
      totalSum: attr('Сумма по позиции', { index: 4 })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-shop-test-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    manager: belongsTo('i-i-s-shop-test-employee', 'Менеджер', {
      lastName: attr('Менеджер', { index: 3 })
    }, { index: -1, hidden: true }),
    totalSum: attr('Стоимость заказа', { index: 4 }),
    paymentDate: attr('Дата оплаты', { index: 5 }),
    shipmentDate: attr('Дата отгрузки', { index: 6 }),
    orderItem: hasMany('i-i-s-shop-test-order-item', '', {
      amount: attr('~', { index: 0, hidden: true }),
      priceWTaxes: attr('~', { index: 1, hidden: true })
    })
  });
};
