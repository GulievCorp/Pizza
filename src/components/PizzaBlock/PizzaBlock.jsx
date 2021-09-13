import { React, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '..';




function PizzaBlock({id, name, price, imageUrl, types, sizes, onClickAddPizza, addedCount}) {



  const [activeType, setactiveType] = useState(0);
  const [activeSize, setactiveSize] = useState(0);
  const availableSizes = [26, 30, 40];
  const typeNames = ['тонкое', 'традиционное'];

  const setOnSelectType = (index) => {
    setactiveType(index);
  };


  const setOnSelectSize = (index) => {
    setactiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name, 
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: typeNames[activeType]
    }
    onClickAddPizza(obj)
  }

  return (
    <div>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {typeNames.map((item, index) => {
              return (
                <li
                  className={activeType === index ? 'active' : ''}
                  onClick={() => setOnSelectType(index)}
                  key={index}
                  className={classNames({
                    active: activeType === index,
                    disabled: !types.includes(index),
                  })}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul>
            {/* <li className="active">26 см.</li>
            <li>30 см.</li>
            <li>40 см.</li> */}
            {availableSizes.map((size, index) => {
              return (
                <li
                  className={activeSize === index ? 'active' : ''}
                  onClick={() => setOnSelectSize(index)}
                  key={index} className = {classNames({
                      active: activeSize === index,
                      disabled: !sizes.includes(size)
                  })}>
                  {size} см
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <Button onClick = {onAddPizza} className="button--add" outline>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount && <i>{addedCount}</i>}
          </Button>
        </div>
      </div>{' '}
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf([PropTypes.number].isRequired),
  sizes: PropTypes.arrayOf([PropTypes.number].isRequired),
  isLoading: PropTypes.bool,
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
    types: [],
    name: '---',
    price: 777,
    sizes: [],
    isLoading: false
};


export default PizzaBlock;
