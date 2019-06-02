import React, { Component } from "react";
import axios from "axios";
import ReturnItem from "./returnItem.jsx";
import ReturnList from "./returnList.jsx";

axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

class Returns extends Component {
  state = {
    returns: [],
    returnItem: {},
    show: 0,
    pos: -1
  };

  componentWillMount() {
    axios.get("/api/returns").then(res => {
      console.log(res.data);
      this.setState({ returns: res.data });
    });
  }
  handleStatusUpdate = returnItem => {
    const currentStatus = returnItem.status[0].code;
    var code;
    if (currentStatus === "10") code = "20";
    else if (currentStatus === "30") code = "40";
    else return;
    axios
      .put(
        "http://localhost:5000/api/returns/" + returnItem.returnId + "/status",
        { code }
      )
      .then(result => {
        axios.get("/api/returns").then(res => {
          console.log(res.data);
          this.setState({ returns: res.data });
        });
      });
  };

  handleViewMore = id => {
    if (this.state.show === 0)
      this.state.returns.map(returnItem => {
        if (returnItem.returnId === id) {
          this.setState({
            show: 1,
            pos: this.state.returns.indexOf(returnItem)
          });
        }
      });
    else if (this.state.show === 1) this.setState({ show: 0, pos: -1 });
  };

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
        {this.state.show === 0 ? (
          <ReturnList
            returns={this.state.returns}
            handleViewMore={this.handleViewMore}
            sortBy={this.sortBy}
          />
        ) : (
          <ReturnItem
            returnItem={this.state.returns[this.state.pos]}
            handleViewMore={this.handleViewMore}
            handleStatusUpdate={this.handleStatusUpdate}
          />
        )}
      </div>
    );
  }
}

export default Returns;
