import { Serializer as StoreHouseSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-test-store-house';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(StoreHouseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
