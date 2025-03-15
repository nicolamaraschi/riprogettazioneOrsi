// src/components/home/CertificationsSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faAward, faCheck, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

// Import certification images
import bureauVeritasImg from '../../assets/images/bureau veritas.png';
import certificatoBiologicoImg from '../../assets/images/certificato biologico.png';

const CertificationsSection = () => {
  const { t } = useTranslation();
  
  // Certification data
  const certifications = [
    {
      id: 1,
      name: 'Bureau Veritas',
      image: bureauVeritasImg,
      description: 'La certificazione Bureau Veritas garantisce che i nostri processi e prodotti soddisfano gli standard internazionali di qualità.',
      issuedDate: '2021-06-15',
      validUntil: '2024-06-14'
    },
    {
      id: 2,
      name: 'Certificazione Biologica',
      image: certificatoBiologicoImg,
      description: 'I nostri prodotti biologici sono certificati secondo gli standard europei per garantire l\'utilizzo di ingredienti naturali e processi produttivi sostenibili.',
      issuedDate: '2022-03-10',
      validUntil: '2025-03-09'
    }
  ];

  // Stili inline
  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '600',
      marginBottom: '50px',
      textAlign: 'center',
      color: '#2c3e50',
      position: 'relative',
      fontFamily: "'Poppins', sans-serif"
    },
    titleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    carouselContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      padding: '20px 0'
    },
    carouselControls: {
      border: 'none',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      backgroundColor: 'rgba(28, 36, 54, 0.8)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      height: '100%',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      height: '100%',
      backgroundColor: 'rgba(248, 249, 250, 0.4)'
    },
    image: {
      maxWidth: '80%',
      maxHeight: '220px',
      objectFit: 'contain'
    },
    contentCard: {
      padding: '35px 30px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    certName: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '18px',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '12px'
    },
    certNameUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '40px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#596275',
      marginBottom: '20px'
    },
    metaInfo: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(248, 249, 250, 0.8)',
      padding: '12px 15px',
      borderRadius: '8px',
      marginTop: '15px'
    },
    metaIcon: {
      color: '#e2b77e',
      marginRight: '10px',
      fontSize: '16px'
    },
    metaLabel: {
      fontWeight: '600',
      color: '#2c3e50',
      marginRight: '8px',
      fontSize: '14px'
    },
    metaValue: {
      color: '#596275',
      fontSize: '14px'
    },
    benefits: {
      listStyle: 'none',
      padding: '0',
      margin: '20px 0 0 0'
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px'
    },
    benefitIcon: {
      color: '#e2b77e',
      marginRight: '10px',
      marginTop: '3px'
    },
    benefitText: {
      fontSize: '14px',
      color: '#596275'
    }
  };

  return (
    <div style={styles.section}>
      <Container>
        <h2 style={styles.sectionTitle}>
          {t('certificazioni')}
          <div style={styles.titleDecoration}></div>
        </h2>
        
        <div style={styles.carouselContainer}>
          <Carousel
            indicators={true}
            controls={true}
            interval={5000}
            nextIcon={<span style={{ fontSize: '18px' }}>›</span>}
            prevIcon={<span style={{ fontSize: '18px' }}>‹</span>}
            nextLabel=""
            prevLabel=""
          >
            {certifications.map(cert => (
              <Carousel.Item key={cert.id}>
                <Row className="align-items-stretch">
                  <Col lg={5} className="mb-4 mb-lg-0">
                    <div style={styles.card}>
                      <div style={styles.imageContainer}>
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          style={styles.image}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div style={styles.card}>
                      <div style={styles.contentCard}>
                        <div>
                          <h3 style={styles.certName}>
                            {cert.name}
                            <div style={styles.certNameUnderline}></div>
                          </h3>
                          <p style={styles.description}>{cert.description}</p>
                          
                          <ul style={styles.benefits}>
                            <li style={styles.benefitItem}>
                              <FontAwesomeIcon icon={faCheck} style={styles.benefitIcon} />
                              <span style={styles.benefitText}>Conformità agli standard internazionali più rigorosi</span>
                            </li>
                            <li style={styles.benefitItem}>
                              <FontAwesomeIcon icon={faCheck} style={styles.benefitIcon} />
                              <span style={styles.benefitText}>Processi produttivi verificati e controllati</span>
                            </li>
                            <li style={styles.benefitItem}>
                              <FontAwesomeIcon icon={faCheck} style={styles.benefitIcon} />
                              <span style={styles.benefitText}>Garanzia di qualità per i nostri clienti</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div style={styles.metaInfo}>
                          <FontAwesomeIcon icon={faCalendarAlt} style={styles.metaIcon} />
                          <span style={styles.metaLabel}>Valida fino al:</span>
                          <span style={styles.metaValue}>
                            {new Date(cert.validUntil).toLocaleDateString('it-IT', { 
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default CertificationsSection;