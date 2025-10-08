import React, { JSX, useEffect } from "react";
import "./WeBelieveIn.css";

type Step = {
  title: string;
  description: string;
  color: string;
  icon: JSX.Element;
};

const steps: Step[] = [
  {
    title: "Vision",
    description:
      "Lorem ipsum dolor sita consectetur adipisci niai beuisque blan dolor ef idunt ut labore",
    color: "#f7931e",
    icon: <i className="fas fa-eye" style={{ fontSize: "48px", color: "#f7931e" }}></i>,
  },
  {
    title: "Mission",
    description:
      "Lorem ipsum dolor sita consectetur adipisci niai beuisque blan dolor ef idunt ut labore",
    color: "#ed1c24",
    icon: <i className="fas fa-bullseye" style={{ fontSize: "48px", color: "#ed1c24" }}></i>,
  },
  {
    title: "Objectives",
    description:
      "Lorem ipsum dolor sita consectetur adipisci niai beuisque blan dolor ef idunt ut labore",
    color: "#333",
    icon: <i className="fas fa-flag" style={{ fontSize: "48px", color: "#333" }}></i>,
  },
  {
    title: "Strategy",
    description:
      "Lorem ipsum dolor sita consectetur adipisci niai beuisque blan dolor ef idunt ut labore",
    color: "#32c4ec",
    icon: <i className="fas fa-project-diagram" style={{ fontSize: "48px", color: "#32c4ec" }}></i>,
  },
  {
    title: "Tactics",
    description:
      "Lorem ipsum dolor sita consectetur adipisci niai beuisque blan dolor ef idunt ut labore",
    color: "#2256a6",
    icon: <i className="fas fa-chess-knight" style={{ fontSize: "48px", color: "#2256a6" }}></i>,
  },
];

const BusinessSteps: React.FC = () => {
  useEffect(() => {
    const hero = document.querySelector(".webelievein-hero");
    const cards = document.querySelectorAll(".business-step-card");

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

    // Cards animation with stagger
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target as Element);
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
  }, []);

  return (
    <div className="business-steps-bg">
      <div className="webelievein-hero">
        <h1>
          <span className="webelievein-hero-main">Our</span>
          <span className="webelievein-hero-accent"> Mission</span>
        </h1>
      </div>

      <div className="business-steps-bar">
        <div className="bs-bar bs-bar1" />
        <div className="bs-bar bs-bar2" />
        <div className="bs-bar bs-bar3" />
        <div className="bs-bar bs-bar4" />
        <div className="bs-bar bs-bar5" />
      </div>

      <div className="business-steps-row">
        {steps.map((step) => (
          <div className="business-step-card" key={step.title}>
            <div className="business-step-circle" style={{ borderColor: step.color }}>
              <div
                className="business-step-inner-circle"
                style={{ borderColor: step.color, borderWidth: "4px" }}
              >
                {step.icon}
              </div>
            </div>
            <div
              className="business-step-title"
              style={{
                color: step.color,
                fontWeight: ["Objectives", "Strategy", "Tactics"].includes(step.title) ? 700 : 600,
              }}
            >
              {step.title}
            </div>
            <div className="business-step-desc">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSteps;
