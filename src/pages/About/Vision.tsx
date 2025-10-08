import * as React from "react";
import "./Vision.css";
import vissionLogo from '../../assets/vission.png';
import VisionLogo from '../../assets/Vision.png';
import valueLogo from '../../assets/value.png';
import goalLogo from '../../assets/goal.png';
import { useEffect } from "react";


interface Item {
  iconUrl: string;
  alt: string;
  color: string;
  triangle: string;
  title: string;
  text: string;
  style?: React.CSSProperties;
}

const items: Item[] = [
  {
    iconUrl:vissionLogo ,
    alt: "Mission",
    color: "#00cfc3",
    triangle: "#00cfc3",
    title: "Striving beyond comfort zone",
    text: "",
    style: { width: "200px", height: "120px", },
  },
  {
    iconUrl: VisionLogo,
    alt: "Vision",
    color: "#ffb300",
    triangle: "#ffb300",
    title: "Competing with oneself, not others",
    text: "",
  },
  {
    iconUrl: valueLogo,
    alt: "Value",
    color: "#ff4081",
    triangle: "#ff4081",
    title: "Mistakes, and Failures are important for growth",
    text: "",
  },
  {
    iconUrl: goalLogo,
    alt: "Goals",
    color: "#4054b2",
    triangle: "#4054b2",
    title: "MORE Work as a Reward for good Work",
    text: "",
  },
];

const Vision: React.FC = () => (

useEffect(() => {
  const hero = document.querySelector(".vision-hero");
  const cards = document.querySelectorAll(".vision-card");

  // Heading animation
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hero?.classList.add("show");
          heroObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  if (hero) heroObserver.observe(hero);

  // Cards animation with stagger delay
  const cardsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200); // 200ms delay per card
          cardsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => cardsObserver.observe(card));

  return () => {
    heroObserver.disconnect();
    cardsObserver.disconnect();
  };
}, []),


  <section className="vision-section">
    <div className="vision-bg">
        <div className="vision-hero">
        <h1>
          <span className="vision-hero-main">We </span>
          <span className="vision-hero-accent"> Believe In</span>
        </h1>
        
      </div>
      <div className="vision-grid">
        {items.map((item, idx) => (
          <div className="vision-card" key={idx}>
            <div className="vision-icon">
              <img
                src={item.iconUrl}
                alt={item.alt}
                className={`vision-img-icon vision-img-icon-${item.title.toLowerCase()}`}
              />
            </div>
            <h3 className={`vision-title vision-title-${item.title.toLowerCase()}`}>{item.title}</h3>
            <p>{item.text}</p>
            {/* New Bottom Chevron */}
            <div className="vision-chevron-wrap">
              <svg
                className="vision-chevron-bg"
                width="110"
                height="46"
                viewBox="0 0 110 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0 Q55 60 110 0 V46 H0 V0 Z"
                  fill={item.color}
                  style={{ filter: "url(#chevron-shadow)" }}
                />
                <defs>
                  <filter id="chevron-shadow" height="200%" width="200%" x="-50%" y="-50%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.10"/>
                  </filter>
                </defs>
              </svg>
              <div className="vision-chevron-content">
                <hr className="vision-chevron-line" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Vision;