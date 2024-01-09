import React, { useState } from "react";
import "./styles/navbar.css";
import qr from "../assets/images/QR.png";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isHover, setIsHover] = useState(false);
  return (
    <nav className="nav">
      <div className="top"></div>
      <div className="navbar">
        <img src={logo} alt="Logo" />
        <h1>Lava</h1>
        <img
          src={qr}
          alt="QR code"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
