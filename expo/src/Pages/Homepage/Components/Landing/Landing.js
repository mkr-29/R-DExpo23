import React from "react";
// import "./Landing.css";
import "./Landing.scss";
import RND from "./Assets/rndwhite3d.png";
import { useEffect, useState } from "react";
import Time from "./Time";
import {Link as LNK} from 'react-scroll';
import backgroundImage from "./Assets/backgroundImage.jpg";

export default function Landing() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };  

  

  return (
    <div className="landing">
      <div class="area">
      </div>
      <div className="landig-comps">
        <img
          src={RND}
          alt="RND EXPO"
          className="rnd-logo"
          style={{
            opacity: 1 - scrollPosition / window.innerHeight,
            transform: `translateY(${scrollPosition * 0.8}px) scale(${
              1 + scrollPosition / (window.innerHeight * 2)
            })`,
          }}
        />
        <Time />
        <LNK className="about-landing-button" to="about" spy={true} smooth={true} offset={-100} duration={3000}>
          ABOUT
        </LNK>
      </div>
    </div>
  );
}
