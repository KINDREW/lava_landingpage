import React from "react";
import "./styles/thirdscreen.css";
import l1 from "../assets/images/l1.png";
import rightpod from "../assets/images/Airpod Right.png";
import leftpod from "../assets/images/Airpod Left.png";
import r1 from "../assets/images/r1.png";

function Thirdscreen() {
  return (
    <div className="thirdscreen">
      <div className="ai">
        <img className="podscon" src={l1} alt="" />
        <h1>Discover Social Audio</h1>
        <p>Listen to clips, posts, and podcasts on your personalized feed</p>
        <img className="rightpod" src={rightpod} alt="" />
        <img className="leftpod" src={leftpod} alt="" />
      </div>
      <div className="ir">2</div>
      <div className="pod">
        <img src={r1} alt="" />
        <h1>Voice Your Ideas</h1>
        <p>
          Share your conversations with the world through the authenticity of
          audio
        </p>
      </div>
    </div>
  );
}

export default Thirdscreen;
