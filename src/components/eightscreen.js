import React from "react";
import "./styles/eightscreen.css";
import profile from "../assets/images/Profile_Playlists 3-p-800.png";

const Eightscreen = () => {
  return (
    <section className="sixthscreen">
      <div className="hear">
        <h1>Build Your Audience</h1>
        <p>
          Start a podcast without any equipment, experience, or expertise
          <br /> Lava empowers you to record your conversations, share them with{" "}
          <br /> your followers, then add them to playlists. Lava is what
          podcasting <br /> should be: easy.
        </p>
      </div>
      <div className="cool">
        <img src={profile} alt="" />
      </div>
    </section>
  );
};

export default Eightscreen;
