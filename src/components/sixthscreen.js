import React from "react";
import "./styles/sixthscreen.css";
import d45 from "../assets/images/Dual 45 Degree.png";

function Sixthscreen() {
  return (
    <section className="sixthscreen">
      <div className="hear">
        <h1>
          Hear Cool <br />
          Stories
        </h1>
        <p>
          Your personalized feed recommends audio clips <br /> based on things
          you care about whether that’s a <br />
          recap of last nights game, a breakdown of your <br /> favorite
          musician’s album, or the latest news in <br /> tech.
        </p>
      </div>
      <div className="cool">
        <img src={d45} alt="" />
      </div>
    </section>
  );
}

export default Sixthscreen;
