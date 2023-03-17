import React from "react";
import "./Navbar.css";
import IEEE from "./Assets/ieeewhite.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={IEEE} alt="IEEE" className="ieee-logo" />
      <div className="navbar-links">
        <Link to="/">
          HOME
          <span />
        </Link>
        <Link to="/about">
          ABOUT
          <span />
        </Link>
        <Link to="/about">
          SCHEDULE
          <span />
        </Link>
        <Link to="/about">
          EVENTS
          <span />
        </Link>
        <Link to="/about">
          SPONSORS
          <span />
        </Link>
      </div>
    </div>
  );
}
