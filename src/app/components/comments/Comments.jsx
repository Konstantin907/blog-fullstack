import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

    const status = 'authenticated'

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
            <textarea placeholder='Write a comment...' 
            className={styles.input}/>
            <button className={styles.button}>Send</button>
        </div>
      ) : (<Link href='/login'>Login to write a comment</Link>)}
    
    <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image 
                src='/coast.png'
                alt=''
                width={50}
                height={50}
                className={styles.image}
                />
            
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>01.05.2022</span>
            </div>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo! Vero repellendus quisquam alias ipsam, voluptatem quidem fugit, quis sit numquam explicabo 
            ab molestiae minus nobis ipsum nostrum qui accusamus!</p>
        </div>
        {/*  */}
        {/*  */}

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image 
                src='/coast.png'
                alt=''
                width={50}
                height={50}
                className={styles.image}
                />
            
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>01.05.2022</span>
            </div>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo! Vero repellendus quisquam alias ipsam, voluptatem quidem fugit, quis sit numquam explicabo 
            ab molestiae minus nobis ipsum nostrum qui accusamus!</p>
        </div>
        {/*  */}

        {/*  */}
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image 
                src='/coast.png'
                alt=''
                width={50}
                height={50}
                className={styles.image}
                />
            
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>01.05.2022</span>
            </div>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo! Vero repellendus quisquam alias ipsam, voluptatem quidem fugit, quis sit numquam explicabo 
            ab molestiae minus nobis ipsum nostrum qui accusamus!</p>
        </div>
        {/*  */}
        {/*  */}

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image 
                src='/coast.png'
                alt=''
                width={50}
                height={50}
                className={styles.image}
                />
            
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>01.05.2022</span>
            </div>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo! Vero repellendus quisquam alias ipsam, voluptatem quidem fugit, quis sit numquam explicabo 
            ab molestiae minus nobis ipsum nostrum qui accusamus!</p>
        </div>
    </div>
    </div>
  )
}

export default Comments
