import './ContactForm.css';
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinLine } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const ContactForm = () => {
    return (
        <div className="pt-5 pb-5 contact-section-form">
            <div className="contact-wrapper container"                    >
                <div className="contact-background rounded-4 contact-shadow-lg row-form">
                    <div className="row no-gutters ">
                        {/* Sección de información (lado izquierdo) */}
                        <div className="col-md-5 contact-info p-4">

                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-9 pt-5">

                                    <h2 className="text-white mb-4">Get in touch</h2>

                                    {/* Email */}
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-circle">
                                            <TfiEmail size={25} />
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-1 sub-title text-uppercase text-white-50">Correo Electrónico</p>
                                            <p className="mb-0 sub-title-desc text-white">info@golio.com</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-circle">
                                            <FiPhoneCall size={25} />
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-1 sub-title text-uppercase text-white-50">Número de teléfono</p>
                                            <p className="mb-0 sub-title-desc text-white">+1-202-555-0138</p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-circle">
                                            <PiMapPinLine size={25} />
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-1 sub-title text-uppercase text-white-50">Dirección</p>
                                            <p className="mb-0 sub-title-desc-1 text-white">901 N Pitt Str., Suite 170<br />Alexandria, VA
                                                22314, USA
                                            </p>
                                        </div>
                                    </div>

                                    {/* Social icons */}
                                    <div className="mt-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="social-line"></div>
                                            <span className="text-white ms-2">Conecta con nosotros:</span>
                                        </div>
                                        <div className="d-flex  gap-3">
                                            <div className="social-icon-bg">
                                                <FaFacebookF className="social-icon" />
                                            </div>
                                            <div className="social-icon-bg">
                                                <FaTwitter className="social-icon" />
                                            </div>
                                            <div className="social-icon-bg">
                                                <FaLinkedinIn className="social-icon" />
                                            </div>
                                            <div className="social-icon-bg">
                                                <FaInstagram className="social-icon" />
                                            </div>
                                            <div className="social-icon-bg">
                                                <FaDribbble className="social-icon" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-1"></div>
                            </div>

                        </div>


                        {/* Sección del formulario (lado derecho) */}
                        <div className="col-md-7  bg-white  rounded-end form-left">
                            <form className="contact-form">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name" className="form-label">Nombres y apellidos</label>
                                        <input type="text" id="name" className="form-control" placeholder="Nombres y apellidos" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label">Correo Eletrónico </label>
                                        <input type="email" id="email" className="form-control"
                                               placeholder="Correo Eletrónico" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Asunto</label>
                                    <input type="text" id="subject" className="form-control" placeholder="Asunto" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="region" className="form-label">Región</label>
                                    <select id="region" className="form-control">
                                        <option value="">Seleccione una región</option>
                                        <option value="Amazonas">Amazonas</option>
                                        <option value="Áncash">Áncash</option>
                                        <option value="Apurímac">Apurímac</option>
                                        <option value="Arequipa">Arequipa</option>
                                        <option value="Ayacucho">Ayacucho</option>
                                        <option value="Cajamarca">Cajamarca</option>
                                        <option value="Callao">Callao</option>
                                        <option value="Cusco">Cusco</option>
                                        <option value="Huancavelica">Huancavelica</option>
                                        <option value="Huánuco">Huánuco</option>
                                        <option value="Ica">Ica</option>
                                        <option value="Junín">Junín</option>
                                        <option value="La Libertad">La Libertad</option>
                                        <option value="Lambayeque">Lambayeque</option>
                                        <option value="Lima">Lima</option>
                                        <option value="Loreto">Loreto</option>
                                        <option value="Madre de Dios">Madre de Dios</option>
                                        <option value="Moquegua">Moquegua</option>
                                        <option value="Pasco">Pasco</option>
                                        <option value="Piura">Piura</option>
                                        <option value="Puno">Puno</option>
                                        <option value="San Martín">San Martín</option>
                                        <option value="Tacna">Tacna</option>
                                        <option value="Tumbes">Tumbes</option>
                                        <option value="Ucayali">Ucayali</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Mensaje</label>
                                    <textarea id="message" className="form-control" rows={4}
                                              placeholder="Cuéntanos..."></textarea>
                                </div>
                                <button type="submit"
                                        className="btn btn-orange d-flex align-items-center justify-content-center gap-2">
                                    ENVIAR MENSAJE
                                    <GoArrowRight className="right-arrow" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
