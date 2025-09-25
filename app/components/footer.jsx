import React from 'react';
import Image from "next/image";
import '../custom_scss/footer.scss';
import logo from "../images/bitcoin-coin-exchange-finance-money-currency-svgrepo-com 1.png"
import Droparrow from "../images/Vector.png"
import Facebook from "../images/facebook-logo-svgrepo-com 1.png"
import Twitter from "../images/Vector (1).png"
import Instagram from "../images/Group.png"



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column brand">
          <div className="logo">
            <span>
              <Image src={logo} alt="BitNow" width={40} height={40} />
            </span>
            BitNow
          </div>
          <p>Lorem Ipsum, jhdjnfnj<br />Htehiujnerv</p>
          <div className="social-icons">
            <Image src={Facebook} alt="Facebook" width={24} height={24} />
            <Image src={Instagram} alt="Instagram" width={24} height={24} />
            <Image src={Twitter} alt="Twitter" width={24} height={24} />
          </div>
        </div>

        <div className="footer-column">
          <h4>Other Pages</h4>
          <ul>
            <li>
              <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
              Home
            </li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                About Us</li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                Services</li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                Token Sale</li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                Privacy Policy</li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                Term Of Service</li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                Disclaimer</li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                Credits</li>
            <li>
                <span>
                <Image src={Droparrow} alt="" width={16} height={16} />
              </span>
                FAQ</li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h4>Newsletter</h4>
          <p>At habitant maecenas lacus adipiscing non. <br />Accumsan etiam non praesent</p>
          <input type="email" placeholder="Your email address" />
                    <button className="subscribe-btn">Subscribe</button>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="language-selector">
          <span>🌐 Cestina</span>
          {/* <IoIosArrowDown /> */}
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Notice at Collection</a>
          <a href="#">Terms</a>
          <span>Copyright © 2023 Atlassian</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
