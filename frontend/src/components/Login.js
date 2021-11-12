import React from "react";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    // console.log(event.target.value)
  }
  render() {
    return (
      <div className="subContainer">
        <form className="contactForm">
          <div>
            Full Name :
            <input type="text" />
          </div>
          <div>
            Contact Number :
            <input type="text" />
          </div>
          <div>
            Email Id :
            <input type="text" />
          </div>
          <div>
            Question :
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
