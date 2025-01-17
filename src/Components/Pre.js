import React from "react";
import { HashLoader } from "react-spinners";
import "./Pre.css";

const Pre = ({ load }) => {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <HashLoader color="#3498db" size={50} />
    </div>
  );
};

export default Pre;
