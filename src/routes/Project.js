import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg1 from "../Components/Heroimg1";
import PriceingCard from "../Components/PriceingCard";
import Work from "../Components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg1
        // heading="PROJECT."
        // text="Some of my most recent works"
        backgroundImage="https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584"
      />

      <Work />
      <PriceingCard />
      <Footer />
    </div>
  );
};

export default Project;
