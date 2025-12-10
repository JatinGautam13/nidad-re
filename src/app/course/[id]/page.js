"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCourseById } from "@/data/courses";
import styles from "./courseDetail.module.css";

export default function CourseDetailPage({ params }) {
  const { id } = use(params);
  const course = getCourseById(id);
  const [expandedSection, setExpandedSection] = useState(0);

  if (!course) {
    return (
      <div className={styles.notFound}>
        <h1>Course not found</h1>
        <Link href="/course">Back to courses</Link>
      </div>
    );
  }

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? -1 : index);
  };

  return (
    <main className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/course">Courses</Link>
        <span>/</span>
        <span>{course.title}</span>
      </div>

      <div className={styles.contentWrapper}>
        {/* Left Column - Main Content */}
        <div className={styles.mainContent}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <h1 className={styles.title}>{course.title}</h1>
            <div className={styles.courseMetaRow}>
              <div className={styles.rating}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingValue}>{course.rating}</span>
                <span className={styles.students}>({course.students.toLocaleString()} students)</span>
              </div>
              <div className={styles.courseType}>
                <span className={styles.levelBadge}>{course.level.charAt(0).toUpperCase() + course.level.slice(1)}</span>
                <span className={styles.durationBadge}>{course.duration}</span>
                <span className={styles.modeBadge}>{course.mode}</span>
              </div>
            </div>
            <p className={styles.description}>{course.description}</p>
          </section>

          {/* Course Image */}
          <section className={styles.imageSection}>
            <img src={course.image} alt={course.title} className={styles.courseImage} />
          </section>

          {/* What You'll Learn */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What You'll Learn</h2>
            <div className={styles.learningPoints}>
              {course.whatYouWillLearn && course.whatYouWillLearn.map((point, index) => (
                <div key={index} className={styles.learningPoint}>
                  <span className={styles.checkmark}>✓</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          {course.curriculum && course.curriculum.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Curriculum</h2>
              <div className={styles.curriculum}>
                {course.curriculum.map((item, index) => (
                  <div key={index} className={styles.curriculumItem}>
                    <button
                      className={styles.curriculumHeader}
                      onClick={() => toggleSection(index)}
                    >
                      <span className={styles.sectionName}>{item.section}</span>
                      <span className={styles.toggleIcon}>
                        {expandedSection === index ? "−" : "+"}
                      </span>
                    </button>
                    {expandedSection === index && (
                      <div className={styles.curriculumContent}>
                        {item.lectures.map((lecture, lectureIndex) => (
                          <div key={lectureIndex} className={styles.lecture}>
                            <div className={styles.lectureType}>{lecture.type}</div>
                            <div className={styles.lectureInfo}>
                              <h4>{lecture.title}</h4>
                              <p>{lecture.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Full Description */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About this course</h2>
            <p className={styles.fullDescription}>{course.fullDescription}</p>
          </section>

          {/* Requirements */}
          {course.requirements && course.requirements.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Requirements</h2>
              <ul className={styles.requirementsList}>
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Target Audience */}
          {course.targetAudience && course.targetAudience.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Who This Course Is For</h2>
              <ul className={styles.audienceList}>
                {course.targetAudience.map((audience, index) => (
                  <li key={index}>{audience}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Instructor Section */}
          {course.instructor && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Your Instructor</h2>
              <div className={styles.instructorCard}>
                <img src={course.instructor.image} alt={course.instructor.name} className={styles.instructorImage} />
                <div className={styles.instructorInfo}>
                  <h3>{course.instructor.name}</h3>
                  <p className={styles.instructorTitle}>{course.instructor.title}</p>
                  <p className={styles.instructorBio}>{course.instructor.bio}</p>
                  <div className={styles.credentials}>
                    {course.instructor.credentials.map((cred, index) => (
                      <span key={index} className={styles.credentialTag}>{cred}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Reviews Section */}
          {course.reviews && course.reviews.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Student Reviews</h2>
              <div className={styles.reviewsList}>
                {course.reviews.map((review, index) => (
                  <div key={index} className={styles.reviewCard}>
                    <div className={styles.reviewHeader}>
                      <h4>{review.name}</h4>
                      <span className={styles.reviewRating}>★ {review.rating}</span>
                    </div>
                    <p className={styles.reviewComment}>{review.comment}</p>
                    <p className={styles.reviewDate}>{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebar}>
          {/* Course Card */}
          <div className={styles.courseCard}>
            <img src={course.image} alt={course.title} className={styles.sidebarImage} />
            <div className={styles.cardContent}>
              <h3>Course Details</h3>
              <div className={styles.priceSection}>
                <span className={styles.price}>{course.price}</span>
                <button className={styles.enrollBtn}>Enroll Now</button>
                
              </div>

              {/* What's Included */}
              <div className={styles.includesSection}>
                <h4>This course includes:</h4>
                {course.includes && course.includes.length > 0 ? (
                  <ul className={styles.includesList}>
                    {course.includes.map((item, index) => (
                      <li key={index}>
                        <span className={styles.checkIcon}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className={styles.includesList}>
                    <li><span className={styles.checkIcon}>✓</span>Video lectures</li>
                    <li><span className={styles.checkIcon}>✓</span>Hands-on projects</li>
                    <li><span className={styles.checkIcon}>✓</span>Certificate</li>
                    <li><span className={styles.checkIcon}>✓</span>Lifetime access</li>
                  </ul>
                )}
              </div>

              {/* Guarantee */}
              <div className={styles.guarantee}>
                <p>30-day money-back guarantee</p>
              </div>

              {/* Share */}
              <div className={styles.shareSection}>
                <p>Share this course:</p>
                <div className={styles.shareButtons}>
                  <button className={styles.shareBtn}>f</button>
                  <button className={styles.shareBtn}>𝕏</button>
                  <button className={styles.shareBtn}>in</button>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <Link href="/course" className={styles.backBtn}>
            ← Back to Courses
          </Link>
        </aside>
      </div>
    </main>
  );
}
