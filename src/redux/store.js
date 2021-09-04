import { createStore, combineReducers } from "redux";
import filltersReducer from '../reducers/fillters';
import pizzasReducer from "../reducers/pizzas";

const rootReducer = combineReducers({
    filltersReducer,
    pizzasReducer
})

const store = createStore(rootReducer);

console.log(rootReducer);

store.subscribe(() => console.log(store.getState()))


export default store;