

const initialState = {
    categories: 0,
    sortBy: 'popular',
    type: {},
}

const fillters = (state = initialState, action) => {
    if(action.type === 'SET_SORT_BY'){
        return {
        ...state,
        sortBy: action.payload,
        };
    }
    return state;
}

export default fillters