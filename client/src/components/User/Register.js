import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";
import Spinner from "../hoc/Spinner";

const Url = process.env.REACT_APP_BASE_URL;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      gender: "",
      phone_number: "",
      loading: false
    };
  }

  submitHandler = e => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      gender,
      phone_number,
      password
    } = this.state;
    this.setState({
      loading: true
    });
    axios
      .post(`${Url}/register`, {
        firstname,
        lastname,
        email,
        gender,
        phone_number,
        password
      })
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
    const {
      firstname,
      lastname,
      email,
      password,
      gender,
      phone_number,
      loading
    } = this.state;
    return (
      <React.Fragment>
        <div className="register_cover">
          <div className="register_form">
            <h3 className="register_header">Sign Up</h3>
            <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
              <div className="col-md-12 user_name form-group">
                <div className="col-md-6">
                  <TextField
                    id="standard-name"
                    label="FIRST NAME"
                    className="form-control"
                    margin="normal"
                    value={firstname}
                    name="firstname"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    id="standard-name"
                    label="LAST NAME"
                    className="form-control"
                    margin="normal"
                    name="lastname"
                    value={lastname}
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
                <div className="col-md-12">
                  <FormControl variant="outlined" className="form-control">
                    <InputLabel htmlFor="outlined-age-simple">
                      Gender
                    </InputLabel>
                    <Select
                      value={gender}
                      onChange={this.handleChange}
                      name="gender"
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="col-md-12 form-group">
                <TextField
                  id="standard-name"
                  label="PHONE NUMBER"
                  className="form-control input_control"
                  margin="normal"
                  name="phone_number"
                  value={phone_number}
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
                <button
                  type="submit"
                  onClick={this.submitHandler}
                  className="form_button"
                >
                  {loading ? <Spinner /> : "SIGN UP"}
                </button>
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
