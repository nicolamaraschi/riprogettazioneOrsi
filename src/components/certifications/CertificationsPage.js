// src/components/certifications/CertificationsPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// Import certification images
import bureauVeritasImg from '../../assets/images/bureau veritas.png';
import certificatoBiologicoImg from '../../assets/images/certificato biologico.png';

const CertificationsPage = () => {
  const { t } = useTranslation();
  
  // Certification data
  const certifications = [
    {
      id: 1,
      name: 'Bureau Veritas',
      image: bureauVeritasImg,
      description: 'La certificazione Bureau Veritas garantisce che i nostri processi e prodotti soddisfano gli standard internazionali di qualità. Questo riconoscimento testimonia il nostro impegno nella produzione di detergenti che rispettano la salute umana e l\'ambiente.',
      issuedDate: '2021-06-15',
      validUntil: '2024-06-14'
    },
    {
      id: 2,
      name: 'Certificazione Biologica',
      image: certificatoBiologicoImg,
      description: 'I nostri prodotti biologici sono certificati secondo gli standard europei per garantire l\'utilizzo di ingredienti naturali e processi produttivi sostenibili, rispettosi dell\'ambiente e della biodiversità.',
      issuedDate: '2022-03-10',
      validUntil: '2025-03-09'
    }
  ];

  return (
    <div className="certifications-page">
      <div className="certifications-header">
        <h1 className="certifications-title">{t('certificazioni')}</h1>
        <p className="certifications-subtitle">
          Le nostre certificazioni testimoniano il nostro impegno verso la qualità, la sostenibilità e l'innovazione responsabile. 
          Lavoriamo costantemente per mantenere e migliorare gli standard più elevati in tutti i nostri processi.
        </p>
      </div>
      
      <div className="certifications-carousel-container">
        <Carousel
          className="certifications-carousel"
          indicators={true}
          controls={true}
          interval={5000}
        >
          {certifications.map(cert => (
            <Carousel.Item key={cert.id}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="certification-card">
                    <div className="certification-image-container">
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="certification-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="certification-card">
                    <div className="certification-content">
                      <h3 className="certification-name">{cert.name}</h3>
                      <p className="certification-description">{cert.description}</p>
                      <div className="certification-meta">
                        <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} />
                        <span className="certification-meta-label">Valida fino al:</span>
                        <span>{new Date(cert.validUntil).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      
      <div className="certification-info-section">
        <div className="certification-info-container">
          <h2 className="certification-info-title">Il nostro impegno per la qualità</h2>
          <p className="certification-info-text">
            In Orsi S.R.L., la qualità e la sostenibilità sono al centro del nostro modello di business. 
            Le certificazioni che abbiamo ottenuto non sono semplici documenti, ma rappresentano la nostra filosofia aziendale 
            e il nostro impegno quotidiano verso i clienti e l'ambiente.
          </p>
          
          <ul className="certification-commitment-list">
            <li className="certification-commitment-item">
              <strong>Sistema di Gestione della Qualità</strong> - Applichiamo rigorosi controlli in ogni fase della produzione per garantire prodotti di eccellenza.
            </li>
            <li className="certification-commitment-item">
              <strong>Sostenibilità Ambientale</strong> - Utilizziamo processi produttivi a basso impatto ambientale e lavoriamo per ridurre costantemente la nostra impronta ecologica.
            </li>
            <li className="certification-commitment-item">
              <strong>Innovazione Continua</strong> - Investiamo nella ricerca e sviluppo per migliorare costantemente le formule dei nostri prodotti, rendendoli più efficaci e più sostenibili.
            </li>
            <li className="certification-commitment-item">
              <strong>Trasparenza</strong> - Comunichiamo in modo chiaro e completo la composizione dei nostri prodotti, perché crediamo che i consumatori abbiano diritto a informazioni accurate.
            </li>
          </ul>
          
          <div className="quality-policy">
            <h3 className="quality-policy-title">La nostra politica di qualità</h3>
            <p className="quality-policy-text">
              "Ci impegniamo a sviluppare, produrre e distribuire detergenti innovativi che soddisfino le esigenze dei nostri clienti, 
              rispettando sempre l'ambiente e contribuendo a un futuro più sostenibile. La nostra azienda, nata a Bologna nel 1907, 
              continua a evolvere mantenendo saldi i principi di eccellenza e responsabilità che ci hanno sempre contraddistinto."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;