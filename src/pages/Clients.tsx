import React from "react";
import "./Clients.css";
import ClientTestimonial from "./Client-testimonial";
import Adore from "../assets/Adore.webp";
import Lula from "../assets/lula.webp";
import Garg from "../assets/garg.webp";
import Inseeds from "../assets/inseeds.webp";
import Sehgal from "../assets/sehgal.jpg";
import Lset from "../assets/LSeT.webp";
import Storewise from "../assets/storewise.jpg";
import Clienttell from "../assets/clientell.webp";
import Fortale from "../assets/fortale.jpg";
import Desilaundry from "../assets/desilaundry.webp";
import Sawec from "../assets/sawec.jpg";
import Encodiq from "../assets/encodiq.webp";
import Foreword from "../assets/foreword-1.webp";
import Weeho from "../assets/weeho.webp";
import Infovue from "../assets/infovue.webp";
import Sochsutra from "../assets/shubhank.webp";

const clients = [
  {
    name: "ADORE",
    logo: Adore,
    testimonial: "Motivating youth for positive action through educational programs.",
    person: "ADORE",
    color: "linear-gradient(135deg, #667eea, #764ba2)",
     borderGradient: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  {
    name: "LULA",
    logo: Lula,
    testimonial: "Innovative solutions for modern retail experiences.",
    person: "LULA",
    color: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
     borderGradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  },
  {
    name: "GARG",
    logo: Garg,
    testimonial: "Trusted name in the manufacturing industry.",
    person: "GARG",
    color: "linear-gradient(135deg, #f6d365, #fda085)",
    borderGradient: "linear-gradient(135deg, #f6d365, #fda085)",
  },
  {
    name: "INSEEDS.IN",
    logo: Inseeds,
    testimonial: "Empowering agriculture with technology.",
    person: "INSEEDS.IN",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #596768ff, #66ffffff)",
  },
  {
    name: "Sehgal Foundation",
    logo: Sehgal,
    testimonial: "Working for rural development and community upliftment.",
    person: "SEHGAL FOUNDATION",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #66a6ff)",
  },
  {
    name: "Life Science Educational Trust",
    logo: Lset,
    testimonial: "Promoting science education and research.",
    person: "LIFE SCIENCE EDUCATIONAL TRUST",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #8e0c44ff)",
  },
  {
    name: "Storewise",
    logo: Storewise,
    testimonial: "Smart inventory management for businesses.",
    person: "Storewise",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #edfdfeff, #66a6ff)",

  },
  {
    name: "ClientTell",
    logo: Clienttell,
    testimonial: "Client communication made easy.",
    person: "ClientTell",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #66d1ffff)",
  },
  {
    name: "Fortale",
    logo: Fortale,
    testimonial: "Premium living solutions for modern families.",
    person: "Fortale Living",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #feb089ff, #66a6ff)",
  },
  {
    name: "Laundry Services",
    logo: Desilaundry,
    testimonial: "Laundry services with a local touch.",
    person: "Desi Laundry",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #052f32ff, #ff66adff)",
  },
  {
    name: "SAWEC",
    logo: Sawec,
    testimonial: "Safe Water Education Centre.",
    person: "SAWEC",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #614b5fff, #66a6ff)",
  },
  {
    name: "EncodiQ",
    logo: Encodiq,
    testimonial: "Smart tech for efficient coding.",
    person: "EncodiQ",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #0446a2ff)",
  },
  {
    name: "foreword",
    logo: Foreword,
    testimonial: "Bringing new perspectives to education.",
    person: "Foreword",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #d1fe89ff, #1e3555ff)",
  },
  {
    name: "Weeho",
    logo: Weeho,
    testimonial: "Euphoric moments captured beautifully.",
    person: "Weeho",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #d9fe89ff, #66ffdbff)",
  },
  {
    name: "Infovue",
    logo: Infovue,
    testimonial: "Empowering education through information.",
    person: "Infovue",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #bc89feff, #66ffb0ff)",
  },
  {
    name: "Soch Sutra",
    logo: Sochsutra,
    testimonial: "Creative thinking for social change.",
    person: "Soch Sutra",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #3ed6e1ff, #227bf8ff)",
  },
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
       <div className="Client-hero">
        <h1>
          <span className="Client-hero-main">Our Valued</span>
          <span className="Client-hero-accent"> Clients</span>
        </h1>
        
      </div>
      <p className="sub-heading">
        We're proud to partner with innovative organizations who trust us to deliver excellence.
      </p>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <div className="logo-circle" style={{  "--border-gradient": client.borderGradient }as any}>
              <img src={client.logo} alt={client.name} className="client-logo" />
              {/* <span className="client-text">{client.name}</span> */}

            </div>
            <p className="client-testimonial">{client.testimonial}</p>
            <p className="client-person">{client.person}</p>
          </div>
        ))}
      </div>
      <ClientTestimonial />
    </section>
      
  );
};

export default ClientsSection;
