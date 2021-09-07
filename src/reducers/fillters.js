

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
        ...state,
        sortBy: action.payload,
        };
    }
    return state;
}

export default fillters;