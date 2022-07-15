import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number', { defaultValue: 1 }),
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  eMail: DS.attr('string'),
  position: DS.attr('i-i-s-shop-test-position-list')
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-shop-test-employee.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-shop-test-employee.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  firstName: {
    descriptionKey: 'models.i-i-s-shop-test-employee.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-shop-test-employee.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-shop-test-employee.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  eMail: {
    descriptionKey: 'models.i-i-s-shop-test-employee.validations.eMail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  position: {
    descriptionKey: 'models.i-i-s-shop-test-employee.validations.position.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EmployeeE', 'i-i-s-shop-test-employee', {
    number: attr('Табельный номер', { index: 0 }),
    lastName: attr('Фамилия', { index: 1 }),
    firstName: attr('Имя', { index: 2 }),
    middleName: attr('Отчество', { index: 3 }),
    phoneNumber: attr('Телефон', { index: 4 }),
    eMail: attr('Электронная почта', { index: 5 }),
    position: attr('Должность', { index: 6 })
  });

  modelClass.defineProjection('EmployeeL', 'i-i-s-shop-test-employee', {
    number: attr('Табельный номер', { index: 0 }),
    lastName: attr('Фамилия', { index: 1 }),
    firstName: attr('Имя', { index: 2 }),
    middleName: attr('Отчество', { index: 3 }),
    phoneNumber: attr('Телефон', { index: 4 }),
    eMail: attr('Электронная почта', { index: 5 }),
    position: attr('Должность', { index: 6 })
  });
};
