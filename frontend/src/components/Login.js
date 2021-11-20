import React from "react";
import { Link } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";

function Login() {
  const [first, setFirst] = React.useState("active");
  const [second, setSecond] = React.useState("inactive");
  return (
    <div className="Log">
      <div id="Login">
        <div className="llink">
          <div className="loginLink">
            <Link className="at inactive" to="/">
              home
            </Link>
            <div>
              <span
                className={`${first} signin`}
                onClick={() => {
                  setFirst("active");
                  setSecond("inactive");
                }}
              >
                Sign In
              </span>
              <span
                className={`${second} signup`}
                onClick={() => {
                  setFirst("inactive");
                  setSecond("active");
                }}
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
        <div>{first === "active" ? <Signin /> : <Signup />}</div>
      </div>
    </div>
  );
}
export default Login;
