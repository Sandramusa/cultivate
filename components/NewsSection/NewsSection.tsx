import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsSection.css';
import Image from '../../assets/images/HeaderSection/background.jpg';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: 'TODOS' | 'CACAO' | 'CAFÉ' | 'PALMA';
  image: string;
  date: string;
}

const initialData: NewsItem[] = [
  {
    id: 1,
    title: 'HOJA INFORMATIVA CAFÉ CIRCULAR',
    description:
      'Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.',
    category: 'CAFÉ',
    image: Image,
    date: '02/01/2025',
  },
  {
    id: 2,
    title: 'HOJA INFORMATIVA CAFÉ CIRCULAR',
    description:
      'Less Doing, More Living was a conference about productivity and entrepreneurship hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and “The Replaceable Founder”.',
    category: 'CAFÉ',
    image: Image,
    date: '02/01/2025',
  },
];

const NewsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'TODOS' | 'CACAO' | 'CAFÉ' | 'PALMA'>('TODOS');
  const filteredData = activeCategory === 'TODOS' ? initialData : initialData.filter(item => item.category === activeCategory);

  const handleNewsClick = (newsItem: NewsItem) => {
    navigate('/newslanding', { state: newsItem });
  };

  return (
    <section className="news-section">
      <div className="filters-container">
        {(['TODOS', 'CACAO', 'CAFÉ', 'PALMA'] as const).map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="news-container-fluid">
        <div className="row">
          {filteredData.map((news) => (
            <div key={news.id} className="news-item" onClick={() => handleNewsClick(news)}>
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-content">
                <span className="news-badge">Featured</span>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-description">{news.description}</p>
                <span className="news-date">{news.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
