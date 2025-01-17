import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={40} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Current Location</p>
              <p> Lane No 4, Old Sai Baba Mandir Rd, near Sai Baba Temple, Raghavendra Nagar, Kharadi, Pune, Maharashtra 411014</p>
              
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              92846-310-83
            <a href="https://wa.me/9284631083?text=Hi, it's great to see you!">
            <FaWhatsapp  size={30}
                style={{ color: "#fff", marginLeft: "1.7rem" ,textAlign:"center" ,}}/>
            </a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:mayureshambatwar@gmail.com" className="mail">
                mayureshambatwar@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4> FIND ME ON</h4>
          <p>Feel free to connect with me</p>
          <div className="social">
            <a
              href="https://www.facebook.com/mayuresh.ambatwar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/mayureshambatwar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mayuresh-ambatwar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={40}
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
