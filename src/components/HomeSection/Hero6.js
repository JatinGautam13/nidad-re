import React from 'react';
import styles from './Hero6.module.css';

// Placeholder URL for the image shown in the visual reference.
// Replace this with your actual image path or public URL.
const PLACEHOLDER_IMAGE_URL = "/uploads/wmremove-transformed (1).png";

const Hero6 = () => {
  return (
    // The heroContainer now acts as a full-screen wrapper
    <section className={styles.heroContainer}>
      <div className={styles.imageArea}>
        <img 
          src={PLACEHOLDER_IMAGE_URL} 
          alt="Nidads AI Mentor Dashboard" 
          className={styles.heroImage} 
        />
      </div>
    </section>
  );
};

export default Hero6;