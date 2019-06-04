import React, { Component } from "react";
import axios from "axios";

class Pickups extends Component {
  state = {
    pickups: []
  };

  componentWillMount() {
    axios.get("/api/pickups/1").then(res => {
      console.log(res.data);
      this.setState({ pickups: res.data });
    });
  }

  handleInputChange = e => {
    axios.get("/api/pickups/" + e.target.value).then(res => {
      console.log(res.data);
      this.setState({ pickups: res.data });
    });
  };

  render() {
    const pickups = this.state.pickups;
    console.log(pickups);
    if (pickups.length == 0) {
      return (
        <div className="container text-center ">
          <div className="card-header">
            <h4>Delivery Person ID</h4>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter ID"
              onChange={this.handleInputChange}
            />
          </div>
          <h4 className="card-header m-10">No Pickups Scheduled for Today</h4>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="card-header">
          <h4>Delivery Person ID</h4>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter ID"
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
            {pickups.map(pickup => (
              <tr>
                <td>{pickup.pickupId}</td>
                <td>{pickup.returnId}</td>
                <td>{pickup.retailerId}</td>
                <td>{pickup.packages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pickups;
