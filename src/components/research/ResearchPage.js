// src/components/research/ResearchPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import ResearchSection from '../home/ResearchSection';

const ResearchPage = () => {
  return (
    <Container fluid className="p-0">
      <ResearchSection />
    </Container>
  );
};

export default ResearchPage;