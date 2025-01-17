import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg1 from "../Components/Heroimg1";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg1
        // heading="CONTACT."
        // text="Get in touch with me"
        backgroundImage="https://www.clariontech.com/hubfs/Contact-us-min.jpg"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
