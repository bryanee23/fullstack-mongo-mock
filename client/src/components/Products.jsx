import React from 'react';

const Products = (props) => {
  //list, changeView fn
  { _id, item, curr_bid, ends_in, image } = props.item
  return (
    <div className='product-list-entry'>
      <img src={image} />
      <br></br>
  <div
    className='product-list-title'
    onClick={()=>{props.changeView(props.item)}}
    > {item} </div>
      <br></br>
  <div className='product-list-entry'>
      <br></br>
      {curr_bid}
      {ends_in}
  </div>
    </div>
  )
}

export default Products

// {
  //     item: "socks",
  //     min_cost: 2,
  //     curr_bid: 44,
  //     ends_in: 43,
  //     image: "imgURL",
  //   }