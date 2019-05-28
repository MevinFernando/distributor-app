import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

class Returns extends Component {
  state = {
    returns: []
  };

  componentDidMount() {
    axios.get("/api/returns").then(res => {
      console.log(res.data);
      this.setState({ returns: res.data });
    });
  }

  compareBy = key => (a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };

  sortBy = key => {
    let arrayCopy = [...this.state.returns];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ returns: arrayCopy });
  };

  render() {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => this.sortBy("returnId")}>Return Id</th>
              <th onClick={() => this.sortBy("retailerId")}>Retailer Name</th>
              <th onClick={() => this.sortBy("returnIem")}>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.returns.map(returnItem => (
              <tr>
                <td>{returnItem.returnId}</td>
                <td>{returnItem.retailerName}</td>
                <td>{returnItem.status[0].description}</td>
                <td>
                  {" "}
                  <a
                    className="btn btn-primary"
                    href={"/returnItem/" + returnItem.returnId}
                  >
                    View More
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Returns;
