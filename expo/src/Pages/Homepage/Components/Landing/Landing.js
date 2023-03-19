import React from "react";
import "./Landing.css";
import RND from "./Assets/rndwhite3d.png";
import { useEffect, useState } from "react";
import Confetti from "./Particles";

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
      <Confetti/>      
      <div>
        <img
          src={RND}
          alt="RND EXPO"
          className="rnd-logo"
          style={{
            opacity: 1 - scrollPosition / window.innerHeight,
            transform: `translateY(${scrollPosition * 0.5}px) scale(${
              1 + scrollPosition / (window.innerHeight * 2)
            })`,
          }}
        />
      </div>
    </div>
  );
}