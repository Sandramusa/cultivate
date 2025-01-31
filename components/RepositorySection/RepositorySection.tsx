import React, { useEffect, useState } from 'react';
import './RepositorySection.css';
import Image from '../../assets/images/HeaderSection/background.jpg';

interface ResourceItem {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    buttonText: string;
    link: string;
}

const RepositorySection: React.FC = () => {
    const resources: ResourceItem[] = [
        {
            id: 1,
            title: 'CAFÉ CIRCULAR',
            subtitle: 'Branding, Design, Product, Development',
            image: Image,
            buttonText: 'VER RECURSO →',
            link: '#',
        },
        {
            id: 2,
            title: 'CAFÉ CIRCULAR',
            subtitle: 'Branding, Design, Product, Development',
            image: Image,
            buttonText: 'VER RECURSO →',
            link: '#',
        },
        {
            id: 3,
            title: 'CAFÉ CIRCULAR',
            subtitle: 'Branding, Design, Product, Development',
            image: Image,
            buttonText: 'VER RECURSO →',
            link: '#',
        },
    ];

    const [repoItemsPerPage, setRepoItemsPerPage] = useState(2);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setRepoItemsPerPage(1);
        } else {
            setRepoItemsPerPage(2);
        }
    }, []);

    const totalRepoPages = Math.ceil(resources.length / repoItemsPerPage);
    const [repoPage, setRepoPage] = useState(0);
    const repoStartIndex = repoPage * repoItemsPerPage;
    const repoEndIndex = repoStartIndex + repoItemsPerPage;
    const displayedResources = resources.slice(repoStartIndex, repoEndIndex);

    return (
        <section className="repo-section">
            <div className="repo-header">
                <div className="repo-header-left">
                    <h2 className="repo-heading">
                        <span className="repo-highlight">REPOSITORIO</span> <br />
                        VIRTUAL
                    </h2>
                </div>
                <div className="repo-header-right">
                    <p>
                        Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique.
                    </p>
                </div>
            </div>

            <div className="repo-slider-container">
                <div className="repo-cards-wrapper">
                    {displayedResources.map((item) => (
                        <div className="repo-card" key={item.id}>
                            <div 
                                className="repo-card-image"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="repo-card-content">
                                <h3 className="repo-card-title">{item.title}</h3>
                                <p className="repo-card-subtitle">{item.subtitle}</p>
                                <div className="repo-card-description">
                                </div>
                                <a href={item.link} className="repo-button">
                                    {item.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="repo-dots-wrapper">
                    <div className="repo-dots">
                        {Array.from({ length: totalRepoPages }).map((_, i) => (
                            <span
                                key={i}
                                className={`repo-dot ${i === repoPage ? 'active' : ''}`}
                                onClick={() => setRepoPage(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RepositorySection;
