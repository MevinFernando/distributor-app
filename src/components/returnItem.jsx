import React, { Component } from 'react';
import axios from 'axios'; //to contact with API

//axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

class ReturnItem extends Component {
  state = {
    isLoading: false
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (prevProps.location.pathname != this.props.location.pathname) {
    // }
  }

  setButtonLabel(code) {
    console.log(code);
    if (code === '10') {
      return 'Schedule Pickup';
    } else {
      return 'No Action';
      // var element = document.getElementById("statusButton");
      // element.parentNode.removeChild(element);
    }
  }

  render() {
    const { returnItem } = this.props;
    // const { items, status } = returnItem;
    return (
      <React.Fragment>
        <div className="row ">
          <div className="col-9  ">
            <div className="row card-header ">
              <div className="col">
                <h5>
                  <b>Ret Id:</b>
                  {returnItem.returnId}
                </h5>
                <h5>
                  <b>Retailer:</b>
                  {returnItem.retailerName}
                </h5>
              </div>
              <div className="col">
                <h5>
                  <b>Date:</b>
                  {returnItem.returnDate.slice(0, 15)}
                </h5>
                <h5>
                  <b>Salesman:</b>
                  {returnItem.salesPersonId}
                </h5>
                <h5>
                  <b>Amount:Rs.</b>
                  {returnItem.amount}
                </h5>
              </div>
            </div>
            <div className="row card">
              <h5>
                <span className="text-muted"> Returned Items</span>
              </h5>
              <table className="table table-hover">
                <thead className="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>PKD</th>
                    <th>MRP</th>
                    <th>QTY</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {returnItem.items.map(item => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.pkd}</td>
                      <td>{item.mrp}</td>
                      <td>{item.qty}</td>
                      <td>{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h5>
                <p className="text-muted">Status</p>
              </h5>
              <table className="table table-hover ">
                <thead className="bg-light">
                  <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {returnItem.status.map(stat => (
                    <tr>
                      <td>{stat.description}</td>
                      <td>{stat.time.slice(0, 16)}</td>
                      {stat.signatureImage && (
                        <td>
                          <a href={stat.signatureImage}>View Signature</a>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-3 ">
            <div className="row">
              <div className="col-6 ">
                <button
                  className="btn btn-sm btn-primary m-2"
                  onClick={() => this.props.handleViewMore(returnItem.returnId)}
                >
                  Back
                </button>
              </div>
              <div className="col-6">
                {returnItem.status[0].code == '10' && (
                  <button
                    className="btn btn-sm m-2 btn-success"
                    onClick={() =>
                      this.props.handleStatusUpdate(
                        returnItem,
                        document.getElementById('no_days').value
                      )
                    }
                  >
                    {this.setButtonLabel(returnItem.status[0].code)}
                  </button>
                )}
                {returnItem.status[0].code == '10' && (
                  <input
                    className="form"
                    id="no_days"
                    type="number"
                    min="1"
                    max="7"
                    style={{ minWidth: '100' }}
                    placeholder="2"
                    value="2"
                    readonly
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReturnItem;
