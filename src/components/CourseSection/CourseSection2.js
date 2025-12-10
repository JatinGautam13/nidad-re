"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./CourseSection2.module.css";
import { courses } from "@/data/courses";

const CourseSection2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);

  const filteredCourses = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.topics.some((t) => t.toLowerCase().includes(q));

      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [searchQuery, selectedLevel, selectedCategory]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedLevel("all");
    setSelectedCategory("all");
  };

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScrollLeft = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < maxScrollLeft - 4);
  };

  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector(`.${styles.courseCard}`);
    const cardWidth = firstCard ? firstCard.offsetWidth + 18 : 280;
    const delta = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [filteredCourses.length]);

  return (
    <section className={styles.courseSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.kicker}>Programs</span>
          <h2 className={styles.sectionTitle}>Data Science &amp; AI Courses</h2>
          <p className={styles.sectionSubtitle}>
            Compact, industry-aligned programs designed to move your career forward.
          </p>
        </div>

        {/* Search + Filters */}
        <div className={styles.filterBar}>
          <div className={styles.searchContainer}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by course, skills, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={styles.clearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.selectWrapper}>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">All Levels</option>
                <option value="certificate">Certificate</option>
                <option value="diploma">Diploma</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className={styles.selectWrapper}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">All Categories</option>
                <option value="data-science">Data Science</option>
                <option value="data-analytics">Data Analytics</option>
              </select>
            </div>

            {(searchQuery || selectedLevel !== "all" || selectedCategory !== "all") && (
              <button onClick={handleReset} className={styles.resetButton}>
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Results info */}
        <div className={styles.resultsInfo}>
          <span className={styles.resultCount}>
            {filteredCourses.length} program
            {filteredCourses.length !== 1 ? "s" : ""} found
          </span>
          {filteredCourses.length < courses.length && (
            <span className={styles.filterActive}>• filters applied</span>
          )}
        </div>

        {/* Horizontal scroller with SVG < >, only if more than 4 cards */}
        <div className={styles.scrollerRow}>
          {filteredCourses.length > 4 && (
            <button
              type="button"
              className={`${styles.scrollBtn} ${styles.scrollBtnLeft} ${
                !canScrollLeft ? styles.scrollBtnHidden : ""
              }`}
              onClick={() => scrollByCard("left")}
              aria-label="Scroll courses left"
              disabled={!canScrollLeft}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="15 18 9 12 15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <div ref={scrollRef} className={styles.courseScroller}>
            <div className={styles.courseGrid}>
              {filteredCourses.map((course) => (
                <div key={course.id} className={styles.courseCard}>
                  {/* Course Image */}
                  <div className={styles.courseImage}>
                    <img src={course.image} alt={course.title} />
                    <span className={`${styles.levelBadge} ${styles[course.level]}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    <div className={styles.cardTopRow}>
                      <div className={styles.ratingBox}>
                        <span className={styles.star}>★</span>
                        <span className={styles.ratingText}>{course.rating}</span>
                        <span className={styles.studentCount}>
                          ({course.students.toLocaleString()})
                        </span>
                      </div>
                    </div>

                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <p className={styles.courseDescription}>{course.description}</p>

                    <div className={styles.metaRow}>
                      <div className={styles.metaItem}>
                        <span className={styles.metaDot} />
                        <span>{course.duration}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaDot} />
                        <span>{course.mode}</span>
                      </div>
                    </div>

                    <div className={styles.topicsRow}>
                      {course.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className={styles.topicChip}>
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 3 && (
                        <span className={styles.moreChip}>
                          +{course.topics.length - 3} more
                        </span>
                      )}
                    </div>

                    <Link href={`/course/${course.id}`} className={styles.enrollButton}>
                      Explore program
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredCourses.length > 4 && (
            <button
              type="button"
              className={`${styles.scrollBtn} ${styles.scrollBtnRight} ${
                !canScrollRight ? styles.scrollBtnHidden : ""
              }`}
              onClick={() => scrollByCard("right")}
              aria-label="Scroll courses right"
              disabled={!canScrollRight}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="9 18 15 12 9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <h3>Need help choosing the right program?</h3>
            <p>
              Talk to our expert counselors and get a personalized learning path
              based on your goals and experience.
            </p>
          </div>
          <button className={styles.ctaButton}>
            Book your free counseling now
          </button>
        </div>

        {filteredCourses.length === 0 && (
          <div className={styles.noResults}>
            <h3>No programs found</h3>
            <p>Try adjusting your search or filters.</p>
            <button onClick={handleReset} className={styles.resetButtonLarge}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection2;