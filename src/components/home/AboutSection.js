// src/components/home/AboutSection.js
import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// Importazione corretta delle immagini
import responsabileImg from '../../assets/images/responsabile.png';
import menu2Img from '../../assets/images/menu2.png';
import worldEnvironmentImg from '../../assets/images/world-environment.png';
import prendersiCuraImg from '../../assets/images/prendersi cura.webp';
// Importazione del video
import companyVideo from '../../assets/video/video.mp4';

const AboutSection = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressContainerRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);

  // Stato per l'effetto hover
  const [hoveredCard, setHoveredCard] = useState(null);
  const [playButtonHovered, setPlayButtonHovered] = useState(false);
  const [pauseButtonHovered, setPauseButtonHovered] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);

  // Stili inline
  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: 'rgba(28, 36, 54, 0.97)',
      backgroundImage: 'linear-gradient(to bottom, rgba(28, 36, 54, 0.97), rgba(28, 36, 54, 0.9))',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 2px)',
      backgroundSize: '30px 30px',
      zIndex: 1,
      opacity: 0.3
    },
    container: {
      position: 'relative',
      zIndex: 2
    },
    mainTitle: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '30px',
      textAlign: 'center',
      color: 'white',
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
    videoContainer: {
      maxWidth: '860px',
      margin: '0 auto 50px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      aspectRatio: '16/9',
      border: '3px solid rgba(226, 183, 126, 0.5)',
      cursor: 'pointer'
    },
    videoOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'opacity 0.3s ease'
    },
    playButton: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: 'rgba(226, 183, 126, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      border: '3px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
    },
    pauseButton: {
      position: 'absolute',
      right: '20px',
      bottom: '70px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(226, 183, 126, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      border: '3px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      zIndex: 10
    },
    pauseButtonHover: {
      transform: 'scale(1.1)',
      backgroundColor: 'rgba(226, 183, 126, 1)'
    },
    playButtonHover: {
      transform: 'scale(1.1)',
      backgroundColor: 'rgba(226, 183, 126, 1)'
    },
    playIcon: {
      width: '0',
      height: '0',
      borderTop: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderLeft: '25px solid white',
      marginLeft: '8px'
    },
    pauseIcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    pauseBar: {
      width: '6px',
      height: '20px',
      backgroundColor: 'white',
      margin: '0 3px',
      borderRadius: '2px'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    videoLoading: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(28, 36, 54, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '18px'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      border: '4px solid rgba(255,255,255,.3)',
      borderRadius: '50%',
      borderTopColor: '#e2b77e',
      animation: 'spin 1s ease-in-out infinite',
      marginRight: '15px'
    },
    '@keyframes spin': {
      to: { transform: 'rotate(360deg)' }
    },
    videoCaption: {
      fontSize: '16px',
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      marginTop: '15px',
      fontStyle: 'italic'
    },
    subtitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginTop: '40px',
      marginBottom: '30px',
      textAlign: 'center',
      color: 'white',
      fontFamily: "'Poppins', sans-serif"
    },
    description: {
      fontSize: '18px',
      lineHeight: '1.8',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 50px',
      color: 'rgba(255, 255, 255, 0.85)'
    },
    valueCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      height: '100%',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer'
    },
    valueCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
    },
    imageContainer: {
      padding: '30px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.03)'
    },
    valueImage: {
      width: '300px',
      height: '300px',
      objectFit: 'contain'
    },
    contentContainer: {
      padding: '25px 20px 30px'
    },
    valueTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#e2b77e',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif"
    },
    valueDescription: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.75)',
      textAlign: 'center',
      marginBottom: 0
    },
    year: {
      color: '#e2b77e',
      fontWeight: '700'
    },
    highlightText: {
      color: '#e2b77e',
      fontWeight: '500'
    },
    // Controlli video
    videoControls: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      opacity: '0',
      transition: 'opacity 0.3s ease',
    },
    videoControlsVisible: {
      opacity: '1',
    },
    progressContainer: {
      flex: '1',
      height: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '4px',
      cursor: 'pointer',
      position: 'relative',
      marginRight: '15px',
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#e2b77e',
      borderRadius: '4px',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '0%',
      transition: 'width 0.1s linear',
    },
    progressHover: {
      position: 'absolute',
      top: '-25px',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      display: 'none',
    },
    progressHoverVisible: {
      display: 'block',
    },
    timeDisplay: {
      color: 'white',
      fontSize: '14px',
      fontFamily: 'monospace',
    }
  };

  // Funzione per formattare il tempo in mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Aggiorna la barra di progresso durante la riproduzione del video
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    const updateProgress = () => {
      if (!isDragging) {
        const percentage = (video.currentTime / video.duration) * 100;
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${percentage}%`;
        }
        setCurrentTime(video.currentTime);
      }
    };
    
    const handleMetadata = () => {
      setVideoDuration(video.duration);
      setVideoLoaded(true);
    };
    
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleMetadata);
    
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleMetadata);
    };
  }, [isDragging]);

  // Gestione del play/pause del video
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => {
          console.error("Video play failed:", e);
        });
      }
    }
  };

  // Gestione dello scrubbing del video
  const handleProgressClick = (e) => {
    if (!progressContainerRef.current || !videoRef.current) return;
    
    const rect = progressContainerRef.current.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    
    videoRef.current.currentTime = position * videoRef.current.duration;
    
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${position * 100}%`;
    }
  };

  // Gestione del trascinamento della progress bar
  const handleProgressMouseDown = (e) => {
    setIsDragging(true);
    handleProgressClick(e);
    
    const handleMouseMove = (e) => {
      handleProgressClick(e);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Gestione dell'hover sulla barra di progresso
  const handleProgressHover = (e) => {
    if (!progressContainerRef.current || !videoRef.current) return;
    
    const rect = progressContainerRef.current.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const timeAtPosition = position * videoRef.current.duration;
    
    setHoveredValue({
      time: formatTime(timeAtPosition),
      position: e.clientX - rect.left,
    });
  };

  // Effetto per rilevare quando il video è in pausa o in riproduzione
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);
    const handleEnded = () => setIsVideoPlaying(false);
    const handleCanPlayThrough = () => setVideoLoaded(true);
    
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  // Dati per i valori aziendali
  const valuesData = [
    {
      id: 1,
      title: "Innovazione Responsabile",
      description: "L'innovazione responsabile è la chiave per un progresso sostenibile e duraturo.",
      image: responsabileImg
    },
    {
      id: 2,
      title: "Approvvigionamento Etico",
      description: "Scegliere un approvvigionamento etico è una scelta responsabile per un futuro sostenibile.",
      image: menu2Img
    },
    {
      id: 3,
      title: "Proteggere il nostro ambiente",
      description: "Proteggere l'ambiente è proteggere il nostro futuro.",
      image: worldEnvironmentImg
    },
    {
      id: 4,
      title: "Prendersi cura delle persone",
      description: "Cura dedicata al benessere di tutti.",
      image: prendersiCuraImg
    }
  ];

  return (
    <div style={styles.section}>
      <div style={styles.sectionPattern}></div>
      <Container style={styles.container}>
        <h2 style={styles.mainTitle}>
          CHI SIAMO
          <div style={styles.titleDecoration}></div>
        </h2>
        
        {/* Video Presentazione con controlli personalizzati */}
        <div 
          style={styles.videoContainer} 
          onMouseEnter={() => setControlsVisible(true)}
          onMouseLeave={() => setControlsVisible(false)}
        >
          <video 
            ref={videoRef}
            style={styles.video}
            poster="../../assets/images/video-poster.jpg"
            preload="auto"
            onClick={toggleVideo}
          >
            <source src={companyVideo} type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
          
          {!videoLoaded && (
            <div style={styles.videoLoading}>
              <div style={styles.loadingSpinner}></div>
              Caricamento video...
            </div>
          )}
          
          {!isVideoPlaying && videoLoaded && (
            <div style={styles.videoOverlay} onClick={toggleVideo}>
              <div 
                style={{
                  ...styles.playButton,
                  ...(playButtonHovered ? styles.playButtonHover : {})
                }}
                onMouseEnter={() => setPlayButtonHovered(true)}
                onMouseLeave={() => setPlayButtonHovered(false)}
              >
                <div style={styles.playIcon}></div>
              </div>
            </div>
          )}
          
          {/* Pulsante Pausa (visibile solo quando il video è in riproduzione) */}
          {isVideoPlaying && (
            <div 
              style={{
                ...styles.pauseButton,
                ...(pauseButtonHovered ? styles.pauseButtonHover : {}),
                opacity: controlsVisible ? 1 : 0
              }}
              onClick={toggleVideo}
              onMouseEnter={() => setPauseButtonHovered(true)}
              onMouseLeave={() => setPauseButtonHovered(false)}
            >
              <div style={styles.pauseIcon}>
                <div style={styles.pauseBar}></div>
                <div style={styles.pauseBar}></div>
              </div>
            </div>
          )}
          
          {/* Controlli video personalizzati */}
          <div 
            style={{
              ...styles.videoControls,
              ...(controlsVisible || isVideoPlaying ? styles.videoControlsVisible : {})
            }}
          >
            <div 
              ref={progressContainerRef}
              style={styles.progressContainer}
              onClick={handleProgressClick}
              onMouseDown={handleProgressMouseDown}
              onMouseMove={handleProgressHover}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div 
                ref={progressBarRef}
                style={styles.progressBar}
              ></div>
              
              {hoveredValue && (
                <div 
                  style={{
                    ...styles.progressHover,
                    ...styles.progressHoverVisible,
                    left: `${hoveredValue.position}px`
                  }}
                >
                  {hoveredValue.time}
                </div>
              )}
            </div>
            
            <div style={styles.timeDisplay}>
              {formatTime(currentTime)} / {formatTime(videoDuration)}
            </div>
          </div>
        </div>
        <p style={styles.videoCaption}>
          Scopri la storia e i valori di ORSI: tradizione italiana dal 1907
        </p>
        
        <p style={styles.description}>
          Nata a Bologna nel <span style={styles.year}>1907</span>, <span style={styles.highlightText}>ORSI</span> è una delle poche realtà italiane di rilievo nel mercato della detergenza in polvere domestica ed istituzionale. Competiamo per esperienza, tecnologia e qualità con le aziende leader del settore. Oggi, <span style={styles.highlightText}>ORSI</span> investe in Ricerca e Sviluppo per innovare nel campo della detergenza e della cosmesi.
        </p>
        
        <h3 style={styles.subtitle}>Con l'impegno che</h3>
        
        <Row className="g-4">
          {valuesData.map((value) => (
            <Col key={value.id} md={6} lg={3}>
              <div 
                style={{
                  ...styles.valueCard,
                  ...(hoveredCard === value.id ? styles.valueCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard(value.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.imageContainer}>
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    style={styles.valueImage}
                  />
                </div>
                <div style={styles.contentContainer}>
                  <h3 style={styles.valueTitle}>{value.title}</h3>
                  <p style={styles.valueDescription}>{value.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;