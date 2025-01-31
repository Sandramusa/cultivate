import React, { useState } from 'react';
import styles from './CourseRegister.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import campesinoImage from '../../assets/images/Activity/campesino.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const countryDialCodes = [
    { code: "+51", country: "Perú", flag: "pe", maxLength: 9 }
];

const regionsOfPeru = [
    "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca",
    "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad",
    "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco",
    "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
];

const generateScheduleOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 18; hour++) {
        options.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    return options;
};

const SCHEDULE_OPTIONS = generateScheduleOptions();

const CourseRegister: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const course = location.state;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        documentType: 'DNI',
        documentNumber: '',
        region: '',
        schedule: SCHEDULE_OPTIONS[0],
        email: '',
        password: '',
        phoneCode: '+51',
        phoneNumber: '',
    });
    const validateForm = () => {
        let newErrors: Record<string, string> = {};

        // Validar nombres y apellidos
        if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
            newErrors.firstName = "Solo se permiten letras.";
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
            newErrors.lastName = "Solo se permiten letras.";
        }

        // Validar número de documento
        if (formData.documentType === "DNI" && !/^\d{8}$/.test(formData.documentNumber)) {
            newErrors.documentNumber = "El DNI debe tener exactamente 8 dígitos.";
        }
        if (formData.documentType === "CE" && !/^\d{9,12}$/.test(formData.documentNumber)) {
            newErrors.documentNumber = "El Carné de Extranjería debe tener entre 9 y 12 dígitos.";
        }
        if (formData.documentType === "PASAPORTE" && !/^[A-Za-z0-9]{6,9}$/.test(formData.documentNumber)) {
            newErrors.documentNumber = "El Pasaporte debe tener entre 6 y 9 caracteres alfanuméricos.";
        }

        // Validar número de teléfono
        const maxLength = countryDialCodes.find(c => c.code === formData.phoneCode)?.maxLength || 9;
        if (!/^\d+$/.test(formData.phoneNumber) || formData.phoneNumber.length !== maxLength) {
            newErrors.phoneNumber = `Debe contener exactamente ${maxLength} dígitos.`;
        }

        // Validar correo electrónico
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Ingrese un correo válido.";
        }

        // Validar contraseña
        if (formData.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newErrors: Record<string, string> = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = "Este campo es obligatorio.";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        navigate('/course'); // ✅ Redirige a la página de cursos después de cerrar el modal
    };

    return (
        <div className={styles.pageContainer}>
            {/* 📌 Banner con imagen de fondo */}
            <section className={styles.banner} style={{ backgroundImage: `url(${campesinoImage})` }}>
                <div className={styles.bannerContent}>
                    <button className={styles.backButton} onClick={() => navigate('/course')}>
                        <FaArrowLeft className={styles.arrowIcon} /> Regresar a todos los Cursos
                    </button>

                    <h1 className={styles.bannerTitle}>Introducción a la producción libre de deforestación</h1>
                    <p className={styles.bannerSubtitle}>Aprende a implementar estrategias sostenibles en tu organización</p>
                </div>
            </section>

            {/* 📌 Formulario */}
            <div className={styles.registerContainer}>
                <span className={styles.registerTitle}>Regístrate para el curso</span>
                <span className={styles.courseTitle}>{course?.title || "Curso"}</span>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* 📌 Fila 1: Nombre y Apellidos */}
                    <div className={styles.formRow}>
                        <label>
                            Nombre:
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </label>
                        <label>
                            Apellidos:
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </label>
                    </div>

                    {/* 📌 Fila 2: Tipo de Documento, Número de Documento y Región */}
                    <div className={styles.formRow}>
                        <label>
                            Tipo de Documento:
                            <select name="documentType" value={formData.documentType} onChange={handleChange}>
                                <option value="DNI">DNI</option>
                                <option value="CE">Carné de Extranjería</option>
                                <option value="PASAPORTE">Pasaporte</option>
                            </select>
                        </label>
                        <label>
                            Número de Documento:
                            <input type="text" name="documentNumber" value={formData.documentNumber} onChange={handleChange} required />
                        </label>
                        <label>
                            Región:
                            <select name="region" value={formData.region} onChange={handleChange} required>
                                <option value="">Seleccione su región</option>
                                {regionsOfPeru.map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {/* 📌 Fila 3: Horario y Teléfono */}
                    <div className={styles.formRow}>
                        <label>
                            Horario para enviar curso:
                            <select name="schedule" value={formData.schedule} onChange={handleChange} required>
                                {SCHEDULE_OPTIONS.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <label>Número de Teléfono:
                            <div className={styles.phoneContainer}>
                                <img src="https://flagcdn.com/w40/pe.png" alt="Bandera de Perú" className={styles.phoneFlag} />
                                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className={styles.phoneInput} />
                            </div>
                        </label>

                    </div>

                    {/* 📌 Fila 4: Correo y Contraseña */}
                    <div className={styles.formRow}>
                        <label>
                            Correo Electrónico:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>
                        <label>
                            Contraseña:
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </label>
                    </div>

                    {/* 📌 Botón de registro */}
                    <button type="submit" className={styles.submitButton}>
                        REGISTRARME     <FaArrowRight className={styles.arrowIcon} />
                    </button>
                </form>
            </div>

            {/* 📌 Modal de confirmación */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>¡Registro Exitoso!</h2>
                        <p>Te has inscrito correctamente en el curso.</p>
                        <button onClick={closeModal} className={styles.modalButton}>Ir a Cursos</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseRegister;
