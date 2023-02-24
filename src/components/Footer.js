import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-side">
                <div className="row mx-auto">
                  <div className="col-md-4 col-10 mx-auto">
                    <p className="copyright-status">
                      Copyright 2020 All rights reserved
                    </p>
                  </div>
                  <div className="col-md-4 col-10 mx-auto">
                    <a href="youtube.com" className="privacy">
                      Privacy Policy
                    </a>
                  </div>
                  <div className="col-md-4 col-10 mx-auto">
                    <a href="youtube.com" className="privacy">
                      Terms of Use
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-10 mx-auto">
                    <p>Made with ❤️ by Kasib</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-side">
                <div className="footer-icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
