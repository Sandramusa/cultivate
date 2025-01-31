import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CourseLanding.module.css';
import DefaultImage from '../../assets/images/HeaderSection/background.jpg';
import { FaUsers, FaClock, FaBookOpen } from 'react-icons/fa';

const CourseLanding: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state;

    if (!course) {
        return <p>Curso no encontrado.</p>;
    }

    return (
        <div className={styles.courseContent}>
            {/* Sección de la imagen de portada */}
            <div className={styles.hero}>
                <img src={course.image || DefaultImage} alt={course.title} className={styles.heroImage} />
                <div className={styles.heroOverlay}>
                    <h1 className={styles.title}>{course.title}</h1>
                    <p className={styles.description}>{course.description}</p>
                    <div className={styles.courseMeta}>
                        <span><FaUsers /> 500 Estudiantes</span>
                        <span><FaBookOpen /> 5 Módulos</span>
                        <span><FaClock /> {course.duration}</span>
                    </div>
                </div>
            </div>

            {/* Sección: ¿Qué aprenderás? */}
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>¿Qué aprenderás en el curso?</h2>
                <div className={styles.learnList}>
                    <ul>
                        <li>✔ Mejorarás tus habilidades prácticas.</li>
                        <li>✔ Aprenderás estrategias efectivas.</li>
                        <li>✔ Aplicarás conocimientos en casos reales.</li>
                        <li>✔ Obtendrás certificación al finalizar.</li>
                    </ul>
                    <ul>
                        <li>✔ Accederás a contenido exclusivo.</li>
                        <li>✔ Participarás en foros de discusión.</li>
                        <li>✔ Recibirás apoyo de expertos.</li>
                        <li>✔ Podrás avanzar a tu propio ritmo.</li>
                    </ul>
                </div>
            </div>

            {/* Sección: Módulos del curso */}
            <div className={styles.container}>
                <h2 className={styles.modulesTitle}>Módulos</h2>
                <h2 className={styles.subtitle}>Contenido del curso</h2>

                <div className={styles.modules}>
                    <div className={styles.moduleCard}>
                        <h3>Módulo 1</h3>
                        <p>Introducción y conceptos clave.</p>
                    </div>
                    <div className={styles.moduleCard}>
                        <h3>Módulo 2</h3>
                        <p>Casos prácticos y metodologías.</p>
                    </div>
                    <div className={styles.moduleCard}>
                        <h3>Módulo 3</h3>
                        <p>Evaluación y certificación.</p>
                    </div>
                </div>
            </div>

            {/* Botón para inscribirse */}
            <div className={styles.buttonContainer}>
                <button 
                    className={styles.enrollButton} 
                    onClick={() => navigate('/register', { state: course })}
                >
                    INSCRIBIRSE →
                </button>
            </div>
        </div>
    );
};

export default CourseLanding;
