import React from 'react';

export default class ProductViewer extends React.Component {

  render() {

    return (
      <div className='product-viewer'>
        <div className='product-viewer-details'>
          {this.props.item.item}
        </div>
        <img className='listimages' src={this.props.item.image}></img>
        <div>current bid  ${this.props.item.curr_bid}</div>
        <div>ends {this.props.item.ends_in} days</div>

        <form onSubmit={()=>{this.props.handleSubmit('hello')}}>
          <label>
            bid:
    <input type="text" name="name" onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}