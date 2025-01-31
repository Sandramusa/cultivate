import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.tsx";
import backgroundImage from "../../assets/images/HeaderSection/background.jpg";
import InternalTool from "../../components/InternalTool/InternalTool.tsx";

const Tool: React.FC = () => {
    return (
        <BaseLayout>
            <HeaderSection
                title="Herramientas"
                titleBgColor="rgba(242, 92, 92, 1)"
                backgroundImage={backgroundImage}
            />
            <InternalTool />
        </BaseLayout>
    );
};

export default Tool;
