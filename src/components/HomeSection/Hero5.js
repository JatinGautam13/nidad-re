// components/Home/Hero5.js
"use client";

import styles from "./Hero5.module.css";

const stats = [
  { label: "Overall placement", value: "96%", note: "Students placed within 6 months" },
  { label: "Highest package", value: "₹22 LPA", note: "International data role" },
  { label: "Average package", value: "₹9.5 LPA", note: "Across recent 3 batches" },
];

const testimonials = [
  {
    name: "Aman Verma",
    role: "Data Engineer • Bangalore",
    company: "TechNova Analytics",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    quote:
      "As a working professional, I needed flexible learning that actually translated to my job. NIDADS’s project-based approach and mock interviews gave me the confidence to switch careers. Now I’m excelling as a Data Engineer.",
  },
  {
    name: "Priya Nair",
    role: "Data Analyst • Pune",
    company: "DeepVision Labs",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    quote:
      "Before NIDADS, I wasn’t sure how to transition from college to a data career. The hands-on projects and mentorship helped me build a strong portfolio. Today I’m a Data Analyst at a leading finance firm.",
  },
  {
    name: "Rohan Gupta",
    role: "Data Scientist • Gurgaon",
    company: "InsightSphere",
    avatar:
      "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",
    quote:
      "I joined NIDADS with zero analytics experience. Their guidance and real-world case studies empowered me. Within months I was solving problems for a retail company and felt completely prepared for interviews.",
  },
];

export default function Hero5() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: Placement summary */}
        <div className={styles.left}>
          <p className={styles.badge}>Placement Success</p>
          <h2 className={styles.heading}>
            See how students turned{" "}
            <span className={styles.highlight}>data science</span> into real offers.
          </h2>
          <p className={styles.subtitle}>
            Structured learning, live projects, and dedicated placement support help you move from
            “interested in data” to “hired as a data professional”.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <div className={styles.statValue}>{item.value}</div>
                <div className={styles.statLabel}>{item.label}</div>
                <p className={styles.statNote}>{item.note}</p>
              </div>
            ))}
          </div>

          <ul className={styles.bullets}>
            <li>Dedicated placement cell with 1:1 mock interviews.</li>
            <li>Company specific resume & portfolio reviews.</li>
            <li>Interview prep for SQL, Python, case studies & ML.</li>
          </ul>
        </div>

        {/* Right: Testimonials list */}
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <h3 className={styles.rightTitle}>Student success stories</h3>
            <p className={styles.rightNote}>Real offers. Real companies. Real career shifts.</p>
          </div>

          <div className={styles.cardsWrap}>
            {testimonials.map((t, index) => (
              <article key={index} className={styles.card}>
                <div className={styles.cardTop}>
                  <img src={t.avatar} alt={t.name} className={styles.avatar} />
                  <div>
                    <h4 className={styles.name}>{t.name}</h4>
                    <p className={styles.role}>{t.role}</p>
                    <p className={styles.company}>{t.company}</p>
                  </div>
                </div>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
