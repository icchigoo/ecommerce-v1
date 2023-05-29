import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = (props) => {
  return (
    <Fragment>
      
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <h4 className="text-white text-3xl mb-4 font-weight-bold">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 27 PCPS college, <br /> Shankhamul, Kathmandu <br />
                  PinCode: 44600
                </address>
                <a
                  href="tel:+977 9808758007"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +977 9808758007
                </a>
                <a
                  href="icchigoo12@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  icchigoo12@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://github.com/icchigoo">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="https://github.com/icchigoo">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="https://github.com/icchigoo">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="https://github.com/icchigoo">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h4 className="text-white text-3xl mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
              
              </div>
            </div>
          
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Powered by Sbrc infosys
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
