import React from "react";
import "./WhyChooseUs.css";

// Import your images
import missionImg from "../../assets/mission.wcu.png";
import visionImg from "../../assets/vision.wcu.png";
import valueImg from "../../assets/value.wcu.png";
import goalsImg from "../../assets/Goals.wcu.png";

// ✅ Left Side Content 
const leftSteps = [
 {
    color: "#23acf4",
    borderColor: "#23acf4",
    number: "01",
    label: "Services",
    title: "Comprehensive Services",   // 👈 new title
    info: "Your all-in-one solution for the sustainable business success.", // 👈 new info
    icon: <img src={missionImg} alt="Mission logo" className="imgsize" />,
  },
  {
    color: "#ef3e5b",
    borderColor: "#ef3e5b",
    number: "02",
    label: "Strategies",
    title: "Tailored Strategies",   // 👈 new title
    info: "Customized approaches that align perfectly with your goals.", // 👈 new info
    icon: <img src={visionImg} alt="Vision logo" className="imgsize" />,
  },
  {
    color: "#fab12f",
    borderColor: "#fab12f",
    number: "03",
    label: "Expertise",
    title: "Expertise at Your Service",   // 👈 new title
    info: "A dedicated team of the industry professionals driving results.", // 👈 new info
    icon: <img src={valueImg} alt="Value logo" className="imgsize" />,
  },
  {
    color: "#4067e5",
    borderColor: "#4067e5",
    number: "04",
    label: "Technology",
    title: "Cutting-Edge Technology",   // 👈 new title
    info: "Leveraging innovation and advanced tools to give your business a competitive edge.", // 👈 new info
    icon: <img src={goalsImg} alt="Goals logo" className="imgsize" />,
  },
];

// ✅ Right Side Content 
const rightSteps = [
 {
    color: "#23acf4",
    borderColor: "#23acf4",
    number: "05",
    label: "Approach",
    title: "Client-Centric Approach",   // 👈 new title
    info: "We go the extra mile to craft solutions that exceed expectations and deliver unmatched value.   ", // 👈 new info
    icon: <img src={missionImg} alt="Mission logo" className="imgsize" />,
  },
  {
    color: "#ef3e5b",
    borderColor: "#ef3e5b",
    number: "06",
    label: "Strength",
    title: "Market Strength",   // 👈 new title
    info: "With our expertise, you’ll establish a powerful market presence that positions your business for long-term success.", // 👈 new info
    icon: <img src={visionImg} alt="Vision logo" className="imgsize" />,
  },
  {
    color: "#fab12f",
    borderColor: "#fab12f",
    number: "07",
    label: "Growth",
    title: "Unleashing Growth",   // 👈 new title
    info: "We help you maximize opportunities, scale faster, and achieve milestones with confidence.", // 👈 new info
    icon: <img src={valueImg} alt="Value logo" className="imgsize" />,
  },
  {
    color: "#4067e5",
    borderColor: "#4067e5",
    number: "08",
    label: "Reliability",
    title: "Punctuality & Reliability",   // 👈 new title
    info: "Seamless execution with a commitment to trust and on-time delivery.", // 👈 new info
    icon: <img src={goalsImg} alt="Goals logo" className="imgsize" />,
  },
];

const WhyChooseUs: React.FC = () => (
  <div className="why-bg">
    <div className="why-template">
    <div className="why-steps-heading">
      <span style={{ color: "#232323", fontWeight: 900 }}>Why</span>
      <span className="gradient-text">Choose Us</span>
    </div>
      {/* Left Steps */}
      <div className="why-steps left">
        {leftSteps.map((step, i) => (
          <div className={`why-step left-step-${i}`} key={`left-${i}`}>

            <div
              className={`why-step-circle why-step-circle-${i}`}
              style={{ borderColor: step.borderColor }}
            >
              {step.icon}
            </div>
            <div className={`why-step-content why-step-content-${i}`}>
              <div className="why-step-row">
                <span
                  className={`why-step-num why-step-num-${i}`}
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>
                <span
                  className={`why-step-label why-step-label-${i}`}
                  style={{ background: step.color, color: "#fff" }}
                >
                  {step.label}
                </span>
              </div>
              <div className={`why-title why-title-${i}`}>{step.title}</div>
              <div className={`why-info why-info-${i}`}>{step.info}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Circle Center */}
      <div className="why-circle-side">
        <div className="why-circle-outer">
          <div className="why-circle-inner">
            <div className="why-circle-text">
              <div className="bold">Why</div>
              <div className="why-bold">Choose Us</div>
            </div>
          </div>

          {/* Pie Circle */}
          <svg className="why-pie" width="250" height="250" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="85" fill="none" stroke="#e3e3e3" strokeWidth="15" />
            <path d="M100,15 A85,85 0 0,1 185,100" stroke="#23acf4" strokeWidth="15" fill="none" />
            <path d="M185,100 A85,85 0 0,1 100,185" stroke="#ef3e5b" strokeWidth="15" fill="none" />
            <path d="M100,185 A85,85 0 0,1 30,135" stroke="#fab12f" strokeWidth="15" fill="none" />
            <path d="M30,135 A85,85 0 0,1 100,15" stroke="#4067e5" strokeWidth="15" fill="none" />
          </svg>
        </div>
      </div>

      {/* Right Steps */}
      <div className="why-steps right">
        {rightSteps.map((step, i) => (
          <div className={`why-step right-step-${i}`} key={`right-${i}`}>
            <div
              className={`why-step-circle why-step-circle-${i}`}
              style={{ borderColor: step.borderColor }}
            >
              {step.icon}
            </div>
            <div className={`why-step-content why-step-content-${i}`}>
              <div className="why-step-row">
                <span
                  className={`why-step-num why-step-num-${i}`}
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>
                <span
                  className={`why-step-label why-step-label-${i}`}
                  style={{ background: step.color, color: "#fff" }}
                >
                  {step.label}
                </span>
              </div>
              <div className={`why-title why-title-${i}`}>{step.title}</div>
              <div className={`why-info why-info-${i}`}>{step.info}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);

export default WhyChooseUs;
