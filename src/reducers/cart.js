

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
  };
  
  const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

  const cart = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PIZZA_CART': {
        // Если проверяет если в редаксе есть ключ пиццы
        // если его нету, он создает массив с одним обьектом
        // [action.payload], и он помещается в cart/items/
        // в редаксе, он хранит сам обьект пиццы. Но если такой
        // ключ есть он пересоздает массив берет старые значения 
        // и в конец добавляет новое значение
        const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]
        const newItems = {
          ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems)
          }
        };
        const items = Object.values(newItems).map(obj => obj.items);
        const allPizzas = [].concat.apply([], items); // берем это из newItems
        const totalPrice = getTotalPrice(allPizzas);
        return {
          ...state,
          items: newItems,
          totalCount: allPizzas.length, 
          totalPrice, 
        };
      }
      // Берем всё состояние и делаем items пустым обьектом.
      case 'CLEAR_CART': {
        return { totalPrice: 0, totalCount: 0, items: {} };
      }
      default:
        return state;
    }
  };
  
  export default cart;