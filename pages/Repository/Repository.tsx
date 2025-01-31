import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.tsx";
import backgroundImage from "../../assets/images/HeaderSection/background.jpg";
import InternalRepository from "../../components/InternalRepository/InternalRepository.tsx";

const Repository: React.FC = () => {
    return (
        <BaseLayout>
            <HeaderSection
                title="Repositorio"
                titleBgColor="rgba(93, 37, 58, 1)"
                backgroundImage={backgroundImage}
            />
            <InternalRepository />
        </BaseLayout>
    );
};

export default Repository;
