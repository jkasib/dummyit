import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Activities />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
