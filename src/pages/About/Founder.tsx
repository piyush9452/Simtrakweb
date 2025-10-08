import React from "react";
import "./Founder.css";
import Vision from './Vision';
import WhyChooseUs from "./WhyChooseUs";
import WeBelieveIn from './WeBelieveIn';
import founderimg from "../../assets/founderimg.jpg";




const Founder: React.FC = () => {
  return (
    <div id="founder-testimonial-section">
     <div className="Founder-hero">
        <h1>
          <span className="Founder-hero-main">Founder's&nbsp;</span>
          <span className="Founder-hero-accent"> Testimonial</span>
        </h1>
        
      </div>

      <div id="founder-testimonial-card">
        {/* Left side image */}
        <div id="founder-testimonial-image">
          <img
            src={founderimg}
            alt="Simran Sharma"
          />
        </div>

        {/* Right side text */}
        <div id="founder-testimonial-content">
          <p id="founder-testimonial-text">
            When I started <b>SIMTRAK</b>, my vision was simple – to create a
            company that helps businesses grow while ensuring their operations
            run smoothly. From the very beginning, our focus has been on
            building lasting partnerships, not just providing services.
            At <b>SIMTRAK</b>, we believe growth happens when creativity and
            reliability come together. Every project we take on is handled with
            dedication, teamwork, and a commitment to delivering real results.
            As we continue to grow, my goal remains the same: to make{" "}
            <b>SIMTRAK</b> a trusted name for driving business growth,
            simplifying operations, and helping organizations achieve long-term
            success.
          </p>
        

          <h3 id="founder-name">Simran Sharma</h3>
          <p id="founder-role">Founder</p>
        </div>
      </div>

      <Vision/>
      <WeBelieveIn/>
      <WhyChooseUs/>
    </div>
  );
};

export default Founder;
