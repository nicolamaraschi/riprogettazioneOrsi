// src/components/home/BrandsSection.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHandPointRight, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

// Importazione delle immagini
import brand1Img from '../../assets/images/brand1.png';
import brand2Img from '../../assets/images/brand2.png';
import brand3Img from '../../assets/images/brand3.png';
import brand4Img from '../../assets/images/brand4.png';

const BrandsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredControl, setHoveredControl] = useState(null);
  
  const brands = [
    {
      id: 1,
      name: 'BIT',
      image: brand1Img,
      description: 'Linea professionale per il bucato industriale con performance elevate anche in condizioni difficili'
    },
    {
      id: 2,
      name: 'Dolomiten Weiss',
      image: brand2Img,
      description: 'Prodotti premium per bucato professionale con formule studiate per igienizzare a fondo'
    },
    {
      id: 3,
      name: 'Orsetto',
      image: brand3Img,
      description: 'La nostra storica linea domestica, amata dalle famiglie italiane per efficacia e delicatezza'
    },
    {
      id: 4,
      name: 'La Suora',
      image: brand4Img,
      description: 'Specializzata nella cura dei tessuti delicati, tende e pizzi con rispetto delle fibre'
    }
  ];

  

  // Funzioni per gestire la navigazione
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
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
    
    const brandShowcase = document.querySelector('.brand-showcase');
    
    if (brandShowcase) {
      brandShowcase.addEventListener('touchstart', handleTouchStart);
      brandShowcase.addEventListener('touchmove', handleTouchMove);
      brandShowcase.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        brandShowcase.removeEventListener('touchstart', handleTouchStart);
        brandShowcase.removeEventListener('touchmove', handleTouchMove);
        brandShowcase.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % brands.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [brands.length]);

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
      
      .brand-item {
        transition: opacity 0.8s ease;
      }
      
      .brand-info-item {
        transition: opacity 0.8s ease, visibility 0.8s ease;
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
      backgroundColor: '#f9f9f9',
      padding: '60px 0',
      position: 'relative'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 600,
      color: '#333',
      marginBottom: '15px',
      position: 'relative',
      display: 'inline-block'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: '#666',
      maxWidth: '700px',
      margin: '20px auto 0'
    },
    brandShowcase: {
      position: 'relative',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: '8px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white'
    },
    brandItem: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    },
    brandInfo: {
      position: 'relative',
      minHeight: '200px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    brandInfoItem: {
      position: 'absolute',
      width: '100%',
      left: 0,
      top: 0,
      padding: '20px'
    },
    brandName: {
      fontSize: '28px',
      fontWeight: 600,
      color: '#0056b3',
      marginBottom: '15px'
    },
    brandDescription: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: '#444'
    },
    navigationControls: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
      gap: '15px'
    },
    navButton: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.9)',
      color: 'white',
      border: 'none',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    navButtonHover: {
      backgroundColor: '#c89b7b',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)'
    },
    dotsContainer: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeDot: {
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
 // Aggiungi questi nuovi stili per il controllo video
 videoControls: {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  opacity: '0',
  transition: 'opacity 0.3s ease',
},
videoControlsVisible: {
  opacity: '1',
},
progressContainer: {
  flex: '1',
  height: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '4px',
  cursor: 'pointer',
  position: 'relative',
  marginRight: '15px',
},
progressBar: {
  height: '100%',
  backgroundColor: '#e2b77e',
  borderRadius: '4px',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '0%',
  transition: 'width 0.1s linear',
},
progressHover: {
  position: 'absolute',
  top: '-25px',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  display: 'none',
},
progressHoverVisible: {
  display: 'block',
},
timeDisplay: {
  color: 'white',
  fontSize: '14px',
  fontFamily: 'monospace',
},
videoOverlayButton: {
  position: 'absolute',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'rgba(226, 183, 126, 0.9)',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: '2px solid rgba(255, 255, 255, 0.8)',
  fontSize: '20px',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
},
videoButtonPlay: {
  right: '15px',
  bottom: '15px',
},
videoButtonPause: {
  right: '15px',
  bottom: '15px',
},
buttonHover: {
  backgroundColor: '#c89b7b',
  transform: 'scale(1.1)',
},
};

  return (
    <div style={styles.section} className="py-5">
      <Container>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>{t('nostriMarchi')}</h2>
          <p style={styles.sectionSubtitle}>
            Dal 1907 sviluppiamo marchi innovativi nel settore della detergenza, 
            combinando tradizione, tecnologia e rispetto per l'ambiente
          </p>
        </div>
        
        {/* Istruzioni per lo scorrimento */}
        <div style={styles.instructionText}>
          <FontAwesomeIcon icon={faHandPointRight} className="swipe-hint" />
          <span>Scorri o utilizza i controlli per esplorare tutti i nostri marchi</span>
          <FontAwesomeIcon icon={faHandPointLeft} className="swipe-hint" style={{transform: 'scaleX(-1)'}} />
        </div>
        
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div style={styles.brandShowcase} className="brand-showcase">
              {brands.map((brand, index) => (
                <div 
                  key={brand.id} 
                  style={{
                    ...styles.brandItem,
                    opacity: index === activeIndex ? 1 : 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                  className="brand-item"
                >
                  <img src={brand.image} alt={brand.name} className="img-fluid" />
                </div>
              ))}
            </div>
          </Col>
          
          <Col lg={6}>
            <div style={styles.brandInfo}>
              {brands.map((brand, index) => (
                <div 
                  key={brand.id} 
                  style={{
                    ...styles.brandInfoItem,
                    opacity: index === activeIndex ? 1 : 0,
                    visibility: index === activeIndex ? 'visible' : 'hidden',
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                  className="brand-info-item"
                >
                  <h3 style={styles.brandName}>{brand.name}</h3>
                  <p style={styles.brandDescription}>{brand.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        
        <div style={styles.navigationControls}>
          <button 
            style={{
              ...styles.navButton,
              ...(hoveredControl === 'prev' ? styles.navButtonHover : {})
            }}
            onClick={prevSlide}
            onMouseEnter={() => setHoveredControl('prev')}
            onMouseLeave={() => setHoveredControl(null)}
            aria-label="Brand precedente"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          
          <div style={styles.dotsContainer}>
            {brands.map((brand, index) => (
              <div 
                key={brand.id}
                style={{
                  ...styles.dot,
                  ...(index === activeIndex ? styles.activeDot : {})
                }}
                onClick={() => setActiveIndex(index)}
                aria-label={`Vai al brand ${brand.name}`}
              />
            ))}
          </div>
          
          <button 
            style={{
              ...styles.navButton,
              ...(hoveredControl === 'next' ? styles.navButtonHover : {})
            }}
            onClick={nextSlide}
            onMouseEnter={() => setHoveredControl('next')}
            onMouseLeave={() => setHoveredControl(null)}
            aria-label="Brand successivo"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default BrandsSection;