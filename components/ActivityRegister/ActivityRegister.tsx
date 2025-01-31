import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ActivityRegister.module.css';

const regionsOfPeru = [
    "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca",
    "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad",
    "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco",
    "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
];

const ActivityRegister: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const activity = location.state;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        documentType: 'DNI',
        documentNumber: '',
        region: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        documentNumber: '',
    });

    const [showModal, setShowModal] = useState(false);

    const getMaxLength = (type: string) => (type === 'DNI' ? 8 : 9);

    const validateDocument = (type: string, value: string) => {
        const maxLength = getMaxLength(type);

        if (value.length > maxLength) {
            return `Máximo ${maxLength} caracteres permitidos.`;
        }

        if (type === 'DNI' && !/^\d{0,8}$/.test(value)) {
            return "El DNI debe contener solo números (máximo 8 dígitos).";
        }

        if ((type === 'CE' || type === 'PASAPORTE') && !/^[A-Za-z0-9]{0,9}$/.test(value)) {
            return "El CE o Pasaporte debe contener solo caracteres alfanuméricos (máximo 9).";
        }

        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'documentType') {
            setFormData({ ...formData, documentType: value, documentNumber: '' });
            setErrors({ ...errors, documentNumber: '' });
        } else if (name === 'documentNumber') {
            const maxLength = getMaxLength(formData.documentType);
            const newValue = value.slice(0, maxLength);

            const errorMsg = validateDocument(formData.documentType, newValue);
            setErrors({ ...errors, documentNumber: errorMsg });

            setFormData({ ...formData, documentNumber: newValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const errorMsg = validateDocument(formData.documentType, formData.documentNumber);
        if (errorMsg) {
            setErrors({ ...errors, documentNumber: errorMsg });
            return;
        }

        console.log('Datos del usuario:', formData);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        navigate('/activities');
    };

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.title}>Regístrate para la actividad: {activity?.title || "Actividad"}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Nombre:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </label>

                <label>Apellidos:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>

                <label>Tipo de Documento:
                    <select name="documentType" value={formData.documentType} onChange={handleChange}>
                        <option value="DNI">DNI</option>
                        <option value="CE">Carné de Extranjería</option>
                        <option value="PASAPORTE">Pasaporte</option>
                    </select>
                </label>

                <label>Número de Documento:
                    <input 
                        type="text" 
                        name="documentNumber" 
                        value={formData.documentNumber} 
                        onChange={handleChange} 
                        required 
                        maxLength={getMaxLength(formData.documentType)}
                    />
                    {errors.documentNumber && <span className={styles.errorText}>{errors.documentNumber}</span>}
                </label>

                <label>Región:
                    <select name="region" value={formData.region} onChange={handleChange} required>
                        <option value="">Seleccione su región</option>
                        {regionsOfPeru.map((region) => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                </label>

                <label>Correo Electrónico:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label>Contraseña:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>

                <button type="submit" className={styles.submitButton} disabled={!!errors.documentNumber}>Registrarse</button>
            </form>

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>¡Registro Exitoso!</h2>
                        <p>Te has inscrito correctamente en la actividad.</p>
                        <button onClick={closeModal} className={styles.modalButton}>Ir a Actividades</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityRegister;
