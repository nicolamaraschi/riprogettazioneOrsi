// src/components/home/PartnersSection.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo1 from '../../assets/images/loghi/logo1.jpeg';
import logo2 from '../../assets/images/loghi/logo2.jpg';
import logo3 from '../../assets/images/loghi/logo3.jpg';
import logo4 from '../../assets/images/loghi/logo4.png';
import logo5 from '../../assets/images/loghi/logo5.png';
import logo6 from '../../assets/images/loghi/logo6.jpeg';
import logo8 from '../../assets/images/loghi/logo8.png';
import logo9 from '../../assets/images/loghi/logo9.jpeg';
import logo10 from '../../assets/images/loghi/logo10.png';
import logo11 from '../../assets/images/loghi/logo11.jpeg';
import logo12 from '../../assets/images/loghi/logo12.jpeg';
import logo13 from '../../assets/images/loghi/logo13.jpg';
import logo14 from '../../assets/images/loghi/logo14.jpg';
import logo15 from '../../assets/images/loghi/logo15.png';
import logo16 from '../../assets/images/loghi/logo16.png';
import logo17 from '../../assets/images/loghi/logo17.jpg';

const PartnersSection = () => {
  const { t } = useTranslation();
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo8, logo9, 
    logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17
  ];

  useEffect(() => {
    const animateImages = () => {
      const logoItems = document.querySelectorAll(".client-logos li");
      let delay = 0;

      logoItems.forEach((item) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, delay);
        delay += 200;
      });
    };

    const checkScroll = () => {
      const section = document.querySelector(".our-clients");
      if (!section) return;
      
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
        animateImages();
        window.removeEventListener("scroll", checkScroll);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="our-clients our-menu-food">
      <h1 style={{ fontSize: '2em', paddingTop: '2%' }}>{t('partner')}</h1>
      <ul className="client-logos">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
            <img src={logo} alt={`Logo ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnersSection;