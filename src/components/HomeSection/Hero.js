'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const [chartData, setChartData] = useState([]);
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    // Generate random data points for animated chart
    const points = Array.from({ length: 20 }, (_, i) => ({
      x: i * 50,
      y: 150 + Math.sin(i * 0.5) * 50 + Math.random() * 30
    }));
    setChartData(points);

    // Cycle through active nodes
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const pathData = chartData.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ');

  const tools = [
    { name: 'Python', icon: '🐍', color: 'python' },
    { name: 'TensorFlow', icon: '🧠', color: 'tensorflow' },
    { name: 'Pandas', icon: '🐼', color: 'pandas' },
    { name: 'Scikit-learn', icon: '📊', color: 'scikit' },
    { name: 'PyTorch', icon: '🔥', color: 'pytorch' },
    { name: 'SQL', icon: '💾', color: 'sql' }
  ];

  const stats = [
    { number: '1000+', label: 'Students' },
    { number: '50+', label: 'Courses' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <main className={styles.hero}>
      {/* Background Image with Overlay */}
      <div className={styles.backgroundImage} />
      <div className={styles.backgroundOverlay} />

      {/* Animated Data Visualizations SVG */}
      <svg className={styles.visualizationSvg} viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          {/* Gradients for charts */}
          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Neural Network Nodes - Left Side */}
        <g className={styles.pulseLeft}>
          {[0, 1, 2, 3].map((i) => (
            <g key={`left-${i}`}>
              <circle 
                cx="100" 
                cy={150 + i * 120} 
                r={activeNode === i ? "8" : "6"} 
                fill="#06b6d4" 
                opacity={activeNode === i ? "1" : "0.5"}
                filter="url(#glow)"
              />
              <circle 
                cx="100" 
                cy={150 + i * 120} 
                r={activeNode === i ? "16" : "12"} 
                fill="none" 
                stroke="#06b6d4" 
                strokeWidth="1" 
                opacity="0.3"
              />
            </g>
          ))}
        </g>

        {/* Neural Network Nodes - Right Side */}
        <g className={styles.pulseRight}>
          {[0, 1, 2, 3].map((i) => (
            <g key={`right-${i}`}>
              <circle 
                cx="1100" 
                cy={150 + i * 120} 
                r={activeNode === i + 2 ? "8" : "6"} 
                fill="#8b5cf6" 
                opacity={activeNode === i + 2 ? "1" : "0.5"}
                filter="url(#glow)"
              />
              <circle 
                cx="1100" 
                cy={150 + i * 120} 
                r={activeNode === i + 2 ? "16" : "12"} 
                fill="none" 
                stroke="#8b5cf6" 
                strokeWidth="1" 
                opacity="0.3"
              />
            </g>
          ))}
        </g>

        {/* Connection Lines */}
        {[0, 1, 2, 3].map((i) => 
          [0, 1, 2, 3].map((j) => (
            <line
              key={`line-${i}-${j}`}
              x1="100"
              y1={150 + i * 120}
              x2="1100"
              y2={150 + j * 120}
              stroke="url(#lineGrad)"
              strokeWidth="0.5"
              className={activeNode === i || activeNode === j + 2 ? styles.activeLine : styles.inactiveLine}
            />
          ))
        )}

        {/* Animated Line Chart - Bottom Left */}
        {chartData.length > 0 && (
          <g transform="translate(50, 550)">
            <path
              d={pathData}
              fill="none"
              stroke="url(#chartGrad)"
              strokeWidth="3"
              filter="url(#glow)"
              className={styles.lineChart}
            />
            {chartData.map((point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="3"
                fill="#3b82f6"
                className={styles.chartPoint}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </g>
        )}

        {/* Bar Chart - Bottom Right */}
        <g transform="translate(750, 550)">
          {[40, 65, 45, 80, 60, 75, 90].map((height, i) => (
            <rect
              key={i}
              x={i * 50}
              y={200 - height}
              width="35"
              height={height}
              fill={`rgba(139, 92, 246, ${0.3 + (height / 100) * 0.5})`}
              stroke="#8b5cf6"
              strokeWidth="2"
              filter="url(#glow)"
              className={styles.barChart}
              style={{ 
                animationDelay: `${i * 0.1}s`,
                transformOrigin: `${i * 50 + 17.5}px 200px`
              }}
            />
          ))}
        </g>

        {/* Floating Data Points */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={`float-${i}`}
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            r={Math.random() * 3 + 1}
            fill={i % 2 === 0 ? "#06b6d4" : "#8b5cf6"}
            opacity="0.4"
            className={styles.floatingPoint}
            style={{ 
              animationDuration: `${3 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </svg>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Headline */}
        <div className={styles.headline}>
          <h1 className={styles.title}>
            <span className={styles.gradient}>Master</span>
            <span className={styles.white}> Data Science</span>
          </h1>
          <h2 className={styles.subtitle}>
           <span className={styles.highlightCyan}>AI</span>, <span className={styles.highlightBlue}>Machine Learning</span>, and <span className={styles.highlightPurple}>Data Analytics</span>
          </h2>
        </div>

        {/* Description */}
        <p className={styles.description}>
          Transform your career with hands-on data science training. Learn from industry experts 
          through real-world projects and build skills in Python, Machine Learning, and Analytics.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <Link href="/course" className={styles.buttonPrimary}>
            Explore Courses
          </Link>
          <button className={styles.buttonSecondary}>
            Watch Demo
          </button>
        </div>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          <p className={styles.techLabel}>Master These Tools</p>
          <div className={styles.toolsGrid}>
            {tools.map((tool, i) => (
              <div key={i} className={`${styles.toolCard} ${styles[tool.color]}`}>
                <span className={styles.toolIcon}>{tool.icon}</span>
                <span className={styles.toolName}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsContainer}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}