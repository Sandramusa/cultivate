import './HeaderSectionCourse.css';
import defaultBackgroundImage from '../../assets/images/HeaderSection/background.jpg'; // Imagen por defecto

interface HeaderSectionProps {
    title?: string;
    subTitle?: string;
    titleBgColor?: string;
    backgroundImage?: string;
    titleColor?: string;
}

const HeaderSectionCourse: React.FC<HeaderSectionProps> = ({
                                                               title = "TÍTULO",
                                                               subTitle = "TÍTULO",
                                                               backgroundImage = defaultBackgroundImage,
                                                               titleColor = 'white'
                                                           }) => {
    return (
        <div
            className="header-section-course"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="header-section-course__overlay">
                <h1
                    className="header-section-course__title"
                    style={{color: titleColor}}
                >
                    {title}
                </h1>
                <p
                    className="header-section-course__subtitle header-section-course__title"
                    style={{color: titleColor}}
                >
                    {subTitle}
                </p>
            </div>
        </div>
    );
};

export default HeaderSectionCourse;
