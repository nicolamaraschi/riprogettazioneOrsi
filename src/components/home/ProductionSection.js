// src/components/home/ProductionSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductionSection = () => {
  const { t } = useTranslation();

  return (
    <div className="enjoy-our-food">
      <div className="food-main-content">
        <h2 style={{ color: 'white', textAlign: 'center' }}>{t('titoloProduzione')}</h2>
        <p>{t('descrizioneProduzione')}</p>
      </div>
    </div>
  );
};

export default ProductionSection;