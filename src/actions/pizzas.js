import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})


export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

// Получить пиццы. Fetch(используют для обращения к серверу. Название на уровне самого метода)
export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/pizzas`).then((response) => {  
        dispatch(setPizzas(response.data));
    });
};