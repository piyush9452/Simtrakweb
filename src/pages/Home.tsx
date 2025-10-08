import React from 'react';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import ReviewSlider from '../components/ReviewSlider/ReviewSlider';

// Import About components
import Founder from './About/Founder';

// Import Services component
import Services from './Services';

// Import Clients component
import Clients from './Clients';

// Import Contact component
import Contact from './Contact';

// Import Internships component
import Internships from './Internships';

const Home: React.FC = () => {
  return (
    <>
      <section id="home">
        <Hero />
        <Stats />
        <ReviewSlider />
      </section>
      <section id="about">
        <Founder />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="internships">
        <Internships />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;