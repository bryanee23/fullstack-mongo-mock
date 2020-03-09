import React from 'react';
import ReactDOM from 'react-dom';


export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstItem: this.props,
    }
  }

  componentDidMount(props) {
    // this.setState({
    //   firstItem: this.props
    // })
  }

  render(){
console.log('PPVVV---',  this.state)
    return(
      <div className = 'product-viewer'>
        image
      </div>
    )
  }
}
