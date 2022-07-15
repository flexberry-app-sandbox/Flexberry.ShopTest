'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-shop-test-document-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s shop test document l');

  (0, _qunit.test)('testing i-i-s-shop-test-document-l', function (assert) {
    var _this = this;

    visit('/i-i-s-shop-test-document-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-shop-test-employee-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s shop test employee l');

  (0, _qunit.test)('testing i-i-s-shop-test-employee-l', function (assert) {
    var _this = this;

    visit('/i-i-s-shop-test-employee-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-shop-test-invoice-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s shop test invoice l');

  (0, _qunit.test)('testing i-i-s-shop-test-invoice-l', function (assert) {
    var _this = this;

    visit('/i-i-s-shop-test-invoice-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-shop-test-order-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s shop test order l');

  (0, _qunit.test)('testing i-i-s-shop-test-order-l', function (assert) {
    var _this = this;

    visit('/i-i-s-shop-test-order-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-shop-test-product-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s shop test product l');

  (0, _qunit.test)('testing i-i-s-shop-test-product-l', function (assert) {
    var _this = this;

    visit('/i-i-s-shop-test-product-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-shop-test-store-house-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s shop test store house l');

  (0, _qunit.test)('testing i-i-s-shop-test-store-house-l', function (assert) {
    var _this = this;

    visit('/i-i-s-shop-test-store-house-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-document-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-document-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-document-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-document-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-document-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-document-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-employee-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-employee-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-employee-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-employee-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-employee-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-employee-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-invoice-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-invoice-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-invoice-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-invoice-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-invoice-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-invoice-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-order-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-order-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-order-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-order-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-order-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-order-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-product-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-product-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-product-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-product-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-product-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-product-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-store-house-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-store-house-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-store-house-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-store-house-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-shop-test-store-house-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-shop-test-store-house-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-shop-test-invoice-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-shop-test-invoice-status.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-shop-test-order-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-shop-test-order-status.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-shop-test-position-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-shop-test-position-list.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-document-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-document-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-document-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-document-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-employee-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-employee-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-employee-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-employee-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-invoice-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-invoice-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-invoice-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-invoice-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-order-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-order-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-order-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-order-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-product-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-product-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-product-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-product-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-store-house-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-store-house-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-shop-test-store-house-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-shop-test-store-house-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-document.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-document.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-employee.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-invoice-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-invoice-item.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-invoice.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-order-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-order-item.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-order.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-order.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-product.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-store-house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-store-house.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-shop-test-store-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-shop-test-store-product.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-document-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-document-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-document-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-document-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-employee-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-employee-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-employee-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-employee-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-invoice-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-invoice-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-invoice-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-invoice-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-order-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-order-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-order-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-order-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-product-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-product-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-product-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-product-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-store-house-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-store-house-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-shop-test-store-house-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-shop-test-store-house-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-document.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-document.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-employee.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-invoice-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-invoice-item.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-invoice.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-order-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-order-item.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-order.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-order.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-product.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-store-house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-store-house.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-shop-test-store-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-shop-test-store-product.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-document.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-document.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-employee.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-invoice-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-invoice-item.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-invoice.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-order-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-order-item.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-order.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-order.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-product.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-store-house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-store-house.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-shop-test-store-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-shop-test-store-product.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-document-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-document-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-document.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-document.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-employee-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-employee-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-employee.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-invoice-item-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-invoice-item-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-invoice-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-invoice-item.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-invoice-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-invoice-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-invoice.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-order-item-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-order-item-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-order-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-order-item.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-order-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-order-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-order.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-order.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-product-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-product-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-product.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-store-house-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-store-house-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-store-house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-store-house.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-store-product-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-store-product-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-shop-test-store-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-shop-test-store-product.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-document.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-document.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-employee.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-invoice-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-invoice-item.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-invoice.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-order-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-order-item.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-order.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-order.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-product.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-store-house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-store-house.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-shop-test-store-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-shop-test-store-product.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-document-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-document-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-document-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-document-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-document-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-document-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-employee-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-employee-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-employee-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-employee-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-employee-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-employee-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-invoice-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-invoice-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-invoice-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-invoice-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-invoice-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-invoice-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-order-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-order-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-order-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-order-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-order-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-order-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-product-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-product-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-product-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-product-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-product-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-product-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-store-house-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-store-house-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-store-house-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-store-house-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-shop-test-store-house-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-shop-test-store-house-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-document-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-document-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-document.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-document.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-employee-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-employee-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-employee.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-invoice-item-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-invoice-item-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-invoice-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-invoice-item.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-invoice-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-invoice-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-invoice.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-order-item-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-order-item-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-order-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-order-item.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-order-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-order-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-order.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-order.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-product-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-product-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-product.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-store-house-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-store-house-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-store-house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-store-house.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-store-product-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-store-product-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-shop-test-store-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-shop-test-store-product.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-shop-test-invoice-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-shop-test-invoice-status.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-shop-test-order-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-shop-test-order-status.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-shop-test-position-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-shop-test-position-list.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-shop-test-document-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-shop-test-document-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-shop-test-employee-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-shop-test-employee-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-shop-test-invoice-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-shop-test-invoice-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-shop-test-order-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-shop-test-order-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-shop-test-product-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-shop-test-product-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-shop-test-store-house-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-shop-test-store-house-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-document-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-document-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-document-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-document-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-employee-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-employee-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-employee-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-employee-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-invoice-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-invoice-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-invoice-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-invoice-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-order-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-order-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-order-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-order-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-product-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-product-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-product-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-product-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-store-house-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-store-house-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-shop-test-store-house-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-shop-test-store-house-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-document-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-document-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-employee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-employee-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-invoice-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-invoice-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-invoice-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-invoice-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-order-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-order-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-order-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-order-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-product-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-store-house-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-store-house-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-shop-test-store-product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-shop-test-store-product-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-document-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-document-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-document-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-document-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-employee-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-employee-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-employee-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-employee-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-invoice-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-invoice-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-invoice-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-invoice-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-order-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-order-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-order-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-order-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-product-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-product-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-product-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-product-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-store-house-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-store-house-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-shop-test-store-house-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-shop-test-store-house-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-document-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-document-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-employee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-employee-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-invoice-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-invoice-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-invoice-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-invoice-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-order-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-order-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-order-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-order-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-product-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-store-house-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-store-house-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-shop-test-store-product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-shop-test-store-product-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-document-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-document-e', 'Unit | Controller | i-i-s-shop-test-document-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-document-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-document-l', 'Unit | Controller | i-i-s-shop-test-document-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-employee-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-employee-e', 'Unit | Controller | i-i-s-shop-test-employee-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-employee-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-employee-l', 'Unit | Controller | i-i-s-shop-test-employee-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-invoice-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-invoice-e', 'Unit | Controller | i-i-s-shop-test-invoice-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-invoice-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-invoice-l', 'Unit | Controller | i-i-s-shop-test-invoice-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-order-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-order-e', 'Unit | Controller | i-i-s-shop-test-order-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-order-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-order-l', 'Unit | Controller | i-i-s-shop-test-order-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-product-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-product-e', 'Unit | Controller | i-i-s-shop-test-product-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-product-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-product-l', 'Unit | Controller | i-i-s-shop-test-product-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-store-house-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-store-house-e', 'Unit | Controller | i-i-s-shop-test-store-house-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-shop-test-store-house-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-shop-test-store-house-l', 'Unit | Controller | i-i-s-shop-test-store-house-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-document-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-document', 'Unit | Model | i-i-s-shop-test-document', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-employee-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-employee', 'Unit | Model | i-i-s-shop-test-employee', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-invoice-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-invoice-item', 'Unit | Model | i-i-s-shop-test-invoice-item', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-invoice-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-invoice', 'Unit | Model | i-i-s-shop-test-invoice', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-order-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-order-item', 'Unit | Model | i-i-s-shop-test-order-item', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-order-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-order', 'Unit | Model | i-i-s-shop-test-order', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-product-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-product', 'Unit | Model | i-i-s-shop-test-product', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-store-house-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-store-house', 'Unit | Model | i-i-s-shop-test-store-house', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-shop-test-store-product-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-store-product', 'Unit | Model | i-i-s-shop-test-store-product', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-document-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-document-e', 'Unit | Route | i-i-s-shop-test-document-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-document-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-document-l', 'Unit | Route | i-i-s-shop-test-document-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-employee-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-employee-e', 'Unit | Route | i-i-s-shop-test-employee-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-employee-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-employee-l', 'Unit | Route | i-i-s-shop-test-employee-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-invoice-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-invoice-e', 'Unit | Route | i-i-s-shop-test-invoice-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-invoice-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-invoice-l', 'Unit | Route | i-i-s-shop-test-invoice-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-order-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-order-e', 'Unit | Route | i-i-s-shop-test-order-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-order-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-order-l', 'Unit | Route | i-i-s-shop-test-order-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-product-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-product-e', 'Unit | Route | i-i-s-shop-test-product-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-product-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-product-l', 'Unit | Route | i-i-s-shop-test-product-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-store-house-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-store-house-e', 'Unit | Route | i-i-s-shop-test-store-house-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-shop-test-store-house-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-shop-test-store-house-l', 'Unit | Route | i-i-s-shop-test-store-house-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-document-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-document', 'Unit | Serializer | i-i-s-shop-test-document', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-document', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-employee-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-employee', 'Unit | Serializer | i-i-s-shop-test-employee', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-employee', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-invoice-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-invoice-item', 'Unit | Serializer | i-i-s-shop-test-invoice-item', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-invoice-item', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-invoice-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-invoice', 'Unit | Serializer | i-i-s-shop-test-invoice', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-invoice', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-order-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-order-item', 'Unit | Serializer | i-i-s-shop-test-order-item', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-order-item', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-order-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-order', 'Unit | Serializer | i-i-s-shop-test-order', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-order', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-product-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-product', 'Unit | Serializer | i-i-s-shop-test-product', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-product', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-store-house-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-store-house', 'Unit | Serializer | i-i-s-shop-test-store-house', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-store-house', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-shop-test-store-product-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-shop-test-store-product', 'Unit | Serializer | i-i-s-shop-test-store-product', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-shop-test-store-product', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-shop-test-invoice-status', 'transform:i-i-s-shop-test-order-status', 'transform:i-i-s-shop-test-position-list', 'model:i-i-s-shop-test-document', 'model:i-i-s-shop-test-employee', 'model:i-i-s-shop-test-invoice-item', 'model:i-i-s-shop-test-invoice', 'model:i-i-s-shop-test-order-item', 'model:i-i-s-shop-test-order', 'model:i-i-s-shop-test-product', 'model:i-i-s-shop-test-store-house', 'model:i-i-s-shop-test-store-product', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
