// components/CustomCursor.js
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '@/app/CustomCursor.module.css'; // Optional: for styling

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Move the custom cursor with GSAP
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Animation duration
        ease: 'power3.out', // Smooth easing
      });
    };

    // Add event listener to track mouse movement
    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
};

export default CustomCursor;
