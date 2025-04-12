// src/components/certifications/CertificationsPage.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheckCircle, faShieldAlt, faLeaf, faAward, faChevronLeft, faChevronRight, faHandPointRight, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

// Import certification images
import bureauVeritasImg from '../../assets/images/bureau veritas.png';
import certificatoBiologicoImg from '../../assets/images/certificato biologico.png';

const CertificationsPage = () => {
  const { t } = useTranslation();
  const [hoveredControl, setHoveredControl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Certification data
  const certifications = [
    {
      id: 1,
      name: 'Bureau Veritas',
      image: bureauVeritasImg,
      description: 'La certificazione Bureau Veritas garantisce che i nostri processi e prodotti soddisfano gli standard internazionali di qualità. Questo riconoscimento testimonia il nostro impegno nella produzione di detergenti che rispettano la salute umana e l\'ambiente.',
      issuedDate: '2021-06-15',
      validUntil: '2024-06-14'
    },
    {
      id: 2,
      name: 'Certificazione Biologica',
      image: certificatoBiologicoImg,
      description: 'I nostri prodotti biologici sono certificati secondo gli standard europei per garantire l\'utilizzo di ingredienti naturali e processi produttivi sostenibili, rispettosi dell\'ambiente e della biodiversità.',
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

  // Stili inline
  const styles = {
    section: {
      padding: '90px 0 60px',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    },
    certifications_header: {
      textAlign: 'center',
      marginBottom: '50px',
      position: 'relative',
      padding: '0 20px'
    },
    certifications_title: {
      fontSize: '40px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '15px'
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
    },
    '@keyframes swipeHint': {
      '0%, 100%': { transform: 'translateX(0)' },
      '50%': { transform: 'translateX(10px)' }
    },
    certificationInfo: {
      backgroundColor: 'rgba(28, 36, 54, 0.03)',
      padding: '40px',
      borderRadius: '12px',
      marginTop: '60px',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },
    infoTitle: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '25px',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif"
    },
    infoText: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#596275',
      marginBottom: '25px'
    }
  };

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

  return (
    <div style={styles.section}>
      <Container>
        <div style={styles.certifications_header}>
          <h1 style={styles.certifications_title}>
            {t('certificazioni')}
            <div style={styles.titleDecoration}></div>
          </h1>
          <p className="certifications-subtitle">
            Le nostre certificazioni testimoniano il nostro impegno verso la qualità, la sostenibilità e l'innovazione responsabile. 
            Lavoriamo costantemente per mantenere e migliorare gli standard più elevati in tutti i nostri processi.
          </p>
        </div>
        
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
                            <FontAwesomeIcon icon={faCheckCircle} style={styles.benefitIcon} />
                            <span style={styles.benefitText}>Conformità agli standard internazionali più rigorosi</span>
                          </li>
                          <li style={styles.benefitItem}>
                            <FontAwesomeIcon icon={faCheckCircle} style={styles.benefitIcon} />
                            <span style={styles.benefitText}>Processi produttivi verificati e controllati</span>
                          </li>
                          <li style={styles.benefitItem}>
                            <FontAwesomeIcon icon={faCheckCircle} style={styles.benefitIcon} />
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
        
        <div style={styles.certificationInfo}>
          <h2 style={styles.infoTitle}>Il nostro impegno per la qualità</h2>
          <p style={styles.infoText}>
            In Orsi S.R.L., la qualità e la sostenibilità sono al centro del nostro modello di business. 
            Le certificazioni che abbiamo ottenuto non sono semplici documenti, ma rappresentano la nostra filosofia aziendale 
            e il nostro impegno quotidiano verso i clienti e l'ambiente.
          </p>
          
          <ul style={styles.benefits}>
            <li style={styles.benefitItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={styles.benefitIcon} />
              <strong>Sistema di Gestione della Qualità</strong> - Applichiamo rigorosi controlli in ogni fase della produzione per garantire prodotti di eccellenza.
            </li>
            <li style={styles.benefitItem}>
              <FontAwesomeIcon icon={faLeaf} style={styles.benefitIcon} />
              <strong>Sostenibilità Ambientale</strong> - Utilizziamo processi produttivi a basso impatto ambientale e lavoriamo per ridurre costantemente la nostra impronta ecologica.
            </li>
            <li style={styles.benefitItem}>
              <FontAwesomeIcon icon={faShieldAlt} style={styles.benefitIcon} />
              <strong>Innovazione Continua</strong> - Investiamo nella ricerca e sviluppo per migliorare costantemente le formule dei nostri prodotti, rendendoli più efficaci e più sostenibili.
            </li>
            <li style={styles.benefitItem}>
              <FontAwesomeIcon icon={faAward} style={styles.benefitIcon} />
              <strong>Trasparenza</strong> - Comunichiamo in modo chiaro e completo la composizione dei nostri prodotti, perché crediamo che i consumatori abbiano diritto a informazioni accurate.
            </li>
          </ul>
          
          <div className="quality-policy">
            <h3 className="quality-policy-title">La nostra politica di qualità</h3>
            <p className="quality-policy-text">
              "Ci impegniamo a sviluppare, produrre e distribuire detergenti innovativi che soddisfino le esigenze dei nostri clienti, 
              rispettando sempre l'ambiente e contribuendo a un futuro più sostenibile. La nostra azienda, nata a Bologna nel 1907, 
              continua a evolvere mantenendo saldi i principi di eccellenza e responsabilità che ci hanno sempre contraddistinto."
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CertificationsPage;