import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBid: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleSubmit(event) {
    // if (this.props.item.curr_bid > )
    alert('works');
    event.preventDefault();
  }

  handleInputChange(event) {
    if (z)
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    }, () => { console.log(this.state) });
  }

  render() {
    return (
      <div className='product-viewer'>
        <div className='product-viewer-details'>
          {this.props.item.item}
        </div>
        <img className='listimages' src={this.props.item.image}></img>
        <div>current bid  ${this.props.item.curr_bid}</div>
        <div>ends {this.props.item.ends_in} days</div>

        <form onSubmit={this.handleSubmit}>
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