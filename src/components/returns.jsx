import React, { Component } from "react";
import axios from "axios";
import ReturnItem from "./returnItem.jsx";
import ReturnList from "./returnList.jsx";

class Returns extends Component {
  state = {
    returns: [],
    returnItem: {},
    show: 0,
    pos: -1,
    filter: "0"
  };

  componentDidMount() {
    axios.get("/api/returns").then(res => {
      console.log(res.data);
      this.setState({ returns: res.data });
    });
  }
  handleStatusUpdate = (returnItem, no_days) => {
    console.log(no_days);
    const currentStatus = returnItem.status[0].code;
    var code;
    if (currentStatus == "10") code = "20";
    else return;
    axios
      .put("/api/returns/" + returnItem.returnId + "/status", { code, no_days })
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

  handleFilter = e => {
    console.log(e.target);
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            {this.state.show === 0 ? (
              <ReturnList
                returns={this.state.returns.filter(
                  returnItem =>
                    returnItem.status[0].code == this.state.filter ||
                    this.state.filter == "0"
                )}
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

          <div className="col-3 ">
            <div className="card-header">
              <h4 className="card-title">Filter</h4>
              <input
                className="m-2"
                type="radio"
                name="filter"
                value="10"
                onClick={this.handleFilter}
              />
              <label htmlFor="">Return Requested</label>
              <br />
              <input
                className="m-2"
                type="radio"
                name="filter"
                value="20"
                onClick={this.handleFilter}
              />
              <label htmlFor="">Scheduled For Pickup</label>
              <br />
              <input
                className="m-2"
                type="radio"
                name="filter"
                value="30"
                onClick={this.handleFilter}
              />
              <label htmlFor="">Picked Up</label>
              <br />
              <input
                className="m-2"
                type="radio"
                name="filter"
                value="40"
                onClick={this.handleFilter}
              />
              <label htmlFor="">Reached RS</label>
              <br />
              <input
                className="m-2"
                type="radio"
                name="filter"
                value="50"
                onClick={this.handleFilter}
              />
              <label htmlFor="">Audited At RS</label>
              <br />
              <input
                className="m-2"
                type="radio"
                name="filter"
                value="0"
                onClick={this.handleFilter}
              />
              <label htmlFor="">All</label>
            </div>
            <div className="card-header">
              <h4 className="card-title">Selected</h4>
              <h3>
                <span class="badge badge-pill badge-primary m-2">
                  {
                    this.state.returns.filter(
                      returnItem =>
                        returnItem.status[0].code == this.state.filter
                    ).length
                  }
                </span>
              </h3>
            </div>
            <div className="card-header">
              <h4 className="card-title">Overall</h4>
              <h3>
                <span class="badge badge-pill badge-primary m-2">
                  {this.state.returns.length}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Returns;
