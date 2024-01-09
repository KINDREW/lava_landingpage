import React from "react";
import "./styles/seventhscreen.css";
import trio from "../assets/images/Trio.png";

const Seventhscreen = () => {
  return (
    <section className="seventhscreen">
      <div className="be">
        <img src={trio} alt="" />
      </div>
      <div className="a">
        <h1>Be a Trendsetter</h1>
        <p>
          Explore what’s happening in the world through <br /> popular hashtags
          then record your opinions by <br />
          yourself or with friends to become a thought leader <br /> in the
          conversation.
        </p>
      </div>
    </section>
  );
};

export default Seventhscreen;
