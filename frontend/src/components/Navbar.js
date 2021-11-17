import React, { useState } from "react";
import { Link as Links } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [classname, setClassname] = useState("navContainer gray");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setClassname("navContainer navSticky");
    } else {
      setClassname("navContainer gray");
    }
  });

  return (
    <div id="navbar" className={classname}>
      <Link
        to="/"
        className="navLogo"
        duration={1000}
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <h1>
          <span className="d">D</span>eveloper
        </h1>
      </Link>
      <div className="navLinkContainer">
        <Link to="about" className="navLinks">
          <span className="a">a</span>bout
        </Link>
        <Link to="projects" className="navLinks">
          <span className="p">P</span>rojects
        </Link>
        <Link to="work" className="navLinks">
          <span className="w">w</span>ork
        </Link>
        <Links to="/blogs" className="navLinks">
          <span className="b">b</span>logs
        </Links>
        <Links to="/login/signin" className="navLinks">
          <span className="l">L</span>ogin /<span className="s">S</span>ignup
        </Links>
      </div>
      <Link to="contact" className="navContact">
        <span className="c">c</span>ontact Me
      </Link>
      <div className="hamburger">
        <span className="span 1"></span>
        <span className="span 2"></span>
        <span className="span 3"></span>
      </div>
    </div>
  );
}

export default Navbar;
