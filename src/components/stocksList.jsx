import React, { Component } from "react";

class StocksList extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { stocks, sortBy } = this.props;

    var weight = 0;
    var value = 0;
    var damagedValue = 0;

    for (var i = 0; i < stocks.length; i++) {
      weight = weight + stocks[i].qty * stocks[i].weight;
      value = value + stocks[i].qty * stocks[i].mrp;
      if (stocks[i].reason === "damaged")
        damagedValue = damagedValue + stocks[i].qty * stocks[i].mrp;
    }
    value.toFixed(2);
    damagedValue.toFixed(2);
    return (
      <div className="container">
        <div className="card-header">
          <h3 className="mb-0">Damaged and Expired Stocks </h3>
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
            {stocks.map(stockItem => (
              <tr>
                <td>{stockItem.id}</td>
                <td>{stockItem.name}</td>
                <td>{stockItem.pkd}</td>
                <td>{stockItem.mrp}</td>
                <td>{stockItem.tur}</td>
                <td>{stockItem.reason}</td>
                <td>{stockItem.qty}</td>
                <td>{stockItem.weight}</td>
                <td>{stockItem.category}</td>
                <td>{stockItem.type}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="card-header">
          <span>Net Stock Weight:</span>
          <h5 className="mb-0">
            {weight / 1000} <span>Kg</span>{" "}
          </h5>
          <span>Net Damage Value:</span>
          <h5 className="mb-0">
            <span>Rs.</span>
            {damagedValue}
          </h5>
          <span>Net Returnable Value:</span>
          <h5 className="mb-0">
            <span>Rs.</span>
            {value}
          </h5>
          <a
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
            href="/claims/new"
          >
            Claim
          </a>
          {/* <button onClick={() => handleClaim()}>Claim</button> */}
        </div>
      </div>
    );
  }
}

export default StocksList;
