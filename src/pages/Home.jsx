import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import LoadingPizzaBlock from '../components/PizzaBlock/LoadingPizzaBlock';
import { addPizzaToCart } from '../actions/cart';





const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const sortNames = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  console.log(cartItems)

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  }
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
        />
        <SortPopup
          items={sortNames}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => <PizzaBlock onClickAddPizza = {handleAddPizzaToCart } key={item.id} {...item} isLoading = {true}  addedCount = {cartItems[item.id] && cartItems[item.id].items.length} />)
          : Array(12).fill(<LoadingPizzaBlock />)}
      </div>
    </div>
  );
}

export default Home;
