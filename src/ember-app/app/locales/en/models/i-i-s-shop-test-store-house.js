export default {
  projections: {
    StoreHouseE: {
      number: {
        __caption__: 'Номер'
      },
      address: {
        __caption__: 'Адрес'
      },
      storekeeper: {
        __caption__: 'Кладовщик',
        lastName: {
          __caption__: '~'
        }
      },
      storeProduct: {
        __caption__: 'Список товаров',
        product: {
          __caption__: 'Товар',
          name: {
            __caption__: '~'
          }
        },
        amount: {
          __caption__: 'Количество'
        }
      }
    },
    StoreHouseL: {
      number: {
        __caption__: 'Номер'
      },
      address: {
        __caption__: 'Адрес'
      },
      storekeeper: {
        __caption__: 'Кладовщик',
        lastName: {
          __caption__: 'Кладовщик'
        }
      }
    }
  },
  validations: {
    number: {
      __caption__: 'Номер'
    },
    address: {
      __caption__: 'Адрес'
    },
    storekeeper: {
      __caption__: 'Кладовщик'
    },
    storeProduct: {
      __caption__: 'Список товаров'
    }
  }
};
