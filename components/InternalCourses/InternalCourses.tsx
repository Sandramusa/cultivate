import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InternalCourses.css';
import { FaRegThumbsUp } from "react-icons/fa6";
import { BiMessageRoundedDots } from "react-icons/bi";

// Importamos imágenes correctamente
import HaciendoNegocioImg from '../../assets/images/repositories/haciendonegocio.png';
import IntroduccionImg from '../../assets/images/repositories/introduccion.png';
import ProgramaImg from '../../assets/images/repositories/programa.png';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  modality: string;
  image: string;
  category: 'ORGANIZACIONES' | 'PRODUCTORES' | 'TÉCNICOS';
}

const initialCourses: Course[] = [
  {
    id: 1,
    title: 'Haciendo crecer mi negocio',
    description: 'Existen herramientas que le ayudarán a lograr...',
    duration: '4h',
    modality: 'Virtual',
    image: HaciendoNegocioImg, // Usamos la imagen importada
    category: 'PRODUCTORES'
  },
  {
    id: 2,
    title: 'Introducción a la producción libre de deforestación para organizaciones',
    description: 'Este curso de formación virtual busca que las organizaciones...',
    duration: '6h',
    modality: 'Presencial',
    image: IntroduccionImg,  // Usamos la imagen importada
    category: 'ORGANIZACIONES'
  },
  {
    id: 3,
    title: 'Programa Asómbrate para organizaciones y la compensación por captura de carbono',
    description: 'Este curso de formación virtual busca que...',
    duration: '8h',
    modality: 'Virtual',
    image: ProgramaImg,  // Usamos la imagen importada
    category: 'TÉCNICOS'
  }
];

const InternalCourses: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'TODOS' | 'ORGANIZACIONES' | 'PRODUCTORES' | 'TÉCNICOS'>('TODOS');

  const count = {
    TODOS: initialCourses.length,
    ORGANIZACIONES: initialCourses.filter(course => course.category === 'ORGANIZACIONES').length,
    PRODUCTORES: initialCourses.filter(course => course.category === 'PRODUCTORES').length,
    TÉCNICOS: initialCourses.filter(course => course.category === 'TÉCNICOS').length
  };

  const filteredCourses = activeCategory === 'TODOS'
    ? initialCourses
    : initialCourses.filter(course => course.category === activeCategory);

  return (
    <section className="internal-courses-section">
      <h2 className="icourses-title">
        <span className="highlight">CULTIVA</span> <br />
        <span>TUS CONOCIMIENTOS</span>
      </h2>
      <p className="icourses-subtitle">Conoce la oferta educativa para productores, técnicos y profesionales de la sostenibilidad</p>
      
      <p className="group-description">
        <strong>¿A qué grupo pertenece usted?</strong> <br />
        Filtre los cursos por categoría
      </p>

      <div className="filters-container">
        {Object.keys(count).map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category as 'TODOS' | 'ORGANIZACIONES' | 'PRODUCTORES' | 'TÉCNICOS')}
          >
            {category} ({count[category as keyof typeof count]})
          </button>
        ))}
      </div>

      <div className="icourses-container">
        {filteredCourses.map((course) => (
          <div key={course.id} className="icourse-card">
            <div className="icourse-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="icourse-info">
              <div className="icourse-meta">
                <span><FaRegThumbsUp fontSize={"1.2em"} /> Duración: {course.duration}</span>
                <span><BiMessageRoundedDots fontSize={"1.2em"} /> Modalidad: {course.modality}</span>
              </div>
              <h3 className='icourse-titulo'>{course.title}</h3>
              <p className='icourse-texto'>{course.description}</p>
              <button
                className="icourse-button"
                onClick={() => navigate('/course/1', { state: course })}
              >
                Ver Curso →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternalCourses;
