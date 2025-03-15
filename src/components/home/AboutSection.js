// src/components/home/AboutSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// Importazione corretta delle immagini
import responsabileImg from '../../assets/images/responsabile.png';
import menu2Img from '../../assets/images/menu2.png';
import worldEnvironmentImg from '../../assets/images/world-environment.png';
import prendersiCuraImg from '../../assets/images/prendersi cura.webp';

const AboutSection = () => {
  const { t } = useTranslation();

  // Stili inline
  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: 'rgba(28, 36, 54, 0.97)',
      backgroundImage: 'linear-gradient(to bottom, rgba(28, 36, 54, 0.97), rgba(28, 36, 54, 0.9))',
      color: 'white',
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
    mainTitle: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '30px',
      textAlign: 'center',
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '15px'
    },
    titleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    subtitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginTop: '40px',
      marginBottom: '30px',
      textAlign: 'center',
      color: 'white',
      fontFamily: "'Poppins', sans-serif"
    },
    description: {
      fontSize: '18px',
      lineHeight: '1.8',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 50px',
      color: 'rgba(255, 255, 255, 0.85)'
    },
    valueCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      height: '100%',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer'
    },
    valueCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
    },
    imageContainer: {
      padding: '30px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.03)'
    },
    valueImage: {
      width: '300px',
      height: '300px',
      objectFit: 'contain'
    },
    contentContainer: {
      padding: '25px 20px 30px'
    },
    valueTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#e2b77e',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif"
    },
    valueDescription: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.75)',
      textAlign: 'center',
      marginBottom: 0
    },
    year: {
      color: '#e2b77e',
      fontWeight: '700'
    },
    highlightText: {
      color: '#e2b77e',
      fontWeight: '500'
    }
  };

  // Stato per l'effetto hover
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const valuesData = [
    {
      id: 1,
      title: "Innovazione Responsabile",
      description: "L'innovazione responsabile è la chiave per un progresso sostenibile e duraturo.",
      image: responsabileImg
    },
    {
      id: 2,
      title: "Approvvigionamento Etico",
      description: "Scegliere un approvvigionamento etico è una scelta responsabile per un futuro sostenibile.",
      image: menu2Img
    },
    {
      id: 3,
      title: "Proteggere il nostro ambiente",
      description: "Proteggere l'ambiente è proteggere il nostro futuro.",
      image: worldEnvironmentImg
    },
    {
      id: 4,
      title: "Prendersi cura delle persone",
      description: "Cura dedicata al benessere di tutti.",
      image: prendersiCuraImg
    }
  ];

  return (
    <div style={styles.section}>
      <div style={styles.sectionPattern}></div>
      <Container style={styles.container}>
        <h2 style={styles.mainTitle}>
          CHI SIAMO
          <div style={styles.titleDecoration}></div>
        </h2>
        
        <p style={styles.description}>
          Nata a Bologna nel <span style={styles.year}>1907</span>, <span style={styles.highlightText}>ORSI</span> è una delle poche realtà italiane di rilievo nel mercato della detergenza in polvere domestica ed istituzionale. Competiamo per esperienza, tecnologia e qualità con le aziende leader del settore. Oggi, <span style={styles.highlightText}>ORSI</span> investe in Ricerca e Sviluppo per innovare nel campo della detergenza e della cosmesi.
        </p>
        
        <h3 style={styles.subtitle}>Con l'impegno che</h3>
        
        <Row className="g-4">
          {valuesData.map((value) => (
            <Col key={value.id} md={6} lg={3}>
              <div 
                style={{
                  ...styles.valueCard,
                  ...(hoveredCard === value.id ? styles.valueCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard(value.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.imageContainer}>
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    style={styles.valueImage}
                  />
                </div>
                <div style={styles.contentContainer}>
                  <h3 style={styles.valueTitle}>{value.title}</h3>
                  <p style={styles.valueDescription}>{value.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;