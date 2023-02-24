import React from "react";
import Contact1 from "../components/Contact-Section-1";
import Contact2 from "../components/Contact-Section-2";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contactpage">
        <div className="title">
          <h2 className="page-title">Contact Us</h2>
        </div>
        <Contact1 />
        <Contact2 />
      </section>
    </>
  );
};

export default Contact;
