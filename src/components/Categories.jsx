import { render } from '@testing-library/react';
import React, { useState } from 'react';



const Categories = (props) => {



 const [activeItem, setActiveItem] = useState(0);


 const onSelectItem = (index) => {
   setActiveItem(index);
 }

    const { items, onClick } = props;
    let item = items && items.map((item, index) => {
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
}


export default Categories;