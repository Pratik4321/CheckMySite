import React from "react";
import "../CSS/Footer.css";
import Logo from "../Assests/Logo.svg";
import facebook from "../Assests/facebook.svg";
import instagram from "../Assests/instagram.svg";
import twitter from "../Assests/twitter.svg";
import linkdin from "../Assests/linkdin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="main">
        <div className="top_section">
          <div className="checkmy_header">
            <div className="title_name"> <Link to={'login'}>{<img src={Logo} alt="" />}</Link></div>

            <div className="checkmy_middle">
              CheckMySite is a comprehensive and user-friendly online platform
              designed to help website owners and administrators monitor the
              status and performance of their websites
            </div>
            <div className="checkmy_logos">
              <div className="img">{<img src={facebook} alt="" srcset="" />}</div>
              <div className="img">{<img src={instagram} alt="" srcset="" />}</div>
              <div className="img">{<img src={twitter} alt="" srcset="" />}</div>
              <div className="img">{<img src={linkdin} alt="" srcset="" />}</div>
            </div>
          </div> 
          <div className="footer-col">
  	 			<h4>Company</h4>
  	 			<ul>
  	 				<li>Press</li>
  	 				<li>career</li>
  	 				<li>About Us</li>
  	 				<li>Our Story</li>
  	 				<li>Terms Of Service</li>
  	 			</ul>
  	 		</div>
          <div className="footer-col">
             <h4>Social</h4>
             <ul>
            <li>Contact US</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            </ul>
          </div>
          <div className="footer-col">
             <h4>More Information</h4>
             <ul>
            <li>Plans</li>
            <li>Monitoring Questions</li>
            <li>Account Questions</li>
            <li>API Documentation</li>
            <li>Free SMS Credit</li>
            </ul>
          </div>
        </div>
        <div className="down_section">
          <p className="down_section_p">
           @ Copyright 2022 <b style={{color:'#fff'}}>CheckMySite.</b> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
