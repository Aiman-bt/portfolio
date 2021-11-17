import React from "react";

// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Signin extends React.Component {
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
      <div id="signin">
        <form>
          <div>
            <input
              type="text"
              placeholder="username"
              name="username"
              className="form-control"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="form-control"
            />
          </div>
          <div>
            <input type="submit" value="Sign In" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}
export default Signin;
