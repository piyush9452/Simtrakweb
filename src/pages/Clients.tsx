import React from "react";
import "./Clients.css";
import ClientTestimonial from "./Client-testimonial";

const clients = [
  {
    name: "ADORE",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/Final-logo.png?resize=300&ssl=1E",
    testimonial: "Motivating youth for positive action through educational programs.",
    person: "ADORE",
    color: "linear-gradient(135deg, #667eea, #764ba2)",
     borderGradient: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  {
    name: "LULA",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/logo-orange-e1696652807805.png?fit=300%2C121&ssl=1",
    testimonial: "Innovative solutions for modern retail experiences.",
    person: "LULA",
    color: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
     borderGradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/03/6-1.png?w=300&ssl=1",
    testimonial: "Trusted name in the manufacturing industry.",
    person: "GARG",
    color: "linear-gradient(135deg, #f6d365, #fda085)",
    borderGradient: "linear-gradient(135deg, #f6d365, #fda085)",
  },
  {
    name: "INSEEDS.IN",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/a1.jpg?w=300&ssl=1",
    testimonial: "Empowering agriculture with technology.",
    person: "INSEEDS.IN",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #596768ff, #66ffffff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/r1-removebg-preview-1.png?w=300&ssl=1",
    testimonial: "Working for rural development and community upliftment.",
    person: "SEHGAL FOUNDATION",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #66a6ff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/LSeT.jpeg?w=300&ssl=1https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/LSeT.jpeg?w=300&ssl=1",
    testimonial: "Promoting science education and research.",
    person: "LIFE SCIENCE EDUCATIONAL TRUST",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #8e0c44ff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/storewise-removebg-preview.png?w=300&ssl=1",
    testimonial: "Smart inventory management for businesses.",
    person: "Storewise",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #edfdfeff, #66a6ff)",

  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/client.jpg?w=300&ssl=1",
    testimonial: "Client communication made easy.",
    person: "ClientTell",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #66d1ffff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/fortale-removebg-preview.png?fit=300%2C136&ssl=1",
    testimonial: "Premium living solutions for modern families.",
    person: "Fortale Living",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #feb089ff, #66a6ff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/09/desi_laundry-removebg-preview.png?w=300&ssl=1",
    testimonial: "Laundry services with a local touch.",
    person: "Desi Laundry",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #052f32ff, #ff66adff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/r2.jpg?w=300&ssl=1",
    testimonial: "Safe Water Education Centre.",
    person: "SAWEC",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #614b5fff, #66a6ff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/03/4-1.png?w=300&ssl=1",
    testimonial: "Smart tech for efficient coding.",
    person: "EncodiQ",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #89f7fe, #0446a2ff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/foreword-1.png?w=300&ssl=1",
    testimonial: "Bringing new perspectives to education.",
    person: "Foreword",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #d1fe89ff, #1e3555ff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/09/weeho-removebg-preview.png?fit=300%2C102&ssl=1",
    testimonial: "Euphoric moments captured beautifully.",
    person: "Weeho",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #d9fe89ff, #66ffdbff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/infouve.jpg?w=300&ssl=1",
    testimonial: "Empowering education through information.",
    person: "Infovue",
    color: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    borderGradient: "linear-gradient(135deg, #bc89feff, #66ffb0ff)",
  },
  {
    name: "GARG",
    logo: "https://i0.wp.com/simtrak.in/wp-content/uploads/2022/09/1-e1697787187118.png?w=300&ssl=1",
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
