// src/components/home/ParallaxDivider.js
import React, { useEffect, useRef } from 'react';

// Importazione dell'immagine
import parallaxImage from '../../assets/images/parallax.png'; // Assicurati che il percorso e il nome file siano corretti

const ParallaxDivider = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const element = parallaxRef.current;
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const offset = (scrollY - elementTop) * 0.4; // Regola il valore 0.4 per modificare l'intensità dell'effetto
        
        // Applica la trasformazione solo se l'elemento è visibile
        if (scrollY + window.innerHeight > elementTop && scrollY < elementTop + element.offsetHeight) {
          element.style.backgroundPositionY = `${offset}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Chiamata iniziale per impostare la posizione iniziale
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    parallaxSection: {
      height: '400px', // Altezza della sezione parallax
      backgroundImage: `url(${parallaxImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // Questo è un modo alternativo per l'effetto parallax
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      overflow: 'hidden'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '120%',
      backgroundColor: 'rgba(28, 36, 54, 0.6)', // Overlay semi-trasparente
      zIndex: 1
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 20px'
    },
    title: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      fontFamily: "'Poppins', sans-serif"
    },
    subtitle: {
      fontSize: '20px',
      lineHeight: '1.8',
      textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
      maxWidth: '700px',
      margin: '0 auto'
    }
  };

  return (
    <div ref={parallaxRef} style={styles.parallaxSection}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h2 style={styles.title}>Tradizione e Innovazione dal 1907</h2>
        <p style={styles.subtitle}>
          Oltre un secolo di esperienza nella detergenza, unendo la tradizione italiana all'innovazione tecnologica per prodotti sempre all'avanguardia
        </p>
      </div>
    </div>
  );
};

export default ParallaxDivider;