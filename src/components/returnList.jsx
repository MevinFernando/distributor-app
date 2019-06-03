import React, { Component } from "react";

class ReturnList extends Component {
  state = {};

  componentDidMount() {}

  render() {
    console.log(this.props);
    const { returns, sortBy } = this.props;

    return (
      <div className="container">
        <div className="card-header">
          <h3 className="mb-0">Active Returns</h3>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => sortBy("returnId")}>Return Id</th>
              <th onClick={() => sortBy("retailerId")}>Retailer Name</th>
              <th onClick={() => sortBy("status")}>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {returns.map(returnItem => (
              <tr>
                <td>{returnItem.returnId}</td>
                <td>{returnItem.retailerName}</td>
                <td>{returnItem.status[0].description}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-sm
                    btn-primary"
                    onClick={() =>
                      this.props.handleViewMore(returnItem.returnId)
                    }
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReturnList;
