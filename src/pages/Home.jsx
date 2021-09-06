import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../actions/fillters';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(index) => onSelectCategory(index)}
          onClick={(item) => console.log(item)}
          items={categoryNames}
        />
        <SortPopup
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((item) => {
            return <PizzaBlock key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
}

export default Home;
