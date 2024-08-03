import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
            <Image 
               src='/coast.png' alt="" fill className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2024 - </span>
                <span className={styles.category}>Culture</span>
            </div>
        <Link href='/'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis. Dolor omnis et facere voluptates accusantium. 
                Voluptate blanditiis odio nisi.
            </p>
            

        
        <Link href='/' className={styles.link}>Read More</Link>
          </div>
          
    </div>
  )
}

export default Card
