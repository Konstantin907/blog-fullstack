'use client';

import React from 'react';
import styles from './pagination.module.css';
import { useRouter } from 'next/navigation';

const Pagination = ({ page }) => {
  const router = useRouter();

  const handlePrevious = () => {
    if (page > 0) {
      router.push(`?page=${page - 1}`);
    }
  };

  const handleNext = () => {
    router.push(`?page=${page + 1}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={handlePrevious}
        disabled={page === 0} 
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
