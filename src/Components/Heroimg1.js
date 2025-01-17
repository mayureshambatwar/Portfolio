import React from "react";
import "./heroimg1.css";

const Heroimg1 = ({ heading, text, backgroundImage }) => {
  return (
    <div
      className="hero-img"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Heroimg1;
