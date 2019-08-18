import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReturnList extends Component {
  state = {};

  componentDidMount() {}

  render() {
    console.log(this.props.returns);
    const { returns, sortBy } = this.props;

    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => sortBy('returnId')}>Return Id</th>
              <th onClick={() => sortBy('retailerId')}>Retailer Name</th>
              <th onClick={() => sortBy('status')}>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {returns.map(returnItem => (
              <tr>
                <td>{returnItem.returnId}</td>
                <td>
                  <Link to={'/retailers/' + returnItem.retailerId}>
                    {returnItem.retailerName}
                  </Link>
                </td>
                <td>{returnItem.status[0].description}</td>
                <td>
                  {' '}
                  <button
                    className="btn btn-sm
                    btn-primary"
                    onClick={() =>
                      this.props.handleViewMore(returnItem.returnId)
                    }
                  >
                    View More
                  </button>
                  <button
                    className="btn btn-sm
                    btn-outline-danger mx-3 "
                    onClick={() => this.props.handleDelete(returnItem.returnId)}
                  >
                    <i class="fas fa-trash-alt" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ReturnList;
