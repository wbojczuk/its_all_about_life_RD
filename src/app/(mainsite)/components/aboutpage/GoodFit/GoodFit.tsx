"use client"
import styles from './goodfit.module.css';
import Link from 'next/link';

export default function GoodFit(){
return (
<div className={styles.goodFit}>

    <h3>See If We’re A Good Fit For You!</h3>
    <p>Getting a quote is free and easy to complete!</p>

    <Link className='main-link' href='/contact'>Contact Us</Link>

    <img src='/img/goodfit-bg.webp' alt='Image of family at the beach' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,.85)"}} className='shader'></div>
</div>
)};