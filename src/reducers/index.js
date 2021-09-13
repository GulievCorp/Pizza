import { combineReducers } from 'redux';
import filltersReducer from './fillters';
import pizzasReducer from './pizzas';
import cartReducer from './cart';

const rootReducer = combineReducers({
  filters: filltersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export default rootReducer;
