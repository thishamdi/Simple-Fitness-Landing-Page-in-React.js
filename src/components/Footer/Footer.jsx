import React from 'react';
import "./Footer.css";
// import { BsTwitterX } from "react-icons/bs";
// import { FaRegCopyright } from "react-icons/fa";
// import { SlSocialLinkedin, SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Services</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Products</li>
            <li>Partners</li>
            <li>Careers</li>
            <li>Testimonials</li>
          </ul>
          <ul>
            <li>Blog</li>
            <li>Events</li>
            <li>Press</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>Terms of Service</li>
            <li>Customer Support</li>
            <li>Feedback</li>
            <li>Subscribe</li>
          </ul>
        </div>
        <div className="copyright-box">
          <p>© FitPhysique. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
