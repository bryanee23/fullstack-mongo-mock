import React from 'react';
import ReactDOM from 'react-dom';

import Products from './Products';

const ProductList = ({ collection }) => {
  return (
    <div className='product-list'>
      {collection.map((obj, index) => (
        <div>
          <Products obj={obj} key={index} />
        </div>

      ))}


    </div>
  )
}

export default ProductList