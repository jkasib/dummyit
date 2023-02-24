import React from "react";

const Activities = () => {
  return (
    <>
      <section id="activities" className="activitiespage">
        <div className="title">
          <h2 className="page-title">Our Activities</h2>
        </div>
        <div className="container activities-container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-4 col-md-6 mx-auto col-10 box programming-box">
              <i className="fa-solid fa-code"></i>
              <h2>Programming</h2>
              <p className="box-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ex, molestiae quam minima ducimus odit voluptates obcaecati
                maiores quia. Facere reiciendis quas magnam quod explicabo!
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto col-10 box webdev-box">
              <i className="fa-brands fa-react"></i>
              <h2>Web Development</h2>
              <p className="box-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ex, molestiae quam minima ducimus odit voluptates obcaecati
                maiores quia. Facere reiciendis quas magnam quod explicabo!
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto col-10 box robo-box">
              <i className="fa-solid fa-robot"></i>
              <h2>Robotics</h2>
              <p className="box-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ex, molestiae quam minima ducimus odit voluptates obcaecati
                maiores quia. Facere reiciendis quas magnam quod explicabo!
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto col-10 box ai-box">
              <i className="fa-solid fa-microchip"></i>
              <h2>Artificial Intelligence</h2>
              <p className="box-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ex, molestiae quam minima ducimus odit voluptates obcaecati
                maiores quia. Facere reiciendis quas magnam quod explicabo!
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto col-10 box app-box">
              <i className="fa-brands fa-android"></i>
              <h2>App Development</h2>
              <p className="box-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ex, molestiae quam minima ducimus odit voluptates obcaecati
                maiores quia. Facere reiciendis quas magnam quod explicabo!
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto col-10 box workshop-box">
              <i className="fa-solid fa-brain"></i>
              <h2>Weekly Workshops</h2>
              <p className="box-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ex, molestiae quam minima ducimus odit voluptates obcaecati
                maiores quia. Facere reiciendis quas magnam quod explicabo!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
