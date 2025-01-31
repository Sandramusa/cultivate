import {useState} from 'react';
import './VideoCourseSection.css';
import Image from '../../assets/images/VideoCourseSection/video.png';

const VideoCourseSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // URL del video con parámetros para asegurar la reproducción automática
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&controls=1&mute=1";

    return (
        <div className="text-center position-relative">
            {!isPlaying ? (
                <>
                    <img src={Image} alt="Video placeholder" className="img-fluid rounded shadow video-image"/>
                    <div className="play-icon position-absolute top-50 start-50 translate-middle"
                         onClick={() => setIsPlaying(true)}>
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
    );
};

export default VideoCourseSection;
