// Обьясняют что они делают с фильрацией
// Функции которые возвращают action.


export const setSortBy = ({ type, order }) => ({
    type: 'SET_SORT_BY',
    payload: { type, order },
});

export const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index,
});