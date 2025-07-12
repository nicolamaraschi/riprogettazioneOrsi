// src/components/home/ProductionSection.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faCogs, faCheckSquare, faVial, faBox, faTruck } from '@fortawesome/free-solid-svg-icons';

const ProductionSection = () => {
  const { t } = useTranslation();
  const [hoveredStat, setHoveredStat] = useState(null);
  
  // Stili inline
  const styles = {
    section: {
      background: 'linear-gradient(rgba(28, 36, 54, 0.92), rgba(28, 36, 54, 0.92)), url("/path/to/production-image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 2px)',
      backgroundSize: '30px 30px',
      zIndex: 1,
      opacity: 0.3
    },
    container: {
      position: 'relative',
      zIndex: 2
    },
    sectionTitle: {
      fontSize: '40px',
      fontWeight: 700,
      marginBottom: '30px',
      textAlign: 'center',
      position: 'relative',
      paddingBottom: '15px',
      fontFamily: "'Poppins', sans-serif",
      color: 'white'
    },
    titleUnderline: {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    description: {
      fontSize: '18px',
      lineHeight: 1.8,
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 60px',
      color: 'rgba(255, 255, 255, 0.85)'
    },
    statBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '35px 25px',
      marginBottom: '20px',
      textAlign: 'center',
      backdropFilter: 'blur(5px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      height: '100%'
    },
    statBoxHovered: {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderColor: 'rgba(200, 155, 123, 0.3)'
    },
    statIconContainer: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      transition: 'all 0.3s ease'
    },
    statIconContainerHovered: {
      backgroundColor: 'rgba(200, 155, 123, 0.25)',
      transform: 'scale(1.05)'
    },
    statIcon: {
      fontSize: '32px',
      color: '#e2b77e'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: '5px',
      color: '#ffffff',
      fontFamily: "'Poppins', sans-serif"
    },
    statTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#e2b77e',
      marginBottom: '10px'
    },
    statDescription: {
      fontSize: '15px',
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: 1.5
    },
    processContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '12px',
      padding: '35px 30px',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      height: '100%'
    },
    processTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '30px',
      textAlign: 'center',
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '12px'
    },
    processTitleUnderline: {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      height: '2px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1px'
    },
    processStep: {
      display: 'flex',
      marginBottom: '25px',
      position: 'relative'
    },
    processStepLine: {
      content: '',
      position: 'absolute',
      top: '40px',
      left: '20px',
      width: '1px',
      height: 'calc(100% + 15px)',
      backgroundColor: 'rgba(200, 155, 123, 0.3)',
      zIndex: 1
    },
    processIconContainer: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.2)',
      border: '2px solid rgba(200, 155, 123, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '20px',
      flexShrink: 0,
      zIndex: 2,
      color: '#e2b77e',
      fontWeight: 600,
      fontSize: '16px',
      position: 'relative'
    },
    processContent: {
      flex: 1
    },
    processStepTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '8px',
      color: '#e2b77e'
    },
    processStepDescription: {
      fontSize: '15px',
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: 1.6
    },
    lastProcess: {
      marginBottom: 0
    }
  };

  // Dati per le statistiche
  const stats = [
    {
      id: 1,
      icon: faIndustry,
      number: "4",
      title: t('productionStat1Title'),
      description: t('productionStat1Description')
    },
    {
      id: 2,
      icon: faCogs,
      number: "100%",
      title: t('productionStat2Title'),
      description: t('productionStat2Description')
    },
    {
      id: 3,
      icon: faFlask,
      number: "+50",
      title: t('productionStat3Title'),
      description: t('productionStat3Description')
    },
    {
      id: 4,
      icon: faCheckSquare,
      number: "99.8%",
      title: t('productionStat4Title'),
      description: t('productionStat4Description')
    }
  ];

  // Dati per le fasi di produzione
  const productionProcess = [
    {
      id: 1,
      step: "1",
      title: t('processStep1Title'),
      description: t('processStep1Description'),
      icon: faVial
    },
    {
      id: 2,
      step: "2",
      title: t('processStep2Title'),
      description: t('processStep2Description'),
      icon: faCogs
    },
    {
      id: 3,
      step: "3",
      title: t('processStep3Title'),
      description: t('processStep3Description'),
      icon: faFlask
    }
  ];

  // Dati per le fasi di completamento
  const completionProcess = [
    {
      id: 4,
      step: "4",
      title: t('processStep4Title'),
      description: t('processStep4Description'),
      icon: faBox
    },
    {
      id: 5,
      step: "5",
      title: t('processStep5Title'),
      description: t('processStep5Description'),
      icon: faCogs
    },
    {
      id: 6,
      step: "6",
      title: t('processStep6Title'),
      description: t('processStep6Description'),
      icon: faTruck
    }
  ];

  return (
    <div style={styles.section}>
      <div style={styles.sectionPattern}></div>
      <Container style={styles.container}>
        <div>
          <h2 style={styles.sectionTitle}>
            {t('titoloProduzione')}
            <div style={styles.titleUnderline}></div>
          </h2>
          <p style={styles.description}>{t('descrizioneProduzione')}</p>
        </div>
        
        <Row className="mb-5 g-4">
          {stats.map(stat => (
            <Col key={stat.id} md={6} lg={3}>
              <div 
                style={{
                  ...styles.statBox,
                  ...(hoveredStat === stat.id ? styles.statBoxHovered : {})
                }}
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div 
                  style={{
                    ...styles.statIconContainer,
                    ...(hoveredStat === stat.id ? styles.statIconContainerHovered : {})
                  }}
                >
                  <FontAwesomeIcon icon={stat.icon} style={styles.statIcon} />
                </div>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statTitle}>{stat.title}</div>
                <div style={styles.statDescription}>{stat.description}</div>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="g-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div style={styles.processContainer}>
              <h3 style={styles.processTitle}>
                {t('ourProductionProcess')}
                <div style={styles.processTitleUnderline}></div>
              </h3>
              
              {productionProcess.map((process, index) => (
                <div key={process.id} style={{
                  ...styles.processStep,
                  ...(index === productionProcess.length - 1 ? styles.lastProcess : {})
                }}>
                  {index !== productionProcess.length - 1 && (
                    <div style={styles.processStepLine}></div>
                  )}
                  <div style={styles.processIconContainer}>
                    {process.step}
                  </div>
                  <div style={styles.processContent}>
                    <div style={styles.processStepTitle}>{process.title}</div>
                    <div style={styles.processStepDescription}>{process.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          <Col lg={6}>
            <div style={styles.processContainer}>
              <h3 style={styles.processTitle}>
                {t('completionPhases')}
                <div style={styles.processTitleUnderline}></div>
              </h3>
              
              {completionProcess.map((process, index) => (
                <div key={process.id} style={{
                  ...styles.processStep,
                  ...(index === completionProcess.length - 1 ? styles.lastProcess : {})
                }}>
                  {index !== completionProcess.length - 1 && (
                    <div style={styles.processStepLine}></div>
                  )}
                  <div style={styles.processIconContainer}>
                    {process.step}
                  </div>
                  <div style={styles.processContent}>
                    <div style={styles.processStepTitle}>{process.title}</div>
                    <div style={styles.processStepDescription}>{process.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductionSection;