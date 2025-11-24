import React from "react";
import styles from "./Header.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.navbar}>
        <div>
          <button className={styles.NavButton1}>AI Mobile app</button>
          <button className={styles.NavButton1}>Web-design</button>
        </div>
        <div>
          <button className={styles.NavButton1}>2025</button>
        </div>
      </div>
    </main>
  );
}
