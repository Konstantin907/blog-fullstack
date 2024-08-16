import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image 
          src='/facebook.png'
          alt='logo'
          width={24}
          height={24}
        />

        <Image 
          src='/instagram.png'
          alt='logo'
          width={24}
          height={24}
        />

        <Image 
          src='/tiktok.png'
          alt='logo'
          width={24}
          height={24}
        />
         <Image 
          src='/youtube.png'
          alt='logo'
          width={24}
          height={24}
        />
      </div>
      <Link href='/'>
        <div className={styles.logo}>Quokaa blog</div>
      </Link>
     
      <div className={styles.links}>
      <ThemeToggle />  
        <Link className={styles.link} href='/'>Homepage</Link>
        <Link className={styles.link} href='/'>Contact</Link>
        <Link className={styles.link} href='/'>About</Link>
      <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
