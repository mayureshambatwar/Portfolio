import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
const WorkCard = (props) => {
  return (
    <NavLink to={props.view}>
      <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            VIEW
            <TbWorld size={24} />
          </NavLink>
          <NavLink to={props.source} className="btn btn-light">
            SOURCE
            <FaGithub size={24} />
          </NavLink>
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default WorkCard;
