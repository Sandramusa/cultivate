import Footer from '../Footer/Footer.tsx';
import Navbar from '../Navbar/Navbar.tsx';

interface BaseLayoutProps {
    children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default BaseLayout;
