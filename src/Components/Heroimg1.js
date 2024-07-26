import React from 'react'
import './heroimg1.css'

const Heroimg1 = ({heading,text}) => {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Heroimg1