import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*insert schema here */
      collection: [],
    }
    //bind my functions here

  }
  //handlechange
  //handlesubmit
  //handleclick

  componentDidMount() {
    this.get()
  }
  //componentDidMount

  get() {
    axios.get('/ebay/products')
    .then((res)=>{
      // console.log(res.data[0]['item'], 'getaxios')
      this.setState({
        collection: res.data,
        firstItem: res.data[0],
      })
    })
    .catch((err)=>{console.log(err)})

  }
  //axios get request, change my set state to include array
  //axios post, change my itital set states then handle submit

  render() {
    return (
      <div className='.relax'>
        <div>
          <h1>Bryan's best app so far</h1>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            SEARCH GOES HERE --DO THIS LAST
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            PRODUCT VIEWER GOES HERE
            <ProductViewer item={this.state.firstItem}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList collection={this.state.collection}/>
          </div>
        </div>
      </div>
    )
  }
}