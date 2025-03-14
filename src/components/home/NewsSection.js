// src/components/home/NewsSection.js

import React from 'react';

// Importazione dell'immagine
import graficoImg from '../../assets/images/grafico.png';

const NewsSection = () => {
  return (
    <div className="about2">
      <div className="about-content2">
        <div className="about-inner-content home-image">
          <img className="myimageabout" src={graficoImg} alt="Grafico" />
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-inner-content">
          <div className="about-text-content">
            <h2>Novità</h2>
            <p>
              ORSI group e il suo Team È lieto di comunicare l'inizio dell'operatività della divisione Cosmetica Orsi.
              Locata nei pressi della nostra attuale sede comprende:
              Un'area dedicata di 6.000 M2 di cui 1.500 M2 coperti
              La creazione di un sito produttivo per la cosmesi e un laboratorio di analisi e ricerca e sviluppo dedicato.
              La gestione è affidata ad uno staff di tecnici e ricercatori cosmetologi oggi pronti al debutto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;