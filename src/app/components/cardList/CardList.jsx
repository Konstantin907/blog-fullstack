import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const getData = async ({ page }) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.posts;
};

const CardList = async ({ page = 0 }) => {
  const data = await getData({ page });

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return <p>No posts available</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          {data.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default CardList;
