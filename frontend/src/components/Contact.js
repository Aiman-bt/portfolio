import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import BACKEND_API from "../Backend";

function Contact() {
  const url = BACKEND_API;
  const messageInit = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const messageToSubmit = (values) => {
    const reqs = {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url + "/message/send", reqs)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Thankyou!",
            text: "we contact you shortly",
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
    <div id="contact">
      <div className="contactWatermark">
        <div>Hola!</div>
      </div>
      <div className="contactForm">
        <Formik initialValues={messageInit} onSubmit={messageToSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="column">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      className="form-control"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={values.subject}
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      onChange={handleChange}
                      value={values.message}
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="8"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button type="submit" className="btn">
                      Submit
                    </button>
                    <div className="submitting"></div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
