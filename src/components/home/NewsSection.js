// src/components/home/NewsSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faFlask, faBuilding } from '@fortawesome/free-solid-svg-icons';

// Importazione dell'immagine
import graficoImg from '../../assets/images/cosmesy.webp';

const NewsSection = () => {
  // Stili inline
  const styles = {
    section: {
      padding: '90px 0',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      position: 'relative',
      zIndex: 2
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    image: {
      width: '90%',
      height: 'auto',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    contentWrapper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      fontSize: '36px',
      fontWeight: '600',
      marginBottom: '25px',
      color: '#2c3e50',
      position: 'relative',
      paddingBottom: '15px',
      fontFamily: "'Poppins', sans-serif"
    },
    titleUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#596275',
      marginBottom: '25px'
    },
    featureList: {
      listStyle: 'none',
      padding: '0',
      margin: '20px 0'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    featureIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      color: '#c89b7b',
      flexShrink: 0
    },
    featureContent: {
      flex: 1
    },
    featureTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '5px'
    },
    featureText: {
      fontSize: '15px',
      color: '#596275',
      margin: 0
    },
    badge: {
      display: 'inline-block',
      padding: '6px 12px',
      backgroundColor: 'rgba(200, 155, 123, 0.15)',
      color: '#c89b7b',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '20px'
    }
  };

  return (
    <div style={styles.section}>
      <Container style={styles.container}>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div style={styles.imageContainer}>
              <img style={styles.image} src={graficoImg} alt="Nuova divisione Cosmetica" />
            </div>
          </Col>
          
          <Col lg={6}>
            <div style={styles.contentWrapper}>
              <span style={styles.badge}>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '6px' }} />
                Marzo 2025
              </span>
              
              <h2 style={styles.title}>
                Nuova divisione Cosmetica
                <div style={styles.titleUnderline}></div>
              </h2>
              
              <p style={styles.description}>
                ORSI group e il suo Team è lieto di comunicare l'inizio dell'operatività della divisione Cosmetica Orsi, un'importante espansione che arricchisce la nostra offerta con prodotti innovativi nel settore della bellezza e del benessere.
              </p>
              
              <ul style={styles.featureList}>
                <li style={styles.featureItem}>
                  <div style={styles.featureIcon}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div style={styles.featureContent}>
                    <h4 style={styles.featureTitle}>Ubicazione strategica</h4>
                    <p style={styles.featureText}>Posizionata nei pressi della nostra sede attuale per ottimizzare logistica e operatività.</p>
                  </div>
                </li>
                
                <li style={styles.featureItem}>
                  <div style={styles.featureIcon}>
                    <FontAwesomeIcon icon={faBuilding} />
                  </div>
                  <div style={styles.featureContent}>
                    <h4 style={styles.featureTitle}>Struttura all'avanguardia</h4>
                    <p style={styles.featureText}>Un'area dedicata di 6.000 m², di cui 1.500 m² coperti per la produzione e lo sviluppo.</p>
                  </div>
                </li>
                
                <li style={styles.featureItem}>
                  <div style={styles.featureIcon}>
                    <FontAwesomeIcon icon={faFlask} />
                  </div>
                  <div style={styles.featureContent}>
                    <h4 style={styles.featureTitle}>Ricerca e innovazione</h4>
                    <p style={styles.featureText}>Laboratorio di analisi e R&D dedicato, gestito da tecnici e ricercatori cosmetologi altamente qualificati.</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsSection;