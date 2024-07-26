import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg1 from '../Components/Heroimg1'
import PriceingCard from '../Components/PriceingCard'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg1 heading ='PROJECT.' text= 'Some of my most recent works'/>
      <Work />
      <PriceingCard />
      <Footer/>
    </div>
  )
}

export default Project