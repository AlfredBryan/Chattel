import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }
  render() {
    const { email, password, loading } = this.state;
    return (
      <React.Fragment>
        <div className="register_cover">
          <div className="register_form">
            <h3 className="register_header">Sign Up</h3>
            <form noValidate autoComplete="off">
              <div className="col-md-12 form-group">
                <TextField
                  id="standard-name"
                  label="EMAIL ADDRESS"
                  className="form-control input_control"
                  margin="normal"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-12 form-group">
                <TextField
                  id="standard-name"
                  label="PASSWORD"
                  className="form-control input_control"
                  margin="normal"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-12 d-flex form-group button_form">
                <button className="form_button">LOGIN</button>
                <Link to="/register">
                  <p className="register_text"> Don't have an account?</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
