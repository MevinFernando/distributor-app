import React, { Component } from "react";
import axios from "axios"; //to contact with API

//axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

class ReturnItem extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (prevProps.location.pathname != this.props.location.pathname) {
    // }
  }

  setButtonLabel(code) {
    console.log(code);
    if (code === "10") {
      return "Schedule Pickup";
    } else if (code === "20") {
      return "Confirm Arrival";
    } else {
      return "No Action";
      // var element = document.getElementById("statusButton");
      // element.parentNode.removeChild(element);
    }
  }

  render() {
    const { returnItem } = this.props;
    // const { items, status } = returnItem;
    return (
      <div className="container">
        <h4>
          <span className="text-muted">Return Id: </span>
          {returnItem.returnId}
        </h4>
        <h4>
          <span className="text-muted">Retailer Name: </span>
          {returnItem.retailerName}
        </h4>
        <h4>
          <span className="text-muted">Items</span>
        </h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>PKD</th>
              <th>MRP</th>
              <th>QTY</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {returnItem.items.map(item => (
              <tr>
                <td>{item.name}</td>
                <td>{item.pkd}</td>
                <td>{item.mrp}</td>
                <td>{item.qty}</td>
                <td>{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>
          <p className="text-muted">Status</p>
        </h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Description</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {returnItem.status.map(stat => (
              <tr>
                <td>{stat.description}</td>
                <td>{stat.time.slice(0, 16)}</td>
                <td>{stat.code}</td>
              </tr>
            ))}
          </tbody>
          <div className="">
            <button
              className="btn btn-sm m-2 btn-primary"
              onClick={() => this.props.handleStatusUpdate(returnItem)}
            >
              {this.setButtonLabel(returnItem.status[0].code)}
            </button>
            <button
              className="btn btn-sm btn-primary m-2"
              onClick={() => this.props.handleViewMore(returnItem.returnId)}
            >
              Back
            </button>
          </div>
        </table>
      </div>
    );
  }
}

export default ReturnItem;
