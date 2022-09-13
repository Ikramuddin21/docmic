import React from "react";
import heroImg from "../../../images/pose_2.png";
import heroVector from "../../../images/hero-vector.svg";
import heroGroup from "../../../images/hero-group.svg";
import doctor1 from "../../../images/doctors/doctor1.png";
import doctor2 from "../../../images/doctors/doctor2.png";
import doctor3 from "../../../images/doctors/doctor3.png";
import doctor4 from "../../../images/doctors/doctor4.png";
import rectangle1 from "../../../images/rectangle1.png";
import rectangle2 from "../../../images/rectangle2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-wrapper">
        {/* hero left */}
        <div className="hero-left">
          <h1>
            Your <span className="highlight-1">Health</span> Is Our
          </h1>
          <h1>
            Top <span className="highlight-2">Priority</span>
          </h1>
          <p>
            There are many variations of passages of lpsum available, but the
            majority hae suffered.
          </p>
          <button className="shared-button hero-left-button">
            Meet Our Specialist
          </button>
          <div className="hero-counter">
            <div className="counter">
              <h3>262k+</h3>
              <span>Recovered Patients</span>
            </div>
            <div className="counter">
              <h3>96%</h3>
              <span>Satisfaction Rate</span>
            </div>
            <div className="counter">
              <h3>86%</h3>
              <span>Expert Doctors</span>
            </div>
          </div>
        </div>

        {/* hero right */}
        <div className="hero-right">
          <img width="98%" src={heroImg} alt="" />
          <button className="regular-checkup-button">
            <img src={heroVector} alt="" />
            <span>Regular Checkup</span>
          </button>
          <div className="meet-doctors">
            <h5>Meet Our Doctors</h5>
            <img className="doctor" src={doctor1} alt="" />
            <img className="doctor" src={doctor2} alt="" />
            <img className="doctor" src={doctor3} alt="" />
            <img className="doctor" src={doctor4} alt="" />
            <img className="plus-icon" src={heroGroup} alt="" />
            <div className="rectangle">
              <img src={rectangle1} alt="" />
              <img src={rectangle2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
