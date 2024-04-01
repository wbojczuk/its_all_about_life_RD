"use client"
import styles from './header.module.css';
import Link from 'next/link';

export default function Header(){
return (
    <header className={styles.header}>

        <div className={styles.content}>
            <h1>Protect and Build Your <span className="underline">Future!</span></h1>

            <p>Find out how you can take your future into your own hands today!</p>

            <Link className='main-link' href={"/contact"}>Get A Quote</Link>
        </div>
    
        <img src='/img/header-bg.png' alt='Image of ' className={`bg-img ${styles.bgImg}`} />
        <div className='shader'></div>
    </header>
)};