const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      console.log(action.data)
      const isExist = state.products?.find(e => e._id === action.data?._id)
      const productsList = isExist
        ? state.products?.map(e => {
          if (e._id === action.data._id) {
            return { ...e, quantity: e.quantity + 1 }
          }
          else return e
        })
        : [...state.products, action.data]
      return {
        products: productsList
      };

    case 'REMOVE_ITEM':
      return {
        products: state.products?.filter(e => e?._id !== action.data._id)
      };

    case 'REMOVE_ALL':
      return {
        products: []
      };

    case 'CHANGE_QUANTITY':
      const isReduce = action.changeQuantityType === 'reduce'
      const productsChangeQuantity = state.products?.map(e => {
        if (e._id === action.data._id) {
          return { ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }
        }
        else return e
      })
      return {
        products: productsChangeQuantity
      };

    default:
      return state;
  }
}
