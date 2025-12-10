import React from 'react';
import styles from './CourseSection1.module.css';

const CourseSection1 = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.badge}>Welcome to NIDAD</div>
            <h1 className={styles.title}>
              Transform Your Future with
              <span className={styles.highlight}> Data Science & AI</span>
            </h1>
            <p className={styles.description}>
              At NIDAD, we empower professionals and aspiring data scientists with 
              cutting-edge courses in Data Science, Artificial Intelligence, and Analytics. 
              Our comprehensive programs are designed.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>500+</h3>
                <p>Students Trained</p>
              </div>
              <div className={styles.statItem}>
                <h3>95%</h3>
                <p>Placement Rate</p>
              </div>
              <div className={styles.statItem}>
                <h3>50+</h3>
                <p>Industry Partners</p>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Explore Courses</button>
              <button className={styles.secondaryBtn}>Download Brochure</button>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <img 
                src="/uploads/Shagun4-removebg-preview (1).png" 
                alt="Expert Instructor" 
                className={styles.teacherImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.instructorInfo}>
                  <h4>Dr. Shagun </h4>
                  <p>Lead Instructor, Data Science</p>
                  <div className={styles.credentials}>
                    <span>PhD in AI</span>
                    <span>15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection1;