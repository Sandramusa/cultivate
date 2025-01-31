import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InternalActivity.module.css';
import CampesinoImage from '../../assets/images/Activity/campesino.png';

interface ActivityItem {
  id: number;
  title: string;
  description: string;
  category: 'CACAO' | 'CAFÉ' | 'PALMA';
}

const InternalActivity: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'TODOS' | 'CACAO' | 'CAFÉ' | 'PALMA'>('TODOS');

  const initialData: ActivityItem[] = [
    { id: 1, title: 'Georreferenciación', description: 'Curso sobre prácticas sostenibles', category: 'CACAO' },
    { id: 2, title: 'CONFERENCIA ENERGÍA VERDE', description: 'Evento sobre energía renovable', category: 'CAFÉ' },
    { id: 3, title: 'AGRICULTURA ORGÁNICA', description: 'Beneficios del cultivo orgánico', category: 'PALMA' },
    { id: 4, title: 'AGRICULTURA ORGÁNICA', description: 'Beneficios del cultivo orgánico', category: 'PALMA' }
  ];

  const count = {
    TODOS: initialData.length,
    CACAO: initialData.filter(item => item.category === 'CACAO').length,
    CAFÉ: initialData.filter(item => item.category === 'CAFÉ').length,
    PALMA: initialData.filter(item => item.category === 'PALMA').length
  };

  const filteredData = activeCategory === 'TODOS' ? initialData : initialData.filter(item => item.category === activeCategory);

  return (
    <section className={styles.iactivitySection}>
      <div className={styles.filtersContainer}>
        {Object.keys(count).map(category => (
          <button 
            key={category} 
            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`} 
            onClick={() => setActiveCategory(category as 'TODOS' | 'CACAO' | 'CAFÉ' | 'PALMA')}>
            {category} ({count[category as keyof typeof count]})
          </button>
        ))}
      </div>

      <div className={styles.containerFluid}>
        <div className={styles.row}>
          {filteredData.map(item => (
            <div 
              key={item.id} 
              className={styles.card}
              onClick={() => navigate('/activitylanding', { state: item })} 
              style={{ cursor: 'pointer' }}
            >
              <img src={CampesinoImage} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <button className={styles.primaryButton}>INSCRIBIRME →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalActivity;
