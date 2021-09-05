import { combineReducers } from 'redux';
import filltersReducer from './fillters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
  filters: filltersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
