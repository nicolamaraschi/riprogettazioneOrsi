// src/components/layout/Footer.js
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <div className="footer-col">
            <h4><FontAwesomeIcon icon={faPhone} /> Telefono</h4>
            <ul>
              <li><a href="tel:+390516671000">+39 051 6671000</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4><FontAwesomeIcon icon={faEnvelope} /> Email</h4>
            <ul>
              <li><a href="mailto:info@orsidetersivi.com">info@orsidetersivi.com</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4><FontAwesomeIcon icon={faEnvelope} /> PEC</h4>
            <ul>
              <li><a href="mailto:orsidetersivi@pec.it">orsidetersivi@pec.it</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4><FontAwesomeIcon icon={faIdCard} /> C.F.</h4>
            <ul>
              <li><a href="#">Registro Imprese Bologna n° 226650/1996 BO - P.IVA IT 00829301209 - REA BO 367676 - Cod Fiscale 01995970363</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>
              <FontAwesomeIcon icon={faFacebookF} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faLinkedinIn} /> Social
            </h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;