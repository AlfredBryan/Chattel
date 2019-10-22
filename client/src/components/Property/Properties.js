import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";

import "./style.css";

class Properties extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div className="property_main">
          <h1>ALL PROPERTIES</h1>
        </div>
        <div className="center-div">
          <div className="property">
            <div className="property_content">
              <div className="property_img">
                <div className="property_price">
                  <h3>
                    #300,000/<small>Year</small>
                  </h3>
                </div>
              </div>
              <div className="property_text">
                <h3>4-bedroom semi-detached</h3>
                <p>
                  <i class="fa fa-map-marker"></i>
                  123, olodejobi street, Behind Tincan Island Lagos
                </p>
                <p>
                  <i class="fa fa-calendar"></i> 3 years ago
                </p>
                <p>
                  <i class="fa fa-user-circle"></i> Olamide Samuel
                </p>
                <p>
                  <i class="fa fa-phone"></i> 07068093818
                </p>
                <div className="property_tabs_one">
                  <div className="tab_one">
                    <h5>Running Water</h5>
                  </div>
                  <div className="tab_two">
                    <h5>Running Water</h5>
                  </div>
                  <div className="tab_three">
                    <h5>Running Water</h5>
                  </div>
                </div>
                <div className="property_tabs_two">
                  <div className="tab_one">
                    <h5>Running Water</h5>
                  </div>
                  <div className="tab_two">
                    <h5>Running Water</h5>
                  </div>
                  <div className="tab_three">
                    <h5>Running Water</h5>
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

export default Properties;
