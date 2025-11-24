import styles from '@/components/HomeSection/Hero2.module.css';

export default function Hero2() {
  return (
    <main className={styles.heroSection}>
      <div className={styles.container}>
        {/* Headings */}
        <h1 className={styles.headingBlue}>
          AI Career & Soft Skills
        </h1>
        <h2 className={styles.headingWhite}>
          Mentor for the UAE
        </h2>
        <p className={styles.subtitle}>
          This intelligent mentor app provides personalized<br />
          AI coaching and real-world simulations<br />
          to foster confidence, connection, and career growth
        </p>
        <div className={styles.gridContent}>
          {/* Left Side: Just the image */}
          <div className={styles.leftImageWrap}>
            <img
              src="/uploads/Gemini_Generated_Image_y5f7azy5f7azy5f7 (1) (1).png"
              alt="Mentor App"
              className={styles.mainImg}
            />
          </div>
          {/* Right Side: Task */}
          <div className={styles.rightTextWrap}>
            <div className={styles.projectTitle}>Project Task</div>
            <div className={styles.projectDescription}>
              The goal of the HabibiSkills project was to design and develop a mobile application that serves as an intelligent mentor for expatriates and newcomers in the UAE. The app aims to facilitate a smooth transition into the UAE's unique business and cultural landscape by providing personalized AI-driven guidance and practical skill-building resources.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
