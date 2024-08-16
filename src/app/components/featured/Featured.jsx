

import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {

 
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
         <b>Hey, Quokka is here!</b> Discover stories and creative ideas.
        </h1>
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image 
          src='/p1.jpeg'
          alt='postImg'
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Javascript is still most popular programming language.</h1>
        <p className={styles.postDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quod autem iste ad qui quisquam totam voluptate laudantium similique eum tenetur.
        </p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
    </div>
  )
}


export default Featured
