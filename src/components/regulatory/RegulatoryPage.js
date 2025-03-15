import React, { useState, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faFileAlt, 
  faFileShield, 
  faInfoCircle, 
  faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';

const RegulatoryPage = React.memo(() => {
  const { t } = useTranslation();
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  
  // Stili inline
  const styles = {
    section: {
      padding: '90px 0 70px',
      backgroundColor: '#f8f9fa',
      minHeight: '85vh',
      position: 'relative'
    },
    pageHeader: {
      textAlign: 'center',
      marginBottom: '50px',
      position: 'relative',
      padding: '0 20px'
    },
    pageTitle: {
      fontSize: '40px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      paddingBottom: '15px'
    },
    titleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      background: 'linear-gradient(90deg, #c89b7b, #e2b77e)',
      borderRadius: '1.5px'
    },
    pageSubtitle: {
      fontSize: '18px',
      color: '#596275',
      maxWidth: '800px',
      margin: '0 auto 20px',
      lineHeight: '1.8'
    },
    searchContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto 60px',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },
    searchForm: {
      display: 'flex',
      position: 'relative',
      maxWidth: '600px',
      margin: '30px auto 0'
    },
    searchInput: {
      flex: '1',
      padding: '16px 20px',
      fontSize: '16px',
      border: '2px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      outline: 'none',
      transition: 'all 0.3s ease',
      backgroundColor: '#f8f9fa'
    },
    searchInputFocused: {
      borderColor: '#c89b7b',
      boxShadow: '0 0 0 3px rgba(200, 155, 123, 0.15)',
      backgroundColor: 'white'
    },
    searchButton: {
      position: 'absolute',
      right: '5px',
      top: '5px',
      bottom: '5px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'rgba(28, 36, 54, 0.97)',
      color: 'white',
      fontWeight: '600',
      padding: '0 30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    searchButtonHover: {
      backgroundColor: '#c89b7b'
    },
    buttonIcon: {
      marginRight: '8px'
    },
    errorAlert: {
      backgroundColor: 'rgba(231, 76, 60, 0.15)',
      color: '#e74c3c',
      border: '1px solid rgba(231, 76, 60, 0.3)',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '600px',
      margin: '20px auto',
      fontWeight: '500'
    },
    errorIcon: {
      marginRight: '10px',
      fontSize: '18px'
    },
    infoBox: {
      backgroundColor: 'rgba(52, 152, 219, 0.1)',
      border: '1px solid rgba(52, 152, 219, 0.2)',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'flex-start'
    },
    infoIcon: {
      color: '#3498db',
      fontSize: '24px',
      marginRight: '15px',
      marginTop: '3px'
    },
    infoText: {
      fontSize: '15px',
      color: '#596275',
      margin: 0,
      lineHeight: '1.6'
    },
    resultContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      padding: '30px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },
    resultTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '25px',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    productCode: {
      backgroundColor: '#f8f9fa',
      padding: '8px 20px',
      borderRadius: '20px',
      fontWeight: '600',
      marginLeft: '10px'
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '25px'
    },
    documentButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px 25px',
      backgroundColor: 'rgba(28, 36, 54, 0.97)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: '15px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    techDocButton: {
      backgroundColor: 'rgba(52, 152, 219, 0.9)'
    },
    techDocButtonHover: {
      backgroundColor: 'rgba(52, 152, 219, 1)',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(52, 152, 219, 0.3)'
    },
    safetyDocButton: {
      backgroundColor: 'rgba(46, 204, 113, 0.9)'
    },
    safetyDocButtonHover: {
      backgroundColor: 'rgba(46, 204, 113, 1)',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(46, 204, 113, 0.3)'
    },
    documentIcon: {
      marginRight: '10px'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '3px solid rgba(255,255,255,.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 1s linear infinite',
      marginRight: '10px'
    },
    '@keyframes spin': {
      to: { transform: 'rotate(360deg)' }
    },
    noDocumentsMessage: {
      fontSize: '15px',
      color: '#596275',
      margin: '15px 0',
      fontStyle: 'italic'
    }
  };
  const searchProductAPI = useCallback(async (documentCode) => {
    try {
      setIsLoading(true);
      setError('');
      setSearchResult(null);
      setShowResult(false);

      console.group('🔍 DEBUG Ricerca Documento');
      console.log('Codice documento ricercato:', documentCode);
      
      const fullUrl = `http://localhost:5002/api/documents/public/code/${documentCode}`;
      console.log('URL chiamata:', fullUrl);

      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('Risposta server:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Dettagli errore:', errorText);

        if (response.status === 404) {
          throw new Error('Documento non trovato');
        } else {
          throw new Error(`Errore HTTP: ${response.status} - ${errorText}`);
        }
      }

      const documentData = await response.json();
      
      console.log('Dati documento ricevuti:', documentData);

      if (!documentData) {
        throw new Error('Nessun dato documento ricevuto');
      }

      const result = {
        code: documentData.documentCode || 'N/A',
        productName: documentData.productName || 'Nome prodotto non disponibile',
        productCode: documentData.productCode || 'N/A',
        documentType: documentData.type || 'Documento',
        documentUrl: documentData.fileUrl 
          ? `http://localhost:5002/${documentData.fileUrl}`
          : null,
        techSheet: documentData.type === 'Scheda Tecnica'
          ? `http://localhost:5002/${documentData.fileUrl}`
          : null,
        safetySheet: documentData.type === 'Scheda di Sicurezza'
          ? `http://localhost:5002/${documentData.fileUrl}`
          : null
      };

      console.log('Risultato preparato:', result);

      if (!result.documentUrl) {
        throw new Error('URL del documento non valido');
      }

      setSearchResult(result);
      setShowResult(true);
      setError('');

      console.groupEnd();
      
    } catch (err) {
      console.group('❌ ERRORE Ricerca Documento');
      console.error('Tipo errore:', err.constructor.name);
      console.error('Messaggio errore:', err.message);
      console.error('Stack trace:', err.stack);
      console.groupEnd();

      if (err.message === 'Documento non trovato') {
        setError('Codice documento non trovato. Verificare il codice e riprovare.');
      } else if (err.message === 'URL del documento non valido') {
        setError('Il documento non contiene un URL valido.');
      } else {
        setError('Si è verificato un errore durante la ricerca. Riprova più tardi.');
      }

      setShowResult(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      searchProductAPI(searchInput.trim());
    }
  }, [searchInput, searchProductAPI]);

  // Rendering dei bottoni con componente separato per evitare ri-rendering
  const DocumentButtons = React.memo(({ result, hoveredButton, setHoveredButton }) => (
    <div style={styles.buttonsContainer}>
      <a 
        href={result.techSheet} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          ...styles.documentButton,
          ...styles.techDocButton,
          ...(hoveredButton === 'tech' ? styles.techDocButtonHover : {})
        }}
        onMouseEnter={() => setHoveredButton('tech')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <FontAwesomeIcon icon={faFileAlt} style={styles.documentIcon} />
        Scheda Tecnica
      </a>
      <a 
        href={result.safetySheet} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          ...styles.documentButton,
          ...styles.safetyDocButton,
          ...(hoveredButton === 'safety' ? styles.safetyDocButtonHover : {})
        }}
        onMouseEnter={() => setHoveredButton('safety')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <FontAwesomeIcon icon={faFileShield} style={styles.documentIcon} />
        Scheda di Sicurezza
      </a>
    </div>
  ));

  return (
    <div style={styles.section}>
      <Container>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>
            REGULATORY
            <div style={styles.titleDecoration}></div>
          </h1>
          <p style={styles.pageSubtitle}>
            Accedi alle schede tecniche e di sicurezza dei nostri prodotti inserendo il codice prodotto nel campo di ricerca.
          </p>
        </div>
        
        <div style={styles.searchContainer}>
          <div style={styles.infoBox}>
            <FontAwesomeIcon icon={faInfoCircle} style={styles.infoIcon} />
            <p style={styles.infoText}>
              Il codice documento è disponibile sull'etichetta di ciascun prodotto ORSI. Se hai difficoltà a trovare il codice o desideri ulteriori informazioni, contatta il nostro servizio clienti.
            </p>
          </div>
          
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <input
              type="text"
              placeholder="Inserisci il codice documento (es. ORSI_001)"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              required
              style={{
                ...styles.searchInput,
                ...(focusedInput ? styles.searchInputFocused : {})
              }}
              onFocus={() => setFocusedInput(true)}
              onBlur={() => setFocusedInput(false)}
            />
            <button 
              type="submit" 
              style={{
                ...styles.searchButton,
                ...(buttonHovered ? styles.searchButtonHover : {})
              }}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span style={styles.loadingSpinner}></span>
                  Ricerca...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faSearch} style={styles.buttonIcon} />
                  Cerca
                </>
              )}
            </button>
          </form>
        </div>

        {error && (
          <div style={styles.errorAlert}>
            <FontAwesomeIcon icon={faExclamationTriangle} style={styles.errorIcon} />
            {error}
          </div>
        )}

{showResult && searchResult && (
          <div style={styles.resultContainer}>
            <h3 style={styles.resultTitle}>
              Documenti disponibili 
              <span style={styles.productCode}>Cod. {searchResult.code}</span>
            </h3>
            
            {searchResult.productName && (
              <p style={{ marginBottom: '20px', color: '#596275' }}>
                <strong>Prodotto:</strong> {searchResult.productName}
              </p>
            )}
            
            <DocumentButtons 
              result={searchResult} 
              hoveredButton={hoveredButton} 
              setHoveredButton={setHoveredButton} 
            />
            
            <p style={styles.noDocumentsMessage}>
              I documenti si apriranno in una nuova finestra in formato PDF.
            </p>

            {/* DEBUG: Link diretto */}
            {process.env.NODE_ENV === 'development' && (
              <div style={{marginTop: '20px', fontSize: '12px', color: '#666'}}>
                <strong>Debug URL Documento:</strong>
                <a 
                  href={searchResult.documentUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apri documento direttamente
                </a>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
});

export default RegulatoryPage;