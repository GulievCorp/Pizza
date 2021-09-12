import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../actions/fillters';
import { useEffect } from 'react';
import {fetchPizzas} from '../actions/pizzas';
import LoadingPizzaBlock from '../components/PizzaBlock/LoadingPizzaBlock';





const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const sortNames = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

function Home() {


  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);






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
          ? items.map((item) => <PizzaBlock key={item.id} {...item} isLoading = {true} />)
          : Array(12).fill(<LoadingPizzaBlock />)}
      </div>
    </div>
  );
}

export default Home;
