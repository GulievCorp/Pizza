import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Categories = React.memo((props) => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    props.onClickItem(index);
  };

  const { items } = props;
  let item =
    items &&
    items.map((item, index) => {
      return (
        <li
          className={activeItem === index ? 'active' : ''}
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
