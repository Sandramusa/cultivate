import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import "./CourseRegistrationModal.css";
import {useNavigate} from "react-router-dom";

const CourseRegistrationModal = ({ show, handleClose }) => {
    const navigate = useNavigate();

    const [requestSchedule, setRequestSchedule] = useState(false);

    return (
        <Modal size={"lg"} show={show} onHide={handleClose} centered className="p-5">
            <Modal.Header closeButton className="border-0">
                <Modal.Title className="w-100 text-center text-success fw-bold">
                    Regístrate para el curso
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <h5 className="text-center text-danger fw-bold">
                    INTRODUCCIÓN A LA PRODUCCIÓN LIBRE DE
                    <br /> DEFORESTACIÓN PARA ORGANIZACIONES
                </h5>
                <Form>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre" />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Apellidos:</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese sus apellidos" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Edad:</Form.Label>
                                <Form.Control type="number" placeholder="Ingrese su edad" />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Género:</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su género" />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label>Número de Teléfono:</Form.Label>
                        <div className="d-flex align-items-center">
                            <Button variant="light" className="me-2"><BsTelephoneFill /></Button>
                            <Form.Control type="text" placeholder="Ingrese su número" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Deseo solicitar mi horario"
                            onChange={() => setRequestSchedule(!requestSchedule)}
                        />
                    </Form.Group>
                    {requestSchedule && (
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Horario para enviar curso:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese horario" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Fecha de Inicio y Fin del curso:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese fechas" />
                                </Form.Group>
                            </div>
                        </div>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 pt-0">
                <Button variant="success" className="w-100"
                        onClick={() => navigate('/cart')}
                >
                    SOLICITAR CURSO →
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CourseRegistrationModal;
