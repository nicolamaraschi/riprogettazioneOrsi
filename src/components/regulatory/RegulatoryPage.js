// src/components/regulatory/RegulatoryPage.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const RegulatoryPage = () => {
  const { t } = useTranslation();
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  // This would be replaced with API calls once the backend is implemented
  const mockProducts = [
    { code: '001', techSheet: '/scheda_tecnica/001_ST.pdf', safetySheet: '/scheda_sicurezza/001_SDS.pdf' },
    { code: '002', techSheet: '/scheda_tecnica/002_ST.pdf', safetySheet: '/scheda_sicurezza/002_SDS.pdf' },
    { code: '003', techSheet: '/scheda_tecnica/003_ST.pdf', safetySheet: '/scheda_sicurezza/003_SDS.pdf' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const product = mockProducts.find(p => p.code === searchInput);
    
    if (product) {
      setSearchResult(product);
      setShowResult(true);
      setError('');
    } else {
      setShowResult(false);
      setError('Codice prodotto non trovato');
    }
  };

  return (
    <Container className="py-5">
      <div id="searchContainer" className="text-center">
        <h1 className="title">{t('ricercaProdotti')}</h1>
        <Form onSubmit={handleSearch} className="search-input">
          <Form.Control
            type="text"
            placeholder={t('inserisciProdotto')}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            required
          />
          <Button type="submit">{t('cerca')}</Button>
        </Form>
      </div>

      {error && <Alert variant="danger" className="mt-3 text-center">{error}</Alert>}

      {showResult && searchResult && (
        <div id="resultContainer" className="text-center mt-4">
          <h3 id="productCode">Codice prodotto: {searchResult.code}</h3>
          <div className="d-flex justify-content-center">
            <a 
              href={searchResult.techSheet} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary mx-2"
            >
              {t('schedaTecnica')}
            </a>
            <a 
              href={searchResult.safetySheet} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary mx-2"
            >
              {t('schedaSicurezza')}
            </a>
          </div>
        </div>
      )}
    </Container>
  );
};

export default RegulatoryPage;