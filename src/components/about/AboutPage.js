// src/components/about/AboutPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import AboutSection from '../home/AboutSection';

const AboutPage = () => {
  return (
    <Container fluid className="p-0">
      <AboutSection />
    </Container>
  );
};

export default AboutPage;