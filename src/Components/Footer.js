import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone,  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2323-124-23
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@gamil.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About this Company</h4>
          <p>
            This is me Mayuresh.CEO & Founder of Teck.I enjoy discussing new
            project and desing challenges
          </p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
