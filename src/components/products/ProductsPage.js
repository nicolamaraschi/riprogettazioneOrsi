// src/components/production/ProductionPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ProductionPage = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="p-0">
      <div className="enjoy-our-food">
        <div className="food-main-content">
          <h2 style={{ color: 'white', textAlign: 'center' }}>{t('titoloProduzione')}</h2>
          <p>{t('descrizioneProduzione')}</p>
          
          <div className="production-details">
            <h3>I nostri stabilimenti</h3>
            <p>
              Lo stabilimento produttivo in Italia ha una capacità di 4 tonnellate all'ora 
              con linee di imballaggio e pallettizzazione automatizzate e robotizzate. 
              La nostra struttura all'avanguardia è progettata per garantire la massima 
              efficienza mantenendo gli standard di qualità che ci contraddistinguono.
            </p>
            
            <div className="production-stats">
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-text">Tonnellate/ora</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-text">Operatività</span>
              </div>
              <div className="stat">
                <span className="stat-number">6000</span>
                <span className="stat-text">m² di superficie</span>
              </div>
            </div>
            
            <h3>Tecnologie produttive</h3>
            <p>
              Il nostro processo produttivo si basa su tecnologie innovative che 
              ci permettono di realizzare formulazioni complesse mantenendo la 
              massima efficienza e il minimo impatto ambientale. Grazie a sistemi 
              di automazione avanzati, garantiamo una produzione continuativa 
              di alta qualità.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductionPage;