"use client"
import { useState } from 'react';
import styles from './Hero8.module.css';

const Hero8 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What facilities are available at the workspace?',
      answer: 'We provide facilities such as high-speed WiFi, air-conditioned workspaces, ergonomic chairs and desks, a pantry with complimentary beverages (coffee/tea), a printer, and meeting rooms that can be booked as needed.'
    },
    {
      id: 2,
      question: 'Do I need to make a reservation in advance?',
      answer: 'Yes, we recommend making a reservation in advance to ensure availability. You can book online through our website or mobile app, or contact our team directly for assistance.'
    },
    {
      id: 3,
      question: 'Are there flexible rental packages available?',
      answer: 'We offer a variety of packages, including daily, weekly, and monthly options. You can also choose specialized packages, such as coworking spaces, meeting rooms, or private offices, based on your needs.'
    },
    {
      id: 4,
      question: 'What payment methods are accepted?',
      answer: 'Payments can be made online via bank transfer, e-wallets, or credit cards. On-site payments are also available for certain services.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Frequently Asked Questions</span>
          </div>
          <h1 className={styles.title}>Your questions answered</h1>
          <p className={styles.description}>
            To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.
            We strive to create an environment where everyone can thrive.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <div className={styles.questionWrapper}>
                  <span className={styles.number}>0{faq.id}</span>
                  <h3 className={styles.question}>{faq.question}</h3>
                </div>
                <span className={styles.icon}>
                  {openIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </span>
              </button>
              <div className={styles.accordionContent}>
                <div className={styles.answerWrapper}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero8;