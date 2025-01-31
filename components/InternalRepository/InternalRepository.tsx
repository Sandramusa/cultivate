import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InternalRepository.module.css';

import ManitiImage from '../../assets/images/repositories/maniti.jpg';
import CafeCircularImage from '../../assets/images/repositories/cafecircular.png';
import CafeImage from '../../assets/images/repositories/cafe.jpg';
import EstudioImage from '../../assets/images/repositories/estudio.png';
import CafeCircularPDF from '../../assets/repositories/cafecircular.pdf';
import ResumenEjecutivo from '../../assets/repositories/resumenejecutivo.pdf'

interface RepositoryItem {
  id: number;
  title: string;
  description: string;
  details: string;
  category: 'ORGANIZACIONES' | 'PRODUCTORES' | 'TÉCNICOS';
  isPdf: boolean;
  image: string;
  pdfUrl?: string;
  videoUrl?: string; // Nuevo campo para video de YouTube
}

const InternalRepository: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'TODOS' | 'ORGANIZACIONES' | 'PRODUCTORES' | 'TÉCNICOS'>('TODOS');

  const initialData: RepositoryItem[] = [
    {
      id: 1,
      title: 'Manití: Video resumido',
      description: 'Video sobre el proyecto Manití',
      details: 'La cuenca del río Manití es un enclave de biodiversidad...',
      category: 'ORGANIZACIONES',
      isPdf: false,
      image: ManitiImage,
      videoUrl: 'https://www.youtube.com/embed/Jx5Bz_OK1KU',
      pdfUrl: undefined
    },
    {
      id: 2,
      title: 'Hoja informativa café circular',
      description: 'El proyecto Café Circular busca implementar la economía circular...',
      details: 'El proyecto Café Circular busca implementar la economía circular...',
      category: 'PRODUCTORES',
      isPdf: true,
      image: CafeCircularImage,
      pdfUrl: CafeCircularPDF
    },
    {
      id: 3,
      title: 'Georreferenciación',
      description: 'Video sobre la experiencia de Amazon...',
      details: 'Video sobre la experiencia de Amazon Innovatech...',
      category: 'TÉCNICOS',
      isPdf: false,
      videoUrl: 'https://www.youtube.com/embed/hexjWIT3IA4',
      image: CafeImage,
      pdfUrl: undefined
    },
    {
      id: 4,
      title: 'Estudio de Impacto de la EUDR',
      description: 'Evaluación sobre el impacto del Reglamento de la UE...',
      details: 'Estudio sobre los efectos del Reglamento...',
      category: 'ORGANIZACIONES',
      isPdf: true,
      image: EstudioImage,
      pdfUrl: ResumenEjecutivo
    }
  ];

  const count = {
    TODOS: initialData.length,
    ORGANIZACIONES: initialData.filter(item => item.category === 'ORGANIZACIONES').length,
    PRODUCTORES: initialData.filter(item => item.category === 'PRODUCTORES').length,
    TÉCNICOS: initialData.filter(item => item.category === 'TÉCNICOS').length
  };

  const filteredData = activeCategory === 'TODOS' ? initialData : initialData.filter(item => item.category === activeCategory);

  const handleAccessClick = (item: RepositoryItem) => {
    navigate('/repositorylanding', { state: item });
  };

  return (
    <section className={styles.repositorySection}>
      <p className="group-description">
        <strong>¿A qué grupo pertenece usted?</strong> <br />
        Filtre los cursos por categoría
      </p>
      <div className={styles.filtersContainer}>
        {Object.keys(count).map(category => (
          <button
            key={category}
            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category as 'TODOS' | 'ORGANIZACIONES' | 'PRODUCTORES' | 'TÉCNICOS')}
          >
            {category} ({count[category as keyof typeof count]})
          </button>
        ))}
      </div>

      <div className={styles.containerFluid}>
        <div className={styles.row}>
          {filteredData.map(item => (
            <div key={item.id} className={styles.card} onClick={() => handleAccessClick(item)} style={{ cursor: 'pointer' }}>
              <img src={item.image} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <button className={styles.primaryButton}>Acceder →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalRepository;
