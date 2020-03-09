import React from 'react';
import ReactDOM from 'react-dom';


const Products = (props) => {
  // console.log(props, 'products-----')

  return (
    <div onClick={()=>{
      props.handleClick(props.obj)
    }} className='product-list-entry'>
      <div  key={props.obj._id} className='product-list-entry-detail'>
       <h4> <div >{props.obj.item}</div></h4>
        <h5>
        <div>Current Bid ${props.obj.curr_bid}</div>
        <div>{props.obj.ends_in} days</div>
     <img className='listimages' src={props.obj.image}></img>         </h5>
      </div>
    </div>
  )
}

export default Products