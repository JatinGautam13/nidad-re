import React from 'react';
import styles from './Hero5.module.css';

// Placeholder URLs for the three distinct sections shown in your image.
const GALLERY_ITEMS = [
  {
    id: 1,
    url: "/uploads/h1111.png",
    alt: "Users interacting with the application",
    type: "large", // This item takes up more space
  },
  {
    id: 2,
    url: "/uploads/valu.png",
    alt: "List of values for users",
    type: "small",
    // NOTE: In a real app, you would fetch the list items from an API
  },
  {
    id: 3,
    url: "/uploads/monil0.png",
    alt: "Mobile screen for role selection",
    type: "small",
    // NOTE: In a real app, this might be a mobile simulator or an embedded video
  },
];

const Hero5 = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.galleryGrid}>
        {GALLERY_ITEMS.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.galleryItem} ${item.type === 'large' ? styles.largeItem : styles.smallItem}`}
          >
            <img 
              src={item.url} 
              alt={item.alt} 
              className={styles.itemImage}
              // Optional: You can style the background of the image container here 
              // to match the dark aesthetic even if the image is missing or loading.
              style={{ background: item.type === 'large' ? '#004080' : '#031538' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero5;