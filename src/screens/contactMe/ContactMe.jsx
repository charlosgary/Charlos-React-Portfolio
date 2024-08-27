import React from "react";
import "./contactme.css";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, index) => (
    <p key={index}>
      {" "}
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>New York, NY</p>
          <p>Charlos Gary</p>
          <p>charlos.design@gmail.com</p>
        </div>
        <div>{createLinks()}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright&copy; {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  );
}

export default ContactMe;
