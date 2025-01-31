import './HeaderSection.css';
import defaultBackgroundImage from '../../assets/images/HeaderSection/background.jpg'; // Imagen por defecto

interface HeaderSectionProps {
    title?: string; // Prop opcional
    titleBgColor?: string; // Prop opcional
    backgroundImage?: string; // Prop opcional
    titleColor?: string; // Prop opcional
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    title = "TÍTULO", // Valor por defecto del título
    titleBgColor = 'rgba(93, 37, 58, 0.8)', // Valor por defecto del fondo del título
    backgroundImage = defaultBackgroundImage, // Valor por defecto de la imagen
    titleColor = 'white' // Valor por defecto del color del texto
}) => {
    return (
        <div
            className="header-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="header-content">
                <h1
                    className="header-title"
                    style={{ backgroundColor: titleBgColor, color: titleColor }}
                >
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default HeaderSection;
