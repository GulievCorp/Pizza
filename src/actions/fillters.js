// Обьясняют что они делают с фильрацией
// Функции которые возвращают action.


export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name, 
});

export const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index,
});