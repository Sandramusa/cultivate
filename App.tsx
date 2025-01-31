import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Course from "./pages/Course/Course.tsx";
import CourseDetail from "./pages/CourseDetail/CourseDetail.tsx";
import News from "./pages/News/News.tsx";
import Tool from "./pages/Tool/Tool.tsx";
import Activity from "./pages/Activity/Activity.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Repository from "./pages/Repository/Repository.tsx";
import ActivityLandingPage from "./pages/ActivityLanding/ActivityLandingPage.tsx";
import CourseLandingPage from "./pages/CourseLandingPage/CourseLandingPage.tsx";
import CourseRegisterPage from "./pages/CourseRegisterPage/CourseRegisterPage.tsx";
import RepositoryLandingPage from "./pages/RepositoryLandingPage/repositoryLandingPage.tsx";
import ActivityRegisterPage from "./pages/ActivityRegisterPage/ActivityRegisterPage.tsx";
import NewsLandingPage from "./pages/NewsLandingPage/NewsLandingPage.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";
import Profile from "./pages/Profile/Profile.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/course" element={<Course/>}/>
                <Route path="/course/:id" element={<CourseDetail />} />
                <Route path="/repository" element={<Repository/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/tools" element={<Tool/>}/>
                <Route path="/activities" element={<Activity/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/activitylanding" element={<ActivityLandingPage/>}/>
                <Route path="/courselanding" element={<CourseLandingPage/>}/>
                <Route path="/register" element={<CourseRegisterPage/>}/>
                <Route path="/repositorylanding" element={<RepositoryLandingPage/>}/>
                <Route path="/activityregister" element={<ActivityRegisterPage/>}/>
                <Route path="/newslanding" element={<NewsLandingPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    );
}

export default App;
