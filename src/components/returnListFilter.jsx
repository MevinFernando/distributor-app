import React, { Component } from "react";
import PropTypes from "prop-types";

class ReturnListFilter extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {};

  render() {
    const { handleFilter } = this.props;
    return (
      <React.Fragment>
        <div className="card-header">
          <h4 className="card-title">Filter</h4>
          <input
            className="m-2"
            type="radio"
            name="filter"
            value="10"
            onClick={handleFilter}
          />
          <label htmlFor="">Return Requested</label>
          <br />
          <input
            className="m-2"
            type="radio"
            name="filter"
            value="20"
            onClick={handleFilter}
          />
          <label htmlFor="">Scheduled For Pickup</label>
          <br />
          <input
            className="m-2"
            type="radio"
            name="filter"
            value="30"
            onClick={handleFilter}
          />
          <label htmlFor="">Picked Up</label>
          <br />
          <input
            className="m-2"
            type="radio"
            name="filter"
            value="40"
            onClick={handleFilter}
          />
          <label htmlFor="">Reached RS</label>
          <br />
          <input
            className="m-2"
            type="radio"
            name="filter"
            value="50"
            onClick={handleFilter}
          />
          <label htmlFor="">Audited At RS</label>
          <br />
          <input
            className="m-2"
            type="radio"
            name="filter"
            value="0"
            onClick={handleFilter}
          />
          <label htmlFor="">All</label>
        </div>
      </React.Fragment>
    );
  }
}
export default ReturnListFilter;
