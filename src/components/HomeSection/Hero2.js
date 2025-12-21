import styles from '@/components/HomeSection/Hero2.module.css';

export default function Hero2() {
  return (
    <main className={styles.heroSection}>
      <div className={styles.container}>
        {/* Headings */}
        <h2 className={styles.headingBlue}>
          Career-Focused Programs 
        </h2>
        <h3 className={styles.headingWhite}>
          & Pathways
        </h3>
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
            <ul className={styles.projectList}>
              <li className={styles.projectItem}>
                <strong>Job-Ready Skills:</strong> Master SQL, Python, Machine Learning, AI and BI tools that top companies demand.
              </li>
              <li className={styles.projectItem}>
                <strong>Industry Confidence:</strong> Apply a business-focused mindset to solve real problems – just like a working analyst.
              </li>
              <li className={styles.projectItem}>
                <strong>Live Portfolio Projects:</strong> Create multiple dashboards and analytics projects using real-world datasets.
              </li>
              <li className={styles.projectItem}>
                <strong>Career Clarity:</strong> Receive personalized guidance to map out your analytics career journey.
              </li>
              <li className={styles.projectItem}>
                <strong>Interview Preparedness:</strong> Practice mock interviews and resume reviews so you can ace the hiring process.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}