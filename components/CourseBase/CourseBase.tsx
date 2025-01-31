import {Card, Button} from "react-bootstrap";
import "./CourseBase.css";
import VideoCourseSection from "../VideoCourseSection/VideoCourseSection.tsx";
import {GrBasket} from "react-icons/gr";
import {GoPlay} from "react-icons/go";
import {HiOutlineClipboardList} from "react-icons/hi";
import {PiDownloadSimpleLight} from "react-icons/pi";
import {IoCheckmarkOutline} from "react-icons/io5";
import {FaStar} from "react-icons/fa";
import {BiSolidUserPin} from "react-icons/bi";
import {useState} from "react";
import CourseRegistrationModal from "../CourseRegistrationModal/CourseRegistrationModal.tsx";

const CourseBase = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="course-details container-fluid pt-5" style={{backgroundColor: "#F2F2E8"}}>
            <div className="row justify-content-md-center">
                <div className="col-md-7 position-relative" style={{top: "-100px"}}>
                    <Card className="p-4 border-0  rounded-4">
                        <h3 className="mb-3">Improve your skill with Coursea!</h3>
                        <p className="fs-8">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo <br/>
                            minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                        </p>
                        <VideoCourseSection/>


                        <div className="row mt-4 align-items-center pt-3">
                            <div className="col-md-4 d-flex align-items-center">
                                <div className="avatar-placeholder rounded-2 me-3 bg-light"
                                     style={{width: "40px", height: "40px"}}>  </div>
                                <div>
                                    <h6 className="mb-0 fw-bold fs-9">Leslie Alexander</h6>
                                    <p className="text-muted mb-0 fs-9">Graphic Designer</p>
                                </div>
                            </div>
                            <div className="col-md-8 d-flex justify-content-around border-start">
          <span className="fs-9 text-muted d-flex align-items-center">
            <FaStar className="text-warning me-1"/> 4.8 (Review 2K)
          </span>
                                <span className="border-start px-3 fs-9 text-muted d-flex align-items-center">
            <GoPlay className="text-success me-1"/> 120 Video Course
          </span>
                                <span className="border-start px-3 fs-9 text-muted d-flex align-items-center">
            <BiSolidUserPin className="text-success me-1"/> 15k Students
          </span>
                            </div>
                        </div>
                        <Card className="mt-4 p-3  rounded-2">
                            <h4>Overview</h4>
                            <ul className="px-0 fs-8">
                                <li className="list-unstyled ">This course has been specifically designed for beginners
                                    who have been looking to obtain a hands-on learning experience with Python, teaching
                                    you concepts of programming right from the basics and Python being the most simplest
                                    language for a beginner to start with.
                                </li>
                                <br/>
                                <li className="list-unstyled">It is the right time to start learning the in-demand
                                    Python language because of its gaining popularity in the fields on Data Science,
                                    Backend Development, Internet of Things, etc. Keep yourself equipped with the most
                                    sought-after skills!
                                </li>
                                <br/>
                                <li className="list-unstyled">You will work on a project at the end of this course,
                                    which has been designed for you to implement all the topics which you would have
                                    mastered by the end of this course to give you enough confidence to start writing
                                    your own independent programs in Python.
                                </li>
                            </ul>
                        </Card>

                        <Card className="mt-4 p-3  rounded-2">
                            <h4>What you'll learn</h4>
                            <ul className="px-0 fs-8">
                                <li className="list-unstyled"><IoCheckmarkOutline/> <span className="cart-text-list">Obtain a strong understanding on the fundamentals of programming</span>
                                </li>
                                <li className="list-unstyled"><IoCheckmarkOutline/> <span className="cart-text-list">Write your own independent programs in Python</span>
                                </li>
                                <li className="list-unstyled"><IoCheckmarkOutline/> <span className="cart-text-list">Understand the basics of Python language</span>
                                </li>
                            </ul>
                        </Card>
                        <Card className="mt-4 p-3  rounded-2">
                            <h4>Requirements</h4>
                            <ul className="px-0 fs-8">
                                <li className="list-unstyled"><IoCheckmarkOutline/> <span className="cart-text-list">Access to a PC running on Windows, Linux or Mac</span>
                                </li>
                                <li className="list-unstyled"><IoCheckmarkOutline/> <span className="cart-text-list">Internet connection to setup development environment</span>
                                </li>
                            </ul>
                        </Card>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="p-4 border-0 shadow-sm rounded-0 bg-light fs-8">
                        <h5 className="fw-bold">Rp 220.400</h5>
                        <p className="text-muted text-decoration-line-through ">Rp 445.000 <span
                            className="badge-card badge" style={{backgroundColor: "#6559EF"}}>28% off</span></p>

                        <Button variant="success"
                                className="w-100 mt-3 rounded-3 d-flex justify-content-center align-content-center " onClick={() => setShowModal(true)}>
                            <GrBasket/> <span className="cart-text">    Add to Cart</span>
                        </Button>
                        <hr/>
                        <p><b>Este curso se realiza:</b></p>
                        <ul className="list-unstyled text-start">
                            <li className="fs-8"><GoPlay/><span className="cart-text">Inicia el 21 de Enero</span></li>
                            <li className="fs-8"><HiOutlineClipboardList/><span className="cart-text">Finaliza el 13 de Febrero</span>
                            </li>
                            <li className="fs-8"><PiDownloadSimpleLight/><span className="cart-text">150 horas académicas</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
            <CourseRegistrationModal show={showModal} handleClose={() => setShowModal(false)} />
        </div>
    );
};

export default CourseBase;