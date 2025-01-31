import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logos/logo-green.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Sección visible solo en pantallas grandes */}
                    <div className="col-md-3 col-12 footer-section d-none d-md-block">
                        <div className="footer-logo">
                            <img src={logo} alt="Cultivate Logo"/>
                        </div>
                        <p>
                            We build readymade websites, mobile applications, <br/> and elaborate online business
                            services.
                        </p>
                    </div>

                    {/* Sección visible solo en pantallas pequeñas */}
                    <div className="col-12 footer-section d-md-none text-center">
                        <div className="footer-logo">
                            <img src={logo} alt="Cultivate Logo" />
                        </div>
                        <p>
                            We build readymade websites, mobile applications, and elaborate online business services.
                        </p>
                    </div>

                    <div className="col-md-1"></div>
                    {/* Columna 2: Links */}
                    <div className="col-md-5 col-12 footer-section footer-links">
                        <ul>
                            <li><a href="#">Terminos y condiciones</a></li>
                            <li><a href="#">Libro de reclamaciones</a></li>
                            <li><a href="#">Polticas de privacidad</a></li>
                            <li><a href="#">Historias de Impacto</a></li>
                            <li><a href="#">Pricing Plans</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-1"></div>
                    {/* Columna 3: Contacto */}
                    <div className="col-md-2 col-12 footer-section footer-contact">
                        <p><a href="mailto:info@golio.com">info@golio.com</a></p>
                        <p>901 N Pitt Str., Suite 170 <br/> Alexandria, VA 22314, USA</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom">
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                    <p>&copy; 2025 - Musa</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
