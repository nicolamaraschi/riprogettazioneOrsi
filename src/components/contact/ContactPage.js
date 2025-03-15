// src/components/contact/ContactPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faBuilding, 
  faClock, 
  faPaperPlane,
  faEnvelope,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import 'leaflet/dist/leaflet.css';

const ContactPage = () => {
  const { t } = useTranslation();
  const position = [44.498973, 11.551744]; // Coordinate di Orsi S.R.L.
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Stili inline
  const styles = {
    section: {
      padding: '90px 0 60px',
      backgroundColor: '#f8f9fa',
      position: 'relative'
    },
    pageHeader: {
      textAlign: 'center',
      marginBottom: '60px',
      position: 'relative',
      padding: '0 20px'
    },
    pageTitle: {
      fontSize: '40px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
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
    pageSubtitle: {
      fontSize: '18px',
      color: '#596275',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.8'
    },
    contactGrid: {
      marginBottom: '60px'
    },
    contactCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      padding: '30px',
      height: '100%',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      marginBottom: '25px'
    },
    contactCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    cardIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(200, 155, 123, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      color: '#c89b7b',
      fontSize: '20px',
      flexShrink: 0
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#2c3e50',
      margin: '0',
      fontFamily: "'Poppins', sans-serif"
    },
    contactDetail: {
      display: 'flex',
      marginBottom: '12px',
      fontSize: '15px',
      lineHeight: '1.5'
    },
    detailLabel: {
      fontWeight: '600',
      color: '#2c3e50',
      width: '100px',
      flexShrink: 0
    },
    detailValue: {
      color: '#596275',
      flex: '1'
    },
    contactLink: {
      color: '#596275',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    contactLinkHover: {
      color: '#c89b7b',
      textDecoration: 'none'
    },
    mapContainer: {
      height: '300px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      marginBottom: '25px'
    },
    formContainer: {
      backgroundColor: 'rgba(28, 36, 54, 0.97)',
      borderRadius: '12px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
      padding: '40px',
      position: 'relative',
      overflow: 'hidden'
    },
    formPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 2px)',
      backgroundSize: '30px 30px',
      zIndex: 0,
      opacity: 0.3
    },
    formContent: {
      position: 'relative',
      zIndex: 1
    },
    formTitle: {
      fontSize: '28px',
      fontWeight: '600',
      color: 'white',
      marginBottom: '30px',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '15px'
    },
    formTitleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    formGroup: {
      marginBottom: '25px'
    },
    formLabel: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '15px'
    },
    formControl: {
      width: '100%',
      padding: '12px 15px',
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '15px',
      transition: 'all 0.3s ease'
    },
    formControlFocus: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(200, 155, 123, 0.5)',
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(200, 155, 123, 0.15)'
    },
    submitButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '14px 30px',
      backgroundColor: '#c89b7b',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '600',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%',
      marginTop: '10px'
    },
    submitButtonHover: {
      backgroundColor: '#e2b77e',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(200, 155, 123, 0.4)'
    },
    buttonIcon: {
      marginRight: '10px'
    },
    socialSection: {
      textAlign: 'center',
      padding: '40px 0',
      backgroundColor: '#fff',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)'
    },
    socialTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '25px',
      fontFamily: "'Poppins', sans-serif"
    },
    socialList: {
      display: 'flex',
      justifyContent: 'center',
      padding: 0,
      margin: 0,
      listStyle: 'none'
    },
    socialItem: {
      margin: '0 10px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(28, 36, 54, 0.95)',
      color: '#fff',
      fontSize: '20px',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    },
    socialLinkFacebook: {
      backgroundColor: 'rgba(59, 89, 152, 0.1)',
      color: '#3b5998'
    },
    socialLinkFacebookHover: {
      backgroundColor: '#3b5998',
      color: '#fff'
    },
    socialLinkTwitter: {
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
      color: '#1da1f2'
    },
    socialLinkTwitterHover: {
      backgroundColor: '#1da1f2',
      color: '#fff'
    },
    socialLinkInstagram: {
      backgroundColor: 'rgba(195, 42, 163, 0.1)',
      color: '#c32aa3'
    },
    socialLinkInstagramHover: {
      backgroundColor: '#c32aa3',
      color: '#fff'
    },
    socialLinkLinkedin: {
      backgroundColor: 'rgba(0, 119, 181, 0.1)',
      color: '#0077b5'
    },
    socialLinkLinkedinHover: {
      backgroundColor: '#0077b5',
      color: '#fff'
    },
    successAlert: {
      backgroundColor: 'rgba(46, 204, 113, 0.15)',
      color: '#2ecc71',
      border: '1px solid rgba(46, 204, 113, 0.3)',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '25px',
      textAlign: 'center',
      fontWeight: '500'
    }
  };

  // Stati per gli effetti hover
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Gestione invio form di contatto
  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui verrà implementata la logica di invio del form quando sarà pronto il backend
    console.log('Form inviato:', formData);
    
    // Simula invio con successo (in produzione, questo sarà sostituito da una vera chiamata API)
    setFormStatus('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset status dopo 5 secondi
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const contactInfo = [
    {
      id: 'company',
      icon: faBuilding,
      title: 'Informazioni Aziendali',
      details: [
        { label: 'Azienda', value: 'Orsi S.R.L.' },
        { label: 'P.IVA', value: 'IT 00829301209' },
        { label: 'REA', value: 'BO 367676' },
        { label: 'C.F.', value: '01995970363' }
      ]
    },
    {
      id: 'address',
      icon: faMapMarkerAlt,
      title: 'Sede Legale',
      details: [
        { label: 'Indirizzo', value: 'Via C. Bassi 22, 40015 Galliera (BO), Italia' }
      ]
    },
    {
      id: 'contact',
      icon: faPhone,
      title: 'Contatti Diretti',
      details: [
        { 
          label: 'Telefono', 
          value: '+39 051 6671000', 
          link: 'tel:+390516671000' 
        },
        { 
          label: 'Email', 
          value: 'info@orsidetersivi.com', 
          link: 'mailto:info@orsidetersivi.com' 
        },
        { 
          label: 'PEC', 
          value: 'orsidetersivi@pec.it', 
          link: 'mailto:orsidetersivi@pec.it' 
        }
      ]
    },
    {
      id: 'hours',
      icon: faClock,
      title: 'Orari Ufficio',
      details: [
        { label: 'Lun-Ven', value: '9:00 - 18:00' },
        { label: 'Sabato', value: 'Chiuso' },
        { label: 'Domenica', value: 'Chiuso' }
      ]
    }
  ];

  const socialLinks = [
    { id: 'facebook', icon: faFacebookF, url: 'https://facebook.com' },
    { id: 'twitter', icon: faTwitter, url: 'https://twitter.com' },
    { id: 'instagram', icon: faInstagram, url: 'https://instagram.com' },
    { id: 'linkedin', icon: faLinkedinIn, url: 'https://linkedin.com' }
  ];

  return (
    <div style={styles.section}>
      <Container>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>
            {t('contatti')}
            <div style={styles.titleDecoration}></div>
          </h1>
          <p style={styles.pageSubtitle}>
            Siamo qui per rispondere a qualsiasi domanda sui nostri prodotti e servizi.
            Non esitate a contattarci per ulteriori informazioni.
          </p>
        </div>
        
        <Row style={styles.contactGrid}>
          <Col lg={8}>
            <Row>
              {contactInfo.map(info => (
                <Col key={info.id} md={6} className="mb-4">
                  <div 
                    style={{
                      ...styles.contactCard,
                      ...(hoveredCard === info.id ? styles.contactCardHover : {})
                    }}
                    onMouseEnter={() => setHoveredCard(info.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div style={styles.cardHeader}>
                      <div style={styles.cardIcon}>
                        <FontAwesomeIcon icon={info.icon} />
                      </div>
                      <h2 style={styles.cardTitle}>{info.title}</h2>
                    </div>
                    
                    {info.details.map((detail, index) => (
                      <div key={index} style={styles.contactDetail}>
                        <span style={styles.detailLabel}>{detail.label}:</span>
                        <span style={styles.detailValue}>
                          {detail.link ? (
                            <a 
                              href={detail.link} 
                              style={{
                                ...styles.contactLink,
                                ...(hoveredLink === `${info.id}-${index}` ? styles.contactLinkHover : {})
                              }}
                              onMouseEnter={() => setHoveredLink(`${info.id}-${index}`)}
                              onMouseLeave={() => setHoveredLink(null)}
                            >
                              {detail.value}
                            </a>
                          ) : (
                            detail.value
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
            
            <div style={styles.mapContainer}>
              <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    <strong>Orsi S.R.L.</strong><br />
                    Via C. Bassi 22<br />
                    40015 Galliera (BO)<br />
                    Italia
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </Col>
          
          <Col lg={4}>
            <div style={styles.formContainer}>
              <div style={styles.formPattern}></div>
              <div style={styles.formContent}>
                <h2 style={styles.formTitle}>
                  {t('scriviMessaggio')}
                  <div style={styles.formTitleDecoration}></div>
                </h2>
                
                {formStatus === 'success' && (
                  <div style={styles.successAlert}>
                    Grazie per averci contattato! Il tuo messaggio è stato inviato con successo.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.formLabel}>{t('nome')}</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        ...styles.formControl,
                        ...(focusedInput === 'name' ? styles.formControlFocus : {})
                      }}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.formLabel}>{t('email')}</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        ...styles.formControl,
                        ...(focusedInput === 'email' ? styles.formControlFocus : {})
                      }}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label htmlFor="phone" style={styles.formLabel}>{t('telefono')}</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        ...styles.formControl,
                        ...(focusedInput === 'phone' ? styles.formControlFocus : {})
                      }}
                      onFocus={() => setFocusedInput('phone')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label htmlFor="subject" style={styles.formLabel}>{t('oggetto')}</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        ...styles.formControl,
                        ...(focusedInput === 'subject' ? styles.formControlFocus : {})
                      }}
                      onFocus={() => setFocusedInput('subject')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.formLabel}>{t('messaggio')}</label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        ...styles.formControl,
                        ...(focusedInput === 'message' ? styles.formControlFocus : {})
                      }}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    style={{
                      ...styles.submitButton,
                      ...(buttonHovered ? styles.submitButtonHover : {})
                    }}
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} style={styles.buttonIcon} />
                    {t('invia')}
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div style={styles.socialSection}>
        <Container>
          <h2 style={styles.socialTitle}>{t('seguiSocial')}</h2>
          <ul style={styles.socialList}>
            {socialLinks.map(social => (
              <li key={social.id} style={styles.socialItem}>
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    ...styles.socialLink,
                    ...styles[`socialLink${social.id.charAt(0).toUpperCase() + social.id.slice(1)}`],
                    ...(hoveredSocial === social.id ? styles[`socialLink${social.id.charAt(0).toUpperCase() + social.id.slice(1)}Hover`] : {})
                  }}
                  onMouseEnter={() => setHoveredSocial(social.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;