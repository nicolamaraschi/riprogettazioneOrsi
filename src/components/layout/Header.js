// src/components/layout/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

// Import images
import logoOrsi from '../../assets/images/logov2.png';
import nomeOrsi from '../../assets/images/nome orsi.png';
import italyFlag from '../../assets/images/italy.png';
import ukFlag from '../../assets/images/united-kingdom-flag-icon.png';
import franceFlag from '../../assets/images/france-flag-icon.png';
import germanyFlag from '../../assets/images/germany-flag-icon.png';

// Devi importare Font Awesome se non l'hai già fatto
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const isHomePage = location.pathname === '/';

  // Handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown menu interaction for laptop/desktop
  useEffect(() => {
    // Gestisce la logica per mantenere aperti i menu durante la navigazione tra essi
    const handleMenuInteraction = () => {
      // Per schermi più grandi di 992px (laptop/desktop)
      if (window.innerWidth > 992) {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
          // Attiva il menu al mouseover
          dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('hover-active');
          });
          
          // Aggiungi un ritardo alla disattivazione
          dropdown.addEventListener('mouseleave', () => {
            setTimeout(() => {
              // Controlla se il mouse è ancora fuori dall'elemento
              if (!dropdown.matches(':hover')) {
                dropdown.classList.remove('hover-active');
              }
            }, 500); // Ritardo di 500ms per dare più tempo
          });
        });
        
        // Gestione specifica per i menu nidificati
        const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
        nestedDropdowns.forEach(nested => {
          nested.addEventListener('mouseenter', () => {
            nested.classList.add('hover-active');
            // Assicurati che anche il parent dropdown rimanga attivo
            nested.closest('.dropdown').classList.add('hover-active');
          });
          
          nested.addEventListener('mouseleave', () => {
            setTimeout(() => {
              if (!nested.matches(':hover')) {
                nested.classList.remove('hover-active');
                // Non rimuoviamo la classe dal parent dropdown qui
                // per mantenere aperto il menu principale
              }
            }, 500);
          });
        });
      }
    };
    
    handleMenuInteraction();
    
    // Aggiungi un event listener per quando la finestra viene ridimensionata
    window.addEventListener('resize', handleMenuInteraction);
    
    return () => {
      // Rimuovi gli event listener quando il componente si smonta
      window.removeEventListener('resize', handleMenuInteraction);
      
      const dropdowns = document.querySelectorAll('.dropdown, .nested-dropdown');
      dropdowns.forEach(dropdown => {
        dropdown.removeEventListener('mouseenter', () => {});
        dropdown.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Function to scroll to section in homepage
  const scrollToSection = (sectionId) => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Funzione per scrollare all'inizio della pagina
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Toggle dropdown for mobile view
  const toggleDropdown = (dropdownId, event) => {
    // Solo per vista mobile (< 992px)
    if (window.innerWidth <= 992) {
      event.preventDefault(); // Previene il comportamento di default su mobile
      if (activeDropdowns.includes(dropdownId)) {
        setActiveDropdowns(activeDropdowns.filter(id => id !== dropdownId));
      } else {
        setActiveDropdowns([...activeDropdowns, dropdownId]);
      }
    }
    // In vista desktop, lascia che CSS gestisca l'hover
  };

  // Get current language
  const currentLanguage = i18n.language || localStorage.getItem('language') || 'it';

  // Stili CSS inline specifici per risolvere il problema del dropdown
  const styles = {
    dropdownMenuStyles: {
      display: 'block',
      transition: 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease',
      transitionDelay: '0.1s', // Ritardo nella transizione
    },
    extraStyles: document.createElement('style')
  };

  // Aggiungiamo CSS dinamico per gestire i menu hover
  useEffect(() => {
    // Crea e applica stili CSS dinamici
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
      /* Stili per i menu dropdown in modalità laptop */
      @media (min-width: 993px) {
        .hover-active > .dropdown-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(10px) !important;
          pointer-events: auto !important;
        }
        
        .nested-dropdown.hover-active > .dropdown-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(0) !important;
          pointer-events: auto !important;
        }
        
        /* Aggiungi zone sicure per il mouse */
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          width: 100%;
          height: 20px;
          background: transparent;
        }
        
        .nested-dropdown .dropdown-menu::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 0;
          width: 20px;
          height: 100%;
          background: transparent;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      // Rimuovi gli stili quando il componente viene smontato
      if (styleSheet.parentNode) {
        styleSheet.parentNode.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="brand-section">
          <Link to="/" className="brand-logo">
            <img src={logoOrsi} alt="Orsi Logo" />
            <img src={nomeOrsi} alt="Orsi" />
          </Link>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-section ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`} 
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    scrollToTop();
                  }
                  setMobileMenuOpen(false);
                }}
              >
                <i className="fas fa-home"></i> {t('home')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section1' : '/#section1'} 
                className={`nav-link ${location.hash === '#section1' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section1') : null}
              >
                <i className="fas fa-users"></i> {t('chiSiamo')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section2' : '/#section2'} 
                className={`nav-link ${location.hash === '#section2' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section2') : null}
              >
                <i className="fas fa-flask"></i> {t('ricerca')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section3' : '/#section3'} 
                className={`nav-link ${location.hash === '#section3' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section3') : null}
              >
                <i className="fas fa-tags"></i> {t('nostriMarchi')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section4' : '/#section4'} 
                className={`nav-link ${location.hash === '#section4' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section4') : null}
              >
                <i className="fas fa-industry"></i> {t('Produzione')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section5' : '/#section5'} 
                className={`nav-link ${location.hash === '#section5' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section5') : null}
              >
                <i className="fas fa-newspaper"></i> {t('novita')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section6' : '/#section6'} 
                className={`nav-link ${location.hash === '#section6' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section6') : null}
              >
                <i className="fas fa-certificate"></i> {t('certificazioni')}
              </Link>
            </li>
            
            {/* Products Dropdown */}
            <li className={`nav-item dropdown ${activeDropdowns.includes('products') ? 'open' : ''}`}>
              <div className="nav-link dropdown-toggle" onClick={(e) => toggleDropdown('products', e)}>
                <i className="fas fa-box-open"></i> {t('prodotti')}
              </div>
              <div className="dropdown-menu" style={styles.dropdownMenuStyles}>
                {/* Professional Products Nested Dropdown */}
                <div className={`nested-dropdown ${activeDropdowns.includes('professional') ? 'open' : ''}`}>
                  <div className="dropdown-item dropdown-toggle" onClick={(e) => toggleDropdown('professional', e)}>
                    <i className="fas fa-briefcase"></i> {t('bucatoProfessionale')}
                  </div>
                  <div className="dropdown-menu" style={styles.dropdownMenuStyles}>
                    <Link to="/products/professional/bit" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-angle-right"></i> BIT
                    </Link>
                    <Link to="/products/professional/dolomitenweiss" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-angle-right"></i> Dolomiten Weiss
                    </Link>
                    <Link to="/products/professional/dolomitenweissbio" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-angle-right"></i> Dolomiten Weiss Biologico
                    </Link>
                    <Link to="/products/professional/tresil" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-angle-right"></i> Tresil
                    </Link>
                  </div>
                </div>
                
                {/* Domestic Products Nested Dropdown */}
                <div className={`nested-dropdown ${activeDropdowns.includes('domestic') ? 'open' : ''}`}>
                  <div className="dropdown-item dropdown-toggle" onClick={(e) => toggleDropdown('domestic', e)}>
                    <i className="fas fa-home"></i> {t('bucatoDomestico')}
                  </div>
                  <div className="dropdown-menu" style={styles.dropdownMenuStyles}>
                    <Link to="/products/domestic/suora" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-angle-right"></i> La Suora
                    </Link>
                    <Link to="/products/domestic/orsetto" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-angle-right"></i> Orsetto
                    </Link>
                    <Link to="/products/domestic/orsettobio" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      <i className="fas fa-angle-right"></i> Orsetto Biologico
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/regulatory" 
                className={`nav-link ${location.pathname === '/regulatory' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-clipboard-check"></i> REGULATORY
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-envelope"></i> {t('contatti')}
              </Link>
            </li>
          </ul>
          
          {/* Language Selector */}
          <div className="language-selector">
            <button 
              className={`language-btn ${currentLanguage === 'it' ? 'active' : ''}`} 
              onClick={() => changeLanguage('it')}
              aria-label="Italian"
            >
              <img src={italyFlag} alt="Italiano" />
            </button>
            <button 
              className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`} 
              onClick={() => changeLanguage('en')}
              aria-label="English"
            >
              <img src={ukFlag} alt="English" />
            </button>
            <button 
              className={`language-btn ${currentLanguage === 'fr' ? 'active' : ''}`} 
              onClick={() => changeLanguage('fr')}
              aria-label="French"
            >
              <img src={franceFlag} alt="Français" />
            </button>
            <button 
              className={`language-btn ${currentLanguage === 'de' ? 'active' : ''}`} 
              onClick={() => changeLanguage('de')}
              aria-label="German"
            >
              <img src={germanyFlag} alt="Deutsch" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;