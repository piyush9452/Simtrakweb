import React from 'react';
import './Hero.css';
import heroVideo from '../../assets/hero.mp4'; // correct path

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Left side text */}
      <div className="hero-text">
        <h1 className="pop-heading">
          Experience Excellence in Business Development<br />with Simtrak Solutions
        </h1>
        <p className="pop-paragraph">
          Simtrak Solutions is your comprehensive partner for all your business growth needs,
          streamlining your workload and helping you achieve robust business development.
          With a client-centric approach and a diverse range of services, we deliver personalized
          solutions that empower your success. Simtrak Solutions is the trusted choice to unlock
          your business's full potential.
        </p>
      </div>

      {/* Right side video */}
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
