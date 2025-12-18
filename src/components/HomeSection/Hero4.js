'use client';
import { useState } from 'react';
import styles from './Hero4.module.css';

export default function Hero4() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useState(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const processes = [
    {
      id: 1,
      title: 'Python Programming Fundamentals',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop',
      size: ''
    },
    {
      id: 2,
      title: 'Data Analysis with Pandas & NumPy',
      image: '/uploads/infra1.jpeg',
      size: 'large'
    },
    {
      id: 3,
      title: 'Statistical Analysis & Probability',
      image: '/uploads/infra3.jpeg',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Machine Learning Algorithms',
      image: '/uploads/infra2.jpeg',
      size: 'large'
    },
    {
      id: 5,
      title: 'Data Visualization with Matplotlib & Seaborn',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      size: 'medium'
    },
    {
      id: 6,
      title: 'Computer Vision & Image Recognition',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
      size: ''
    },
    
  ];

  const displayedProcesses = (isMobile && !showAll) ? processes.slice(0, 3) : processes;

  return (
    <section className={styles.section}>
      <h1 className={styles.mainTitle}>
        Our <span className={styles.personaText}>Learning Path</span>
      </h1>
      
      <p className={styles.description}>
        Master data science through our comprehensive curriculum designed by industry experts. 
        Our structured learning path covers everything from foundational programming to advanced 
        machine learning and AI deployment. Each module includes hands-on projects, real-world 
        case studies, and personalized mentorship to ensure you build practical skills that 
        employers demand. Join thousands of successful graduates who have transformed their 
        careers with our proven methodology.
      </p>

      <div className={styles.grid}>
        {displayedProcesses.map((process) => (
          <div
            key={process.id}
            className={`${styles.item} ${process.size ? styles[`item--${process.size}`] : ''}`}
            style={{ backgroundImage: `url(${process.image})` }}
          >
            <div className={styles.itemDetails}>
              {process.title}
            </div>
          </div>
        ))}
      </div>

      {isMobile && !showAll && processes.length > 3 && (
        <button 
          className={styles.seeMoreBtn}
          onClick={() => setShowAll(true)}
        >
          See More
        </button>
      )}
    </section>
  );
}