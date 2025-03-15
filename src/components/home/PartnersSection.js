// src/components/home/PartnersSection.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo8, logo9, 
    logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17
  ];

  // Styles for the component
  const styles = {
    section: {
      padding: '80px 0 60px',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(135deg, rgba(240, 240, 240, 0.5) 25%, transparent 25%, transparent 50%, rgba(240, 240, 240, 0.5) 50%, rgba(240, 240, 240, 0.5) 75%, transparent 75%, transparent)',
      backgroundSize: '60px 60px',
      opacity: 0.3,
      zIndex: 1
    },
    container: {
      position: 'relative',
      zIndex: 2
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '700',
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '50px',
      position: 'relative',
      paddingBottom: '15px',
      fontFamily: "'Poppins', sans-serif"
    },
    titleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    partnersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto 40px'
    },
    partnerCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      height: '120px',
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'fadeInUp 0.5s forwards'
    },
    partnerCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      borderColor: 'rgba(200, 155, 123, 0.2)'
    },
    partnerImage: {
      maxWidth: '100%',
      maxHeight: '80px',
      objectFit: 'contain'
    },
    partnersMessage: {
      fontSize: '18px',
      textAlign: 'center',
      color: '#596275',
      maxWidth: '800px',
      margin: '30px auto 0',
      lineHeight: '1.8'
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  };
  
  // Custom CSS for animations
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .partner-card {
        animation: fadeInUp 0.5s forwards;
        animation-delay: calc(var(--index) * 0.1s);
        opacity: 0;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.partner-card');
    cards.forEach((card, index) => {
      card.style.setProperty('--index', index);
      card.style.animationPlayState = 'paused';
      observer.observe(card);
    });

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <div style={styles.section}>
      <div style={styles.sectionBackground}></div>
      <Container style={styles.container}>
        <h2 style={styles.sectionTitle}>
          {t('partner')}
          <div style={styles.titleDecoration}></div>
        </h2>
        <div style={styles.partnersGrid} className="partners-grid">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="partner-card"
              style={{
                ...styles.partnerCard,
                ...(hoveredCard === index ? styles.partnerCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                style={styles.partnerImage}
              />
            </div>
          ))}
        </div>
        <p style={styles.partnersMessage}>
          ORSI collabora con partner di eccellenza per garantire prodotti di alta qualità e soluzioni innovative nel campo della detergenza.
        </p>
      </Container>
    </div>
  );
};

export default PartnersSection;