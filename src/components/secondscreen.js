import React from "react";
import "./styles/secondscreen.css";
import m1 from "../assets/images/m1.png";
import ml1 from "../assets/images/ml1.png";
import ml2 from "../assets/images/ml2.png";
import mr1 from "../assets/images/mr1.png";
import mr3 from "../assets/images/mr3.png";

function Secondscreen() {
  return (
    <div className="secondscreen">
      <img className="ml2" src={ml2} alt="" />
      <img className="ml1" src={ml1} alt="" />
      <img src={m1} alt="" className="m1" />
      <img src={mr1} alt="" className="mr1" />
      <img src={mr3} alt="" className="mr3" />
    </div>
  );
}

export default Secondscreen;
