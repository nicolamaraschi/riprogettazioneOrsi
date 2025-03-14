// src/components/home/BrandsCarousel.js

import React, { useState, useEffect, useCallback } from 'react';

// Importazione delle immagini
import brand1Img from '../../assets/images/brand1.png';
import brand2Img from '../../assets/images/brand2.png';
import brand3Img from '../../assets/images/brand3.png';
import brand4Img from '../../assets/images/brand4.png';

const BrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [brand1Img, brand2Img, brand3Img, brand4Img];

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
  );
};

export default BrandsCarousel;