import React, { Component } from "react";
import axios from "axios";
import StocksList from "./stocksList";
import saveAs from "file-saver";

//axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

class Stocks extends Component {
  state = {
    stocks: []
  };

  componentWillMount() {
    axios.get("/api/returnStocks").then(res => {
      console.log(res.data);
      this.setState({ stocks: res.data });
    });
  }

  compareBy = key => (a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };

  sortBy = key => {
    let arrayCopy = [...this.state.stocks];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ stocks: arrayCopy });
  };

  handleClaim = () => {
    console.log("logged");
    axios
      .post("/api/distributors/return/new/123456", {})
      .then(() =>
        axios
          .get("/api/distributors/fetch-pdf", { responseType: "blob" })

          .then(res => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf " });
            saveAs(pdfBlob, "claim-details.pdf");
          })
      )
      .catch(err => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <StocksList
            stocks={this.state.stocks}
            sortBy={this.sortBy}
            handleClaim={this.handleClaim}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Stocks;
