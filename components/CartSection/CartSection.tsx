import { Card, Button, ListGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import CourseImage from '../../assets/images/Cart/image-course.png'
import {useNavigate} from "react-router-dom";

const CartSection = () => {
    const navigate = useNavigate();

    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Introduction to User Experience Design",
            instructor: "John Doe",
            rating: 4.6,
            reviews: 250,
            totalHours: 22,
            totalLectures: 155,
            price: 45.0,
            image: CourseImage
        },
        {
            id: 2,
            title: "Introduction to User Experience Design",
            instructor: "John Doe",
            rating: 4.6,
            reviews: 250,
            totalHours: 22,
            totalLectures: 155,
            price: 45.0,
            image: CourseImage
        },
        {
            id: 3,
            title: "Introduction to User Experience Design",
            instructor: "John Doe",
            rating: 4.6,
            reviews: 250,
            totalHours: 22,
            totalLectures: 155,
            price: 45.0,
            image: CourseImage
        }
    ]);

    const handleRemove = (id: never) => {
        setCourses(courses.filter(course => course.id !== id));
    };

    const totalPrice = courses.reduce((acc, course) => acc + course.price, 0);
    const discount = 10;
    const tax = 20;
    const finalTotal = totalPrice - discount + tax;

    return (
        <div className="container my-5 ">
            <h2>Carrito</h2>
            <p>{courses.length} Course{courses.length !== 1 ? 's' : ''} in cart</p>

            <div className="row">
                <div className="col-md-8">
                    {courses.map(course => (
                        <Card key={course.id} className="mb-3 p-3 shadow-sm border-0">
                            <div className="d-flex">
                                <img src={course.image} alt={course.title} className="img-fluid me-3" style={{ height: "auto", width: "250px", borderRadius: "2px" }} />
                                <div className="flex-grow-1">
                                    <h5>{course.title}</h5>
                                    <p className="text-muted mb-1">By {course.instructor}</p>
                                    <div className="d-flex align-items-center text-warning">
                                        <FaStar /> <span className="ms-1">{course.rating} ({course.reviews} rating)</span>
                                    </div>
                                    <p className="text-muted">{course.totalHours} Total Hours. {course.totalLectures} Lectures. All levels</p>
                                    <Button variant="link" className="text-primary">Save for later</Button>
                                    <Button variant="link" className="text-danger" onClick={() => handleRemove(course.id)}>Remove</Button>
                                </div>
                                <h4 className="fw-bold">${course.price.toFixed(2)}</h4>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="col-md-4">
                    <Card className="p-3 shadow-sm border-0">
                        <h5>Order Details</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span>Price</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span>Discount</span>
                                <span className="text-danger">-${discount.toFixed(2)}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between fw-bold">
                                <span>Total</span>
                                <span>${finalTotal.toFixed(2)}</span>
                            </ListGroup.Item>
                        </ListGroup>
                        <Button variant="success" className="w-100 mt-3"
                                onClick={() => navigate('/checkout')}
                        >Proceed to Checkout</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CartSection;