import React, { Component } from 'react';
import axios from 'axios';
import StocksList from './stocksList';

//axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

class Stocks extends Component {
  state = {
    stocks: []
  };

  componentDidMount() {
    axios.get('/api/returnStocks').then(res => {
      console.log(res.data);
      this.setState({ stocks: res.data });
    });
  }

  compareBy = key => (a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };

  sortBy = key => {
    let arrayCopy = [...this.state.stocks];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ stocks: arrayCopy });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <StocksList
            stocks={this.state.stocks}
            sortBy={this.sortBy}
            deletestock={this.deletestock}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Stocks;
