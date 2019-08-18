import React, { Component } from 'react';
import axios from 'axios';
import ClaimItems from './claimItems';

class Claims extends Component {
  state = {
    claims: {},
    items: [],
    show: 0
  };

  componentDidMount() {
    axios.get('/api/claims/123456').then(res => {
      console.log(res.data);
      this.setState({ claims: res.data });
    });
  }

  viewItems = id => {
    if (this.state.show === 0) {
      this.setState({
        show: 1,
        items: this.state.claims.items
      });
    } else if (this.state.show === 1) this.setState({ show: 0, items: [] });
  };

  setStatusLabel = () => {
    if (this.state.claims.status === '60') {
      return 'Not Approved';
    } else if (this.state.claims.status === '70') {
      return 'Approved';
    }
  };

  deleteClaim = () => {
    axios.delete('/api/delete/123456').then(res => {
      console.log(res.data);
      this.setState({ claims: res.data });
    });
  };

  compareBy = key => (a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };

  sortBy = key => {
    let arrayCopy = [...this.state.claims.items];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ items: arrayCopy });
  };

  render() {
    const claims = this.state.claims;

    if (claims == null) {
      return (
        <div className="container text-center ">
          <div className="card-header">
            <h4 className="card-title m-10">No Claims For Current Month</h4>
          </div>
        </div>
      );
    } else {
      if (this.state.show == 0)
        return (
          <div className="container">
            <div className="card-body">
              <div className="card-header">
                <div className="row">
                  <div className="col-6">
                    <h4 className="card-title">RS Id:</h4>
                    {claims.rsId}
                    <h4 className="card-title">Claim Date:</h4>
                    {claims.initDate ? claims.initDate.slice(0, 15) : null}
                    <h4 className="card-title">Status:</h4>
                    {this.setStatusLabel()}
                    <h4 className="card-title">Value:</h4>
                  </div>
                  <div className="col-6">
                    <h4 className="card-title">AuditorId:</h4>
                    {claims.auditorId}
                    <h4 className="card-title">Approval Date:</h4>
                    {claims.approvalDate
                      ? claims.approvalDate.slice(0, 15)
                      : null}
                    <h4 className="card-title">Net Wt:</h4>
                    {claims.weight}
                    <h4 className="card-title">Net Qty:</h4>
                    {claims.qty}
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={this.viewItems}>
                View Items
              </button>
              <button
                className="btn btn-danger mx-2"
                onClick={this.deleteClaim}
              >
                Delete <i className="fas fa-trash-alt" />
              </button>
            </div>
          </div>
        );
      else if ((this.state.show = 1))
        return (
          <ClaimItems
            items={this.state.claims.items}
            viewItems={this.viewItems}
            sortBy={this.sortBy}
          />
        );
    }
  }
}
export default Claims;
