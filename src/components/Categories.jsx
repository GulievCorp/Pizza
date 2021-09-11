import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setCategory } from '../actions/fillters';
import { fetchPizzas } from '../actions/pizzas';


const Categories = React.memo((props) => {
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filters }) => filters);
  
  const onSelectItem = React.useCallback((index) => {
    dispatch(setCategory(index));
    setActiveItem(index);
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const { items } = props;
  let item =
    items &&
    items.map((item, index) => {
      return (
        <li
          className={category === index ? 'active' : ''}
          onClick={() => onSelectItem(index)}
          k
          ey={index}>
          {item}
        </li>
      );
    });

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {item}
      </ul>
    </div>
  );
});

export default Categories;
