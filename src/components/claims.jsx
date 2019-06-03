import React, { Component } from "react";
import axios from "axios";

class Claims extends Component {
  state = {
    claims: {}
  };
  componentWillMount() {
    axios.get("/api/distributors/claims/123456").then(res => {
      console.log(res.data);
      this.setState({ claims: res.data });
    });
  }

  setStatusLabel = () => {
    if (this.state.claims.status === "50") {
      return "Not Approved";
    } else if (this.state.claims.status === "60") {
      return "Approved";
    }
  };

  render() {
    const claims = this.state.claims;

    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-header">
              <h4 className="card-title">RS Id:</h4>
              {claims.rsId}
              <h4 className="card-title">Date:</h4>
              {claims.initDate}
              <h4 className="card-title">Status:</h4>
              {this.setStatusLabel()}
              <h4 className="card-title">Value:</h4>
              {parseFloat(claims.value).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Claims;
