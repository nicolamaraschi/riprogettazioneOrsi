// src/components/products/ProductsPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { t } = useTranslation();
  
  const professionalProducts = [
    { id: 'bit', name: 'BIT', path: '/products/professional/bit' },
    { id: 'dolomitenweiss', name: 'Dolomiten Weiss', path: '/products/professional/dolomitenweiss' },
    { id: 'dolomitenweissbio', name: 'Dolomiten Weiss Biologico', path: '/products/professional/dolomitenweissbio' },
    { id: 'tresil', name: 'Tresil', path: '/products/professional/tresil' }
  ];
  
  const domesticProducts = [
    { id: 'suora', name: 'La Suora', path: '/products/domestic/suora' },
    { id: 'orsetto', name: 'Orsetto', path: '/products/domestic/orsetto' },
    { id: 'orsettobio', name: 'Orsetto Biologico', path: '/products/domestic/orsettobio' }
  ];

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">{t('prodotti')}</h1>
      
      <h2 className="mt-5 mb-4">{t('bucatoProfessionale')}</h2>
      <Row>
        {professionalProducts.map(product => (
          <Col key={product.id} md={6} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <div className="mt-auto">
                  <Button 
                    as={Link} 
                    to={product.path} 
                    variant="primary"
                  >
                    Visualizza prodotti
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <h2 className="mt-5 mb-4">{t('bucatoDomestico')}</h2>
      <Row>
        {domesticProducts.map(product => (
          <Col key={product.id} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <div className="mt-auto">
                  <Button 
                    as={Link} 
                    to={product.path} 
                    variant="primary"
                  >
                    Visualizza prodotti
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;