import React, { useEffect, useRef } from "react";
import "./heroimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Type from "./Type";
import { Col } from "react-bootstrap";

const HeroImg = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the paragraph
    timeline.fromTo(
      contentRef.current.querySelector("p"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animate the heading
    timeline.fromTo(
      contentRef.current.querySelector("h1"),
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5" // Overlap animations by 0.5s
    );

    // Animate the buttons
    timeline.fromTo(
      contentRef.current.querySelectorAll(".btn"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, // Add stagger for sequential animation
      "-=0.5" // Overlap animations by 0.5s
    );
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        <img src="https://abha2510.github.io/static/media/bg.61e3b6116cf9298ff56e.gif" alt="IntroImg" className="intro-img" />
      </div>
      <div className="content" ref={contentRef}>
       <div className="">
       <Col md={7} className="home-header">
          <h2 style={{ paddingBottom: 15 }} className="heading">
            Hi{" "}
            <span className="wave" role="img" aria-labelledby="wave" style={{color:"#fff"}}>
              👋🏻
            </span>
          </h2>

          <h1 className="heading-name">I'M Mayuresh Ambatwar</h1>

          <h3 style={{ padding: 50, textAlign: "left" }}>
            <Type />
          </h3>
        </Col>
       </div>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
