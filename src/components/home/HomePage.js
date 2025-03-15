// src/components/home/HomePage.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ParallaxSection from './ParallaxSection';

// Verifica i nomi corretti dei componenti nel tuo progetto
import AboutSection from './AboutSection';
import ResearchSection from './ResearchSection';
import BrandsSection from './BrandsSection';
import ProductionSection from './ProductionSection';
import NewsSection from './NewsSection';
import CertificationsSection from './CertificationsSection';
import PartnersSection from './PartnersSection';

const HomePage = () => {
  const { t } = useTranslation();

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
      
      <div id="section2"></div>
      <ResearchSection />
      
      <div id="section3"></div>
      <BrandsSection />
      
      <div id="section4"></div>
      <ProductionSection />
      
      <div id="section5"></div>
      <NewsSection />
      
      <div id="section6"></div>
      <CertificationsSection />
      
      <PartnersSection />
    </>
  );
};

export default HomePage;