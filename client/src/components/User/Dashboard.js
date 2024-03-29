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
            <div className="col-xs-12 col-sm-4 col-md-4 user_profile_detail">
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
            <div className="col-xs-12 col-sm-8 col-md-8">
              <div className="user_properties">
                <div className="user_property mx-auto">
                  <div className="user_property_img">
                    <img src={require("../../images/property.png")} alt="" />
                  </div>
                  <div className="user_property_text">
                    <div className="property_writeup">
                      <h3>4-bedroom semi-detached</h3>
                      <p>
                        Status: <span>Not Occupied</span>
                      </p>
                      <p>
                        Posted on: <span>June 20, 2018</span>
                      </p>
                      <p>
                        Category: <span>Living apartment</span>
                      </p>
                      <p>
                        Location:
                        <span className="float-right">
                          22, Olodo Rabata ave, Fijabi <br />
                          street, Lagos Nigeria
                        </span>
                      </p>
                    </div>
                    <div className="card_fa">
                      <i className="fa fa-users"></i>
                      <i className="fa fa-pencil"></i>
                      <i className="fa fa-trash"></i>
                      <i className="fa fa-line-chart"></i>
                    </div>
                  </div>
                </div>
                <div className="user_property mx-auto">
                  <div className="user_property_img">
                    <img src={require("../../images/property.png")} alt="" />
                  </div>
                  <div className="user_property_text">
                    <div className="property_writeup">
                      <h3>4-bedroom semi-detached</h3>
                      <p>
                        Status: <span>Not Occupied</span>
                      </p>
                      <p>
                        Posted on: <span>June 20, 2018</span>
                      </p>
                      <p>
                        Category: <span>Living apartment</span>
                      </p>
                      <p>
                        Location:
                        <span className="float-right">
                          22, Olodo Rabata ave, Fijabi <br />
                          street, Lagos Nigeria
                        </span>
                      </p>
                    </div>
                    <div className="card_fa">
                      <i className="fa fa-users"></i>
                      <i className="fa fa-pencil"></i>
                      <i className="fa fa-trash"></i>
                      <i className="fa fa-line-chart"></i>
                    </div>
                  </div>
                </div>
                <div className="user_property mx-auto">
                  <div className="user_property_img">
                    <img src={require("../../images/property.png")} alt="" />
                  </div>
                  <div className="user_property_text">
                    <div className="property_writeup">
                      <h3>4-bedroom semi-detached</h3>
                      <p>
                        Status: <span>Not Occupied</span>
                      </p>
                      <p>
                        Posted on: <span>June 20, 2018</span>
                      </p>
                      <p>
                        Category: <span>Living apartment</span>
                      </p>
                      <p>
                        Location:
                        <span className="float-right">
                          22, Olodo Rabata ave, Fijabi <br />
                          street, Lagos Nigeria
                        </span>
                      </p>
                    </div>
                    <div className="card_fa">
                      <i className="fa fa-users"></i>
                      <i className="fa fa-pencil"></i>
                      <i className="fa fa-trash"></i>
                      <i className="fa fa-line-chart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
