"use client"
import styles from './build.module.css';
import Link from 'next/link';

export default function Build(){
return (
 <div className={styles.build}>
    <div className={styles.buildWrapper}>
        <div className="center"><h2>Build Cash Value!</h2></div>
        <p>Use funds accrued through your permanent policy while your still alive! Find out more today! </p>
        <div className={`center ${styles.linkWrapper}`}>
            <Link className='main-link' href='/contact'>Get A Quote</Link>
        </div>
        <div style={{backgroundColor: "rgba(255,255,255,0.8)"}} className="shader"></div>
    <img src="/img/build-bg.png" alt="man looking into the ocean" className="bg-img" />
    </div>

   
 </div>
)};