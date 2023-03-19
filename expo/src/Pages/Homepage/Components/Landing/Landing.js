import React from "react";
// import "./Landing.css";
import "./Landing.scss";
import RND from "./Assets/rndwhite3d.png";
import { useEffect, useState } from "react";
import Time from "./Time";

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

  // for each li of className circles give random left percentage less than 95% and random animation delay less than 10 and random animation duration less than 40
  const circles = document.querySelectorAll(".circles li");
  circles.forEach((circle) => {
    circle.style.left = Math.random() * 95 + "%";
    circle.style.animationDelay = Math.random() * 10 + "s";
    // animation duration between 10 and 40s
    circle.style.animationDuration = Math.random() * 30 + 10 + "s";
  });

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
          <li></li>   {/*22*/}
          <li></li>   {/*23*/}
          <li></li>   {/*24*/}
          <li></li>   {/*25*/}
          <li></li>   {/*26*/}
          <li></li>   {/*27*/}
          <li></li>   {/*28*/}
          <li></li>   {/*29*/}
          <li></li>   {/*30*/}
          <li></li>   {/*31*/}
          <li></li>   {/*32*/}
          <li></li>   {/*33*/}
          <li></li>   {/*34*/}
          <li></li>   {/*35*/}
          <li></li>   {/*36*/}
          <li></li>   {/*37*/}
          <li></li>   {/*38*/}
          <li></li>   {/*39*/}
          <li></li>   {/*40*/}
          <li></li>   {/*41*/}
          <li></li>   {/*42*/}
          <li></li>   {/*43*/}
          <li></li>   {/*44*/}
          <li></li>   {/*45*/}
          <li></li>   {/*46*/}
          <li></li>   {/*47*/}
          <li></li>   {/*48*/}
          <li></li>   {/*49*/}
          <li></li>   {/*50*/}

        </ul>
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
      <Time/>
      </div>
    </div>
  );
}