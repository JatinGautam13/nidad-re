'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './VideoView.module.css';

const videoData = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "15:30"
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Master hooks, context, and state management",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "22:45"
  },
  {
    id: 3,
    title: "Backend Development with Node.js",
    description: "Build scalable APIs and server applications",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "18:20"
  },
  {
    id: 4,
    title: "Database Design Fundamentals",
    description: "Understanding SQL and NoSQL databases",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "20:15"
  },
  {
    id: 5,
    title: "Deployment and DevOps",
    description: "Deploy your applications to the cloud",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "25:00"
  }
];

export default function VideoView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % videoData.length);
    setIsPlaying(true);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    setIsPlaying(true);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const currentVideo = videoData[currentIndex];
  const nextVideo = videoData[(currentIndex + 1) % videoData.length];
  const prevVideo = videoData[(currentIndex - 1 + videoData.length) % videoData.length];

  return (
    <>
      {/* Top center heading */}
      <h1 className={styles.headline}>Course Overview</h1>

      <div className={styles.container}>
        {/* Left Side - Course Overview */}
        <div className={styles.leftSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.courseInfo}>
              {/* <h2 className={styles.courseTitle}>Full Stack Web Development Masterclass</h2> */}
              <p className={styles.courseDescription}>
                Master Data Science, Data Analytics, and many in-demand tech courses from fundamentals to real-world applications.
              </p>

              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{videoData.length}</span>
                  <span className={styles.statLabel}>Lessons</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1h 30m</span>
                  <span className={styles.statLabel}>Total Duration</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Demo</span>
                  <span className={styles.statLabel}>Level</span>
                </div>
              </div>

              <div className={styles.currentLesson}>
                <h3 className={styles.currentLessonTitle}>Currently Playing</h3>
                <p className={styles.currentLessonName}>{currentVideo.title}</p>
                <p className={styles.currentLessonDesc}>{currentVideo.description}</p>
                <span className={styles.lessonNumber}>
                  Lesson {currentIndex + 1} of {videoData.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Video Player */}
        <div className={styles.rightSection}>
          <div className={styles.videoContainer}>
            {/* Video Stack Preview */}
            <div className={styles.videoStack}>
              {/* Back card - further behind */}
              <div
                className={styles.stackCard}
                style={{
                  transform: 'translateY(-100px) scale(0.8)',
                  zIndex: 1,
                  opacity: 0.5
                }}
              >
                <div className={styles.stackPreview}>
                  <span className={styles.previewTitle}>{nextVideo.title}</span>
                </div>
              </div>

              {/* Middle card */}
              <div
                className={styles.stackCard}
                style={{
                  transform: 'translateY(-50px) scale(0.9)',
                  zIndex: 2,
                  opacity: 0.75
                }}
              >
                <div className={styles.stackPreview}>
                  <span className={styles.previewTitle}>{prevVideo.title}</span>
                </div>
              </div>

              {/* Main Video */}
              <div
                className={`${styles.mainVideoCard} ${
                  isTransitioning ? styles.transitioning : ''
                }`}
              >
                <video
                  ref={videoRef}
                  className={styles.video}
                  src={currentVideo.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className={styles.videoOverlay}>
                  <div className={styles.videoInfo}>
                    <h3 className={styles.videoTitle}>{currentVideo.title}</h3>
                    <p className={styles.videoDescription}>{currentVideo.description}</p>
                    <span className={styles.videoDuration}>{currentVideo.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Controls */}
            <div className={styles.controls}>
              <button
                className={styles.controlButton}
                onClick={handlePrevious}
                aria-label="Previous video"
                disabled={isTransitioning}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>

              <button
                className={`${styles.controlButton} ${styles.playButton}`}
                onClick={handlePlayPause}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>

              <button
                className={styles.controlButton}
                onClick={handleNext}
                aria-label="Next video"
                disabled={isTransitioning}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
