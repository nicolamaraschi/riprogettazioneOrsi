// src/components/products/professional/BitProductsPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import bit1 from '../../../assets/images/bit1.png';
import bit2 from '../../../assets/images/bit2.png';
import bit3 from '../../../assets/images/bit3.png';
import bit4 from '../../../assets/images/bit4.png';
import bit5 from '../../../assets/images/bit5.png';
import bit6 from '../../../assets/images/bit6.png';
import bit7 from '../../../assets/images/bit7.png';
import bit8 from '../../../assets/images/bit8.png';
import bit9 from '../../../assets/images/bit9.png';

const BitProductsPage = () => {
  const products = [
    {
      id: 1,
      title: 'Sacco Kg. 10',
      image: bit1,
      description: 'Si usa come un normale detersivo da bucato, smacchia, deterge tutti i capi bianchi e colorati lasciandoli gradevolmente profumati. È studiato per il trattamento di tutti i capi sia a mano che in lavatrice. Agisce durante il lavaggio creando una protezione sulle fibre che evita la formazione dell\'odore di sudore. In questo modo tutti i capi si manterranno puliti, freschi e profumati per ore, anche in presenza di sudorazione. Grazie alla sua formula ricca di principi attivi specifici, è inoltre particolarmente indicato per lavare i capi colorati e scuri. DEOX LAVATRICE è efficace già a basse temperature. Profumazione: Classica',
      links: []
    },
    {
      id: 2,
      title: 'Sacco Kg. 20',
      image: bit2,
      description: 'Si usa come un normale detersivo da bucato, smacchia, deterge tutti i capi bianchi e colorati lasciandoli gradevolmente profumati. È studiato per il trattamento di tutti i capi sia a mano che in lavatrice. Agisce durante il lavaggio creando una protezione sulle fibre che evita la formazione dell\'odore di sudore. In questo modo tutti i capi si manterranno puliti, freschi e profumati per ore, anche in presenza di sudorazione. Grazie alla sua formula ricca di principi attivi specifici, è inoltre particolarmente indicato per lavare i capi colorati e scuri. DEOX LAVATRICE è efficace già a basse temperature. Profumazione: Classica',
      links: []
    },
    {
      id: 3,
      title: 'Ammorbidente Liquido Lt. 5',
      image: bit3,
      description: 'Orsetto Lavatrice Superbucato è più concentrato ed efficace. Consente di ottenere ottimi risultati sulle macchie difficili già a basse temperature grazie al sapone naturale e agli enzimi. Lascia sui capi un gradevole profumo.',
      links: []
    },
    {
      id: 4,
      title: 'Lavatrice liquido Lt. 5',
      image: bit4,
      description: 'Descrizione del prodotto 4',
      links: []
    },
    {
      id: 5,
      title: 'Additivo smacchiatutto Secchio Kg. 4',
      image: bit5,
      description: '',
      links: []
    },
    {
        id: 6,
        title: 'Additivo Sbianca & Smacchia Secchio Kg.5',
        image: bit6,
        description: '',
        links: []
      },
      {
        id: 7,
        title: 'Secchio togli ruggine Kg. 4',
        image: bit7,
        description: '',
        links: []
      },
      {
        id: 8,
        title: 'Cristalli di Profumo',
        image: bit8,
        description: '',
        links: []
      },
      {
        id: 9,
        title: 'Igienizzante BRT',
        image: bit9,
        description: '',
        links: []
      }
    ];
  
    return (
      <Container className="py-4">
        <h1 className="category-title">Prodotti Bit per Bucato Professional</h1>
        
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
                links={product.links}
              />
            ))}
          </div>
        ))}
      </Container>
    );
  };
  
  export default BitProductsPage;