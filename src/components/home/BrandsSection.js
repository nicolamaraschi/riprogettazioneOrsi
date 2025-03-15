// src/components/home/BrandsSection.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// Importazione delle immagini
import brand1Img from '../../assets/images/brand1.png';
import brand2Img from '../../assets/images/brand2.png';
import brand3Img from '../../assets/images/brand3.png';
import brand4Img from '../../assets/images/brand4.png';

const BrandsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % brands.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [brands.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

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
    brandsNavigation: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '30px'
    },
    brandDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#ddd',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    activeDot: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.2)'
    }
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
        
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div style={styles.brandShowcase}>
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
                >
                  <h3 style={styles.brandName}>{brand.name}</h3>
                  <p style={styles.brandDescription}>{brand.description}</p>
                </div>
              ))}
              
              <div style={styles.brandsNavigation}>
                {brands.map((brand, index) => (
                  <button 
                    key={brand.id}
                    style={{
                      ...styles.brandDot,
                      ...(index === activeIndex ? styles.activeDot : {})
                    }}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Vai al brand ${brand.name}`}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandsSection;