import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.магазин.caption'),
          title: i18n.t('forms.application.sitemap.магазин.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.caption'),
            title: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.title'),
            children: [{
              link: 'i-i-s-shop-test-invoice-l',
              caption: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-test-invoice-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-test-invoice-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-shop-test-order-l',
              caption: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-test-order-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-test-order-l.title'),
              icon: 'archive',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.магазин.товары-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.магазин.товары-на-складе.title'),
            children: [{
              link: 'i-i-s-shop-test-product-l',
              caption: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-test-product-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-test-product-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-shop-test-store-house-l',
              caption: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-test-store-house-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-test-store-house-l.title'),
              icon: 'file',
              children: null
            }]
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.данные-о-сотрудниках.caption'),
          title: i18n.t('forms.application.sitemap.данные-о-сотрудниках.title'),
          children: [{
            link: 'i-i-s-shop-test-employee-l',
            caption: i18n.t('forms.application.sitemap.данные-о-сотрудниках.i-i-s-shop-test-employee-l.caption'),
            title: i18n.t('forms.application.sitemap.данные-о-сотрудниках.i-i-s-shop-test-employee-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})