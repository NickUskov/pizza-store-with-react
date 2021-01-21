import axios from "axios";

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  console.log(category)
  dispatch(setIsLoading())
  if (category !== 0) {
    axios.get(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=desc`)
      .then(({data}) => {
        dispatch(setPizzas(data))
      })
  } else {
    axios.get(`http://localhost:3001/pizzas`)
      .then(({data}) => {
        dispatch(setPizzas(data))
      })
  }

}

export const setPizzas = (items) => {
  return {
    type: 'SET_PIZZAS',
    payload: items
  }
}
export const setIsLoading = () => {
  return {
    type: 'SET_IS_LOADING',
    payload: true
  }
}



