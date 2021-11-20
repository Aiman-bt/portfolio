import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import BACKEND_API from "../Backend";

function Signup() {
  const url = BACKEND_API;
  const signupForm = {
    name: "",
    email: "",
    password: "",
  };

  const signupSubmit = (values) => {
    const reqs = {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url + "/user/add", reqs)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Signed Up!",
            text: "You have successfully Registered",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Something went wrong",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div id="signup">
      <div className="scontainer">
        <Formik initialValues={signupForm} onSubmit={signupSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="form-control lg"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
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
                  className="form-control lg"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn" id="sup">
                  Sign UP
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
