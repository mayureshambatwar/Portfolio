import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a react Front-End Developer.I create responsive secure websites for my Clients.</p>
        <Link to='/contact'>
        <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top" >
                <img src={React1} alt="true" />
            </div>
            <div className="img-stack bottom" >
                <img src={React2} alt="true" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
