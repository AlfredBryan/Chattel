import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";
import Footer from "../Footer/Footer";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Features;
