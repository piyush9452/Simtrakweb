import React, { useEffect } from 'react';
import './Stats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Stats: React.FC = () => {

  // --- Scroll animation useEffect ---
  useEffect(() => {
    const elements = document.querySelectorAll(".stats-hero, .stat-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); // animation class add
            observer.unobserve(entry.target); // ek hi baar animation chale
          }
        });
      },
      { threshold: 0.2 } // 20% dikhte hi trigger
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="stats-hero">
        <h1>
          <span className="stats-hero-main">Our</span>
          <span className="stats-hero-accent"> Networks</span>
        </h1>
      </div>

      <section className="stats-section">
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className="number">12+</div>
          <div className="label">Years of Experience</div>
        </div>

        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="number">50</div>
          <div className="label">Total Members</div>
        </div>

        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <div className="number">200+</div>
          <div className="label">Happy Clients</div>
        </div>
      </section>
    </section>
  );
};

export default Stats;
