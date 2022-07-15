import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import InvoiceStatusEnum from '../../../enums/i-i-s-shop-test-invoice-status';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-test-invoice-status', { defaultValue: InvoiceStatusEnum.New }),
  shipmentDateTime: DS.attr('date'),
  totalSum: DS.attr('decimal'),
  totalWeight: DS.attr('decimal'),
  note: DS.attr('string'),
  customerName: DS.attr('string'),
  order: DS.belongsTo('i-i-s-shop-test-order', { inverse: null, async: false }),
  responsiblePerson: DS.belongsTo('i-i-s-shop-test-employee', { inverse: null, async: false }),
  invoiceItem: DS.hasMany('i-i-s-shop-test-invoice-item', { inverse: 'invoice', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDateTime: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.shipmentDateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalWeight: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.totalWeight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  note: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.note.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customerName: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.customerName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.order.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  responsiblePerson: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.responsiblePerson.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoiceItem: {
    descriptionKey: 'models.i-i-s-shop-test-invoice.validations.invoiceItem.__caption__',
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
  modelClass.defineProjection('InvoiceE', 'i-i-s-shop-test-invoice', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    order: belongsTo('i-i-s-shop-test-order', '~', {
      number: attr('~', { index: 3, hidden: true })
    }, { index: 4, hidden: true }),
    customerName: attr('Получатель', { index: 5 }),
    totalSum: attr('Сумма заказа', { index: 6 }),
    totalWeight: attr('Вес заказа (кг)', { index: 7 }),
    note: attr('Примечание', { index: 8 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 9 }),
    responsiblePerson: belongsTo('i-i-s-shop-test-employee', '~', {
      lastName: attr('~', { index: 10, hidden: true })
    }, { index: 11, hidden: true }),
    invoiceItem: hasMany('i-i-s-shop-test-invoice-item', 'Список товаров к выдаче', {
      product: belongsTo('i-i-s-shop-test-product', '~', {
        name: attr('~', { index: 0, hidden: true })
      }, { index: 1, hidden: true }),
      amount: attr('Количество', { index: 2 }),
      weight: attr('Вес (кг)', { index: 3 }),
      price: attr('Цена', { index: 4 }),
      totalSum: attr('Сумма по позиции', { index: 5 })
    })
  });

  modelClass.defineProjection('InvoiceL', 'i-i-s-shop-test-invoice', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    order: belongsTo('i-i-s-shop-test-order', 'Номер заказа', {
      number: attr('Номер заказа', { index: 3 })
    }, { index: -1, hidden: true }),
    customerName: attr('Получатель', { index: 4 }),
    totalSum: attr('Сумма заказа', { index: 5 }),
    totalWeight: attr('Вес заказа (кг)', { index: 6 }),
    note: attr('Примечание', { index: 7 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 8 }),
    responsiblePerson: belongsTo('i-i-s-shop-test-employee', 'Товар выдал', {
      lastName: attr('Товар выдал', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
