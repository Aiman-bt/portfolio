import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  // const value = sessionStorage("user");
  return (
    <div className="container">
      <div className="subContainer" id="admin">
        {window.sessionStorage.getItem("user") ? (
          <>
            <h1>Admin page</h1>
            <Link
              to="/"
              onClick={() => {
                alert("logged out successfully");
                sessionStorage.clear();
              }}
            >
              logout
            </Link>
          </>
        ) : (
          <>
            {" "}
            <h2>you must login first</h2>
            <Link to="/login/signin">go to sign in</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Admin;
