import styles from '@/components/HomeSection/Hero2.module.css';

export default function Hero2() {
  return (
    <main className={styles.heroSection}>
      <div className={styles.container}>
        {/* Headings */}
        <h1 className={styles.headingBlue}>
          Master Data Science
        </h1>
        <h2 className={styles.headingWhite}>
          Master AI, Machine Learning, and Analytics
        </h2>
        <p className={styles.subtitle}>
          Transform your career with cutting-edge data science skills.<br />
          Learn from industry experts and work on real-world projects<br />
          to become a sought-after data professional
        </p>
        <div className={styles.gridContent}>
          {/* Left Side: Just the image */}
          <div className={styles.leftImageWrap}>
            <img
              src="/uploads/Gemini_Generated_Image_y5f7azy5f7azy5f7 (1) (1).png"
              alt="Data Science Learning"
              className={styles.mainImg}
            />
          </div>
          {/* Right Side: What You'll Get */}
          <div className={styles.rightTextWrap}>
            <div className={styles.projectTitle}>What You'll Get</div>
            <div className={styles.projectDescription}>
              Master essential data science skills including Python programming, statistical analysis, machine learning algorithms, deep learning, and data visualization. Gain hands-on experience with industry-standard tools like TensorFlow, PyTorch, Pandas, and Scikit-learn. Work on real-world projects, build a professional portfolio, and receive career guidance to land your dream job in AI and data analytics. Get lifetime access to course materials, mentorship from experienced data scientists, and a globally recognized certification upon completion.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}