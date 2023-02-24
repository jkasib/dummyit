import React from 'react'

const Contact1 = () => {
  return (
    <>
    <div className="container contact-section-1">
          <h2 className="section1-title">Get in Touch</h2>
          <p className="section1-subtitle">Lorem ipsum dolor sit amet.</p>
          <div className="container contact-info">
            <div className="row">
              <div className="col-10">
                <div className="row contact-row gy-5">
                  <div className="col-lg-4 mx-auto contact-box contact-box-1" data-aos="fade-right">
                    <i className="fa-solid fa-phone"></i>
                    <h4 className="contact-box-title">Phone</h4>
                    <p className="contact-box-info">+880 123 456 7890</p>
                  </div>
                  <div className="col-lg-4 mx-auto contact-box contact-box-2" data-aos="zoom-in">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4 className="contact-box-title">Address</h4>
                    <p className="contact-box-info">
                      58/A, New Delhi, Singapore, Khulna.
                    </p>
                  </div>
                  <div className="col-lg-4 mx-auto contact-box contact-box-3" data-aos="fade-left">
                    <i className="fa-solid fa-envelope"></i>
                    <h4 className="contact-box-title">Email</h4>
                    <p className="contact-box-info">
                      chittitherobo1234@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact1