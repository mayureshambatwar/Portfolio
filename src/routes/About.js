import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg1 from "../Components/Heroimg1";
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg1
        // heading="ABOUT."
        // text="Learn more about me and my journey"
        backgroundImage="https://st2.depositphotos.com/3591429/11586/i/380/depositphotos_115869024-stock-photo-woman-typing-on-background.jpg"
      />

      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
