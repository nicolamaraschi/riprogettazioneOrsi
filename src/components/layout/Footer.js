// src/components/layout/Footer.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faIdCard, faMapMarkerAlt, faClock, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  // Funzione per tornare all'inizio della pagina
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Stili inline
  const styles = {
    footer: {
      backgroundColor: 'rgba(28, 36, 54, 0.98)',
      color: '#e0e0e0',
      padding: '70px 0 40px',
      position: 'relative',
      overflow: 'hidden'
    },
    footerPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)',
      backgroundSize: '30px 30px',
      opacity: 0.2,
      zIndex: 1
    },
    container: {
      position: 'relative',
      zIndex: 2
    },
    wave: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '10px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      clipPath: 'polygon(0% 0%, 4% 60%, 8% 0%, 12% 60%, 16% 0%, 20% 60%, 24% 0%, 28% 60%, 32% 0%, 36% 60%, 40% 0%, 44% 60%, 48% 0%, 52% 60%, 56% 0%, 60% 60%, 64% 0%, 68% 60%, 72% 0%, 76% 60%, 80% 0%, 84% 60%, 88% 0%, 92% 60%, 96% 0%, 100% 60%, 100% 0%)'
    },
    footerContent: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: '40px'
    },
    leftSection: {
      flex: '1',
      marginRight: '30px',
      minWidth: '280px'
    },
    logo: {
      marginBottom: '20px',
      display: 'block'
    },
    logoImage: {
      height: '60px',
      width: 'auto'
    },
    companyDescription: {
      fontSize: '15px',
      lineHeight: '1.8',
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '25px'
    },
    contactInfoTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '15px',
      color: 'white',
      fontFamily: "'Poppins', sans-serif"
    },
    contactInfo: {
      marginBottom: '30px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '15px'
    },
    infoIcon: {
      width: '18px',
      marginRight: '15px',
      marginTop: '4px',
      color: '#c89b7b'
    },
    infoText: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: '1.6'
    },
    infoLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    infoLinkHover: {
      color: '#e2b77e',
      textDecoration: 'none'
    },
    column: {
      flex: '1',
      minWidth: '200px',
      marginBottom: '30px'
    },
    columnTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '20px',
      color: 'white',
      position: 'relative',
      paddingBottom: '10px',
      fontFamily: "'Poppins', sans-serif"
    },
    titleUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '40px',
      height: '2px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1px'
    },
    linksList: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    linkItem: {
      marginBottom: '12px'
    },
    menuLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      position: 'relative',
      paddingLeft: '15px'
    },
    menuLinkBefore: {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#c89b7b',
      transition: 'all 0.3s ease'
    },
    menuLinkHover: {
      color: '#e2b77e',
      paddingLeft: '20px'
    },
    menuLinkHoverBefore: {
      backgroundColor: '#e2b77e'
    },
    socialsColumn: {
      flex: '1',
      minWidth: '280px'
    },
    socialLinks: {
      display: 'flex',
      marginTop: '20px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'rgba(255, 255, 255, 0.7)',
      marginRight: '10px',
      transition: 'all 0.3s ease',
      fontSize: '16px'
    },
    socialLinkFacebook: {
      backgroundColor: 'rgba(59, 89, 152, 0.2)',
      color: 'rgba(255, 255, 255, 0.8)'
    },
    socialLinkFacebookHover: {
      backgroundColor: '#3b5998',
      color: 'white',
      transform: 'translateY(-3px)'
    },
    socialLinkTwitter: {
      backgroundColor: 'rgba(29, 161, 242, 0.2)',
      color: 'rgba(255, 255, 255, 0.8)'
    },
    socialLinkTwitterHover: {
      backgroundColor: '#1da1f2',
      color: 'white',
      transform: 'translateY(-3px)'
    },
    socialLinkInstagram: {
      backgroundColor: 'rgba(195, 42, 163, 0.2)',
      color: 'rgba(255, 255, 255, 0.8)'
    },
    socialLinkInstagramHover: {
      backgroundColor: '#c32aa3',
      color: 'white',
      transform: 'translateY(-3px)'
    },
    socialLinkLinkedin: {
      backgroundColor: 'rgba(0, 119, 181, 0.2)',
      color: 'rgba(255, 255, 255, 0.8)'
    },
    socialLinkLinkedinHover: {
      backgroundColor: '#0077b5',
      color: 'white',
      transform: 'translateY(-3px)'
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    copyright: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.5)',
      marginBottom: '15px'
    },
    companyName: {
      color: '#c89b7b',
      fontWeight: '500'
    },
    bottomLinks: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    bottomLink: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '14px',
      textDecoration: 'none',
      marginLeft: '20px',
      transition: 'color 0.3s ease',
      marginBottom: '15px'
    },
    bottomLinkHover: {
      color: '#e2b77e'
    },
    scrollTopButton: {
      position: 'absolute',
      right: '30px',
      bottom: '30px',
      width: '45px',
      height: '45px',
      backgroundColor: 'rgba(200, 155, 123, 0.8)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: 10,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    scrollTopButtonHover: {
      backgroundColor: '#e2b77e',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
    }
  };

  // Stato per il pulsante "torna su"
  const [isScrollButtonHovered, setIsScrollButtonHovered] = useState(false);

  // Link per la navigazione rapida
  const quickLinks = [
    { text: 'Home', path: '/' },
    { text: 'Chi Siamo', path: '/#section1' },
    { text: 'Ricerca', path: '/#section2' },
    { text: 'Prodotti', path: '/products' },
    { text: 'Contatti', path: '/contact' }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.footerPattern}></div>
      <div style={styles.wave}></div>
      
      <Container style={styles.container}>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div style={styles.leftSection}>
              <Link to="/" style={styles.logo}>
                <img src="/static/media/logov2.fb929dca7cc5c6490dd3.png" alt="Orsi Logo" style={styles.logoImage} />
              </Link>
              
              <p style={styles.companyDescription}>
                Dal 1907, ORSI è sinonimo di qualità e innovazione nel settore della detergenza, unendo tradizione e tecnologia avanzata per offrire prodotti eccellenti e sostenibili.
              </p>
              
              <div style={styles.contactInfo}>
                <h3 style={styles.contactInfoTitle}>Contatti Diretti</h3>
                
                <div style={styles.infoItem}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.infoIcon} />
                  <div style={styles.infoText}>
                    Via C. Bassi 22, 40015 Galliera (BO), Italia
                  </div>
                </div>
                
                <div style={styles.infoItem}>
                  <FontAwesomeIcon icon={faPhone} style={styles.infoIcon} />
                  <div style={styles.infoText}>
                    <a 
                      href="tel:+390516671000" 
                      style={{
                        ...styles.infoLink,
                        ...(hoveredLink === 'phone' ? styles.infoLinkHover : {})
                      }}
                      onMouseEnter={() => setHoveredLink('phone')}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      +39 051 6671000
                    </a>
                  </div>
                </div>
                
                <div style={styles.infoItem}>
                  <FontAwesomeIcon icon={faEnvelope} style={styles.infoIcon} />
                  <div style={styles.infoText}>
                    <a 
                      href="mailto:info@orsidetersivi.com" 
                      style={{
                        ...styles.infoLink,
                        ...(hoveredLink === 'email' ? styles.infoLinkHover : {})
                      }}
                      onMouseEnter={() => setHoveredLink('email')}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      info@orsidetersivi.com
                    </a>
                  </div>
                </div>
                
                <div style={styles.infoItem}>
                  <FontAwesomeIcon icon={faClock} style={styles.infoIcon} />
                  <div style={styles.infoText}>
                    Lun-Ven: 9:00 - 18:00<br />
                    Sab-Dom: Chiuso
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>
                Navigazione Rapida
                <div style={styles.titleUnderline}></div>
              </h3>
              
              <ul style={styles.linksList}>
                {quickLinks.map((link, index) => (
                  <li key={index} style={styles.linkItem}>
                    <Link 
                      to={link.path}
                      style={{
                        ...styles.menuLink,
                        ...(hoveredLink === `nav-${index}` ? styles.menuLinkHover : {})
                      }}
                      onMouseEnter={() => setHoveredLink(`nav-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span style={{
                        ...styles.menuLinkBefore,
                        ...(hoveredLink === `nav-${index}` ? styles.menuLinkHoverBefore : {})
                      }}></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>
                Linee di Prodotti
                <div style={styles.titleUnderline}></div>
              </h3>
              
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <Link 
                    to="/products/professional/bit"
                    style={{
                      ...styles.menuLink,
                      ...(hoveredLink === 'bit' ? styles.menuLinkHover : {})
                    }}
                    onMouseEnter={() => setHoveredLink('bit')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={{
                      ...styles.menuLinkBefore,
                      ...(hoveredLink === 'bit' ? styles.menuLinkHoverBefore : {})
                    }}></span>
                    BIT
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    to="/products/professional/dolomitenweiss"
                    style={{
                      ...styles.menuLink,
                      ...(hoveredLink === 'dolomiten' ? styles.menuLinkHover : {})
                    }}
                    onMouseEnter={() => setHoveredLink('dolomiten')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={{
                      ...styles.menuLinkBefore,
                      ...(hoveredLink === 'dolomiten' ? styles.menuLinkHoverBefore : {})
                    }}></span>
                    Dolomiten Weiss
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    to="/products/domestic/suora"
                    style={{
                      ...styles.menuLink,
                      ...(hoveredLink === 'suora' ? styles.menuLinkHover : {})
                    }}
                    onMouseEnter={() => setHoveredLink('suora')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={{
                      ...styles.menuLinkBefore,
                      ...(hoveredLink === 'suora' ? styles.menuLinkHoverBefore : {})
                    }}></span>
                    La Suora
                  </Link>
                </li>
                <li style={styles.linkItem}>
                  <Link 
                    to="/products/domestic/orsetto"
                    style={{
                      ...styles.menuLink,
                      ...(hoveredLink === 'orsetto' ? styles.menuLinkHover : {})
                    }}
                    onMouseEnter={() => setHoveredLink('orsetto')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={{
                      ...styles.menuLinkBefore,
                      ...(hoveredLink === 'orsetto' ? styles.menuLinkHoverBefore : {})
                    }}></span>
                    Orsetto
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6}>
            <div style={styles.socialsColumn}>
              <h3 style={styles.columnTitle}>
                Dati Aziendali
                <div style={styles.titleUnderline}></div>
              </h3>
              
              <div style={styles.infoItem}>
                <FontAwesomeIcon icon={faIdCard} style={styles.infoIcon} />
                <div style={styles.infoText}>
                  P.IVA: IT 00829301209<br />
                  REA: BO 367676<br />
                  Cod. Fiscale: 01995970363<br />
                  Registro Imprese Bologna n° 226650/1996 BO
                </div>
              </div>
              
              <h3 style={styles.contactInfoTitle}>Seguici sui Social</h3>
              
              <div style={styles.socialLinks}>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    ...styles.socialLink,
                    ...styles.socialLinkFacebook,
                    ...(hoveredSocial === 'facebook' ? styles.socialLinkFacebookHover : {})
                  }}
                  onMouseEnter={() => setHoveredSocial('facebook')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    ...styles.socialLink,
                    ...styles.socialLinkTwitter,
                    ...(hoveredSocial === 'twitter' ? styles.socialLinkTwitterHover : {})
                  }}
                  onMouseEnter={() => setHoveredSocial('twitter')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    ...styles.socialLink,
                    ...styles.socialLinkInstagram,
                    ...(hoveredSocial === 'instagram' ? styles.socialLinkInstagramHover : {})
                  }}
                  onMouseEnter={() => setHoveredSocial('instagram')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    ...styles.socialLink,
                    ...styles.socialLinkLinkedin,
                    ...(hoveredSocial === 'linkedin' ? styles.socialLinkLinkedinHover : {})
                  }}
                  onMouseEnter={() => setHoveredSocial('linkedin')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        
        <div style={styles.footerBottom}>
          <div style={styles.copyright}>
            © {new Date().getFullYear()} <span style={styles.companyName}>ORSI S.R.L.</span>. Tutti i diritti riservati.
          </div>
          
          <div style={styles.bottomLinks}>
            <Link 
              to="/privacy-policy" 
              style={{
                ...styles.bottomLink,
                ...(hoveredLink === 'privacy' ? styles.bottomLinkHover : {})
              }}
              onMouseEnter={() => setHoveredLink('privacy')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Privacy Policy
            </Link>
            
            <Link 
              to="/terms" 
              style={{
                ...styles.bottomLink,
                ...(hoveredLink === 'terms' ? styles.bottomLinkHover : {})
              }}
              onMouseEnter={() => setHoveredLink('terms')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Termini e Condizioni
            </Link>
            
            <Link 
              to="/cookie-policy" 
              style={{
                ...styles.bottomLink,
                ...(hoveredLink === 'cookie' ? styles.bottomLinkHover : {})
              }}
              onMouseEnter={() => setHoveredLink('cookie')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
      
      <button 
        style={{
          ...styles.scrollTopButton,
          ...(isScrollButtonHovered ? styles.scrollTopButtonHover : {})
        }}
        onClick={scrollToTop}
        onMouseEnter={() => setIsScrollButtonHovered(true)}
        onMouseLeave={() => setIsScrollButtonHovered(false)}
        aria-label="Torna all'inizio"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </footer>
  );
};

export default Footer;