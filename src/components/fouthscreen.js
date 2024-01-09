import React from "react";
import "./styles/fouthscreen.css";
import creators from "../assets/images/Creator Circles.png";

function Fouthscreen() {
  return (
    <section className="fouthscreen">
      <div className="colors">
        <div className="grey">
          <img src={creators} alt="" />
          <h1>Connect With Creators, Fans, & Friends</h1>
          <p>
            Direct messages, reactions, and comments are just a few ways to make
            new friends on <span className=" lava">Lava</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Fouthscreen;
