import React from "react";
import "./Footer.css";
import { Link} from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>R&D Expo 2023</h1>
        <p>
          R&D Expo is one of the biggest tech fest of JUIT by IEEE Student
          Branch.
        </p>
        @2023 R&D Expo. All Rights Reserved.
      </div>
      <div className="footer-right">
        <div className="fr-left">
          <h3>Site Map</h3>
          <ul className="site-map">
            <li>
              <Link onClick={() => scroll.scrollToTop()} to="/">
                HOME
              </Link>
            </li>
            <li>
              <LinkScroll
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
              >
                ABOUT
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="events"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
              >
                EVENTS
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="schedule"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
              >
                SCHEDULE
              </LinkScroll>
            </li>
          </ul>
        </div>
        <span className="partition" />
        <div className="fr-right">
          <h3>Connect With Us</h3>
          <ul className="f-socials">
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
