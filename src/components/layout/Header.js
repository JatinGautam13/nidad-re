"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Course", href: "/course" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header className={styles.header} style={{ position: 'relative' }}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/" >  <Image
            src="/uploads/Nidads-2.png"
            alt="Nidads Logo"
            width={120}
            height={40}
            className={styles.logoImage}
            priority
          /> </a>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}