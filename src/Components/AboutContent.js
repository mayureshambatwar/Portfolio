import React from "react";
import "./AboutContent.css";
import { ImPointRight } from "react-icons/im";
// import laptopImg from "./path/to/laptop-image.jpg";
import { Col, Row } from "react-bootstrap";
import { DiBootstrap, DiCss3, DiGit, DiHtml5, DiJavascript1, DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import { SiExpress, SiFigma, SiNextdotjs, SiPostman, SiVercel, SiVisualstudiocode } from "react-icons/si";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>
          Know Who <strong className="purple">I'M</strong>
        </h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi Everyone, I am <span className="purple">Mayuresh Ambatwar</span>{" "}
            from <span className="purple">Maharashtra, India.</span>
            <br />
            I am currently pursuing my career in software development and have a
            passion for building user-friendly and impactful applications.
            <br />
            I hold a Bachelor’s degree in Electrical Engineering and have gained
            experience in front-end development at Pacematic Corporate Training
            Centre
            <br />
            <br />
            Beyond coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and trends.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching informative tech videos.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games and engaging in creative hobbies.
            </li>
          </ul>
          <blockquote className="blockquote">
            <p>I strongly believe in the motto:</p>
            <p className="quote">
              "Transform challenges into opportunities with every solution."
            </p>
          </blockquote>
        </div>
        <div className="about-image">
          <img
            src="https://www.clariontech.com/hubfs/Frontend%20vs%20Backend.jpg"
            alt="about"
          />
        </div>
      </div>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <div>
      <Row className="techstack-container">
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
    </Row>
      <Row className="techstack-container">
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
      </div>
      <h1 className="project-heading">
        Tool <strong className="purple">I use </strong>
      </h1>
      <div>
      <Row className="techstack-container">
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
    </Row>
      </div>
    </div>
  );
};

export default About;
