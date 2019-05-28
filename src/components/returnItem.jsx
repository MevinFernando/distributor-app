import React, { Component } from "react";
import axios from "axios"; //to contact with API

axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

class ReturnItem extends Component {
  state = {
    returnItem: {},
    items: [],
    status: []
  };

  componentDidMount() {
    axios
      .get(
        "http://hulrevlog.herokuapp.com/api/returns/" +
          this.props.match.params.returnId
      )
      .then(res => {
        // console.log(res.data[0].items);
        this.setState({
          returnItem: res.data[0],
          items: res.data[0].items,
          status: res.data[0].status
        });
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (prevProps.location.pathname != this.props.location.pathname) {
    // }
  }

  setButtonLabel() {
    //console.log(this.state.status);
    if (this.state.status.length === 0) {
      return null;
    } else if (this.state.status[0].code === "10") {
      return "Schedule Pickup";
    } else if (this.state.status[0].code === "20") {
      return "Confirm Arrival";
    } else {
      // var element = document.getElementById("statusButton");
      // element.parentNode.removeChild(element);
    }
  }

  handleStatusUpdate() {
    const currentStatus = this.state.status[0].code;
    var code;
    if (currentStatus === "10") code = "15";
    else if (currentStatus === "20") code = "30";
    else return;
    axios
      .put(
        "http://localhost:5000/api/returns/" +
          this.state.returnItem.returnId +
          "/status",
        { code }
      )
      .then(res => {
        this.componentDidMount();
      });
  }

  render() {
    const { returnItem } = this.state;
    console.log(this.props);
    return (
      <div className="container">
        <h3>
          <span>Return Id: </span>
          {returnItem.returnId}
        </h3>
        <h3>
          <span>Retailer Name: </span>
          {returnItem.retailerName}
        </h3>
        <h3>
          <span>Category:</span>
          {returnItem.category}
        </h3>
        <span>Items</span>
        <table className="table table-hover">
          <tr>
            <th>Name</th>
            <th>PKD</th>
            <th>MRP</th>
            <th>QTY</th>
            <th>Reason</th>
          </tr>

          {this.state.items.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.pkd.slice(0, 16)}</td>
              <td>{item.mrp}</td>
              <td>{item.qty}</td>
              <td>{item.reason}</td>
            </tr>
          ))}
        </table>

        <p>Status</p>
        <table className="table table-hover">
          <tr>
            <th>Description</th>
            <th>TIme</th>
          </tr>
          {this.state.status.map(stat => (
            <tr>
              <td>{stat.description}</td>
              <td>{stat.time.slice(0, 16)}</td>
              <td>{stat.code}</td>
            </tr>
          ))}
          <div>
            <button onClick={this.handleStatusUpdate.bind(this)}>
              {this.setButtonLabel()}
            </button>
          </div>
        </table>
      </div>
    );
  }
}

export default ReturnItem;
