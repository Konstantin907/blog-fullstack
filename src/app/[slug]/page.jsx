import React from 'react'
import styles from './singlePage.module.css'
import Menu from '../components/menu/Menu'
import Image from 'next/image'
import Comments from '../components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                  <Image 
                    src='/coast.png'
                    alt=''
                    fill
                    className={styles.avatar}
                />  
                </div>
                
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>01.05.2025</span>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image 
            src='/coast.png'
            alt=''
            fill
            className={styles.image}
            />
        </div>
      </div>
        <div className={styles.content}>
     
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga quo voluptas, iste voluptatibus 
                    officiis cupiditate accusamus, laborum, est repellat ipsum placeat molestiae. Laboriosam tempore iste quis illum
                    distinctio, quos quas est dignissimos ipsa, blanditiis ratione dolorum facere similique debitis!
                     </p>

                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga quo voluptas, iste voluptatibus 
                    officiis cupiditate accusamus, laborum, est repellat ipsum placeat molestiae. Laboriosam tempore iste quis illum
                    distinctio, quos quas est dignissimos ipsa, blanditiis ratione dolorum facere similique debitis!
                     </p>

                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga quo voluptas, iste voluptatibus 
                    officiis cupiditate accusamus, laborum, est repellat ipsum placeat molestiae. Laboriosam tempore iste quis illum
                    distinctio, quos quas est dignissimos ipsa, blanditiis ratione dolorum facere similique debitis!
                     </p>

                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga quo voluptas, iste voluptatibus 
                    officiis cupiditate accusamus, laborum, est repellat ipsum placeat molestiae. Laboriosam tempore iste quis illum
                    distinctio, quos quas est dignissimos ipsa, blanditiis ratione dolorum facere similique debitis!
                     </p>

                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga quo voluptas, iste voluptatibus 
                    officiis cupiditate accusamus, laborum, est repellat ipsum placeat molestiae. Laboriosam tempore iste quis illum
                    distinctio, quos quas est dignissimos ipsa, blanditiis ratione dolorum facere similique debitis!
                     </p>
                </div> 
               <div className={styles.comment}>
                    <Comments />
               </div>
            </div>
            <Menu />
        </div>
      
    </div>
  )
}

export default SinglePage
