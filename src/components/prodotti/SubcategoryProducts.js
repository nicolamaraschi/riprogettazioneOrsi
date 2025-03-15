import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SubcategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { categoryId, subcategoryId } = location.state || {};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Parametri ricerca:', { categoryId, subcategoryId });

        if (!categoryId || !subcategoryId) {
          throw new Error('Parametri mancanti');
        }

        const response = await fetch(
          `http://localhost:5002/api/gestoreProdotti/prodotti/categoria/${categoryId}/sottocategoria/${subcategoryId}`
        );

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dati prodotti:', JSON.stringify(data, null, 2));

        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('ERRORE COMPLETO:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, subcategoryId]);

  if (loading) return <div style={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh'
  }}>Caricamento...</div>;

  if (error) return <div style={{
    color: 'red', 
    textAlign: 'center', 
    marginTop: '20px'
  }}>Errore: {error}</div>;

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '30px'
      }}>Prodotti</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {products.length === 0 ? (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            color: 'gray'
          }}>Nessun prodotto trovato</div>
        ) : (
          products.map((product, index) => (
            <div 
              key={product._id || index} 
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              {product.images && product.images.length > 0 && (
                <img
                  src={`http://localhost:5002/${product.images[0]}`}
                  alt={product.name || `Prodotto ${index}`}
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover' 
                  }}
                />
              )}
              <div style={{
                padding: '15px'
              }}>
                <h5 style={{
                  margin: '0 0 10px 0',
                  fontSize: '1.2rem'
                }}>{product.name}</h5>
                <p style={{
                  color: '#666',
                  marginBottom: '10px'
                }}>{product.description}</p>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#888'
                }}>
                  Categoria: {product.category.name}
                  <br />
                  Sottocategoria: {product.subcategory.name}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubcategoryProducts;