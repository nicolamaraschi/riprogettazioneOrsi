import React from 'react';
import { Container } from 'react-bootstrap';
import CertificationsCarousel from '../home/CertificationsCarousel';

const CertificationsPage = () => {
  return (
    <Container fluid className="p-0">
      <CertificationsCarousel />
    </Container>
  );
};

export default CertificationsPage;
