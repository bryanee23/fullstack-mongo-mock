import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBid: null,
    }
  }

  onChange(e) {
    e.preventDefault()
    this.setState(
      [e.target.name] = e.target.value,
    )
  }

  onSubmit(e) {
    const { curr_bid } = this.props.item
    axios.post(`/ebay/products/:${_id}`, { curr_bid: this.state.newBid })
      .then(() = this.props.update())
      .catch(err => console.log(err))

  }

  render() {
    //props = one obj/item, update fn
    const { _id, item, curr_bid, ends_in, image } = this.props.item

    return (
      <div className='product-viewer'>
        {item}
        <img src={image} />

        <form onSubmit={this.onSubmit}>
          <label>
            bid:
            <input
              type="number"
              name="newBid"
              required
              onChange={this.onChange}
            />
        </form>

      </div>
        )
      }
}