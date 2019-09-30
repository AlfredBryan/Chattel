import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div id="home_main">
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <h1 className="home-main">
                  Find your dream property
                  <br /> easily and comfortable
                </h1>
                <h2 className="site_description">
                  Chattel is a website that makes it <br />
                  easier for property owners to manage <br />
                  properties seamlessly
                </h2>
                <div className="main_buttons">
                  <div className="signin_design">
                    <h5>SIGN IN</h5>
                  </div>
                  <div className="find_property">
                    <h5>FIND PROPERTY</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg_image">
                <img
                  src={require("../../images/bgimage.png")}
                  alt="bg_image"
                  style={{ width: "700px", height: "593px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
