import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import BACKEND_API from "../Backend";

function Signin() {
  const url = BACKEND_API;

  const signinForm = {
    email: "",
    password: "",
  };

  const submitLogin = async (values) => {
    await fetch(url + "/user/email/" + values.email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          if (data.password === values.password) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Logged in successfully!",
            });
            console.log("login Success");
            sessionStorage.setItem("user", JSON.stringify(data));
            window.location.replace("/admin");
            return;
          } else {
            alert("password incorrect");
          }
        } else {
          alert("user not found");
        }
      });
  };

  return (
    <div id="signin">
      <div className="scontainer">
        <Formik initialValues={signinForm} onSubmit={submitLogin}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="form-control lg"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="form-control lg"
                />
              </div>
              <div>
                <button className="btn">Sign In</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Signin;
