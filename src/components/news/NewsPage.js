// Crea una versione semplificata di HomePage
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-4">
      <h1 className="text-center">ORSI S.R.L.</h1>
      
      <div id="section0" className="my-5 text-center">
        <h2>{t('home')}</h2>
        <p>Sezione Home</p>
      </div>
      
      <div id="section1" className="my-5 text-center">
        <h2>{t('chiSiamo')}</h2>
        <p>Sezione Chi Siamo</p>
      </div>
      
      <div id="section2" className="my-5 text-center">
        <h2>{t('ricerca')}</h2>
        <p>Sezione Ricerca</p>
      </div>
      
      <div id="section3" className="my-5 text-center">
        <h2>{t('nostriMarchi')}</h2>
        <p>Sezione Nostri Marchi</p>
      </div>
      
      <div id="section4" className="my-5 text-center">
        <h2>{t('Produzione')}</h2>
        <p>{t('descrizioneProduzione')}</p>
      </div>
      
      <div id="section5" className="my-5 text-center">
        <h2>{t('novita')}</h2>
        <p>Sezione Novità</p>
      </div>
      
      <div id="section6" className="my-5 text-center">
        <h2>{t('certificazioni')}</h2>
        <p>Sezione Certificazioni</p>
      </div>
    </div>
  );
};

export default HomePage;