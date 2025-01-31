import { useState } from 'react';
import './InternalTool.css';
import GlobalLogo from '../../assets/logos/Global.png';
import AgroLogo from '../../assets/logos/Agro.png';
import AsombrateLogo from '../../assets/logos/asombrate.png';

interface Filter {
  label: string;
  count: number;
}

const filters: Filter[] = [
  { label: 'APRENDIZAJE', count: 10 },
  { label: 'REPOSITORIOS', count: 5 },
  { label: 'MONITOREO DE DEFORESTACIÓN', count: 5 },
  { label: 'OTROS PROGRAMAS', count: 5 },
];

const logos = [
  { src: GlobalLogo, alt: 'Global Forest Watch' },
  { src: AgroLogo, alt: 'Agro Learning' },
  { src: AsombrateLogo, alt: 'IICA' },
  { src: GlobalLogo, alt: 'Asómbrate' },
  { src: AsombrateLogo, alt: 'IICA' },
];

const InternalTool: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('APRENDIZAJE');

  return (
    <section className="internal-tool-section">
      {/* Filtros */}
      <div className="filters-container">
        {filters.map((filter) => (
          <button
            key={filter.label}
            className={`filter-btn ${activeFilter === filter.label ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.label)}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>

      <div className="logos-container">
        {logos.map((logo, index) => (
          <div key={index} className="logo">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternalTool;
