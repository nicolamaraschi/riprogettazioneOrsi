// src/components/research/ResearchPage.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// Importazione delle immagini
import tech1Img from '../../assets/images/t1v2.png';
import tech2Img from '../../assets/images/t2v2.png';
import tech3Img from '../../assets/images/t3.png';
import tech4Img from '../../assets/images/t4.png';
import tech5Img from '../../assets/images/t5.png';

const ResearchPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const innovationSection = document.querySelector(".innovation-section");
      if (!innovationSection) return;
      
      const isSectionVisible = innovationSection.getBoundingClientRect().top < window.innerHeight;
      
      if (isSectionVisible) {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
        
        const images = document.querySelectorAll(".card img");
        images.forEach(img => {
          img.style.transition = "opacity 0.5s ease";
          img.style.opacity = "1";
        });
        
        window.removeEventListener("scroll", handleScroll);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container fluid className="p-0">
      <div className="innovation-section">
        <h2>RICERCA & INNOVAZIONE TECNOLOGIA</h2>
        <p style={{ textAlign: 'center' }}>
          Il Nostro Team dedicato di Esperti in Ricerca e Sviluppo sono quotidianamente impegnati nella progettazione e industrializzazione di prodotti innovativi ad elevato contenuto tecnologico e di processi produttivi sempre più sostenibili per l'ambiente e le persone. Mettiamo l'accento sull'interdisciplinarietà, collaborando con Partner esterni e Università per garantire che le nostre soluzioni siano allineate alle più recenti scoperte scientifiche e tecnologiche.
        </p>
        
        <h3>LE NOSTRI TECNOLOGIE</h3>
        <ul className="card-list container">
          <li className="card">
            <div className="card-content">
              <h4>Polveri e Granuli Difficili</h4>
              <p>
                Per Purificazione delle acque<br/>
                Per Edilizia<br/>
                Per Detergenza auto<br/>
                Per Detergenza pellami
              </p>
              <img src={tech1Img} alt="Polveri e Granuli" />
            </div>
          </li>
          <li className="card">
            <div className="card-content">
              <h4>Cristalli super profumati idrosolubili</h4>
              <p>
                Per Lavatrice<br/>
                Per Asciugatrice<br/>
                Per Aspirapolvere<br/>
                Per Deodorazione cassetti armadi
              </p>
              <img src={tech2Img} alt="Cristalli super profumati" />
            </div>
          </li>
          <li className="card">
            <div className="card-content">
              <h4>Polvere Monodose idrosolubile</h4>
              <p>
                Per Schiumogeno WC con probiotici<br/>
                Per Detergenti<br/>
                Per Pavimenti<br/>
                Per Ammorbidente Superprofumato<br/>
                Per Profumi in polveri
              </p>
              <img src={tech3Img} alt="Polvere Monodose" />
            </div>
          </li>
          <li className="card">
            <div className="card-content">
              <h4>Solidi Monodose Detergenza e Cosmesi</h4>
              <p>
                Foglietti Lavatrice<br/>
                Pastiglie Ammorbidente Superprofumato<br/>
                Pastiglie Lavastoviglie
              </p>
              <img src={tech4Img} alt="Solidi Monodose" />
            </div>
          </li>
          <li className="card">
            <div className="card-content">
              <h4>IDRO PODS monodose in polvere</h4>
              <p>
                Lavatrice<br/>
                Lavaggio Piatti a mano<br/>
                Pavimenti
              </p>
              <img src={tech5Img} alt="IDRO PODS" />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default ResearchPage;