import React from "react";
import "./styles/last.css";
import qr from "../assets/images/frame.png";

function Lastscreen() {
  return (
    <section className="lastscreen">
      <div className="bcolor">
        <div className="bgrey">
          <div className="scolor">
            <div className="sgrey">
              <img src={qr} alt="" />
              <span className="lava">Lava on ios</span>
              <p>Scan or Tap </p>
            </div>
          </div>
          <h1>So what are you waiting for?</h1>
          <p>
            Download the Lava mobile app to snag a cool username before <br />{" "}
            your mom finds out that we exist
          </p>
        </div>
      </div>
      <div className="footer">
        &copy;
        <span>Kojo_afful</span>
      </div>
    </section>
  );
}

export default Lastscreen;
