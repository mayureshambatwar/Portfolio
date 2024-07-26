import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg1 from '../Components/Heroimg1'
import From from '../Components/From'

const Contact = () => {
  return (
    <div>
         <Navbar/>
         <Heroimg1 heading='CONTACT.' text="Let's Have a Chat"/>
         <From/>
         <Footer/>
    </div>
  )
}

export default Contact