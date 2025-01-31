import BaseLayout from "../../components/BaseLayout/BaseLayout.tsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
import backgroundImage from '../../assets/images/HeaderSection/background.jpg';

const Home: React.FC = () => {
    return (
        <BaseLayout>
            <HeaderSection
                title="Contáctanos"
                /*titleBgColor="rgba(167, 192, 252, 1)"*/
                backgroundImage={backgroundImage}
                /*titleColor="#01401C"*/
            />
            <ContactForm />
        </BaseLayout>
    );
};

export default Home;
