import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SubcategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
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
        
        // Estrai i nomi di categoria e sottocategoria dal primo prodotto se disponibile
        if (data.length > 0) {
          setCategoryName(data[0].category.name || '');
          setSubcategoryName(data[0].subcategory.name || '');
        } else {
          // Carica i nomi da un'altra endpoint se non ci sono prodotti
          try {
            const catResponse = await fetch(`http://localhost:5002/api/gestoreProdotti/categorie/${categoryId}`);
            if (catResponse.ok) {
              const categoryData = await catResponse.json();
              setCategoryName(categoryData.name || '');
              
              const subcat = categoryData.subcategories.find(sub => sub._id === subcategoryId || sub.id === subcategoryId);
              if (subcat) {
                setSubcategoryName(subcat.name || '');
              }
            }
          } catch (e) {
            console.error('Errore nel recupero dei nomi di categoria:', e);
          }
        }
        
        setLoading(false);
      } catch (err) {
        console.error('ERRORE COMPLETO:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, subcategoryId]);

  if (loading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #c89b7b',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }}></div>
      <p style={{
        fontSize: '18px',
        color: '#333',
        fontFamily: 'Poppins, sans-serif'
      }}>Caricamento prodotti...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  if (error) return (
    <div style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#fff5f5',
      border: '1px solid #ffe0e0',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <h2 style={{
        color: '#e74c3c',
        fontSize: '24px',
        marginTop: '20px',
        fontFamily: 'Poppins, sans-serif'
      }}>Si è verificato un errore</h2>
      <p style={{
        color: '#555',
        fontSize: '16px',
        margin: '15px 0',
        lineHeight: '1.5'
      }}>{error}</p>
      <button onClick={() => window.location.reload()} style={{
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}>Riprova</button>
    </div>
  );

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '120px 20px 40px', // Aumentato il padding superiore a 120px
      marginTop: '30px' // Aggiunto margine superiore per ulteriore spazio
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '50px',
        marginTop: '10px' // Aggiunto un piccolo margine sopra il titolo
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#2c3e50',
          marginBottom: '15px',
          marginTop: '20px', // Aggiunto margine superiore al titolo
          fontFamily: 'Poppins, sans-serif'
        }}>
          {categoryName ? categoryName : 'Prodotti'} 
          {subcategoryName ? ` - ${subcategoryName}` : ''}
        </h1>
        <div style={{
          width: '80px',
          height: '3px',
          background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
          borderRadius: '1.5px',
          margin: '0 auto 30px'
        }}></div>
      </div>
      
      {products.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
          padding: '50px 30px',
          textAlign: 'center',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <img 
            src="https://img.icons8.com/fluency/96/000000/empty-box.png" 
            alt="Nessun prodotto" 
            style={{ width: '96px', height: '96px', margin: '0 auto 20px' }}
          />
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#2c3e50',
            marginBottom: '15px',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Nessun prodotto trovato
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#596275',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 20px'
          }}>
            Non abbiamo trovato prodotti nella categoria selezionata. Potrebbe trattarsi di una nuova categoria o i prodotti potrebbero essere temporaneamente non disponibili.
          </p>
          <button 
            onClick={() => window.history.back()} 
            style={{
              padding: '12px 25px',
              backgroundColor: '#c89b7b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Torna alle categorie
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {products.map((product, index) => (
            <div 
              key={product._id || index} 
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{
                position: 'relative',
                paddingTop: '75%', // Aspect ratio 4:3
                backgroundColor: '#f9f9f9',
                overflow: 'hidden'
              }}>
                {product.images && product.images.length > 0 ? (
                  <img
                    src={`http://localhost:5002/${product.images[0]}`}
                    alt={product.name || `Prodotto ${index}`}
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                ) : (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    color: '#aaa',
                    fontSize: '14px'
                  }}>
                    Immagine non disponibile
                  </div>
                )}
              </div>
              <div style={{
                padding: '25px 20px'
              }}>
                <h5 style={{
                  margin: '0 0 12px 0',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#2c3e50',
                  fontFamily: 'Poppins, sans-serif'
                }}>{product.name}</h5>
                <p style={{
                  color: '#596275',
                  marginBottom: '15px',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>{product.description}</p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '15px'
                }}>
                  <span style={{
                    backgroundColor: 'rgba(200, 155, 123, 0.15)',
                    color: '#c89b7b',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {product.category.name}
                  </span>
                  <span style={{
                    backgroundColor: 'rgba(46, 134, 222, 0.1)',
                    color: '#2e86de',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {product.subcategory.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubcategoryProducts;