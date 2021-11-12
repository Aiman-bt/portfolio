import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div>
        <span className="contactWatermark">Hola!</span>
      </div>
      <form className="contactForm">
        <div className="line">
          <span>Full Name </span>
          <input type="text" />
        </div>
        <div className="line">
          <span> Contact Number :</span>
          <input type="text" />
        </div>
        <div className="line">
          <span> Email Id :</span>
          <input type="text" />
        </div>
        <div className="line">
          <span>Question :</span>
          <input type="text" />
        </div>
        <div className="linesubmit">
          <button type="submit" className="BtnSubmit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
