import React from "react";
import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const [message, setMesage] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    setMesage(true);
  };

  return (
    <div className="Contact" id="Contact">
      <div className="left">
        <img src="img/shake.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handelSubmit}>
          <input type="email" name="" placeholder="Email" id="" />
          <textarea placeholder="Message" name="" id=""></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
