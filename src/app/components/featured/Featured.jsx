'use client'

import React, { useEffect, useState } from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {

  const [post, setPost] = useState(null);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch('/api/posts/the-return-of-vintage-how-90s-fashion-is-making-a-comeback'); 
        if (!res.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, []);

  if (!post) {
    return <p>Loading...</p>;
  }

  //console.log(post);
  
  const shortDesc = post.desc.replace(/<\/?p>/g, '').substring(0, 150) + '...';

 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Quokka is here!</b> Discover stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src={post.img || '/default-image.png'} 
            alt={post.title}
            height={500}
            width={500}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postDesc}>{shortDesc}</p>
        <Link href={'/posts/the-return-of-vintage-how-90s-fashion-is-making-a-comeback'}>
            <button className={styles.button}>Read More</button>
        </Link>
          
        </div>
      </div>
    </div>
  );
}


export default Featured
