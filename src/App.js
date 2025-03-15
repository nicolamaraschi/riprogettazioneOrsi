import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/main.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ResearchPage from './components/research/ResearchPage';
import BrandsPage from './components/brands/BrandsPage';
import ProductionPage from './components/production/ProductionPage';
import NewsPage from './components/news/NewsPage';
import CertificationsPage from './components/certifications/CertificationsPage';
import ContactPage from './components/contact/ContactPage';
import RegulatoryPage from './components/regulatory/RegulatoryPage';

// Product Pages
import ProductsPage from './components/products/ProductsPage';
import BitProductsPage from './components/products/professional/BitProductsPage';
import DolomitenWeissProductsPage from './components/products/professional/DolomitenWeissProductsPage';
import DolomitenWeissBioProductsPage from './components/products/professional/DolomitenWeissBioProductsPage';
import TresilProductsPage from './components/products/professional/TresilProductsPage';
import SuoraProductsPage from './components/products/domestic/SuoraProductsPage';
import OrsettoProductsPage from './components/products/domestic/OrsettoProductsPage';
import OrsettoBioProductsPage from './components/products/domestic/OrsettoBioProductsPage';

// Importazione della nuova pagina per prodotti filtrati per sottocategoria
import SubcategoryProducts from './components/prodotti/SubcategoryProducts';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/production" element={<ProductionPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />

          {/* Nuova route dinamica per i prodotti filtrati per sottocategoria */}
          <Route path="/products/:categorySlug/:subcategorySlug" element={<SubcategoryProducts />} />
          
          {/* Route esistenti per i prodotti */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/professional/bit" element={<BitProductsPage />} />
          <Route path="/products/professional/dolomitenweiss" element={<DolomitenWeissProductsPage />} />
          <Route path="/products/professional/dolomitenweissbio" element={<DolomitenWeissBioProductsPage />} />
          <Route path="/products/professional/tresil" element={<TresilProductsPage />} />
          <Route path="/products/domestic/suora" element={<SuoraProductsPage />} />
          <Route path="/products/domestic/orsetto" element={<OrsettoProductsPage />} />
          <Route path="/products/domestic/orsettobio" element={<OrsettoBioProductsPage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/regulatory" element={<RegulatoryPage />} />
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;