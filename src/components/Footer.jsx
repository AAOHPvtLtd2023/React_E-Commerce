import React from "react";
import './Designs/Footer.css';
import ISOLOGO from "../assets/ISO_Certificate.png";

const Footer = () => {
  return (
    <>
      {/* <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://sahibsingh.dev" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Sahib Singh</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer> */}
      <footer class="footer">
        <div class="container">
          <div className="logo"></div>
          <div class="row">
            <div class="footer-col1"
            >
             
            </div>
            <div class="footer-col">
              <h4>we are accrirediated with</h4>
              <ul>
              <img src={ISOLOGO} alt="A local image" className="iso-logo"/>
              </ul>
            </div>
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="http://localhost:3001/about">about us</a></li>
                <li><a href="http://localhost:3001/contact">Contact Us</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">Term & Condition</a></li>
              </ul>
            </div>
           
            <div class="footer-col">
              <h4>Our Product</h4>
              <ul>
                <li><a href="#">Paper Plate Making Machine</a></li>
                <li><a href="#">Automatic Paper Cup Making Machine</a></li>
                <li><a href="#">Non Woven Bag Making Machine</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
