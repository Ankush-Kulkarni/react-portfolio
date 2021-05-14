import React from "react";
import "./Contact.css";

const Contact = () => {
  const displayEmail = () => {
    alert("avkulkarni05@icloud.com");
  };

  return (
    <>
      <div className="contact">
        <div className="yellow_box">
          <h1>Want to hire me</h1>
          <hr />
          <p>Contact me here</p>
          <div className="contacts_btn">
            <button onClick={displayEmail}>Email</button>
            <a href="https://www.linkedin.com/in/ankush-kulkarni-bb5382128/">
              <button>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
