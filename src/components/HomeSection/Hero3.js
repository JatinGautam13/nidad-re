'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import styles from './Hero3.module.css';

export default function Hero3() {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Designers',
      desc: 'Tools that work like you do.',
      bg: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp',
      thumb: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-designer.webp?w=480'
    },
    {
      id: 2,
      title: 'Marketers',
      desc: 'Create faster, explore new possibilities.',
      bg: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp',
      thumb: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-marketer.webp?w=480'
    },
    {
      id: 3,
      title: 'VFX filmmakers',
      desc: 'From concept to cut, faster.',
      bg: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp',
      thumb: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-film.webp?w=480'
    },
    {
      id: 4,
      title: 'Content creators',
      desc: 'Make scroll-stopping content, easily.',
      bg: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/content-creators.webp',
      thumb: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-content.webp?w=480'
    },
    {
      id: 5,
      title: 'Art directors',
      desc: 'Creative control at every stage.',
      bg: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/art-directors.webp',
      thumb: 'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480'
    }
  ];

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia('(max-width:767px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (['ArrowRight', 'ArrowDown'].includes(e.key)) go(1);
      if (['ArrowLeft', 'ArrowUp'].includes(e.key)) go(-1);
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [current]);

  useEffect(() => {
    center(current);
  }, [current, isMobile]);

  const center = (i) => {
    if (!wrapRef.current || !trackRef.current) return;
    const cards = trackRef.current.children;
    const card = cards[i];
    if (!card) return;

    const axis = isMobile ? 'top' : 'left';
    const size = isMobile ? 'clientHeight' : 'clientWidth';
    const start = isMobile ? card.offsetTop : card.offsetLeft;

    wrapRef.current.scrollTo({
      [axis]: start - (wrapRef.current[size] / 2 - card[size] / 2),
      behavior: 'smooth'
    });
  };

  const activate = (i) => {
    if (i === current || i < 0 || i >= slides.length) return;
    setCurrent(i);
    setTimeout(() => center(i), 50);
  };

  const go = (step) => {
    const newIndex = Math.min(
      Math.max(current + step, 0),
      slides.length - 1
    );
    activate(newIndex);
  };

  const handleTouchStart = useRef({ x: 0, y: 0 });

  const onTouchStart = (e) => {
    handleTouchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - handleTouchStart.current.x;
    const dy = e.changedTouches[0].clientY - handleTouchStart.current.y;
    if (isMobile ? Math.abs(dy) > 60 : Math.abs(dx) > 60) {
      go((isMobile ? dy : dx) > 0 ? -1 : 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2>Top Courses That Shape Your Future</h2>

        <div className={styles.controls}>
          <button
            className={styles.navBtn}
            onClick={() => go(-1)}
            disabled={current === 0}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            onClick={() => go(1)}
            disabled={current === slides.length - 1}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div className={styles.slider} ref={wrapRef}>
        <div
          className={styles.track}
          ref={trackRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, index) => (
            <article
              key={slide.id}
              className={styles.projectCard}
              data-active={index === current ? 'true' : undefined}
              onMouseEnter={() => {
                if (window.matchMedia('(hover:hover)').matches) {
                  activate(index);
                }
              }}
              onClick={() => activate(index)}
            >
              <img
                className={styles.projectCardBg}
                src={slide.bg}
                alt=""
              />
              <div className={styles.projectCardContent}>
                <img
                  className={styles.projectCardThumb}
                  src={slide.thumb}
                  alt={slide.title}
                />
                <div>
                  <h3 className={styles.projectCardTitle}>
                    {slide.title}
                  </h3>
                  <p className={styles.projectCardDesc}>{slide.desc}</p>
                  <button className={styles.projectCardBtn}>
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {!isMobile && (
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === current ? styles.active : ''
              }`}
              onClick={() => activate(index)}
            />
          ))}
        </div>
      )}

      {/* CTA at end of section */}
       <div className={styles.ctaWrapper}>
  <Link href="/course" className={styles.ctaBtn}>
    Explore all courses
  </Link>
</div>

    </section>
  );
}
