import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import OrderStatusEnum from '../enums/i-i-s-shop-test-order-status';

export default FlexberryEnum.extend({
  enum: OrderStatusEnum,
  sourceType: 'IIS.ShopTest.OrderStatus'
});
