import React, { Component } from "react";

class ClaimItems extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { items, sortBy, viewItems } = this.props;

    return (
      <div className="container">
        <div className="card-header">
          <h3 className="mb-0">Claimed Items </h3>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => sortBy("id")}>Id</th>
              <th onClick={() => sortBy("name")}>Name</th>
              <th onClick={() => sortBy("pkd")}>PKD</th>
              <th onClick={() => sortBy("mrp")}>MRP</th>
              <th onClick={() => sortBy("tur")}>TUR</th>
              <th onClick={() => sortBy("reason")}>Reason</th>
              <th onClick={() => sortBy("qty")}>QTY</th>
              <th onClick={() => sortBy("weight")}>Weight(g)</th>
              <th onClick={() => sortBy("category")}>Category</th>
              <th onClick={() => sortBy("type")}>Type</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {items.map(claimItem => (
              <tr>
                <td>{claimItem.id}</td>
                <td>{claimItem.name}</td>
                <td>{claimItem.pkd}</td>
                <td>{claimItem.mrp}</td>
                <td>{claimItem.tur}</td>
                <td>{claimItem.reason}</td>
                <td>{claimItem.qty}</td>
                <td>{claimItem.weight}</td>
                <td>{claimItem.category}</td>
                <td>{claimItem.type}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-sm btn-primary m-2"
          onClick={() => viewItems()}
        >
          Back
        </button>
        {/* <button onClick={() => handleClaim()}>Claim</button> */}
      </div>
    );
  }
}

export default ClaimItems;
