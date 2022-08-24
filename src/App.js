// Imports
import "./App.css";
import ContactForm from "./components/ContactForm";
import HomeAboveFold from "./components/HomeAboveFold";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import History from "./components/History";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

function App() {
  //boolean state variable that tracks desktop vs mobile view (Not currently used)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  //function to update state varaible when mobile view used
  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  //run updateMedia function to check if desktop or mobile view onload. add event listener to check viewport again when screen resized
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App m-0 p-0">
      {/* navbar */}
      <Nav />

      {/* top of homepage, above-fold */}
      <HomeAboveFold />

      {/* section to display skills (WebDev, SEO) */}
      <Skills />

      {/* previous webdev projects */}
      <Portfolio />

      {/* employment and education history */}
      <History />

      {/* contact section. email form and contact links */}
      <ContactForm />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
