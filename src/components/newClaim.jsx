import React, { Component } from "react";
import axios from "axios";
import saveAs from "file-saver";

class NewClaim extends Component {
  state = {
    claimDetails: {
      items: [],
      qty: 0,
      weight: 0,
      value: 0,
      damagedValue: 0
    }
  };

  componentWillMount() {
    axios.get("/api/claims/123456/generate").then(res => {
      console.log(res.data);
      this.setState({ claimDetails: res.data });
    });
  }

  handleClaim = () => {
    //console.log("logged");
    axios
      .post("/api/claims/123456/generate", {})
      .then(() =>
        axios
          .get("/api/claims/123456/pdf", { responseType: "blob" })

          .then(res => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf " });
            saveAs(pdfBlob, "123456_claim-details.pdf");
          })
      )
      .catch(err => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="card-header">
          <h3 className="mb-0">Claim Details</h3>
        </div>

        <div className="row">
          <div className="col">
            <b>RS Id:</b>
            {this.state.claimDetails.rsId}
          </div>
          <div className="col">
            <b>RS Name:</b>
            {this.state.claimDetails.name}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <b>Supplier Id:</b>
            {this.state.claimDetails.supplierId}
          </div>
          <div className="col">
            <b>Date:</b>
            {Date().slice(0, 15)}
          </div>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>PKD</th>
              <th>QTY</th>
              <th>Weight(g)</th>
              <th>MRP</th>
              <th>TUR</th>
              <th>Reason</th>
              <th>Tot. Taxable Amt</th>
              {/* <th>CGST (9%)</th>
              <th>SGST (9%)</th>
              <th>Tot. Amt</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.claimDetails.items.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.pkd}</td>
                <td>{item.qty}</td>
                <td>{item.weight}</td>
                <td>{item.mrp}</td>
                <td>{item.tur}</td>
                <td>{item.reason}</td>
                <td>{item.tot_tax_amt}</td>
                {/* <td>{item.cgst}</td>
                <td>{item.sgst}</td>
                <td>{item.tot_amt}</td> */}
              </tr>
            ))}
            <tr className="align-center">
              <th>Tot Qty:</th>
              <td>{this.state.claimDetails.qty}</td>
              <th>Tot Wt(g):</th>
              <td>{this.state.claimDetails.weight}</td>
              <th>Tot Damage Amt:</th>
              <td>{this.state.claimDetails.damagedValue}</td>
              <th>Tot Amount:</th>
              <td>{this.state.claimDetails.value}</td>
            </tr>
          </tbody>
        </table>

        <button className="btn  btn-primary" onClick={this.handleClaim}>
          Generate Claim
        </button>
      </div>
    );
  }
}

export default NewClaim;
