import React, { Component } from "react";
import ReturnItem from "./returnItem";
import axios from "axios"; //to contact with API
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

class Returns extends Component {
  state = {
    returns: []
  };

  componentDidMount() {
    axios.get("http://hulrevlog.herokuapp.com/api/returns").then(res => {
      console.log(res.data);
      this.setState({ returns: res.data });
    });
  }

  displayReturnItem = id => {
    return;
  };

  render() {
    return (
      <Router>
        <div className="container">
          <table className="table table-hover">
            <tr>
              <th>Return Id</th>
              <th>Retailer Name</th>
              <th>Status</th>
              <th />
            </tr>
            {this.state.returns.map(returnItem => (
              <tr>
                <td>{returnItem.returnId}</td>
                <td>{returnItem.retailerName}</td>
                <td>{returnItem.status[0].description}</td>
                <td>
                  {" "}
                  <a href={"/returnItem/" + returnItem.returnId}>View More</a>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <Route exact path="/returnItem/:returnId" component={ReturnItem} />
      </Router>
    );
  }
}

export default Returns;
