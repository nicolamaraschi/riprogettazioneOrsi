// src/components/products/professional/DolomitenWeissBioProductsPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ProductCard from '../ProductCard';

const DolomitenWeissBioProductsPage = () => {
  const { t } = useTranslation();
  
  return (
    <Container className="py-4">
      <h1 className="category-title">Prodotti Dolomiten Weiss Bio per Bucato Professionale</h1>
      
      <div className="product-row">
        {/* Contenuto del componente */}
      </div>
    </Container>
  );
};

export default DolomitenWeissBioProductsPage;