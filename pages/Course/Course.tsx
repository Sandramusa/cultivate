import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.tsx";
import backgroundImage from "../../assets/images/HeaderSection/background.jpg";
import InternalCourses from "../../components/InternalCourses/InternalCourses.tsx";

const Course: React.FC = () => {
    return (
        <BaseLayout>
            <HeaderSection
                title="Cursos"
                titleBgColor="rgba(93, 37, 58, 1)"
                backgroundImage={backgroundImage}
            />
            <InternalCourses />
        </BaseLayout>
    );
};

export default Course;
