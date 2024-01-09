import React from "react";
import "./styles/homepage.css";
import left from "../assets/images/left.jpeg";
import center from "../assets/images/center.jpeg";
import right from "../assets/images/right.png";

function Homepage() {
  return (
    <div className="homepage">
      <div className="circles">
        <img className="left" src={left} alt="" />
        <img className="center" src={center} alt="" />
        <img className="right" src={right} alt="" />
        <h3 className="gradient-text">FIND YOUR VOICE</h3>
      </div>
      <h1 className="audio">
        Audio has never been
        <br /> this social
      </h1>
      <p className="create">
        Create, curate, & discover stories from around the world on
        <span className="lava"> Lava</span>
      </p>
      <div className="get">
        <span>Get The App</span>
      </div>
    </div>
  );
}

export default Homepage;
