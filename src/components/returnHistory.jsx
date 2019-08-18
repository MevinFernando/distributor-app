import React, { Component } from 'react';

class ReturnHistory extends Component {
  state = {};
  render() {
    const { returns } = this.props;
    return (
      <div className="container card test-center">
        <h3>Return History</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Return Id</th>
              <th>Return Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {returns.map(returnItem => (
              <tr>
                <td>{returnItem.returnId}</td>
                <td>{returnItem.returnDate.slice(0, 15)}</td>
                <td>{returnItem.status[0].description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReturnHistory;
