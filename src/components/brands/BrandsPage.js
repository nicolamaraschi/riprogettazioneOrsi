// src/components/brands/BrandsPage.js
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHandPointRight, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

// Importazione delle immagini
import brand1Img from '../../assets/images/brand1.png';
import brand2Img from '../../assets/images/brand2.png';
import brand3Img from '../../assets/images/brand3.png';
import brand4Img from '../../assets/images/brand4.png';

const BrandsPage = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredControl, setHoveredControl] = useState(null);
  const slides = [brand1Img, brand2Img, brand3Img, brand4Img];

  // Brand details
  const brands = [
    {
      id: 1,
      name: 'BIT',
      image: brand1Img,
      description: 'Linea di prodotti professionali per bucato e lavanderia industriale, caratterizzata da alte prestazioni anche in condizioni difficili.',
      link: '/products/professional/bit'
    },
    {
      id: 2,
      name: 'Dolomiten Weiss',
      image: brand2Img,
      description: 'Prodotti premium per il bucato professionale, formulati per garantire igiene e brillantezza nei tessuti ad uso industriale e ospedaliero.',
      link: '/products/professional/dolomitenweiss'
    },
    {
      id: 3,
      name: 'Orsetto',
      image: brand3Img,
      description: 'La storica linea domestica di ORSI, amata dalle famiglie italiane per la sua efficacia e delicatezza sui tessuti.',
      link: '/products/domestic/orsetto'
    },
    {
      id: 4,
      name: 'La Suora',
      image: brand4Img,
      description: 'Specializzata in prodotti per la cura dei tessuti delicati, tende e pizzi, con formulazioni che rispettano le fibre e mantengono la bellezza dei capi.',
      link: '/products/domestic/suora'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

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
    
    const carouselElement = document.querySelector('.carousel-container2');
    
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
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

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
      
      .brand-slide {
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      .carousel2 {
        transition: transform 0.5s ease-in-out;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Stili inline
  const styles = {
    brands_page: {
      padding: '90px 0 70px',
      backgroundColor: '#f8f9fa',
      position: 'relative'
    },
    brands_page_header: {
      textAlign: 'center',
      marginBottom: '40px',
      position: 'relative',
      padding: '0 20px'
    },
    brands_page_title: {
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
    brands_page_subtitle: {
      fontSize: '18px',
      color: '#596275',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.8'
    },
    carousel_container: {
      position: 'relative',
      overflow: 'hidden',
      margin: '0 auto 50px',
      maxWidth: '1000px',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      backgroundColor: 'white'
    },
    carousel: {
      display: 'flex',
      width: '400%', // 4 immagini
      transform: `translateX(-${currentIndex * 25}%)`,
      transition: 'transform 0.5s ease-in-out'
    },
    slide: {
      width: '25%',
      padding: '30px',
      textAlign: 'center'
    },
    carousel_title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '20px',
      fontFamily: "'Poppins', sans-serif"
    },
    carousel_controls: {
      position: 'absolute',
      width: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 15px',
      zIndex: 10
    },
    carousel_button: {
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
    carousel_button_hover: {
      backgroundColor: '#c89b7b',
      transform: 'scale(1.1)'
    },
    brands_container: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      padding: '40px',
      margin: '40px auto',
      maxWidth: '1200px'
    },
    brands_heading: {
      fontSize: '30px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '30px',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '15px'
    },
    heading_decoration: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    brand_card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '0',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      height: '100%'
    },
    brand_card_hover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)'
    },
    brand_image_container: {
      height: '220px',
      overflow: 'hidden',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    },
    brand_image: {
      maxWidth: '100%',
      maxHeight: '160px',
      objectFit: 'contain',
      transition: 'transform 0.5s ease'
    },
    brand_image_hover: {
      transform: 'scale(1.1)'
    },
    brand_content: {
      padding: '25px'
    },
    brand_name: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '15px',
      fontFamily: "'Poppins', sans-serif"
    },
    brand_description: {
      fontSize: '15px',
      color: '#596275',
      lineHeight: '1.7',
      marginBottom: '20px'
    },
    brand_button: {
      display: 'inline-block',
      backgroundColor: '#c89b7b',
      color: 'white',
      padding: '10px 25px',
      borderRadius: '30px',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      border: 'none',
      fontSize: '14px',
      cursor: 'pointer'
    },
    brand_button_hover: {
      backgroundColor: '#e2b77e',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(200, 155, 123, 0.3)'
    },
    brand_history: {
      backgroundColor: 'rgba(28, 36, 54, 0.03)',
      padding: '40px',
      borderRadius: '12px',
      marginTop: '60px',
      maxWidth: '1200px',
      margin: '60px auto',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },
    history_title: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '25px',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif"
    },
    history_text: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#596275',
      marginBottom: '0'
    },
    carousel_indicators: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      gap: '8px'
    },
    carousel_indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    carousel_indicator_active: {
      backgroundColor: '#c89b7b',
      transform: 'scale(1.3)'
    },
    instruction_text: {
      textAlign: 'center',
      fontSize: '15px',
      color: '#777',
      margin: '10px 0 25px',
      fontStyle: 'italic',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    }
  };

  return (
    <div style={styles.brands_page}>
      <div className="brands-page-header">
        <h1 style={styles.brands_page_title}>
          {t('nostriMarchi')}
          <div style={styles.titleDecoration}></div>
        </h1>
        <p style={styles.brands_page_subtitle}>
          Dal 1907 ORSI sviluppa marchi innovativi nel settore della detergenza, combinando tradizione, 
          tecnologia e rispetto per l'ambiente. Ogni nostro brand è pensato per soddisfare esigenze 
          specifiche, garantendo sempre l'eccellenza che ci contraddistingue.
        </p>
      </div>
      
      {/* Istruzioni per lo scorrimento */}
      <div style={styles.instruction_text}>
        <FontAwesomeIcon icon={faHandPointRight} className="swipe-hint" />
        <span>Scorri per visualizzare tutti i nostri marchi</span>
        <FontAwesomeIcon icon={faHandPointLeft} className="swipe-hint" style={{transform: 'scaleX(-1)'}} />
      </div>
      
      <div className="carousel-container2 mb-4" style={styles.carousel_container}>
        <h2 style={styles.carousel_title}>I Nostri Brands</h2>
        <div 
          className="carousel2" 
          style={{ 
            ...styles.carousel,
            transform: `translateX(-${currentIndex * 25}%)` 
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide brand-slide" style={styles.slide}>
              <img src={slide} alt={`Brand ${index+1}`} />
            </div>
          ))}
        </div>
        
        <div style={styles.carousel_controls}>
          <button 
            style={{
              ...styles.carousel_button,
              ...(hoveredControl === 'prev' ? styles.carousel_button_hover : {})
            }}
            onClick={prevSlide}
            onMouseEnter={() => setHoveredControl('prev')}
            onMouseLeave={() => setHoveredControl(null)}
            aria-label="Brand precedente"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          
          <button 
            style={{
              ...styles.carousel_button,
              ...(hoveredControl === 'next' ? styles.carousel_button_hover : {})
            }}
            onClick={nextSlide}
            onMouseEnter={() => setHoveredControl('next')}
            onMouseLeave={() => setHoveredControl(null)}
            aria-label="Brand successivo"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        
        <div style={styles.carousel_indicators}>
          {slides.map((_, index) => (
            <div 
              key={index}
              style={{
                ...styles.carousel_indicator,
                ...(index === currentIndex ? styles.carousel_indicator_active : {})
              }}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Vai al brand ${index+1}`}
            />
          ))}
        </div>
      </div>
      
      <Container>
        <div style={styles.brands_container}>
          <h2 style={styles.brands_heading}>
            Le nostre linee di prodotti
            <div style={styles.heading_decoration}></div>
          </h2>
          
          <Row className="g-4">
            {brands.map((brand) => (
              <Col key={brand.id} md={6} lg={3}>
                <div 
                  style={{
                    ...styles.brand_card,
                    ...(hoveredCard === brand.id ? styles.brand_card_hover : {})
                  }}
                  onMouseEnter={() => setHoveredCard(brand.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={styles.brand_image_container}>
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      style={{
                        ...styles.brand_image,
                        ...(hoveredCard === brand.id ? styles.brand_image_hover : {})
                      }}
                    />
                  </div>
                  <div style={styles.brand_content}>
                    <h3 style={styles.brand_name}>{brand.name}</h3>
                    <p style={styles.brand_description}>{brand.description}</p>
                    <Link 
                      to={brand.link} 
                      style={{
                        ...styles.brand_button,
                        ...(hoveredCard === brand.id ? styles.brand_button_hover : {})
                      }}
                    >
                      Scopri i prodotti
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div style={styles.brand_history}>
          <h2 style={styles.history_title}>La nostra storia</h2>
          <p style={styles.history_text}>
            Fondata a Bologna nel 1907, ORSI ha attraversato più di un secolo di storia italiana, 
            evolvendo continuamente i suoi prodotti per rispondere alle esigenze di un mercato in 
            costante cambiamento. Dalle prime formulazioni di saponi fino alle moderne soluzioni 
            eco-sostenibili, il nostro impegno per la qualità e l'innovazione è rimasto immutato.
          </p>
          <br />
          <p style={styles.history_text}>
            Ogni marca ORSI rappresenta questa evoluzione, combinando la tradizione della nostra 
            esperienza con l'innovazione delle più moderne tecnologie, per offrire prodotti 
            efficaci, sicuri e rispettosi dell'ambiente.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BrandsPage;