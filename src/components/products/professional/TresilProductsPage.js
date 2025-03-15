// src/components/products/professional/TresilProductsPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ProductCard from '../ProductCard';

const TresilProductsPage = () => {
  const { t } = useTranslation();
  
  return (
    <Container className="py-4">
      <h1 className="category-title">Prodotti Tresil per Bucato Professionale</h1>
      
      <div className="product-row">
        {/* Contenuto del componente */}
      </div>
    </Container>
  );
};

export default TresilProductsPage;