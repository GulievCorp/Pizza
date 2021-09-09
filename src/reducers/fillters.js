

const initialState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc',
    },
};
const fillters = (state = initialState, action) => {
    if(action.type === 'SET_SORT_BY'){
        return {
        ...state, //берет все старые данные
        sortBy: action.payload, // и заменяет их на payload
        };
    }
    if(action.type === 'SET_CATEGORY'){
        return {
            ...state,
            category: action.payload
        }
    }
    return state;
}

export default fillters;