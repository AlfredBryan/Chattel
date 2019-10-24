import React, { Component } from "react";
import "./dashboard.css";
import CustomNav from "../Navbar/CustomNav";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div className="container-fluid dashboard_main">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="user_profile">
                <div className="d-flex">
                  <div className="user_img">
                    <img src={require("../../images/Ellipse.png")} alt="" />
                  </div>
                  <div className="user_status">
                    <h3>Premium</h3>
                  </div>
                </div>
                <h3 className="username">Olamide Samuel</h3>
                <div className="edit_profile mx-auto">
                  <h3>Edit Profile</h3>
                </div>
              </div>
              <div className="user_details">
                <div className="details">
                  <p>
                    <i className="fa fa-home"></i>
                    My Properties
                  </p>
                  <p>
                    <i className="fa fa-bar-chart"></i>
                    Promote Property
                  </p>
                  <p>
                    <i class="fa fa-user-circle"></i> Account
                  </p>
                  <p>
                    <i class="fa fa-phone"></i> Contact Us
                  </p>
                  <p>
                    <i class="fa fa-sign-out"></i> Logout
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
