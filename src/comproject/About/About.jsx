import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img src="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Android-Developer.jpg" 
        alt="" 
        className='a-img'/>
      </div>
      </div>
      <div className="a-right">
        <h2 className='a-about' style={{color:"blue"}}>About me..</h2>
        <h3><p className='a-about'>Ok you are here to know about me,glad to see you. 
            Basically am a fresher in Full Stack Developer,just joined 'Prostack Academy' to learn something and get placed in a IT field.</p></h3>
      </div>
    </div>
  )
}

export default About
