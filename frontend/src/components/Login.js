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
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name: <input type="text" name="userName" />
          </label>
          <label>
            User Name: <input type="text" name="userName" />
          </label>
          <button type="submit" value="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
