import React from "react";

// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Signup extends React.Component {
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
      <div id="signup">
        <form>
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            className="form-control"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-control"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="form-control"
          />
          <input
            type="password"
            placeholder="Re-enter"
            name="confirm"
            className="form-control"
          />
          <input type="submit" value="Sign Up" className="btn" id="sup" />
        </form>
      </div>
    );
  }
}
export default Signup;
