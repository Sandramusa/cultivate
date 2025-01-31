import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.tsx";
import backgroundImage from "../../assets/images/HeaderSection/background.jpg";
import InternalActivity from "../../components/InternalActivity/InternalActivity.tsx";

const Activity: React.FC = () => {
    return (
        <BaseLayout>
            <HeaderSection
                title="Actividades"
                titleBgColor="rgba(93, 37, 58, 1)"
                backgroundImage={backgroundImage}
            />
            <InternalActivity />
        </BaseLayout>
    );
};

export default Activity;
