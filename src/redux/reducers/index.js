import { combineReducers } from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizza: pizzasReducer
})

export default rootReducer
