import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className={classname}>
      <Link to="/" className="navLogo">
        <h1>
          <span className="d">D</span>eveloper
        </h1>
      </Link>
      <div className="navLinkContainer">
        <Link to="/work" className="navLinks">
          <span className="w">w</span>ork
        </Link>
        <Link to="/services" className="navLinks">
          <span className="s">s</span>ervices
        </Link>
        <Link to="/about" className="navLinks">
          <span className="a">a</span>bout
        </Link>
        <Link to="/projects" className="navLinks">
          <span className="p">P</span>rojects
        </Link>
        <Link to="/blogs" className="navLinks">
          <span className="b">b</span>logs
        </Link>
        <Link to="/login" className="navLinks">
          Login
        </Link>
      </div>
      <Link to="/contactMe" className="navContact">
        <span className="c">c</span>ontact Me
      </Link>
    </div>
  );
}

export default Navbar;
