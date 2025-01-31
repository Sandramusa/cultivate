import {Card, Nav, Tab, Form, Button, InputGroup,ProgressBar} from "react-bootstrap";
import { useState } from "react";
import "./ProfileSettings.css";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import Image from "../../assets/images/Profile/course.png"

const courses = [
  {
    id: 1,
    title: "How to Budget and Forecast for your Business",
    progress: 50,
    lessonsCompleted: 2,
    totalLessons: 4,
    image: Image
  },
  {
    id: 2,
    title: "How to Budget and Forecast for your Business",
    progress: 50,
    lessonsCompleted: 2,
    totalLessons: 4,
    image: Image
  },
  {
    id: 3,
    title: "How to Budget and Forecast for your Business",
    progress: 50,
    lessonsCompleted: 2,
    totalLessons: 4,
    image: Image
  },
  {
    id: 4,
    title: "How to Budget and Forecast for your Business",
    progress: 50,
    lessonsCompleted: 2,
    totalLessons: 4,
    image: Image
  },
  {
    id: 5,
    title: "How to Budget and Forecast for your Business",
    progress: 50,
    lessonsCompleted: 2,
    totalLessons: 4,
    image: Image
  },
  {
    id: 6,
    title: "How to Budget and Forecast for your Business",
    progress: 50,
    lessonsCompleted: 2,
    totalLessons: 4,
    image: Image
  }
];

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
      <div className="container my-5 d-flex ">
        {/* Sidebar Menu */}
        <Nav variant="pills" className="flex-column me-4" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="general">My Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="courses">Cursos</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Content Section */}
        <Tab.Content className="flex-grow-1 border-start  ps-3">
          {/* General Information */}
          <Tab.Pane eventKey="general" active={activeTab === "general"}>
            <Card className="p-4  border-bottom border-0 rounded-0">
              <h4>General</h4>
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>First name*</Form.Label>
                      <Form.Control type="text" defaultValue="Marley" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Last name*</Form.Label>
                      <Form.Control type="text" defaultValue="Botosh" />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control type="email" defaultValue="marleybotosh89@gmail.com" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Phone*</Form.Label>
                      <Form.Control type="text" defaultValue="+1 234 5678 8890" />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Biographical Info</Form.Label>
                  <Form.Control as="textarea" rows={3} defaultValue="A series of videos from ThimPress, give you a detailed tutorial to create an LMS Website with LearnPress – LMS & Education WordPress Plugin." />
                </Form.Group>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Facebook profile</Form.Label>
                      <Form.Control type="text" defaultValue="https://www.facebook.com/@marley89" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Twitter profile</Form.Label>
                      <Form.Control type="text" defaultValue="https://www.twitter.com/@marley89" />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Youtube profile</Form.Label>
                      <Form.Control type="text" defaultValue="https://www.youtube.com/@marley89" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Linkedin</Form.Label>
                      <Form.Control type="text" defaultValue="https://www.linkedin.com/@marley89" />
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </Card>
            <Card className="p-4 border-bottom border-0 rounded-0 mt-4">
              <h4>Password</h4>
              <Form>
                <div className="row">
                  {['current', 'new', 'confirm'].map((field, index) => (
                      <div className="col-md-4" key={index}>
                        <Form.Group className="mb-3">
                          <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)} password</Form.Label>
                          <InputGroup>
                            <Form.Control type={showPassword[field] ? "text" : "password"} />
                            <Button variant="outline-secondary" onClick={() => togglePasswordVisibility(field)}>
                              {showPassword[field] ? <FaEyeSlash /> : <FaEye />}
                            </Button>
                          </InputGroup>
                        </Form.Group>
                      </div>
                  ))}
                </div>
                <Button variant="success">Save Changes</Button>
              </Form>
            </Card>

            <Card className="p-4  border-0 rounded-0 mt-4">
              <h4>Privacy</h4>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Check type="checkbox" label="Public your profile courses attended." />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Check type="checkbox" label="Public your profile quizzes." defaultChecked />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Check type="checkbox" label="Public your profile." />
                </Form.Group>
                <Button variant="success">Save Changes</Button>
              </Form>
            </Card>
          </Tab.Pane>
        </Tab.Content>
        <Tab.Content className="flex-grow-1" style={{ maxWidth: "61vw"}}>
          {/* Courses Section */}
          <Tab.Pane eventKey="courses" active={activeTab === "courses"}>
            <h4 className="mb-3">Tus Cursos</h4>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link active>Enrolled courses (20)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Active courses (0)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Completed courses (4)</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="row">
              {courses.map((course) => (
                  <div key={course.id} className="col-md-4 mb-4">
                    <Card className="shadow-sm border-0">
                      <Card.Img variant="top" src={course.image} />
                      <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <p className="text-muted">Completed lessons: {course.lessonsCompleted}/{course.totalLessons} <span className="float-end">{course.progress}%</span></p>
                        <ProgressBar now={course.progress} variant="success" className="mb-3" />
                        <Button variant="primary" className="w-100">Continuar Curso</Button>
                      </Card.Body>
                    </Card>
                  </div>
              ))}
            </div>
          </Tab.Pane>
        </Tab.Content>
      </div>
  );
};

export default ProfileSettings;
