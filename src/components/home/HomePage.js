// src/components/home/HomePage.js
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ParallaxSection from './ParallaxSection';

import AboutSection from './AboutSection';
import BrandsSection from './BrandsSection';
import ProductionSection from './ProductionSection';
import CertificationsSection from './CertificationsSection';


const HomePage = () => {

  useEffect(() => {
    // Gestione pulsante scroll-to-top
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-to-top');
      if (scrollButton) {
        if (window.scrollY >= 200) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <a href="#top" id="scroll-to-top" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>

      <div id="section0"></div>
      <ParallaxSection />
      
      <div id="section1"></div>
      <AboutSection />
      
      <div id="section3"></div>
      <BrandsSection />
      
      <div id="section4"></div>
      <ProductionSection />
      
      <div id="section6"></div>
      <CertificationsSection />
    </>
  );
};

export default HomePage;