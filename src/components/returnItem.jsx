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
        <div className="row">
          <h5>
            <span className="text-muted ">Return Id: </span>
            {returnItem.returnId}
          </h5>
          <h5>
            <span className="text-muted m-2">Retailer Name: </span>
            {returnItem.retailerName}
          </h5>
        </div>
        <div className="row">
          <h5>
            <span className="text-muted">Items</span>
          </h5>
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
          <h5>
            <p className="text-muted">Status</p>
          </h5>
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
          </table>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-sm btn-primary m-2"
                onClick={() => this.props.handleViewMore(returnItem.returnId)}
              >
                Back
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-sm m-2 btn-success"
                onClick={() =>
                  this.props.handleStatusUpdate(
                    returnItem,
                    document.getElementById("no_days").value
                  )
                }
              >
                {this.setButtonLabel(returnItem.status[0].code)}
              </button>

              <input
                className="form-input"
                id="no_days"
                type="text"
                placeholder="Default (n+2) Days"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReturnItem;
