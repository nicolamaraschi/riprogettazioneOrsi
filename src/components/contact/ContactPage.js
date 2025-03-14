// src/components/contact/ContactPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBuilding, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'leaflet/dist/leaflet.css';

const ContactPage = () => {
  const { t } = useTranslation();
  const position = [44.498973, 11.551744]; // Coordinate di Orsi S.R.L.

  // Gestione invio form di contatto
  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui verrà implementata la logica di invio del form quando sarà pronto il backend
    console.log('Form inviato');
  };

  return (
    <Container>
      <div className="content-container">
        <Row>
          <Col md={6} className="map-container">
            <div id="map" className="map" style={{ height: '700px' }}>
              <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    Via C. Bassi 22, 40015 Galliera (BO)
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </Col>
          <Col md={6} className="contact-details">
            <h2><FontAwesomeIcon icon={faAddressCard} /> {t('contatti')}</h2>
            <p><FontAwesomeIcon icon={faBuilding} /> Orsi S.R.L.</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {t('indirizzo')}</p>
            <p><FontAwesomeIcon icon={faPhone} /> {t('telefono')}</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@orsidetersivi.com</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> PEC: orsidetersivi@pec.it</p>
            
            <div className="contact-form">
              <h2><FontAwesomeIcon icon={faEnvelope} /> {t('mail')}</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nome">
                  <Form.Label>{t('nome')}</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefono">
                  <Form.Label>{t('telefono2')}</Form.Label>
                  <Form.Control type="tel" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>{t('mail2')}</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="messaggio">
                  <Form.Label>{t('messaggio2')}</Form.Label>
                  <Form.Control as="textarea" rows={4} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {t('invia')}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactPage;