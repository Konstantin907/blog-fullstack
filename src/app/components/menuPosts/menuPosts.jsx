'use client'


import React, { useState, useEffect } from 'react'
import styles from './menuPosts.module.css'
import Link from 'next/link'
import Image from 'next/image'


const MenuPosts = ({withImage, isPopular = false}) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching posts based on views:
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/posts${isPopular ? '?popular=true' : ''}`); 
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        console.log('Fetched data:', data); 
        setPosts(data.posts); 
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [isPopular]);

  if (loading) {
    return <p>Loading...</p>;
  }

  //console.log(posts);
  


  return (
    <div className={styles.items}>
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} className={styles.item} key={post.id}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img || '/default-image.png'} alt={post.title} fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.catSlug]}`}>
              {post.catSlug}
            </span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.userEmail}</span>
              <span className={styles.date}>
                {new Date(post.createdAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPosts
