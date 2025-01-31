import React, {useRef} from 'react';
import './CoursesSection.css';
import Image from '../../assets/images/HeaderSection/background.jpg';
import {FaRegThumbsUp} from "react-icons/fa6";
import {BiMessageRoundedDots} from "react-icons/bi";
import {GoArrowRight, GoArrowLeft} from "react-icons/go";
import {useNavigate} from "react-router-dom";

const courses = [
    {
        id: 1,
        title: 'Hoja informativa café circular',
        duration: 'Duración: 4h',
        modality: 'Modalidad: Virtual',
        description:
            'El proyecto Café Circular busca implementar la economía circular en la cadena de valor del café en San Martín, Perú (2021-2024).',
        image: Image,
        featured: true,
    },
    {
        id: 2,
        title: 'Hoja informativa café circular',
        duration: 'Duración: 4h',
        modality: 'Modalidad: Virtual',
        description:
            'El proyecto Café Circular busca implementar la economía circular en la cadena de valor del café en San Martín, Perú (2021-2024).',
        image: Image,
        featured: false,
    },
    {
        id: 3,
        title: 'Hoja informativa café circular',
        duration: 'Duración: 4h',
        modality: 'Modalidad: Virtual',
        description:
            'El proyecto Café Circular busca implementar la economía circular en la cadena de valor del café en San Martín, Perú (2021-2024).',
        image: Image,
        featured: false,
    },
];

const CoursesSection: React.FC = () => {
    const navigate = useNavigate();

    const carouselRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({left: -350, behavior: 'smooth'});
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({left: 350, behavior: 'smooth'});
        }
    };

    return (
        <section className="courses-section  py-5 ">
            {/* Título */}
            <div className="container  ">
                <div className="row pb-5">

                    <h2 className="slider-title-h1 courses-title ">
                        <span>CURSOS</span> <br/>
                        <span className="highlight">ACTUALES</span>
                    </h2>

                    {/* Texto descriptivo */}
                    <p className="courses-paragraph ">
                        Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique.
                        Pellentesque <br/> quis augue ac mauris posuere vehicula.
                    </p>

                    {/* Contenedor del carrusel */}
                    <div className="slider-container">

                        <div className="row justify-content-center">
                            <div className="col-md-10 ">

                                {/* Flechas de navegación */}
                                <div className="arrow-buttons-group-courses">
                                    <button className="arrow-button-courses" onClick={handlePrev}>
                                        <GoArrowLeft/>
                                    </button>
                                    <button className="arrow-button-courses" onClick={handleNext}>
                                        <GoArrowRight/>
                                    </button>
                                </div>

                                {/* Tarjetas de cursos */}
                                <div className="cards-wrapper-courses d-flex" ref={carouselRef}>
                                    {courses.map((course) => (
                                        <div key={course.id} className="course-card">
                                            <div className="course-image">
                                                <img src={course.image} alt={course.title} className="img-fluid"/>
                                                {course.featured && <span className="badge">Featured</span>}
                                            </div>
                                            <div className="course-info">
                                                <div className="course-meta justify-align-center">
                          <span className="d-flex align-items-center"><FaRegThumbsUp
                              fontSize={"1.2em"}/> &nbsp; {course.duration}</span>
                                                    <span className="d-flex align-items-center"><BiMessageRoundedDots
                                                        fontSize={"1.2em"}/> &nbsp; {course.modality}</span>
                                                </div>
                                                <h4 className="course-name">{course.title}</h4>
                                                <p className="course-description">{course.description}</p>

                                                <button
                                                    className="icourse-button"
                                                    onClick={() => navigate('/course/1', {state: course})}
                                                >
                                                    Ver Curso →
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;