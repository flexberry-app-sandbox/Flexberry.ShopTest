import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-shop-test-document-l');
  this.route('i-i-s-shop-test-document-e',
  { path: 'i-i-s-shop-test-document-e/:id' });
  this.route('i-i-s-shop-test-document-e.new',
  { path: 'i-i-s-shop-test-document-e/new' });
  this.route('i-i-s-shop-test-employee-l');
  this.route('i-i-s-shop-test-employee-e',
  { path: 'i-i-s-shop-test-employee-e/:id' });
  this.route('i-i-s-shop-test-employee-e.new',
  { path: 'i-i-s-shop-test-employee-e/new' });
  this.route('i-i-s-shop-test-invoice-l');
  this.route('i-i-s-shop-test-invoice-e',
  { path: 'i-i-s-shop-test-invoice-e/:id' });
  this.route('i-i-s-shop-test-invoice-e.new',
  { path: 'i-i-s-shop-test-invoice-e/new' });
  this.route('i-i-s-shop-test-order-l');
  this.route('i-i-s-shop-test-order-e',
  { path: 'i-i-s-shop-test-order-e/:id' });
  this.route('i-i-s-shop-test-order-e.new',
  { path: 'i-i-s-shop-test-order-e/new' });
  this.route('i-i-s-shop-test-product-l');
  this.route('i-i-s-shop-test-product-e',
  { path: 'i-i-s-shop-test-product-e/:id' });
  this.route('i-i-s-shop-test-product-e.new',
  { path: 'i-i-s-shop-test-product-e/new' });
  this.route('i-i-s-shop-test-store-house-l');
  this.route('i-i-s-shop-test-store-house-e',
  { path: 'i-i-s-shop-test-store-house-e/:id' });
  this.route('i-i-s-shop-test-store-house-e.new',
  { path: 'i-i-s-shop-test-store-house-e/new' });
});

export default Router;
