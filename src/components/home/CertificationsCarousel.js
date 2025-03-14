// src/components/home/CertificationsCarousel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';

// Importazione corretta delle immagini
import bureauVeritasImg from '../../assets/images/bureau veritas.png';
import certificatoBiologicoImg from '../../assets/images/certificato biologico.png';

const CertificationsCarousel = () => {
  return (
    <>
      <h2 className="titolo-partner">CERTIFICAZIONI</h2>
      <div id="carouselExampleIndicators" className="carousel slide mb-4">
        <Carousel interval={3000}>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img 
                src={bureauVeritasImg} 
                className="d-block w-100" 
                alt="Bureau Veritas" 
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img 
                src={certificatoBiologicoImg} 
                className="d-block w-100" 
                alt="Certificato Biologico" 
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CertificationsCarousel;