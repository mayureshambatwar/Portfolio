import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg1 from '../Components/Heroimg1'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
         <Navbar/>
         <Heroimg1 heading="ABOUT." text="Im a frindly FRONT-END Developer"/>
         <AboutContent/>
         <Footer/>
    </div>
  )
}

export default About