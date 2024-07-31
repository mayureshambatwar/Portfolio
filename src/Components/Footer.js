import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

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
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              92846-310-83
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a
                href="mailto:mayureshambatwar@gmail.com"
                className="mail"
              >
                mayureshambatwar@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About this Company</h4>
          <p>
            This is me Mayuresh. CEO & Founder. I enjoy discussing new
            projects and design challenges.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/mayuresh.ambatwar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/mayureshambatwar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
