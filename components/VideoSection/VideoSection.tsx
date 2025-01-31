import { useState } from 'react';
import './VideoSection.css';
import Image from '../../assets/images/VideoSection/video-image.png';
import PlayIcon from '../../assets/images/VideoSection/play-icon.png';

const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // URL del video con parámetros para asegurar la reproducción automática
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&controls=1&mute=1";

    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Columna del contenido */}
                <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0 left-col">
                    <h1 className="video-title">
                        LOREM IPSUM <br />
                        <span className="highlight">LOREM</span>
                    </h1>
                    <p>
                        Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique.
                        Pellentesque quis augue ac mauris posuere vehicula.
                    </p>
                    <div className="info-box p-3 rounded shadow-sm">
                        <h4 className="fw-bold">User Experience Design Team.</h4>
                        <p>
                            Etiam sed vulputate nisi, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque.
                        </p>
                    </div>
                </div>

                {/* Columna de la imagen / video */}
                <div className="col-lg-6 text-center position-relative">
                    {!isPlaying ? (
                        <>
                            <img src={Image} alt="Video placeholder" className="img-fluid rounded shadow video-image" />
                            <div className="play-icon position-absolute top-50 start-50 translate-middle" onClick={() => setIsPlaying(true)}>
                                <img src={PlayIcon} alt="Play Button" className="play-button-img" />
                            </div>
                        </>
                    ) : (
                        <div className="video-container">
                            <iframe
                                key={videoUrl} // Asegura que el video se recargue correctamente
                                width="100%"
                                height="600px"
                                src={videoUrl}
                                title="YouTube video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
