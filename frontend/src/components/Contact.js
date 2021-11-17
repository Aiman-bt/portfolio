import React from "react";
// import BACKEND_API from "../Backend";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullname: "", email: "", subject: "", message: "" };
    this.handleFullnameChange = this.handleChange.bind(this, "fullname");
    this.handleEmailChange = this.handleChange.bind(this, "email");
    this.handleSubjectChange = this.handleChange.bind(this, "subject");
    this.handleMessageChange = this.handleChange.bind(this, "message");
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(keyName, e) {
    this.setState({ [keyName]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(this.state.fullname);
    console.log(this.state.email);
    console.log(this.state.subject);
    console.log(this.state.subject);
  }

  render() {
    return (
      <div id="contact">
        <div className="contactWatermark">
          <div>Hola!</div>
        </div>
        <div className="contactForm">
          <form
            id="contactForm"
            name="contactForm"
            className="form"
            onSubmit={() => this.handleSubmit}
          >
            <div className="column">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleFullnameChange}
                    value={this.state.fullname}
                    name="fullname"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
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
                    onChange={this.handleSubjectChange}
                    value={this.state.subject}
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
                    onChange={this.handleMessageChange}
                    value={this.state.message}
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
                  <input type="submit" value="submit" className="btn" />
                  <div className="submitting"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
