// src/components/brands/BrandsPage.js
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Importazione delle immagini
import brand1Img from '../../assets/images/brand1.png';
import brand2Img from '../../assets/images/brand2.png';
import brand3Img from '../../assets/images/brand3.png';
import brand4Img from '../../assets/images/brand4.png';

const BrandsPage = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="brands-page">
      <div className="brands-page-header">
        <h1 className="brands-page-title">{t('nostriMarchi')}</h1>
        <p className="brands-page-subtitle">
          Dal 1907 ORSI sviluppa marchi innovativi nel settore della detergenza, combinando tradizione, 
          tecnologia e rispetto per l'ambiente. Ogni nostro brand è pensato per soddisfare esigenze 
          specifiche, garantendo sempre l'eccellenza che ci contraddistingue.
        </p>
      </div>
      
      <div className="carousel-container2 mb-4">
        <h2 className="carousel-title">I Nostri Brands</h2>
        <div 
          className="carousel2" 
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Brand ${index+1}`} />
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={prevSlide}>←</button>
        <button className="next-button" onClick={nextSlide}>→</button>
      </div>
      
      <Container className="brands-container py-5">
        <h2 className="text-center mb-5">Le nostre linee di prodotti</h2>
        <Row className="justify-content-center">
          {brands.map((brand) => (
            <Col key={brand.id} md={6} lg={5} className="mb-4">
              <Card className="brand-card h-100">
                <div className="brand-image-container">
                  <Card.Img variant="top" src={brand.image} alt={brand.name} className="brand-image" />
                </div>
                <Card.Body>
                  <Card.Title className="brand-name">{brand.name}</Card.Title>
                  <Card.Text className="brand-description">{brand.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Link to={brand.link} className="btn btn-primary brand-button">
                    Scopri i prodotti
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <div className="brand-history-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="text-center mb-4">La nostra storia</h2>
              <p>
                Fondata a Bologna nel 1907, ORSI ha attraversato più di un secolo di storia italiana, 
                evolvendo continuamente i suoi prodotti per rispondere alle esigenze di un mercato in 
                costante cambiamento. Dalle prime formulazioni di saponi fino alle moderne soluzioni 
                eco-sostenibili, il nostro impegno per la qualità e l'innovazione è rimasto immutato.
              </p>
              <p>
                Ogni marca ORSI rappresenta questa evoluzione, combinando la tradizione della nostra 
                esperienza con l'innovazione delle più moderne tecnologie, per offrire prodotti 
                efficaci, sicuri e rispettosi dell'ambiente.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BrandsPage;