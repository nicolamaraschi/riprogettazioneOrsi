// src/components/about/AboutPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// Importazione corretta delle immagini
import responsabileImg from '../../assets/images/responsabile.png';
import menu2Img from '../../assets/images/menu2.png';
import worldEnvironmentImg from '../../assets/images/world-environment.png';
import prendersiCuraImg from '../../assets/images/prendersi cura.webp';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="p-0">
      <div className="our-menu-food">
        <h2 style={{ color: 'white', textAlign: 'center' }}>{t('chiSiamo2')}</h2>
        <p className="ecologia-text" dangerouslySetInnerHTML={{ __html: t('chiSiamo3') }} />
        
        <h3 style={{ color: 'white', textAlign: 'center' }}>{t('chiSiamo4')}</h3>
        <div className="main-menu-food">
          <div className="inner-menu-food">
            <div className="menu-food-content">
              <img src={responsabileImg} alt={t('titoloSostenibile1')} />
              <div className="menu-food-text">
                <h3>{t('titoloSostenibile1')}</h3>
                <p className="description">{t('descrizioneSostenibile1')}</p>
              </div>
            </div>
          </div>
          
          <div className="inner-menu-food">
            <div className="menu-food-content">
              <img src={menu2Img} alt={t('titoloSostenibile2')} />
              <div className="menu-food-text">
                <h3>{t('titoloSostenibile2')}</h3>
                <p className="description">{t('descrizioneSostenibile2')}</p>
              </div>
            </div>
          </div>
          
          <div className="inner-menu-food">
            <div className="menu-food-content">
              <img src={worldEnvironmentImg} alt={t('titoloSostenibile3')} />
              <div className="menu-food-text">
                <h3>{t('titoloSostenibile3')}</h3>
                <p className="description">{t('descrizioneSostenibile3')}</p>
              </div>
            </div>
          </div>
          
          <div className="inner-menu-food">
            <div className="menu-food-content">
              <img src={prendersiCuraImg} alt={t('titoloSostenibile4')} />
              <div className="menu-food-text">
                <h3>{t('titoloSostenibile4')}</h3>
                <p className="description">{t('descrizioneSostenibile4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;