import React, { Component } from 'react';
import axios from 'axios';

class Pickups extends Component {
  state = {
    pickups: [],
    keyword: ''
  };

  componentDidMount() {
    axios.get('/api/pickups/').then(res => {
      this.setState({ pickups: res.data });
    });
  }

  handleInputChange = e => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    const pickups = this.state.pickups;
    if (pickups.length == 0) {
      return (
        <div className="container text-center ">
          <h4 className="card-header m-10">No Pickups Scheduled for Today</h4>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="card-header text-center">
          <h4>Pickups</h4>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Beat Name"
            onChange={this.handleInputChange}
          />
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Delivery Person ID</th>
              <th>Return ID</th>
              <th>Retailer ID</th>
              <th>No. of Packages</th>
            </tr>
          </thead>
          <tbody>
            {this.state.keyword.length > 0 &&
              pickups.map(pickup => {
                return pickup.pickupId.includes(this.state.keyword) ? (
                  <tr>
                    <td>{pickup.pickupId}</td>
                    <td>{pickup.returnId}</td>
                    <td>{pickup.retailerId}</td>
                    <td>{pickup.packages}</td>
                  </tr>
                ) : null;
              })}

            {this.state.keyword.length == 0 &&
              pickups.map(pickup => {
                return (
                  <tr>
                    <td>{pickup.pickupId}</td>
                    <td>{pickup.returnId}</td>
                    <td>{pickup.retailerId}</td>
                    <td>{pickup.packages}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pickups;
