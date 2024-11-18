import React from "react";
import './Designs/Footer.css';
import ISOLOGO from "../assets/ISO_Certificate.png";

const Footer = () => {
  return (
    <>
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
                <img src={ISOLOGO} alt="A local image" className="iso-logo" />
              </ul>
            </div>
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="http://localhost:3001/about">about us</a></li>
                <li><a href="http://localhost:3001/contact">Contact Us</a></li>
                <li><a href="/privacy-policy">privacy policy</a></li>
                <li><a href="/terms-condition">Term & Condition</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Our Product</h4>
              <ul>
                <li><a href="#">Paper Plate Making Machine</a></li>
                <li><a href="#">Automatic Paper Cup Making Machine</a></li>
                <li><a href="#">Non Woven Bag Making Machine</a></li>
                <li><a href="#">Offset Printing Machine</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="https://www.facebook.com/BajarangiIndustries/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/channel/UCy499l_scTs3_H7mUAH0Vtw"><i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/industriesbajarangi_15/"><i class="fab fa-instagram"></i></a>
                <a href="https://in.linkedin.com/company/bajarangiindustries"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
