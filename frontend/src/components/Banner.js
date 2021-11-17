import React from "react";

function Banner() {
  return (
    <div id="banner" className="subContainer bannerBack">
      <h1 className="bannerWatermark">
        <span className="mern">MERN</span>
        <span>Full-Stack</span>
      </h1>
      <div className="banner">
        <div className="typewriter">
          <h1>
            <span style={{ color: "red" }}>Hi</span> this is Aiman Basharat.
          </h1>
        </div>
        <h2>Full-stack Developer</h2>
      </div>
    </div>
  );
}
export default Banner;
