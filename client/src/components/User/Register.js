import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

const Url = process.env.REACT_APP_BASE_URL;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last_name: "",
      first_name: "",
      email: "",
      password: "",
      loading: false
    };
  }

  submitHandler = e => {
    const { first_name, last_name, email, password } = this.state;
    this.setState({
      loading: true
    });
    axios
      .post(`${Url}/register`, { first_name, last_name, email, password })
      .then(res => {
        console.log(res);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { first_name, last_name, email, password, loading } = this.state;
    return (
      <React.Fragment>
        <div className="register_cover">
          <div className="register_form">
            <h3 className="register_header">Sign Up</h3>
            <form noValidate autoComplete="off">
              <div className="col-md-12 user_name form-group">
                <div className="col-md-6">
                  <TextField
                    id="standard-name"
                    label="FIRST NAME"
                    className="form-control"
                    margin="normal"
                    value={first_name}
                    name="first_name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    id="standard-name"
                    label="LAST NAME"
                    className="form-control"
                    margin="normal"
                    name="last_name"
                    value={last_name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
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
                <button className="form_button">SIGN UP</button>
                <Link to="/login">
                  <p className="register_text"> Already have an account?</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
