const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]:
            !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id],
              action.payload]
        },
        totalPrice: state.totalPrice + action.payload.price,
        totalCount: state.itemsCount + 1
      }
    default:
      return state
  }
}

export default cart