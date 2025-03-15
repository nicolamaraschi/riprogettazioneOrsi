// src/components/home/ResearchSection.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faLightbulb, faAtom, faVial, faLeaf } from '@fortawesome/free-solid-svg-icons';

// Importazione delle immagini
import tech1Img from '../../assets/images/t1v2.png';
import tech2Img from '../../assets/images/t2v2.png';
import tech3Img from '../../assets/images/t3.png';
import tech4Img from '../../assets/images/t4.png';
import tech5Img from '../../assets/images/t5.png';

const ResearchSection = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null);

  // Stili inline
  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(135deg, rgba(240, 240, 240, 0.5) 25%, transparent 25%, transparent 50%, rgba(240, 240, 240, 0.5) 50%, rgba(240, 240, 240, 0.5) 75%, transparent 75%, transparent)',
      backgroundSize: '60px 60px',
      opacity: 0.3,
      zIndex: 1
    },
    container: {
      position: 'relative',
      zIndex: 2
    },
    mainTitle: {
      fontSize: '40px',
      fontWeight: '700',
      marginBottom: '25px',
      textAlign: 'center',
      color: '#2c3e50',
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
    description: {
      fontSize: '18px',
      lineHeight: '1.8',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 60px',
      color: '#596275'
    },
    subtitle: {
      fontSize: '28px',
      fontWeight: '600',
      marginBottom: '40px',
      textAlign: 'center',
      color: '#2c3e50',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      display: 'inline-block'
    },
    subtitleContainer: {
      textAlign: 'center',
      marginBottom: '50px',
      position: 'relative'
    },
    subtitleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      margin: '0 auto',
      maxWidth: '1200px'
    },
    card: {
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      position: 'relative'
    },
    cardHovered: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
    },
    cardHeader: {
      padding: '25px 30px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      backgroundColor: 'rgba(28, 36, 54, 0.97)',
      color: 'white'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '0',
      color: '#e2b77e',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      alignItems: 'center'
    },
    cardIcon: {
      marginRight: '12px',
      color: '#e2b77e'
    },
    cardBody: {
      padding: '25px 30px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    cardText: {
      fontSize: '15px',
      lineHeight: '1.8',
      color: '#596275',
      marginBottom: '25px'
    },
    cardListItem: {
      fontSize: '15px',
      color: '#596275',
      marginBottom: '10px',
      paddingLeft: '25px',
      position: 'relative'
    },
    cardListBullet: {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '8px',
      width: '6px',
      height: '6px',
      backgroundColor: '#c89b7b',
      borderRadius: '50%'
    },
    cardImageContainer: {
      marginTop: 'auto',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(248, 249, 250, 0.4)',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)'
    },
    cardImage: {
      maxWidth: '180px',
      maxHeight: '180px',
      objectFit: 'contain',
      transition: 'transform 0.5s ease'
    },
    cardImageHovered: {
      transform: 'scale(1.05)'
    },
    badge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      padding: '6px 12px',
      backgroundColor: 'rgba(200, 155, 123, 0.15)',
      color: '#c89b7b',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500'
    }
  };

  const technologies = [
    {
      id: 1,
      title: "Polveri e Granuli Difficili",
      icon: faAtom,
      image: tech1Img,
      applications: [
        "Per purificazione delle acque",
        "Per edilizia",
        "Per detergenza auto",
        "Per detergenza pellami"
      ],
      badge: "Alta efficienza"
    },
    {
      id: 2,
      title: "Cristalli super profumati idrosolubili",
      icon: faVial,
      image: tech2Img,
      applications: [
        "Per lavatrice",
        "Per asciugatrice",
        "Per aspirapolvere",
        "Per deodorazione cassetti armadi"
      ],
      badge: "Lunga durata"
    },
    {
      id: 3,
      title: "Polvere Monodose idrosolubile",
      icon: faFlask,
      image: tech3Img,
      applications: [
        "Per schiumogeno WC con probiotici",
        "Per detergenti",
        "Per pavimenti",
        "Per ammorbidente superprofumato"
      ],
      badge: "Innovativo"
    },
    {
      id: 4,
      title: "Solidi Monodose Detergenza e Cosmesi",
      icon: faLightbulb,
      image: tech4Img,
      applications: [
        "Foglietti lavatrice",
        "Pastiglie ammorbidente superprofumato",
        "Pastiglie lavastoviglie"
      ],
      badge: "Zero sprechi"
    },
    {
      id: 5,
      title: "IDRO PODS monodose in polvere",
      icon: faLeaf,
      image: tech5Img,
      applications: [
        "Lavatrice",
        "Lavaggio piatti a mano",
        "Pavimenti"
      ],
      badge: "Eco-friendly"
    }
  ];

  // Gestione dell'effetto di comparsa progressiva
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("research-section");
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        // Rendi visibili tutti i card dopo che la sezione è visibile
        const cards = document.querySelectorAll("[data-tech-card]");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 150 * index); // Ritardo progressivo
        });
        
        window.removeEventListener("scroll", handleScroll);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Esegui la funzione una volta all'inizio per verificare se la sezione è già visibile
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="research-section" style={styles.section}>
      <div style={styles.sectionBackground}></div>
      <Container style={styles.container}>
        <h2 style={styles.mainTitle}>
          RICERCA & INNOVAZIONE TECNOLOGICA
          <div style={styles.titleDecoration}></div>
        </h2>
        
        <p style={styles.description}>
          Il nostro team dedicato di esperti in Ricerca e Sviluppo è quotidianamente impegnato nella progettazione e industrializzazione di prodotti innovativi ad elevato contenuto tecnologico e di processi produttivi sempre più sostenibili per l'ambiente e le persone. Mettiamo l'accento sull'interdisciplinarietà, collaborando con partner esterni e università per garantire che le nostre soluzioni siano allineate alle più recenti scoperte scientifiche.
        </p>
        
        <div style={styles.subtitleContainer}>
          <h3 style={styles.subtitle}>
            LE NOSTRE TECNOLOGIE
            <div style={styles.subtitleDecoration}></div>
          </h3>
        </div>
        
        <Row className="g-4">
          {technologies.map((tech, index) => (
            <Col key={tech.id} lg={6} xl={4}>
              <div 
                data-tech-card
                style={{
                  ...styles.card,
                  ...(activeCard === tech.id ? styles.cardHovered : {}),
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease'
                }}
                onMouseEnter={() => setActiveCard(tech.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {tech.badge && (
                  <div style={styles.badge}>{tech.badge}</div>
                )}
                <div style={styles.cardHeader}>
                  <h4 style={styles.cardTitle}>
                    <FontAwesomeIcon icon={tech.icon} style={styles.cardIcon} />
                    {tech.title}
                  </h4>
                </div>
                <div style={styles.cardBody}>
                  <div>
                    {tech.applications.map((app, i) => (
                      <div key={i} style={styles.cardListItem}>
                        <div style={styles.cardListBullet}></div>
                        {app}
                      </div>
                    ))}
                  </div>
                  <div style={styles.cardImageContainer}>
                    <img 
                      src={tech.image} 
                      alt={tech.title} 
                      style={{
                        ...styles.cardImage,
                        ...(activeCard === tech.id ? styles.cardImageHovered : {})
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ResearchSection;