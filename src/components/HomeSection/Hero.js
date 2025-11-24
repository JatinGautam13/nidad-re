import styles from './Hero.module.css';

export default function Hero() {
  return (
    <main>
      <div>
        <div className={styles.hadding}>
          <div className={styles.circleImage}></div>
          <div className={styles.glassRectangle}>
            <p>
              HabibiSkills is an intelligent mentor app designed<br/> to help expats, newcomers, and professionals<br/> adapt smoothly to the unique business<br/> and cultural environment of the United Arab Emirates.
            </p>
          </div>
          <h1 className={styles.NidAds}>NIDADS</h1>
        </div>
      </div>
    </main>
  );
}