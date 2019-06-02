import React, { Component } from "react";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ width: "500px" }}>
        <div className="card rounded-0">
          <div className="card-header">
            <h3 className="mb-0">Login</h3>
          </div>
          <div className="card-body">
            <form className="form">
              <div className="form-group">
                <label for="uname1">Distributor Id</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  name="uname1"
                  id="uname1"
                  required=""
                />
                <div className="invalid-feedback">
                  Oops, you missed this one.
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg rounded-0"
                  id="pwd1"
                  required=""
                  autocomplete="new-password"
                />
              </div>

              <button
                className="btn btn-success btn-lg float-right"
                id="btnLogin"
              >
                <a href="/returns" style={linkStyle}>
                  Login
                </a>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const linkStyle = {
  textDecoration: "none",
  color: "#fff"
};
export default LoginForm;
