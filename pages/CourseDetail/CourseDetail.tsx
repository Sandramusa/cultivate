import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import backgroundImage from "../../assets/images/HeaderSectionCourse/header-section-bg.png";
//import { useParams } from "react-router-dom";
import HeaderSectionCourse from "../../components/HeaderSectionCourse/HeaderSectionCourse.tsx";
import CourseBase from "../../components/CourseBase/CourseBase.tsx";

const CourseDetail: React.FC = () => {
    //const { id } = useParams();
    return (
        <BaseLayout>
            <HeaderSectionCourse
                title="Improve your skill with Coursera!"
                subTitle="Categoria"
                backgroundImage={backgroundImage}
            />
            <CourseBase/>
        </BaseLayout>
    );
};


export default CourseDetail;
