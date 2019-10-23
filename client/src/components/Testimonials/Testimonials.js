import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";

class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <section className="testimonials">
          <h3 className="test_header">TESTIMONIALS</h3>
          <Carousel autoPlay showArrows={false} showStatus={false}>
            <div className="center_div">
              <div className="test_1">
                <div className="test_img"></div>
                <p className="test_text">
                  It is a long established fact that a <br />
                  reader will be distracted by the <br />
                  readable content of a page when <br />
                  looking at its layout. The point of <br />
                  using
                </p>
                <h4 className="testifier">Gloria Ajasin</h4>
              </div>
            </div>
            <div className="center_div">
              <div className="test_1">
                <div className="test_img"></div>
                <p className="test_text">
                  It is a long established fact that a <br />
                  reader will be distracted by the <br />
                  readable content of a page when <br />
                  looking at its layout. The point of <br />
                  using
                </p>
                <h4 className="testifier">Yusuf Adiran</h4>
              </div>
            </div>
            <div className="center_div">
              <img src="assets/3.jpeg" alt=" testimonial" />
              <div className="test_1">
                <div className="test_img"></div>
                <p className="test_text">
                  It is a long established fact that a <br />
                  reader will be distracted by the <br />
                  readable content of a page when <br />
                  looking at its layout. The point of <br />
                  using
                </p>
                <h4 className="testifier">Emeka Aloy</h4>
              </div>
            </div>
          </Carousel>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Testimonials;
