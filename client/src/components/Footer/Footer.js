import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer_main">
          <div className="footer_items">
            <div className="footer_one">
              <h3>Company</h3>
              <div>About Us</div>
              <div>Contact Us</div>
              <div>Our Blog</div>
              <div className="footer_fa">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-facebook"></i>
              </div>
            </div>
            <div className="footer_two">
              <h3>Subscribe to our Newsletter</h3>
              <p>
                Be the first to know about new <br />
                properties by subscribing to our <br /> newsletter.
              </p>
              <div className="footer_input">
                <input type="text" placeholder="Enter Your Email" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <div className="footer_three">
              <h3>Chattel</h3>
              <p>Email : hello@chattel.com</p>
              <p>Call Us: +(234) 706 8093 818</p>
              <p>
                No 3, Dakeduro Street, Ikeja, <br />
                Lagos,
                <br />
                Nigeria
              </p>
            </div>
          </div>
          <h5>
            &copy; {new Date().getFullYear()} Chattel. All rights reserved
          </h5>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
