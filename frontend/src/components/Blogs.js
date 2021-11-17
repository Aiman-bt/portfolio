import React from "react";
import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <>
      <Link to="/">home</Link>
      <div id="blogs" className="subContainer">
        <h1>Blogs</h1>
      </div>
    </>
  );
}
