// src/components/layout/Header.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

// Import images
import logoOrsi from '../../assets/images/logov2.png';
import nomeOrsi from '../../assets/images/nome orsi.png';
import italyFlag from '../../assets/images/italy.png';
import ukFlag from '../../assets/images/united-kingdom-flag-icon.png';
import franceFlag from '../../assets/images/france-flag-icon.png';
import germanyFlag from '../../assets/images/germany-flag-icon.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
  // Refs per gestire i click al di fuori del dropdown
  const desktopLanguageRef = useRef(null);
  const mobileLanguageRef = useRef(null);

  const isHomePage = location.pathname === '/';

  // Get current language
  const currentLanguage = i18n.language || localStorage.getItem('language') || 'it';

  // Map language codes to flag images
  const languageFlags = {
    it: italyFlag,
    en: ukFlag,
    fr: franceFlag,
    de: germanyFlag
  };

  // Language names mapping
  const languageNames = {
    it: 'Italiano',
    en: 'English',
    fr: 'Français',
    de: 'Deutsch'
  };

  // Funzione per recuperare le categorie dal backend
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5002/api/gestoreProdotti/categorie');
      
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (err) {
      console.error('Errore durante il recupero delle categorie:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Recupera le categorie all'avvio del componente
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle language change
  const changeLanguage = (lng) => {
    console.log("Changing language to:", lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setLanguageDropdownOpen(false);
    
    if (mobileMenuOpen) {
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 300);
    }
  };

  // Toggle language dropdown
  const toggleLanguageDropdown = (e) => {
    e.stopPropagation();
    setLanguageDropdownOpen(!languageDropdownOpen);
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
    const handleMenuInteraction = () => {
      // Per schermi più grandi di 992px (laptop/desktop)
      if (window.innerWidth > 992) {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('hover-active');
          });
          
          dropdown.addEventListener('mouseleave', () => {
            setTimeout(() => {
              if (!dropdown.matches(':hover')) {
                dropdown.classList.remove('hover-active');
              }
            }, 500);
          });
        });
        
        const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
        nestedDropdowns.forEach(nested => {
          nested.addEventListener('mouseenter', () => {
            nested.classList.add('hover-active');
            nested.closest('.dropdown').classList.add('hover-active');
          });
          
          nested.addEventListener('mouseleave', () => {
            setTimeout(() => {
              if (!nested.matches(':hover')) {
                nested.classList.remove('hover-active');
              }
            }, 500);
          });
        });
      }
    };
    
    handleMenuInteraction();
    
    window.addEventListener('resize', handleMenuInteraction);
    
    return () => {
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
    if (window.innerWidth <= 992) {
      event.preventDefault();
      if (activeDropdowns.includes(dropdownId)) {
        setActiveDropdowns(activeDropdowns.filter(id => id !== dropdownId));
      } else {
        setActiveDropdowns([...activeDropdowns, dropdownId]);
      }
    }
  };

  // Funzione per navigare ai prodotti di una sottocategoria
  const navigateToSubcategoryProducts = (categoryId, subcategoryId, categoryName, subcategoryName) => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
    const subcategorySlug = subcategoryName.toLowerCase().replace(/\s+/g, '-');
    
    navigate(`/products/${categorySlug}/${subcategorySlug}`, {
      state: {
        categoryId,
        subcategoryId,
        categoryName,
        subcategoryName
      }
    });
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Chiudi il dropdown se è aperto e il click è al di fuori
      if (languageDropdownOpen) {
        // Verifica se il click è dentro o fuori il dropdown desktop
        const isDesktopOutside = desktopLanguageRef.current && 
                                !desktopLanguageRef.current.contains(event.target);
        
        // Verifica se il click è dentro o fuori il dropdown mobile
        const isMobileOutside = mobileLanguageRef.current && 
                               !mobileLanguageRef.current.contains(event.target);
        
        // Se siamo in modalità desktop e il click è fuori dal dropdown desktop
        if (window.innerWidth > 992 && isDesktopOutside) {
          setLanguageDropdownOpen(false);
        } 
        // Se siamo in modalità mobile e il click è fuori dal dropdown mobile
        else if (window.innerWidth <= 992 && isMobileOutside) {
          setLanguageDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageDropdownOpen]);

  // Chiudi dropdown lingua quando cambia la posizione
  useEffect(() => {
    setLanguageDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Inserisci CSS globale per la navbar e le bandiere
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
      /* Stili per i menu dropdown */
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
        
        /* Nascondi l'elemento lingua mobile su desktop */
        .mobile-language-item {
          display: none !important;
        }
      }
      
      /* Stili per le bandiere */
      .language-flag {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        border: 2px solid transparent;
        position: relative;
      }
      
      .language-flag.active {
        border-color: #0056b3;
      }
      
      .language-flag img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      /* Desktop language dropdown styling */
      .desktop-language-container {
        display: inline-flex;
        align-items: center;
        margin-left: 15px;
        position: relative;
      }
      
      .language-button {
        display: flex;
        align-items: center;
        cursor: pointer;
        background: none;
        border: none;
        padding: 5px;
      }
      
      .arrow-down {
        margin-left: 5px;
        font-size: 10px;
        color: #666;
      }
      
      /* Language dropdown */
      .language-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        padding: 10px;
        z-index: 1000;
        min-width: 150px;
        margin-top: 10px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
      }
      
      .language-dropdown.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .language-option {
        display: flex;
        align-items: center;
        padding: 8px 10px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;
      }
      
      .language-option:hover {
        background-color: #f0f0f0;
      }
      
      .language-option.active {
        background-color: #f0f7ff;
        font-weight: bold;
      }
      
      .language-name {
        font-size: 14px;
        color: #333;
      }
      
      /* Mobile styles */
      @media (max-width: 992px) {
        /* Mobile navbar styling */
        .nav-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
        }
        
        .nav-menu {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          padding: 0;
        }
        
        .nav-item {
          margin: 5px 0;
          width: 100%;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 15px;
          font-size: 16px;
        }
        
        /* Nascondi il selettore lingua desktop */
        .desktop-language-container {
          display: none !important;
        }
        
        /* Mostra l'elemento lingua mobile */
        .mobile-language-item {
          display: block !important;
          width: 80%;
          max-width: 300px;
          margin: 10px auto;
        }
        
        .mobile-language-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 15px;
          background-color: rgba(0,86,179,0.1);
          color: #0056b3;
          border-radius: 8px;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }
        
        .globe-icon {
          margin-right: 8px;
        }
        
        /* Mobile language dropdown */
        .mobile-language-dropdown {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          padding: 20px;
          z-index: 1050;
          width: 85%;
          max-width: 320px;
        }
        
        .mobile-dropdown-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
          text-align: center;
          color: #333;
        }
        
        .close-button {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 20px;
          color: #999;
          cursor: pointer;
        }
        
        .mobile-language-options {
          display: flex;
          flex-direction: column;
        }
        
        .mobile-language-option {
          display: flex;
          align-items: center;
          padding: 12px;
          margin: 5px 0;
          border-radius: 8px;
          cursor: pointer;
        }
        
        .mobile-language-option:hover {
          background-color: #f5f5f5;
        }
        
        .mobile-language-option.active {
          background-color: #f0f7ff;
          font-weight: bold;
        }
        
        /* Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0,0,0,0.5);
          z-index: 1040;
        }
      }
      
      /* Debug styling */
      .lang-debug-info {
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 9999;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      if (styleSheet.parentNode) {
        styleSheet.parentNode.removeChild(styleSheet);
      }
    };
  }, []);

  // Render del selettore di lingua desktop
  const renderDesktopLanguageSelector = () => (
    <div className="desktop-language-container" ref={desktopLanguageRef}>
      <button 
        className="language-button"
        onClick={toggleLanguageDropdown}
        aria-label="Cambia lingua"
      >
        <div className={`language-flag ${currentLanguage === currentLanguage ? 'active' : ''}`}>
          <img src={languageFlags[currentLanguage]} alt={languageNames[currentLanguage]} />
        </div>
        <span className="arrow-down">▼</span>
      </button>
      
      {languageDropdownOpen && (
        <div className="language-dropdown open">
          {Object.keys(languageFlags).map(lang => (
            <div 
              key={lang}
              className={`language-option ${currentLanguage === lang ? 'active' : ''}`}
              onClick={() => changeLanguage(lang)}
            >
              <div className="language-flag">
                <img src={languageFlags[lang]} alt={languageNames[lang]} />
              </div>
              <span className="language-name">{languageNames[lang]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Render del selettore di lingua mobile
  const renderMobileLanguageSelector = () => (
    <div className="mobile-language-item" ref={mobileLanguageRef}>
      <button 
        className="mobile-language-button"
        onClick={toggleLanguageDropdown}
      >
        <i className="fas fa-globe globe-icon"></i>
        <span>{languageNames[currentLanguage]}</span>
      </button>
      
      {languageDropdownOpen && (
        <>
          <div className="mobile-overlay" onClick={() => setLanguageDropdownOpen(false)}></div>
          <div className="mobile-language-dropdown">
            <div className="mobile-dropdown-title">
              Seleziona lingua
              <button 
                className="close-button"
                onClick={() => setLanguageDropdownOpen(false)}
                aria-label="Chiudi"
              >
                ×
              </button>
            </div>
            
            <div className="mobile-language-options">
              {Object.keys(languageFlags).map(lang => (
                <div 
                  key={lang}
                  className={`mobile-language-option ${currentLanguage === lang ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang)}
                >
                  <div className="language-flag">
                    <img src={languageFlags[lang]} alt={languageNames[lang]} />
                  </div>
                  <span className="language-name">{languageNames[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

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
              <div className="dropdown-menu">
                {loading ? (
                  <div className="dropdown-item">Caricamento categorie...</div>
                ) : error ? (
                  <div className="dropdown-item text-danger">Errore: {error}</div>
                ) : (
                  categories.map(category => (
                    <div 
                      key={category._id} 
                      className={`nested-dropdown ${activeDropdowns.includes(category._id) ? 'open' : ''}`}
                    >
                      <div 
                        className="dropdown-item dropdown-toggle" 
                        onClick={(e) => toggleDropdown(category._id, e)}
                      >
                        <i className="fas fa-briefcase"></i> {category.name}
                      </div>
                      <div className="dropdown-menu">
                        {category.subcategories && category.subcategories.length > 0 ? (
                          category.subcategories.map(subcategory => (
                            <div
                              key={subcategory._id || `${category._id}-${subcategory.name}`}
                              className="dropdown-item"
                              onClick={() => navigateToSubcategoryProducts(
                                category._id,
                                subcategory._id || subcategory.id,
                                category.name,
                                subcategory.name
                              )}
                            >
                              <i className="fas fa-angle-right"></i> {subcategory.name}
                            </div>
                          ))
                        ) : (
                          <div className="dropdown-item">Nessuna sottocategoria</div>
                        )}
                      </div>
                    </div>
                  ))
                )}
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
            
            {/* Mobile Language Selector */}
            {renderMobileLanguageSelector()}
          </ul>
          
          {/* Desktop Language Selector */}
          {renderDesktopLanguageSelector()}
        </div>
      </div>
    </header>
  );
};

export default Header;