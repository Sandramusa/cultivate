import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import CourseImage from "../../assets/images/Cart/image-course.png";

const CheckoutSection = () => {
    const [paymentMethod, setPaymentMethod] = useState("credit");

    return (
        <div className="container my-5">
            <h2>Checkout Page</h2>
            <div className="row">
                <div className="col-md-8">
                    <Card className="p-4 shadow-sm border-0">
                        <Form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Country" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>State/Union Territory</Form.Label>
                                        <Form.Control type="text" placeholder="Enter State" />
                                    </Form.Group>
                                </div>
                            </div>

                            <h5>Payment Method</h5>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="radio"
                                    label="Credit/Debit Card"
                                    name="paymentMethod"
                                    checked={paymentMethod === "credit"}
                                    onChange={() => setPaymentMethod("credit")}
                                />
                                {paymentMethod === "credit" && (
                                    <div className="p-3 border rounded">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name of Card</Form.Label>
                                            <Form.Control type="text" placeholder="Name of card" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control type="text" placeholder="Card Number" />
                                        </Form.Group>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Expiry Date</Form.Label>
                                                    <Form.Control type="text" placeholder="MM/YY" />
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group className="mb-3">
                                                    <Form.Label>CVC/CVV</Form.Label>
                                                    <Form.Control type="text" placeholder="CVC" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="radio"
                                    label="PayPal"
                                    name="paymentMethod"
                                    checked={paymentMethod === "paypal"}
                                    onChange={() => setPaymentMethod("paypal")}
                                />
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="p-3 shadow-sm border-0">
                        <h5>Order Details</h5>
                        <div className="d-flex align-items-center">
                            <img src={CourseImage} alt="Course" className="img-fluid me-3" style={{ width: "80px", borderRadius: "8px" }} />
                            <div>
                                <h6 className="mb-0">Introduction to User Experience Design</h6>
                                <p className="text-muted small">155 Lectures · 22 Total Hours</p>
                                <h6 className="fw-bold">$45.00</h6>
                            </div>
                        </div>
                        <Button variant="outline-secondary" className="w-100 mt-3">Apply Coupon Code</Button>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span>Price</span>
                            <span>$300.00</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Discount</span>
                            <span className="text-danger">-$10.00</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Tax</span>
                            <span>$20.00</span>
                        </div>
                        <div className="d-flex justify-content-between fw-bold">
                            <span>Total</span>
                            <span>$290.00</span>
                        </div>
                        <Button variant="success" className="w-100 mt-3">Proceed to Checkout</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSection;
