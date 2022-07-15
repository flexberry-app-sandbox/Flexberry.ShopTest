export default {
  projections: {
    OrderItemE: {
      product: {
        __caption__: '~',
        name: {
          __caption__: '~'
        }
      },
      amount: {
        __caption__: 'Количество'
      },
      priceWTaxes: {
        __caption__: 'Цена с налогом'
      },
      totalSum: {
        __caption__: 'Сумма по позиции'
      }
    },
    OrderItemInOrderL: {
      amount: {
        __caption__: '~'
      },
      priceWTaxes: {
        __caption__: '~'
      }
    }
  },
  validations: {
    amount: {
      __caption__: 'Количество'
    },
    priceWTaxes: {
      __caption__: 'Цена с налогом'
    },
    totalSum: {
      __caption__: 'Сумма по позиции'
    },
    product: {
      __caption__: '~'
    },
    order: {
      __caption__: 'order'
    }
  }
};
