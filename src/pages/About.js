import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="aboutpage">
        <div className="title">
          <h2 className="page-title">About Us</h2>
        </div>
        <div className="container about-container">
          <div className="row" data-aos="fade-right" data-aos-duration="3000">
            <div className="col-lg-6 col-10 mx-auto about-box-left">
              <h2 className="about-intro-title">Introduction:</h2>
              <p className="about-intro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quidem suscipit. Suscipit dolor vitae rem, ratione
                harum perspiciatis minus esse quis laudantium magni, mollitia
                non asperiores praesentium provident consectetur delectus. Ut
                non tenetur amet aut quisquam, corporis asperiores repudiandae
                ad voluptates excepturi illum doloremque perferendis earum quia
                sapiente, est vero neque dignissimos officiis repellat
                voluptatem nostrum! Tenetur nostrum sit, officia labore
                distinctio ipsa commodi? Nisi possimus expedita perferendis
                fugiat quod laudantium quam porro earum, tenetur rerum quos
                similique culpa reiciendis quaerat? Aspernatur aperiam,
                explicabo rerum odit officia quae labore repudiandae nostrum
                molestiae ullam, esse consequatur ducimus earum doloremque iure
                excepturi? Ducimus consectetur praesentium quisquam esse?
              </p>
              <button className="btn home-btn">Read More...</button>
            </div>
            <div className="col-lg-6 col-10 mx-auto about-box-right">
              <img
                src="./images/about.jpg"
                alt="aboutImg"
                className="img-fluid about-image"
              />
            </div>
          </div>
        </div>
        <div className="container about-container">
          <div className="row" data-aos="fade-left" data-aos-duration="3000">
            <div className="col-lg-6 col-10 mx-auto about-box-right">
              <img
                src="./images/about1.jpg"
                alt="aboutImg"
                className="img-fluid about-image"
              />
            </div>
            <div className="col-lg-6 col-10 mx-auto about-box-left">
              <h2 className="about-intro-title">Programming Skills:</h2>
              <div className="skills">
                <h2>Javascript</h2>
                <div className="progress-bar">
                  <div className="javascript"></div>
                </div>
                <h2>C++</h2>
                <div className="progress-bar">
                  <div className="cpp"></div>
                </div>
                <h2>Python</h2>
                <div className="progress-bar">
                  <div className="python"></div>
                </div>
                <h2>Django</h2>
                <div className="progress-bar">
                  <div className="django"></div>
                </div>
                <h2>Java</h2>
                <div className="progress-bar">
                  <div className="java"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
