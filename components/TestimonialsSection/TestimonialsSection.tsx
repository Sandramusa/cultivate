import React, { useState } from 'react';
import './TestimonialsSection.css';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface Testimonial {
    id: number;
    name: string;
    company: string;
    avatar: string;
    text: string;
    rating: number;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: 'Jerome Bell',
        company: 'Google',
        avatar: 'https://i.pravatar.cc/100?img=1',
        text: '“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”',
        rating: 5,
    },
    {
        id: 2,
        name: 'Kristin Watson',
        company: 'Netflix',
        avatar: 'https://i.pravatar.cc/100?img=2',
        text: '“Less than 24h turn around. Easy communication. Did exactly as offered, all around a perfect experience.”',
        rating: 5,
    },
    {
        id: 3,
        name: 'Annette Black',
        company: 'Whatsapp',
        avatar: 'https://i.pravatar.cc/100?img=3',
        text: '“Golio is one of the BEST web designers I\'ve ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent/skills, great customer service, work ethic, and attention to detail. ',
        rating: 5,
    },
];

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="testimonials-section">
            <div className="container testimonial-container">
                <h2 className="testimonials-title">
                    TESTIMONIOS <br /><span className="highlight">RELEVANTES</span>
                </h2>

                <div className="slider-container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            {/* Flechas de navegación */}
                            <div className="carousel-controls-testimonials arrow-buttons-group-testimonials">
                                <button className="arrow-button" onClick={handlePrev}>
                                    <GoArrowLeft />
                                </button>
                                <button className="arrow-button" onClick={handleNext}>
                                    <GoArrowRight />
                                </button>
                            </div>

                            {/* Carrusel de testimonios */}
                            <div className="testimonials-carousel">
                                {testimonialsData.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                                    >
                                        {/* Contenedor de imagen y texto alineados */}
                                        <div className="testimonial-header">
                                            <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                                            <div className="testimonial-info">
                                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                                <span className="testimonial-company">{testimonial.company}</span>
                                            </div>
                                        </div>

                                        <p className="testimonial-text">{testimonial.text}</p>

                                        <div className="testimonial-rating">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <span key={i} className="star">★</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Indicadores */}
                            <div className="dots">
                                {testimonialsData.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`dot ${i === currentIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentIndex(i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
