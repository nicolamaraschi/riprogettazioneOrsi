// src/components/contact/ContactPage.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faBuilding, 
  faClock, 
  faPaperPlane
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

  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <h1 className="contact-page-title">{t('contatti')}</h1>
        <p className="contact-page-subtitle">
          Siamo qui per rispondere a qualsiasi domanda sui nostri prodotti e servizi.
          Non esitate a contattarci per ulteriori informazioni.
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-information">
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h2 className="contact-card-title">{t('informazioniAziendali')}</h2>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Azienda:</span>
              <span className="contact-detail-value">Orsi S.R.L.</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">P.IVA:</span>
              <span className="contact-detail-value">IT 00829301209</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">REA:</span>
              <span className="contact-detail-value">BO 367676</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">C.F.:</span>
              <span className="contact-detail-value">01995970363</span>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h2 className="contact-card-title">{t('sedeLegale')}</h2>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Indirizzo:</span>
              <span className="contact-detail-value">Via C. Bassi 22, 40015 Galliera (BO), Italia</span>
            </div>
          </div>
          
          <div className="map-container">
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
          
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h2 className="contact-card-title">{t('contattiDiretti')}</h2>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Telefono:</span>
              <span className="contact-detail-value">
                <a href="tel:+390516671000">+39 051 6671000</a>
              </span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Email:</span>
              <span className="contact-detail-value">
                <a href="mailto:info@orsidetersivi.com">info@orsidetersivi.com</a>
              </span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">PEC:</span>
              <span className="contact-detail-value">
                <a href="mailto:orsidetersivi@pec.it">orsidetersivi@pec.it</a>
              </span>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h2 className="contact-card-title">{t('orariUfficio')}</h2>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Lun-Ven:</span>
              <span className="contact-detail-value">9:00 - 18:00</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Sabato:</span>
              <span className="contact-detail-value">Chiuso</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Domenica:</span>
              <span className="contact-detail-value">Chiuso</span>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <div className="contact-form">
            <h2 className="form-title">{t('scriviMessaggio')}</h2>
            
            {formStatus === 'success' && (
              <div className="alert alert-success mb-4">
                Grazie per averci contattato! Il tuo messaggio è stato inviato con successo.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t('nome')}</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('email')}</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">{t('telefono')}</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">{t('oggetto')}</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('messaggio')}</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <FontAwesomeIcon icon={faPaperPlane} />
                {t('invia')}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="social-links-section">
        <h2 className="social-links-title">{t('seguiSocial')}</h2>
        <ul className="social-links-list">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;