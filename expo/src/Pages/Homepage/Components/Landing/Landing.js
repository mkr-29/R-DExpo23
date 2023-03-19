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
      <div class="area">
        <ul class="circles">
          <li></li>   {/*1*/}
          <li></li>   {/*2*/} 
          <li></li>  {/*3*/}
          <li></li> {/*4*/}
          <li></li> {/*5*/}
          <li></li> {/*6*/}
          <li></li> {/*7*/}
          <li></li> {/*8*/}
          <li></li>   {/*9*/}
          <li></li>   {/*10*/}
          <li></li>   {/*11*/}
          <li></li>   {/*12*/}
          <li></li>   {/*13*/}
          <li></li>     {/*14*/}
          <li></li>   {/*15*/}
          <li></li>   {/*16*/}
          <li></li>   {/*17*/}
          <li></li>   {/*18*/}
          <li></li>   {/*19*/}
          <li></li>   {/*20*/}
          <li></li>   {/*21*/}
        </ul>
      </div>
      <div>
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
      </div>
    </div>
  );
}