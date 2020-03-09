import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: {},
      list: [],
      item: '',
      min_cost: null,
      image: '',
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(item) {
    this.setState({
      viewer: item,
    })
  }
  getProducts() {
    let viewerIndex = 0

    axios.get('/ebay/products')
      .then((data) => {
        this.setState({
          viewer: data.data[viewerIndex],
          list: data.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer
            item={this.state.viewerIndex}
            update={this.getProducts}
            />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList
              list={this.state.list.slice(0, 10)
              changeView={this.changeView}}
            />
          </div>
        </div>
      </div>
    )
  }
}