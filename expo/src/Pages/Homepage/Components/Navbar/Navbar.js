import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import {HashLink as Link} from 'react-router-hash-link';
import "./Navbar.css";
import IEEE from "./Assets/ieeewhite.png";
import { Cross as Hamburger } from 'hamburger-react';
import {animateScroll as scroll} from 'react-scroll';
import {Link as LNK} from 'react-scroll';

function Navbar() {

  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false)


  const [isOpen1,setIsOpen1]=useState(false)

  const onClickHeader=()=>{
    setIsOpen1(!isOpen1);
  }
  return (
    <div className={header ? "header active" : "header"}>
      <div className={`header-wrapper ${isOpen1 ? 'header-wrapper active':''} `}>
     
          <NavLink to='/' className="header-logo-ieee">
            <img onClick={() => scroll.scrollToTop()} className="header-logo" src={IEEE} alt="IEEE" />
          </NavLink>
          
          <div onClick={onClickHeader} className="menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
  
        <div className="nav-items">
          <ul>
            {/* <li>
              <Link onClick={() => scroll.scrollToTop()} to="/">HOME</Link>
            </li> */}

            <li>
              <LNK
               to="about"
               spy={true}
               smooth={true}
               offset={-100}
               duration={3000}
               >
                 ABOUT
              </LNK>
            </li>

            <li>
              <Link to="/events">EVENTS</Link>
            </li>

            <li>
              <Link to="/page-under-construction">CERTIFICATION</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
