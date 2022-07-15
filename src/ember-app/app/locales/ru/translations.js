import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISShopTestDocumentLForm from './forms/i-i-s-shop-test-document-l';
import IISShopTestEmployeeLForm from './forms/i-i-s-shop-test-employee-l';
import IISShopTestInvoiceLForm from './forms/i-i-s-shop-test-invoice-l';
import IISShopTestOrderLForm from './forms/i-i-s-shop-test-order-l';
import IISShopTestProductLForm from './forms/i-i-s-shop-test-product-l';
import IISShopTestStoreHouseLForm from './forms/i-i-s-shop-test-store-house-l';
import IISShopTestDocumentEForm from './forms/i-i-s-shop-test-document-e';
import IISShopTestEmployeeEForm from './forms/i-i-s-shop-test-employee-e';
import IISShopTestInvoiceEForm from './forms/i-i-s-shop-test-invoice-e';
import IISShopTestOrderEForm from './forms/i-i-s-shop-test-order-e';
import IISShopTestProductEForm from './forms/i-i-s-shop-test-product-e';
import IISShopTestStoreHouseEForm from './forms/i-i-s-shop-test-store-house-e';
import IISShopTestDocumentModel from './models/i-i-s-shop-test-document';
import IISShopTestEmployeeModel from './models/i-i-s-shop-test-employee';
import IISShopTestInvoiceItemModel from './models/i-i-s-shop-test-invoice-item';
import IISShopTestInvoiceModel from './models/i-i-s-shop-test-invoice';
import IISShopTestOrderItemModel from './models/i-i-s-shop-test-order-item';
import IISShopTestOrderModel from './models/i-i-s-shop-test-order';
import IISShopTestProductModel from './models/i-i-s-shop-test-product';
import IISShopTestStoreHouseModel from './models/i-i-s-shop-test-store-house';
import IISShopTestStoreProductModel from './models/i-i-s-shop-test-store-product';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-shop-test-document': IISShopTestDocumentModel,
    'i-i-s-shop-test-employee': IISShopTestEmployeeModel,
    'i-i-s-shop-test-invoice-item': IISShopTestInvoiceItemModel,
    'i-i-s-shop-test-invoice': IISShopTestInvoiceModel,
    'i-i-s-shop-test-order-item': IISShopTestOrderItemModel,
    'i-i-s-shop-test-order': IISShopTestOrderModel,
    'i-i-s-shop-test-product': IISShopTestProductModel,
    'i-i-s-shop-test-store-house': IISShopTestStoreHouseModel,
    'i-i-s-shop-test-store-product': IISShopTestStoreProductModel
  },

  'application-name': 'Магазин',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Магазин',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Магазин',
          title: 'Shop'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        магазин: {
          caption: 'Магазин',
          title: 'Магазин',
          'информация-о-заказах': {
            caption: 'Информация о заказах',
            title: 'Информация о заказах',
            'i-i-s-shop-test-invoice-l': {
              caption: 'Накладные',
              title: ''
            },
            'i-i-s-shop-test-order-l': {
              caption: 'Заказы',
              title: ''
            }
          },
          'товары-на-складе': {
            caption: 'Товары на складе',
            title: 'Товары на складе',
            'i-i-s-shop-test-product-l': {
              caption: 'Товары',
              title: ''
            },
            'i-i-s-shop-test-store-house-l': {
              caption: 'Склады',
              title: ''
            }
          }
        },
        'данные-о-сотрудниках': {
          caption: 'Данные о сотрудниках',
          title: 'Данные о сотрудниках',
          'i-i-s-shop-test-employee-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-shop-test-document-l': IISShopTestDocumentLForm,
    'i-i-s-shop-test-employee-l': IISShopTestEmployeeLForm,
    'i-i-s-shop-test-invoice-l': IISShopTestInvoiceLForm,
    'i-i-s-shop-test-order-l': IISShopTestOrderLForm,
    'i-i-s-shop-test-product-l': IISShopTestProductLForm,
    'i-i-s-shop-test-store-house-l': IISShopTestStoreHouseLForm,
    'i-i-s-shop-test-document-e': IISShopTestDocumentEForm,
    'i-i-s-shop-test-employee-e': IISShopTestEmployeeEForm,
    'i-i-s-shop-test-invoice-e': IISShopTestInvoiceEForm,
    'i-i-s-shop-test-order-e': IISShopTestOrderEForm,
    'i-i-s-shop-test-product-e': IISShopTestProductEForm,
    'i-i-s-shop-test-store-house-e': IISShopTestStoreHouseEForm
  },

});

export default translations;
