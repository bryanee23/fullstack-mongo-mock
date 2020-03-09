import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';

const ProductList = (props) => {

  return (
    <div className='product-list'>
      {props.collection.map((obj, index) => (
        <div>
          <Products obj={obj} handleClick={props.handleClick} />
        </div>

      ))}
    </div>
  )
}

export default ProductList