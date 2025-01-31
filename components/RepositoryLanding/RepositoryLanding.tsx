import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './RepositoryLanding.module.css';
import DefaultImage from '../../assets/images/HeaderSection/background.jpg';

const RepositoryLanding: React.FC = () => {
    const location = useLocation();
    const repository = location.state;

    if (!repository) {
        return <p>Repositorio no encontrado.</p>;
    }

    return (
        <div className={styles.repositoryContent}>
            <div className={styles.hero}>
                <h1 className={styles.title}>{repository.title}</h1>
            </div>

            <div className={styles.imageContainer}>
                {repository.videoUrl ? (
                <div className={styles.videoContainer}>
                <iframe
                  src={repository.videoUrl}
                  title="Video de YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
                ) : (
                    <img src={repository.image || DefaultImage} alt={repository.title} className={styles.heroImage} />
                )}
            </div>



            <div className={styles.contentContainer}>
                <h2 className={styles.sectionTitle}>Información del Repositorio</h2>
                <p className={styles.repositoryText}>{repository.details}</p>

                {/* Botón de descarga SOLO si tiene PDF */}
                {repository.isPdf && repository.pdfUrl && (
                    <div className={styles.buttonContainer}>
                        <a href={repository.pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                            DESCARGAR PDF →
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RepositoryLanding;
