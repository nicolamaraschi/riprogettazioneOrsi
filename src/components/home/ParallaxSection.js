// src/components/home/ParallaxSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ParallaxSection = () => {
  const { t } = useTranslation();

  return (
    <div className="parallax-section">
      <div className="parallax-text">
        <h1>ORSI S.L.R.</h1>
        <p>{t('presentazione')}</p>
      </div>
      <div className="parallax-image">
        {/* L'immagine è impostata nel CSS come background-image */}
      </div>
    </div>
  );
};

export default ParallaxSection;