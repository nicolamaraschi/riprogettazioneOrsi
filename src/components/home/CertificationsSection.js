// src/components/home/CertificationsSection.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faAward, faCheck, faShieldAlt, faChevronLeft, faChevronRight, faHandPointRight, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

// Import certification images
import bureauVeritasImg from '../../assets/images/bureau veritas.png';
import certificatoBiologicoImg from '../../assets/images/certificato biologico.png';

const CertificationsSection = () => {
  const { t } = useTranslation();
  const [hoveredControl, setHoveredControl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Certification data
  const certifications = [
    {
      id: 1,
      name: 'Bureau Veritas',
      image: bureauVeritasImg,
      description: 'La certificazione Bureau Veritas garantisce che i nostri processi e prodotti soddisfano gli standard internazionali di qualità.',
      issuedDate: '2021-06-15',
      validUntil: '2024-06-14'
    },
    {
      id: 2,
      name: 'Certificazione Biologica',
      image: certificatoBiologicoImg,
      description: 'I nostri prodotti biologici sono certificati secondo gli standard europei per garantire l\'utilizzo di ingredienti naturali e processi produttivi sostenibili.',
      issuedDate: '2022-03-10',
      validUntil: '2025-03-09'
    }
  ];

  // Funzioni per gestire la navigazione del carosello
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  // Gestione touch swipe per dispositivi mobili
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };
    
    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe a sinistra - vai al prossimo
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe a destra - vai al precedente
        prevSlide();
      }
    };
    
    const carouselElement = document.querySelector('.certification-carousel');
    
    if (carouselElement) {
      carouselElement.addEventListener('touchstart', handleTouchStart);
      carouselElement.addEventListener('touchmove', handleTouchMove);
      carouselElement.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        carouselElement.removeEventListener('touchstart', handleTouchStart);
        carouselElement.removeEventListener('touchmove', handleTouchMove);
        carouselElement.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  // Aggiungi stile CSS per l'animazione dello swipe
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes swipeHint {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(10px); }
      }
      
      .swipe-hint {
        animation: swipeHint 1.5s infinite;
        display: inline-block;
      }
      
      .carousel-item {
        transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Stili inline
  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '600',
      marginBottom: '50px',
      textAlign: 'center',
      color: '#2c3e50',
      position: 'relative',
      fontFamily: "'Poppins', sans-serif"
    },
    titleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    carouselContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      padding: '20px 0'
    },
    carouselControls: {
      position: 'absolute',
      width: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 15px',
      zIndex: 10
    },
    carouselButton: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.9)',
      color: 'white',
      border: 'none',
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease'
    },
    carouselButtonHover: {
      backgroundColor: '#c89b7b',
      transform: 'scale(1.1)'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      height: '100%',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      height: '100%',
      backgroundColor: 'rgba(248, 249, 250, 0.4)'
    },
    image: {
      maxWidth: '80%',
      maxHeight: '220px',
      objectFit: 'contain'
    },
    contentCard: {
      padding: '35px 30px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    certName: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '18px',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '12px'
    },
    certNameUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '40px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#596275',
      marginBottom: '20px'
    },
    metaInfo: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(248, 249, 250, 0.8)',
      padding: '12px 15px',
      borderRadius: '8px',
      marginTop: '15px'
    },
    metaIcon: {
      color: '#e2b77e',
      marginRight: '10px',
      fontSize: '16px'
    },
    metaLabel: {
      fontWeight: '600',
      color: '#2c3e50',
      marginRight: '8px',
      fontSize: '14px'
    },
    metaValue: {
      color: '#596275',
      fontSize: '14px'
    },
    benefits: {
      listStyle: 'none',
      padding: '0',
      margin: '20px 0 0 0'
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px'
    },
    benefitIcon: {
      color: '#e2b77e',
      marginRight: '10px',
      marginTop: '3px'
    },
    benefitText: {
      fontSize: '14px',
      color: '#596275'
    },
    carouselIndicator: {
      textAlign: 'center',
      marginTop: '30px'
    },
    indicator: {
      display: 'inline-block',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.3)',
      margin: '0 6px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeIndicator: {
      backgroundColor: '#c89b7b',
      transform: 'scale(1.3)'
    },
    instructionText: {
      textAlign: 'center',
      fontSize: '15px',
      color: '#777',
      margin: '10px 0 25px',
      fontStyle: 'italic',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    swipeHint: {
      display: 'inline-block',
      animation: 'swipeHint 1.5s infinite'
    }
  };

  return (
    <div style={styles.section}>
      <Container>
        <h2 style={styles.sectionTitle}>
          {t('certificazioni')}
          <div style={styles.titleDecoration}></div>
        </h2>
        
        {/* Istruzioni per lo scorrimento */}
        <div style={styles.instructionText}>
          <FontAwesomeIcon icon={faHandPointRight} className="swipe-hint" />
          <span>Scorri per visualizzare tutte le nostre certificazioni</span>
          <FontAwesomeIcon icon={faHandPointLeft} className="swipe-hint" style={{transform: 'scaleX(-1)'}} />
        </div>
        
        <div style={styles.carouselContainer} className="certification-carousel">
          <div style={styles.carouselControls}>
            <button 
              style={{
                ...styles.carouselButton,
                ...(hoveredControl === 'prev' ? styles.carouselButtonHover : {})
              }}
              onClick={prevSlide}
              onMouseEnter={() => setHoveredControl('prev')}
              onMouseLeave={() => setHoveredControl(null)}
              aria-label="Certificazione precedente"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <button 
              style={{
                ...styles.carouselButton,
                ...(hoveredControl === 'next' ? styles.carouselButtonHover : {})
              }}
              onClick={nextSlide}
              onMouseEnter={() => setHoveredControl('next')}
              onMouseLeave={() => setHoveredControl(null)}
              aria-label="Certificazione successiva"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              style={{ 
                display: index === activeIndex ? 'block' : 'none',
                transition: 'opacity 0.5s ease'
              }}
            >
              <Row className="align-items-stretch">
                <Col lg={5} className="mb-4 mb-lg-0">
                  <div style={styles.card}>
                    <div style={styles.imageContainer}>
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        style={styles.image}
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={7}>
                  <div style={styles.card}>
                    <div style={styles.contentCard}>
                      <div>
                        <h3 style={styles.certName}>
                          {cert.name}
                          <div style={styles.certNameUnderline}></div>
                        </h3>
                        <p style={styles.description}>{cert.description}</p>
                        
                        <ul style={styles.benefits}>
                          <li style={styles.benefitItem}>
                            <FontAwesomeIcon icon={faCheck} style={styles.benefitIcon} />
                            <span style={styles.benefitText}>Conformità agli standard internazionali più rigorosi</span>
                          </li>
                          <li style={styles.benefitItem}>
                            <FontAwesomeIcon icon={faCheck} style={styles.benefitIcon} />
                            <span style={styles.benefitText}>Processi produttivi verificati e controllati</span>
                          </li>
                          <li style={styles.benefitItem}>
                            <FontAwesomeIcon icon={faCheck} style={styles.benefitIcon} />
                            <span style={styles.benefitText}>Garanzia di qualità per i nostri clienti</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div style={styles.metaInfo}>
                        <FontAwesomeIcon icon={faCalendarAlt} style={styles.metaIcon} />
                        <span style={styles.metaLabel}>Valida fino al:</span>
                        <span style={styles.metaValue}>
                          {new Date(cert.validUntil).toLocaleDateString('it-IT', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
          
          {/* Indicatori carosello migliorati */}
          <div style={styles.carouselIndicator}>
            {certifications.map((cert, index) => (
              <span 
                key={cert.id}
                style={{
                  ...styles.indicator,
                  ...(index === activeIndex ? styles.activeIndicator : {})
                }}
                onClick={() => setActiveIndex(index)}
                aria-label={`Vai alla certificazione ${cert.name}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CertificationsSection;