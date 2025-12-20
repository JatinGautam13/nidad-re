'use client';
import { useState, useEffect } from 'react';
import styles from './VideoLoader.module.css';
import Image from 'next/image';

export default function VideoLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader) {
      setLoading(false);
      return;
    }

    // Show loader for 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContent}>
        <div className={styles.gifWrapper}>
          <Image
            src="/uploads/original-5db0bb5bde5120cb0292c95f5e5dd104.gif"
            alt="Loading..."
            width={500}
            height={500}
            className={styles.loaderGif}
            priority
            unoptimized
          />
        </div>
        
        {/* Optional: Loading text */}
        {/* <div className={styles.loaderText}>
          <h2>Welcome</h2>
          <div className={styles.spinner}></div>
        </div> */}
      </div>
    </div>
  );
}