import React from 'react';
import Products from './Products';

const ProductList = (props) => {
  //list, changeView
   return(
    <div className='product-list'>
    {props.list.map((obj, index)=(
      <Products item={obj} key={index} changeView={props.changeView}/>
    ))}
    </div>
  )
}

export default ProductList

