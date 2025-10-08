// src/pages/services.tsx
import React from "react";
import "./services.css";
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import ser4 from "../assets/ser4.png";
import ser8 from "../assets/ser8.png";
import ser6 from "../assets/ser6.png";
import ser9 from "../assets/ser9.jpg";
import ser11 from "../assets/ser11.png";
import ser10 from "../assets/ser10.png";
import ser7 from "../assets/ser7.png";
import ser5 from "../assets/ser5.png";
import ser12 from "../assets/ser12.webp";

const services = [
  {
    image: ser1,
    title: "Profile Building",
    description:
      "Elevate your personal brand with Simtrak Solutions’ Profile Building Services. We craft compelling online identities that resonate with your audience, boost visibility, and leave a lasting impact.",
  },
  {
    image: ser2,
    title: "Recruitment Management",
    description:
      "Streamline your hiring process and build a strong workforce guided by our expert consultants. Our personalized approach and commitment to diversity ensure you attract and retain the best talent while focusing on your core business.",
  },
  {
    image: ser3,
    title: "Task Management",
    description:
      "Streamline workflows, meet deadlines, and achieve optimal efficiency, guided by our experienced team and advanced tools.",
  },
  {
    image: ser4,
    title: "Graphic Designing",
    description:
      "From stunning brochures to complete brand identity packages, our Graphic Designing Services deliver creativity, strategy, and technical excellence for a lasting impression.",
  },
  {
    image: ser5,
    title: "Lead Generation",
    description:
      "We deliver quality leads tailored to your industry and goals, enabling your sales team to focus on closing deals and driving revenue. Harness our strategic expertise and data-driven insights to capture high-value leads, boosting conversions and ensuring sustainable business growth.",
  },
  {
    image: ser6,
    title: "Market Research",
    description:
      "Our expert analysts utilize advanced research methods, both primary and secondary, to gather valuable data and assess market trends, customer preferences, and competition.",
  },
  {
    image: ser7,
    title: "Virtual Assistant",
    description:
      "Our dedicated professionals handle administrative tasks, freeing your time to focus on strategic growth and goals. With flexible engagement options, you can scale our assistance to meet your specific needs, allowing you to offload administrative burdens and drive business growth.",
  },
  {
    image: ser8,
    title: "Webinar & Workshop Management",
    description:
      "Streamline your events with our expert consultants. We ensure smooth execution while you focus on delivering value to participants.",
  },
  {
    image: ser9,
    title: "Database Management",
    description:
      "Simtrak Solutions offers comprehensive Database Management services to organize, secure, and optimize your data for informed decisions and operational efficiency.",
  },
  {
    image: ser10,
    title: "Customer Feedback",
    description:
      "Gather and analyze feedback to improve services, streamline workflows, and enhance customer satisfaction.",
  },
  {
    image: ser11,
    title: "Training Management",
    description:
      "We design tailored training programs, from needs assessment to delivery, to enhance employee skills and drive organizational success with engaging, up-to-date content.",
  },
  {
    image: ser12,
    title: "Software Services",
    description:
      "Our experienced team designs and delivers user-friendly software solutions that streamline operations and drive innovation, keeping your business ahead in the digital landscape.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services-section">
      <div className="service-hero">
        <h1>
          <span className="service-hero-main">Our&nbsp;</span>
          <span className="service-hero-accent">Services</span>
        </h1>
        
      </div>
      

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card service-card-${index + 1}`}>
            {/* Add a unique class for each image */}
            <div className={`service-icon service-icon-${index + 1}`}>
              <img src={service.image} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
