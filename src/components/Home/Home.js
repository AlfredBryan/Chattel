import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div id="home_main">
          <img
            className="bg_img"
            src={require("../../images/landingbg.png")}
            alt="bg_img"
          />
          <h1 className="first_t">Find Your Dream Property</h1>
          <h1 className="second_t">Easily And Comfortably.</h1>
          <div className="home_buttons">
            <div className="first_button">
              <h5 className="find_property">FIND PROPERTY</h5>
            </div>
            <div className="second_button">
              <h5 className="about_us">ABOUT US</h5>
            </div>
          </div>
        </div>
        <section className="feature_section">
          <h1 className="feature_header">FEATURES</h1>
          <div className="main_feature">
            <div className="feature_img">
              <img
                src={require("../../images/feature.png")}
                alt="feature_img"
              />
            </div>
            <div className="feature_text">
              <h3 className="p_management">Easy property management.</h3>
              <p>
                Chattel provides landlords with <br />
                the platform they need to manage <br />
                their own properties and <br />
                tennants.
              </p>
              <h3 className="s_money">Saving your money.</h3>
              <p>
                Why would you want to pay <br />
                someone to get you a tennant <br />
                when you can get your property <br />
                advertised with us?
              </p>
            </div>
          </div>
        </section>
        <section className="price_section">
          <div className="pricing_list">
            <h1>PRICING LIST</h1>
          </div>
          <div className="pricing">
            <div className="price_one">
              <hr className="first_line_one" />
              <p>Number of properties</p>
              <hr className="second_line_one" />
              <p>Email notifications</p>
              <hr className="second_line_one" />
              <p>Sms notifications</p>
              <hr className="second_line_one" />
              <p>Price per year</p>
              <hr className="second_line_one" />
            </div>
            <div className="price_two">
              <h2 className="align_text"> FREE</h2>
              <hr className="first_line" />
              <p>1</p>
              <hr className="second_line" />
              <i className="fa fa-check"></i>
              <hr className="second_line" />
              <i className="fa fa-close"></i>
              <hr className="second_line" />
              #20, 000
              <hr className="second_line" />
              <div className="get_started">
                <h5 className="get_started_text">GET STARTED</h5>
              </div>
            </div>
            <div className="price_three">
              <h2 className="align_text"> BASIC</h2>
              <hr className="first_line" />
              <p>5</p>
              <hr className="second_line" />
              <i className="fa fa-check"></i> <hr className="second_line" />
              <i className="fa fa-check"></i> <hr className="second_line" />
              #50, 000
              <hr className="second_line" />
              <div className="get_started">
                <h5 className="get_started_text">GET STARTED</h5>
              </div>
            </div>
            <div className="price_four">
              <h2 className="align_text">PREMIUM</h2>
              <hr className="first_line" />
              <p>Unlimited</p>
              <hr className="second_line" />
              <i className="fa fa-check"></i> <hr className="second_line" />
              <i className="fa fa-check"></i> <hr className="second_line" />
              #120, 000
              <hr className="second_line" />
              <div className="get_started">
                <h5 className="get_started_text">GET STARTED</h5>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
