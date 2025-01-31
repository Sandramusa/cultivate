import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.tsx";
import backgroundImage from "../../assets/images/HeaderSection/background.jpg";
import NewsSection from "../../components/NewsSection/NewsSection.tsx";

const News: React.FC = () => {
    return (
        <BaseLayout>
            <HeaderSection
                title="Noticias"
                titleBgColor="rgba(93, 37, 58, 1)"
                backgroundImage={backgroundImage}
            />
            <NewsSection />
        </BaseLayout>
    );
};

export default News;
