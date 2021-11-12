import React, { useState } from "react";
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
        className="navLogo"
        scroll={true}
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
        <Link to="about" className="navLinks" scroll={true} duration={2000}>
          <span className="a">a</span>bout
        </Link>
        <Link to="project" className="navLinks" scroll={true} duration={2000}>
          <span className="p">P</span>rojects
        </Link>
        <Link to="work" className="navLinks" scroll={true} duration={2000}>
          <span className="w">w</span>ork
        </Link>
        <Link to="/blogs" className="navLinks" scroll={true} duration={1000}>
          <span className="b">b</span>logs
        </Link>
        <Link to="/login" className="navLinks" scroll={true} duration={1000}>
          <span className="l">L</span>ogin /<span className="s"> S</span>ignup
        </Link>
      </div>
      <Link to="contact" className="navContact" scroll={true} duration={1000}>
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
