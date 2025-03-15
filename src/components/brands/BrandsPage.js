// src/components/brands/BrandsPage.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faLeaf, 
  faShieldAlt, 
  faArrowRight,
  faFlask
} from '@fortawesome/free-solid-svg-icons';

// Import brand images
import brand1Img from '../../assets/images/brand1.png';
import brand2Img from '../../assets/images/brand2.png';
import brand3Img from '../../assets/images/brand3.png';
import brand4Img from '../../assets/images/brand4.png';

const BrandsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedBrands, setAnimatedBrands] = useState([]);

  // Brand data
  const brands = [
    {
      id: 1,
      name: 'BIT',
      image: brand1Img,
      category: 'professional',
      description: 'Linea professionale di detergenti per bucato che garantisce risultati eccellenti anche sulle macchie più ostinate, rispettando i tessuti e l\'ambiente.',
      features: [
        'Efficace su qualsiasi macchia',
        'Formulazione concentrata',
        'Profumazione persistente'
      ],
      path: '/products/professional/bit'
    },
    {
      id: 2,
      name: 'Dolomiten Weiss',
      image: brand2Img,
      category: 'professional',
      description: 'Detergenti professionali di alta qualità sviluppati specificatamente per le esigenze del settore alberghiero e della ristorazione.',
      features: [
        'Potere sgrassante superiore',
        'Igienizzazione profonda',
        'Risultati visibili immediati'
      ],
      path: '/products/professional/dolomitenweiss'
    },
    {
      id: 3,
      name: 'La Suora',
      image: brand3Img,
      category: 'domestic',
      description: 'Prodotti specializzati per il trattamento di tende, pizzi e tessuti delicati, con una formula che mantiene il bianco brillante e ravviva i colori.',
      features: [
        'Protegge le fibre delicate',
        'Previene l\'ingiallimento',
        'Efficace a basse temperature'
      ],
      path: '/products/domestic/suora'
    },
    {
      id: 4,
      name: 'Orsetto',
      image: brand4Img,
      category: 'domestic',
      description: 'La linea domestica completa che offre soluzioni per ogni esigenza di pulizia della casa, con prodotti efficaci e rispettosi dell\'ambiente.',
      features: [
        'Ampia gamma di prodotti',
        'Formulazioni innovative',
        'Profumazioni gradevoli'
      ],
      path: '/products/domestic/orsetto'
    },
    {
      id: 5,
      name: 'Orsetto Biologico',
      image: brand4Img,
      category: 'domestic',
      description: 'La versione ecologica della linea Orsetto, con prodotti certificati biologici che rispettano l\'ambiente senza compromettere l\'efficacia.',
      features: [
        'Ingredienti naturali',
        'Certificazione biologica',
        'Dermatologicamente testato'
      ],
      path: '/products/domestic/orsettobio'
    },
    {
      id: 6,
      name: 'Dolomiten Weiss Bio',
      image: brand2Img,
      category: 'professional',
      description: 'L\'alternativa ecologica alla linea Dolomiten Weiss, con prodotti a basso impatto ambientale pensati per il settore professionale eco-consapevole.',
      features: [
        'Certificazione biologica',
        'Efficacia professionale',
        'Basso impatto ambientale'
      ],
      path: '/products/professional/dolomitenweissbio'
    },
    {
      id: 7,
      name: 'Tresil',
      image: brand1Img,
      category: 'professional',
      description: 'Linea di prodotti professionali specializzati per il trattamento di tessuti tecnici e divise da lavoro con elevate esigenze di pulizia.',
      features: [
        'Rimuove macchie ostinate',
        'Preserva i colori',
        'Azione igienizzante'
      ],
      path: '/products/professional/tresil'
    }
  ];
  
  // Filter brands by category
  const filteredBrands = activeCategory === 'all' 
    ? brands 
    : brands.filter(brand => brand.category === activeCategory);
    
  // Setup intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const brandId = parseInt(entry.target.getAttribute('data-brand-id'));
            setAnimatedBrands(prev => [...prev, brandId]);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = document.querySelectorAll('.brand-card');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, [filteredBrands]);

  return (
    <div className="brands-page">
      <div className="brands-hero">
        <div className="brands-hero-content">
          <h1 className="brands-hero-title">{t('nostriMarchi')}</h1>
          <p className="brands-hero-subtitle">
            Dal 1907, offriamo soluzioni innovative nel campo della detergenza,
            combinando tradizione ed eccellenza italiana con tecnologie all'avanguardia.
          </p>
        </div>
      </div>
      
      <div className="brands-filter-container">
        <div className="brands-filter">
          <button 
            className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span className="filter-text">Tutti i marchi</span>
          </button>
          <button 
            className={`filter-button ${activeCategory === 'professional' ? 'active' : ''}`}
            onClick={() => setActiveCategory('professional')}
          >
            <span className="filter-text">{t('bucatoProfessionale')}</span>
          </button>
          <button 
            className={`filter-button ${activeCategory === 'domestic' ? 'active' : ''}`}
            onClick={() => setActiveCategory('domestic')}
          >
            <span className="filter-text">{t('bucatoDomestico')}</span>
          </button>
        </div>
      </div>
      
      <div className="brands-container">
        {filteredBrands.map(brand => (
          <div 
            key={brand.id} 
            className={`brand-card ${animatedBrands.includes(brand.id) ? 'animated' : ''}`}
            data-brand-id={brand.id}
          >
            <div className="brand-header">
              <div className="brand-image-container">
                <img src={brand.image} alt={brand.name} className="brand-image" />
              </div>
              <div className="brand-badge">
                {brand.category === 'professional' ? t('bucatoProfessionale') : t('bucatoDomestico')}
              </div>
            </div>
            
            <div className="brand-content">
              <h2 className="brand-title">{brand.name}</h2>
              <p className="brand-description">{brand.description}</p>
              
              <div className="brand-features">
                {brand.features.map((feature, index) => (
                  <div key={index} className="brand-feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to={brand.path} className="brand-button">
                <span>Scopri i prodotti</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="brand-values">
        <div className="value-container">
          <div className="value-header">
            <div className="value-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3 className="value-title">Qualità garantita</h3>
          </div>
          <p className="value-description">
            Tutti i nostri prodotti sono sottoposti a rigorosi controlli di qualità secondo gli standard internazionali più elevati.
          </p>
        </div>
        
        <div className="value-container">
          <div className="value-header">
            <div className="value-icon">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3 className="value-title">Sostenibilità</h3>
          </div>
          <p className="value-description">
            Ci impegniamo a sviluppare prodotti ecologici che rispettino l'ambiente e contribuiscano a un futuro più sostenibile.
          </p>
        </div>
        
        <div className="value-container">
          <div className="value-header">
            <div className="value-icon">
              <FontAwesomeIcon icon={faFlask} />
            </div>
            <h3 className="value-title">Innovazione continua</h3>
          </div>
          <p className="value-description">
            Il nostro team di ricerca e sviluppo lavora costantemente per migliorare le formule e creare nuove soluzioni.
          </p>
        </div>
      </div>
      
      <div className="brands-cta">
        <div className="cta-content">
          <h2 className="cta-title">Scopri tutti i nostri prodotti</h2>
          <p className="cta-description">
            Trova la soluzione perfetta per le tue esigenze di pulizia, sia a livello professionale che domestico.
          </p>
          <Link to="/products" className="cta-button">
            Esplora il catalogo completo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;