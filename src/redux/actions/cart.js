export const setTotalPrice = (payload) => {
  return {
    type: 'SET_TOTAL_PRICE',
    payload
  }
}
export const setTotalCount = (payload) => {
  return {
    type: 'SET_TOTAL_COUNT',
    payload
  }
}

export const addPizzaToCart = (pizzaObj) => {
  return {
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
  }
}