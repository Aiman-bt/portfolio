import React, { useState } from "react";

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
      <div className="navLogo">
        <h1>
          <span className="d">D</span>eveloper
        </h1>
      </div>
      <div className="navLinkContainer">
        <div className="navLinks">
          <span className="w">w</span>ork
        </div>
        <div className="navLinks">
          <span className="s">s</span>ervices
        </div>
        <div className="navLinks">
          <span className="a">a</span>bout
        </div>
        <div className="navLinks">
          <span className="p">P</span>rojects
        </div>
        <div className="navLinks">
          <span className="b">b</span>logs
        </div>
      </div>
      <div className="navContact">
        <span className="c">c</span>ontact Me
      </div>
    </div>
  );
}

export default Navbar;
