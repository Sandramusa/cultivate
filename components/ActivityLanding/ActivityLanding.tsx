import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ActivityLanding.module.css';
import DefaultImage from '../../assets/images/Activity/campesino.png'; // Asegúrate de que esta ruta sea correcta
import AuthorImage from '../../assets/images/author.png';

const ActivityLanding: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activity = location.state;

  if (!activity) {
    return <p>Actividad no encontrada.</p>;
  }

  return (
    <div className={styles.activityContent}>
      {/* Sección del autor y título */}
      <header className={styles.header}>
        <div className={styles.authorContainer}>
          <img src={AuthorImage} alt="Autor" className={styles.authorImage} />
          <div>
            <p className={styles.authorName}>Andrew Jonson</p>
            <p className={styles.postDate}>Publicado el 27 de enero de 2025</p>
          </div>
        </div>
        <h1 className={styles.title}>{activity.title}</h1>
      </header>

      {/* Imagen de la actividad */}
      <div className={styles.imageContainer}>
        <img src={activity.image || DefaultImage} alt={activity.title} className={styles.activityImage} />
      </div>

      {/* Contenido */}
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>{activity.title}</h2>
        <p className={styles.text}>{activity.description}</p>

        <h2 className={styles.sectionTitle}>Más información</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ul className={styles.list}>
          <li>Detalles adicionales sobre el evento</li>
          <li>Ubicación y horarios</li>
          <li>Requisitos para la inscripción</li>
        </ul>

        {/* Botón de Inscribirme */}
        <div className={styles.buttonContainer}>
          <button 
            className={styles.inscribeButton} 
            onClick={() => navigate('/activityregister', { state: activity })}
          >
            INSCRIBIRME →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityLanding;
