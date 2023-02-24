import React from "react";

const Contact2 = () => {
  return (
    <>
      <div className="container-fluid contact-section-2">
        <div className="container">
          <h2 className="section2-title">Send us a message!</h2>
          <p className="section2-subtitle">Lorem ipsum dolor sit amet.</p>
          <form className="contact-form">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <input
                  type="text"
                  placeholder="First Name"
                  className="firstname"
                  data-aos="fade-right"
                />
              </div>

              <div className="col-md-6 col-10 mx-auto">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="lastname"
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="email"
                  data-aos="fade-right"
                />
              </div>

              <div className="col-md-6 col-10 mx-auto">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="phone"
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-10  mx-auto">
                <textarea
                  placeholder="Your Message"
                  data-aos="zoom-in"
                ></textarea>
              </div>
            </div>
            <div className="row mx-lg-0 mx-auto">
              <div className="col-md-12 col-10 mx-auto">
                <button className="btn contact-btn" data-aos="fade-right">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact2;
