// src/components/products/domestic/OrsettoProductsPage.js
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import orsetto1 from '../../../assets/images/orsetto1.png';
import orsetto2 from '../../../assets/images/orsetto2.png';
import orsetto3 from '../../../assets/images/orsetto3.png';
import orsetto4 from '../../../assets/images/orsetto4.png';
import orsetto5 from '../../../assets/images/orsetto5.png';
import orsetto6 from '../../../assets/images/orsetto6.png';
import orsetto7 from '../../../assets/images/orsetto7.png';
import orsetto8 from '../../../assets/images/orsetto8.png';
import orsetto9 from '../../../assets/images/orsetto9.png';
import orsetto10 from '../../../assets/images/orsetto10.png';

const OrsettoProductsPage = () => {
  const [selectedImage, setSelectedImage] = useState(orsetto1);
  
  const products = [
    {
      id: 1,
      title: 'SMACCHIATORE Gr 700',
      images: [orsetto1, orsetto2, orsetto3],
      description: 'Sbiancante all\'ossigeno attivo, ha una nuova formula ancora più efficace perché è già attivo a 40°C ed agisce rapidamente sui tessuti. ORSETTO SMACCHIATUTTO è consigliato su tessuti bianchi e colorati in cotone lino, misti e sintetici, ed è specifico per il bucato più difficile (tovaglie, asciugamani, lenzuola ecc.). L\'ossigeno attivo che sviluppa a contatto con l\'acqua, toglie agevolmente molti tipi di macchie, sbianca e rigenera tessuti ingialliti. ORSETTO SMACCHIATUTTO è consigliato per un\'energica azione igienizzante sul bucato e aumenta la sensazione di pulito.',
      hasImageSelector: true
    },
    {
      id: 2,
      title: 'SACCO 18 Misurini',
      image: orsetto2,
      description: 'Orsetto Lavatrice Superbucato è più concentrato ed efficace. Consente di ottenere ottimi risultati sulle macchie difficili già a basse temperature grazie al sapone naturale e agli enzimi. Lascia sui capi un gradevole profumo.'
    },
    {
      id: 3,
      title: 'SACCO 70+3 Mis',
      image: orsetto3,
      description: 'Orsetto Lavatrice Superbucato è più concentrato ed efficace. Consente di ottenere ottimi risultati sulle macchie difficili già a basse temperature grazie al sapone naturale e agli enzimi. Lascia sui capi un gradevole profumo.'
    },
    {
      id: 4,
      title: 'Astuccio Gr 640',
      image: orsetto4,
      description: 'Descrizione del prodotto 4'
    },
    {
      id: 5,
      title: 'Sacco 50 Misurini',
      image: orsetto5,
      description: ''
    },
    {
      id: 6,
      title: 'Sacco 100 Misurini Kg. 6,200',
      image: orsetto6,
      description: ''
    },
    {
      id: 7,
      title: 'Fustino 100 Mis. Kg 3',
      image: orsetto7,
      description: ''
    },
    {
      id: 8,
      title: 'Flacone polvere abrasiva',
      image: orsetto8,
      description: ''
    },
    {
      id: 9,
      title: 'Fustone 100 Mis. Kg. 6,2',
      image: orsetto9,
      description: ''
    },
    {
      id: 10,
      title: 'Astuccio Tabs Lavatrice',
      image: orsetto10,
      description: ''
    }
  ];

  const handleImageChange = (e) => {
    const selectedIndex = e.target.value;
    setSelectedImage(products[0].images[selectedIndex]);
  };

  return (
    <Container className="py-4">
      <h1 className="category-title">Prodotti Orsetto per Bucato Domestico</h1>
      
      <div className="product-row">
        <div className="product">
          <div className="product-title">{products[0].title}</div>
          {products[0].hasImageSelector && (
            <div className="product-links">
              <Form.Select id="product-images" onChange={handleImageChange}>
                <option value="0">Immagine Fronte</option>
                <option value="1">Immagine Retro</option>
                <option value="2">Immagine Lato</option>
              </Form.Select>
            </div>
          )}
          <img src={selectedImage} alt={products[0].title} className="product-image" />
          <div className="product-description">{products[0].description}</div>
        </div>
        
        <ProductCard
          title={products[1].title}
          image={products[1].image}
          description={products[1].description}
        />
      </div>
      
      {products.slice(2).reduce((rows, product, index) => {
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

export default OrsettoProductsPage;