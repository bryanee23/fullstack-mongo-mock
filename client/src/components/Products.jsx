import React from 'react';
import ReactDOM from 'react-dom';


const Products = ({ obj, index }) => {
  return (
    <div className='product-list-entry'>
      <div  className='product-list-entry-detail'>
        <h5>
        {obj.item}
        </h5>
        <img className='listimages' src={obj.image}></img>
      </div>
    </div>
  )
}

export default Products