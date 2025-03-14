// src/components/products/domestic/SuoraProductsPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import suora1 from '../../../assets/images/suora1.png';
import suora2 from '../../../assets/images/suora2.png';
import suora3 from '../../../assets/images/suora3.png';
import suora4 from '../../../assets/images/suora4.png';

const SuoraProductsPage = () => {
  const products = [
    {
      id: 1,
      title: 'Amido Naturale',
      image: suora1,
      description: 'Stiratura perfetta in minor tempo. Adatto ad ogni tipo di tessuto.'
    },
    {
      id: 2,
      title: 'Tende Bianche e Colorate',
      image: suora2,
      description: 'Tende come nuove: Ideale per Tende, Pizzi, Tessuti. Lavaggio a mano e in lavatrice. Ravvivante dei colori. Efficace già a 20°'
    },
    {
      id: 3,
      title: 'Appretto Stirafacile',
      image: suora3,
      description: 'Il piacere di stirare lasciando sui tuoi capi un incantevole profumo.'
    },
    {
      id: 4,
      title: 'Appretto per Lavatrice e a Mano',
      image: suora4,
      description: 'Ideale per Tende Tovaglie e Pizzi.'
    }
  ];

  return (
    <Container className="py-4">
      <h1 className="category-title">Prodotti Suora per Bucato Domestico</h1>
      
      {products.reduce((rows, product, index) => {
        if (index % 2 === 0) {
          rows.push([product]);
        } else {
          rows[rows.length - 1].push(product);
        }
        return rows;
      }, []).map((row, rowIndex) => (
        <div key={rowIndex} className="product-row">
          {row.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      ))}
    </Container>
  );
};

export default SuoraProductsPage;