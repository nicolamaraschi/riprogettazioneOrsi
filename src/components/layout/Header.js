// src/components/layout/Header.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  // Funzione per gestire lo scroll verso le sezioni nella homepage
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="ml-0 custom-navbar-brand">
          <img src={logoOrsi} alt="logo orsi" className="logo-img" />
          <img src={nomeOrsi} alt="logo orsi" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ml-auto nav-items">
            <Nav.Link 
              as={isHomePage ? 'a' : Link} 
              href={isHomePage ? '#section0' : '/'}
              to={isHomePage ? undefined : '/'}
              onClick={() => isHomePage && scrollToSection('section0')}
            >
              {t('home')}
            </Nav.Link>
            
            <Nav.Link 
              as={isHomePage ? 'a' : Link} 
              href={isHomePage ? '#section1' : '/#section1'}
              to={isHomePage ? undefined : '/#section1'}
              onClick={() => isHomePage && scrollToSection('section1')}
            >
              {t('chiSiamo')}
            </Nav.Link>
            
            <Nav.Link 
              as={isHomePage ? 'a' : Link} 
              href={isHomePage ? '#section2' : '/#section2'}
              to={isHomePage ? undefined : '/#section2'}
              onClick={() => isHomePage && scrollToSection('section2')}
            >
              {t('ricerca')}
            </Nav.Link>
            
            <Nav.Link 
              as={isHomePage ? 'a' : Link} 
              href={isHomePage ? '#section3' : '/#section3'}
              to={isHomePage ? undefined : '/#section3'}
              onClick={() => isHomePage && scrollToSection('section3')}
            >
              {t('nostriMarchi')}
            </Nav.Link>
            
            <Nav.Link 
              as={isHomePage ? 'a' : Link} 
              href={isHomePage ? '#section4' : '/#section4'}
              to={isHomePage ? undefined : '/#section4'}
              onClick={() => isHomePage && scrollToSection('section4')}
            >
              {t('Produzione')}
            </Nav.Link>
            
            <Nav.Link 
              as={isHomePage ? 'a' : Link} 
              href={isHomePage ? '#section5' : '/#section5'}
              to={isHomePage ? undefined : '/#section5'}
              onClick={() => isHomePage && scrollToSection('section5')}
            >
              {t('novita')}
            </Nav.Link>
            
            <Nav.Link 
              as={isHomePage ? 'a' : Link} 
              href={isHomePage ? '#section6' : '/#section6'}
              to={isHomePage ? undefined : '/#section6'}
              onClick={() => isHomePage && scrollToSection('section6')}
            >
              {t('certificazioni')}
            </Nav.Link>
            
            <NavDropdown title={t('prodotti')} id="navbarDropdown">
              <NavDropdown title={t('bucatoProfessionale')} id="navbarDropdownBucatoProfessionale" className="dropdown-item dropdown-toggle">
                <NavDropdown.Item as={Link} to="/products/professional/bit">BIT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/professional/dolomitenweiss">Dolomiten Weiss</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/professional/dolomitenweissbio">Dolomiten Weiss Biologico</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/professional/tresil">Tresil</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title={t('bucatoDomestico')} id="navbarDropdownBucatoDomestico" className="dropdown-item dropdown-toggle">
                <NavDropdown.Item as={Link} to="/products/domestic/suora">La Suora</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/domestic/orsetto">Orsetto</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/domestic/orsettobio">Orsetto Biologico</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/regulatory">REGULATORY</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t('contatti')}</Nav.Link>
            
            <Nav.Link as="button" className="nav-link btn" onClick={() => changeLanguage('it')}>
              <img src={italyFlag} alt="Italiano" className="icona-bandiera" />
            </Nav.Link>
            <Nav.Link as="button" className="nav-link btn" onClick={() => changeLanguage('en')}>
              <img src={ukFlag} alt="English" className="icona-bandiera" />
            </Nav.Link>
            <Nav.Link as="button" className="nav-link btn" onClick={() => changeLanguage('fr')}>
              <img src={franceFlag} alt="Français" className="icona-bandiera" />
            </Nav.Link>
            <Nav.Link as="button" className="nav-link btn" onClick={() => changeLanguage('de')}>
              <img src={germanyFlag} alt="Deutsch" className="icona-bandiera" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;