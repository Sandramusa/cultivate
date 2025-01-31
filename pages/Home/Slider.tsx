import { useState, useEffect } from 'react';
import './Slider.css';
import Image from '../../assets/images/HeaderSection/background.jpg'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

const sliderData = [
    {
        image: Image,
        title: 'THE EASIEST WAY TO CREATE YOUR',
        highlight: 'WEBSITE.',
        description:
            'Golo gives you everything you need to create your website in minutes. Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.',
        buttonText: "LET'S WORK TOGETHER",
    },
    {
        image: Image,
        title: 'BUILD YOUR NEXT BIG',
        highlight: 'PROJECT.',
        description:
            'With our ready-to-use templates, you can launch your website faster and smarter.',
        buttonText: 'START NOW',
    },
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    };

    return (
        <div className="home-slider">
            <div
                className="slider-slide"
                style={{ backgroundImage: `url(${sliderData[currentSlide].image})` }}
            >
                <div className="slider-content">
                    <h1 className="slider-title-h1">
                        {sliderData[currentSlide].title} <span>{sliderData[currentSlide].highlight}</span>
                    </h1>
                    <p className="slider-sub-title">{sliderData[currentSlide].description}</p>
                    <button className="slider-button">
                        {sliderData[currentSlide].buttonText}
                        <MdKeyboardArrowRight />
                    </button>
                </div>
                <div className="slider-controls">
                    <button onClick={handlePrev} className="slider-btn prev-btn">
                        <GoArrowLeft />
                    </button>
                    <button onClick={handleNext} className="slider-btn next-btn">
                        <GoArrowRight />

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
