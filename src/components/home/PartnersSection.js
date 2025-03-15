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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.partner-card');
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="partners-section">
      <h2 className="partners-section-title">{t('partner')}</h2>
      <div className="partners-grid">
        {logos.map((logo, index) => (
          <div key={index} className="partner-card" style={{animationDelay: `${index * 0.1}s`}}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
      <p className="partners-message">
        ORSI collabora con partner di eccellenza per garantire prodotti di alta qualità e soluzioni innovative nel campo della detergenza.
      </p>
    </section>
  );
};

export default PartnersSection;