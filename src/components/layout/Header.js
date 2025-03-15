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

  // Function to scroll to section in homepage
  const scrollToSection = (sectionId) => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section1' : '/#section1'} 
                className={`nav-link ${location.hash === '#section1' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section1') : null}
              >
                {t('chiSiamo')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section2' : '/#section2'} 
                className={`nav-link ${location.hash === '#section2' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section2') : null}
              >
                {t('ricerca')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section3' : '/#section3'} 
                className={`nav-link ${location.hash === '#section3' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section3') : null}
              >
                {t('nostriMarchi')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section4' : '/#section4'} 
                className={`nav-link ${location.hash === '#section4' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section4') : null}
              >
                {t('Produzione')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section5' : '/#section5'} 
                className={`nav-link ${location.hash === '#section5' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section5') : null}
              >
                {t('novita')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to={isHomePage ? '#section6' : '/#section6'} 
                className={`nav-link ${location.hash === '#section6' ? 'active' : ''}`}
                onClick={() => isHomePage ? scrollToSection('section6') : null}
              >
                {t('certificazioni')}
              </Link>
            </li>
            
            {/* Products Dropdown */}
            <li className={`nav-item dropdown ${activeDropdowns.includes('products') ? 'open' : ''}`}>
              <div className="nav-link dropdown-toggle" onClick={(e) => toggleDropdown('products', e)}>
                {t('prodotti')}
              </div>
              <div className="dropdown-menu">
                {/* Professional Products Nested Dropdown */}
                <div className={`nested-dropdown ${activeDropdowns.includes('professional') ? 'open' : ''}`}>
                  <div className="dropdown-item dropdown-toggle" onClick={(e) => toggleDropdown('professional', e)}>
                    {t('bucatoProfessionale')}
                  </div>
                  <div className="dropdown-menu">
                    <Link to="/products/professional/bit" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      BIT
                    </Link>
                    <Link to="/products/professional/dolomitenweiss" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      Dolomiten Weiss
                    </Link>
                    <Link to="/products/professional/dolomitenweissbio" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      Dolomiten Weiss Biologico
                    </Link>
                    <Link to="/products/professional/tresil" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      Tresil
                    </Link>
                  </div>
                </div>
                
                {/* Domestic Products Nested Dropdown */}
                <div className={`nested-dropdown ${activeDropdowns.includes('domestic') ? 'open' : ''}`}>
                  <div className="dropdown-item dropdown-toggle" onClick={(e) => toggleDropdown('domestic', e)}>
                    {t('bucatoDomestico')}
                  </div>
                  <div className="dropdown-menu">
                    <Link to="/products/domestic/suora" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      La Suora
                    </Link>
                    <Link to="/products/domestic/orsetto" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      Orsetto
                    </Link>
                    <Link to="/products/domestic/orsettobio" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      Orsetto Biologico
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
                REGULATORY
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('contatti')}
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