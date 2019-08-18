import React, { Component } from 'react';
import axios from 'axios';
import ReturnHistory from './returnHistory';
class Retailer extends Component {
  state = {
    retailer: {},
    history: []
  };

  componentDidMount() {
    axios
      .get('/api/retailers/' + this.props.match.params.retailerId)
      .then(res => {
        console.log(res.data);
        this.setState({ retailer: res.data });
      });
    axios
      .get('/api/returns/retailer/' + this.props.match.params.retailerId)
      .then(res => {
        console.log(res.data);
        this.setState({ history: res.data });
      });
  }

  render() {
    const { retailer } = this.state;
    if (retailer)
      return (
        <div className="container">
          <div className="card-header">
            <h3>Retailer Details:</h3>
            <div className="row">
              <div className="col">
                <b>ID:</b>
                {retailer.retailerId}
              </div>
              <div className="col">
                <b>Name:</b>
                {retailer.retailerName}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <b>Salesman:</b>
                {retailer.salesPersonId}
              </div>
              <div className="col">
                <b>Address:</b>
                {retailer.address}
              </div>
            </div>
          </div>
          <ReturnHistory returns={this.state.history} />
        </div>
      );
  }
}

retailer: {
}
export default Retailer;
