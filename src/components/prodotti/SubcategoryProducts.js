// src/prodotti/SubcategoryProducts.js
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SubcategoryProducts = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Recupera i parametri dalla navigazione
  const { categoryId, subcategoryId, categoryName, subcategoryName } = location.state || {};
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Verifica che i parametri necessari siano presenti
        if (!categoryId || !subcategoryId) {
          throw new Error('Parametri mancanti: categoryId o subcategoryId');
        }
        
        // Chiamata all'API per recuperare i prodotti per sottocategoria
        const response = await fetch(
          `http://localhost:5002/api/gestoreProdotti/prodotti/categoria/${categoryId}/sottocategoria/${subcategoryId}`
        );
        
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('Errore durante il recupero dei prodotti:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [categoryId, subcategoryId]);
  
  return (
    <div className="subcategory-products-container">
      <div className="container py-4">
        <h1 className="mb-4">
          {categoryName ? `${categoryName} - ${subcategoryName}` : 'Prodotti'}
        </h1>
        
        {loading ? (
          <div className="loading-indicator">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Caricamento...</span>
            </div>
            <p className="mt-2">Caricamento prodotti...</p>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : products.length === 0 ? (
          <div className="alert alert-info" role="alert">
            Nessun prodotto trovato in questa sottocategoria.
          </div>
        ) : (
          <div className="row">
            {products.map(product => (
              <div key={product._id} className="col-md-4 mb-4">
                <div className="card h-100">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={`http://localhost:5002/${product.images[0]}`}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="card-img-top bg-light d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                      <i className="fas fa-image fa-3x text-muted"></i>
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary">Dettagli</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubcategoryProducts;