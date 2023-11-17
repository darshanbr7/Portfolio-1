import React from "react";
import "./Introduction.css";
import Me from "../../Image/A3.jpg";
const Introduction = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h4 className="i-intro">Hello,my self </h4>
          <h1 className="i-name">Darshan B R</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Full Stack Web Developer</div>
            </div>
            <div className="i-desc">
              I design and develop customer required web applications,in all
              sizes based on Full Stack ,and also student required projects.
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Introduction;
