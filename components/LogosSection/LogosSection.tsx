import './LogosSection.css';

// Importa las imágenes
import logo1 from '../../assets/images/LogosSection/axn-logo.png';
import logo2 from '../../assets/images/LogosSection/lenovo-logo.png';
import logo3 from '../../assets/images/LogosSection/slack-logo.png';
import logo4 from '../../assets/images/LogosSection/youtube-logo.png';
import logo5 from '../../assets/images/LogosSection/amazon-logo.png';
import logo6 from '../../assets/images/LogosSection/google-logo.png';
import logo7 from '../../assets/images/LogosSection/microsoft-logo.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const LogosSection: React.FC = () => {
  return (
      <div className="ts-logos-section">
        <div className="ts-logos-container">
          {logos.map((logo, index) => (
              <img src={logo} alt={`Logo ${index + 1}`} className="ts-logo" key={index} />
          ))}
        </div>
      </div>
  );
};

export default LogosSection;
