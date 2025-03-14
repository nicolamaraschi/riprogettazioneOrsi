// src/components/home/AboutSection.js

import React from 'react';
import { useTranslation } from 'react-i18next';

// Importazione corretta delle immagini
import responsabileImg from '../../assets/images/responsabile.png';
import menu2Img from '../../assets/images/menu2.png';
import worldEnvironmentImg from '../../assets/images/world-environment.png';
import prendersiCuraImg from '../../assets/images/prendersi cura.webp';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="our-menu-food">
      <h2 style={{ color: 'white', textAlign: 'center' }}>CHI SIAMO</h2>
      <p className="ecologia-text">
        Nata a Bologna nel 1907<br />
        ORSI è una delle poche realtà italiane di rilievo nel mercato della detergenza in polvere domestica ed istituzionale<br />
        Competendo per esperienza, tecnologia e qualità con le aziende leader del settore.<br /> 
        Oggi, ORSI investe in Ricerca e Sviluppo per innovare nel campo della detergenza e della cosmesi.
      </p>
      
      <h3 style={{ color: 'white', textAlign: 'center' }}>Con l'impegno che</h3>
      <div className="main-menu-food">
        <div className="inner-menu-food">
          <div className="menu-food-content">
            <img src={responsabileImg} alt="Innovazione Responsabile" />
            <div className="menu-food-text">
              <h3>Innovazione Responsabile</h3>
              <p className="description">L'innovazione responsabile è la chiave per un progresso sostenibile e duraturo.</p>
            </div>
          </div>
        </div>
        
        <div className="inner-menu-food">
          <div className="menu-food-content">
            <img src={menu2Img} alt="Approvigionamento Etico" />
            <div className="menu-food-text">
              <h3>Approvigionamento Etico</h3>
              <p className="description">Scegliere un approvvigionamento etico è una scelta responsabile per un futuro sostenibile.</p>
            </div>
          </div>
        </div>
        
        <div className="inner-menu-food">
          <div className="menu-food-content">
            <img src={worldEnvironmentImg} alt="Proteggere Il Nostro Ambiente" />
            <div className="menu-food-text">
              <h3>Proteggere il nostro ambiente</h3>
              <p className="description">Proteggere l'ambiente è proteggere il nostro futuro.</p>
            </div>
          </div>
        </div>
        
        <div className="inner-menu-food">
          <div className="menu-food-content">
            <img src={prendersiCuraImg} alt="Prendersi cura delle persone" />
            <div className="menu-food-text">
              <h3>Prendersi cura delle persone</h3>
              <p className="description">Cura dedicata al benessere di tutti.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;