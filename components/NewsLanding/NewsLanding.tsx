import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './NewsLanding.module.css';
import DefaultImage from '../../assets/images/HeaderSection/background.jpg';

const NewsLanding: React.FC = () => {
    const location = useLocation();
    const newsItem = location.state;

    if (!newsItem) {
        return <p>Noticia no encontrada.</p>;
    }

    return (
        <div className={styles.newsContent}>
            {/* Información del autor */}
            <div className={styles.header}>
                <div className={styles.authorContainer}>
                    <img src={DefaultImage} alt="Autor" className={styles.authorImage} />
                    <div>
                        <p className={styles.authorName}>Andrew Jonson</p>
                        <p className={styles.postDate}>Publicado el {newsItem.date}</p>
                    </div>
                </div>
                <h1 className={styles.title}>{newsItem.title}</h1>
            </div>

            {/* Imagen principal */}
            <img src={newsItem.image || DefaultImage} alt={newsItem.title} className={styles.newsImage} />

            {/* Contenido de la noticia */}
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>{newsItem.title}</h2>
                <p className={styles.text}>{newsItem.description}</p>

                <h2 className={styles.sectionTitle}>Más información</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul className={styles.list}>
                    <li>Detalles adicionales sobre la noticia</li>
                    <li>Fuentes y datos relevantes</li>
                    <li>Impacto en el sector</li>
                </ul>
            </div>
        </div>
    );
};

export default NewsLanding;
