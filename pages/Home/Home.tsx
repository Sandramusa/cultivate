import Slider from './Slider.tsx'; // Importa el slider
import LogosSection from '../../components/LogosSection/LogosSection.tsx';
import VideoSection from '../../components/VideoSection/VideoSection.tsx';
import CoursesSection from '../../components/CoursesSection/CoursesSection.tsx';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection.tsx';
import RepositorySection from '../../components/RepositorySection/RepositorySection.tsx';
import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <div className="home">
                <Slider/>
                <LogosSection/>
                <VideoSection/>
                <CoursesSection/>
                <TestimonialsSection/>
                <RepositorySection/>
            </div>
        </BaseLayout>
    );
};

export default Home;
