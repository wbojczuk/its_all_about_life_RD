"use client"
import styles from './coverage.module.css';
import Link from 'next/link';

export default function Coverage(){
return (
 <div className={styles.coverage}>
    <h2>Coverage We Offer</h2>

    <div className={styles.itemWrapper}>
        <div className={styles.item}>

            <h3>Whole Life / <br />Permanent</h3>
           <div className={styles.linkWrapper}>
                <Link href="/insurance">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></path></svg></Link>
           </div>

            <img src="/img/old.png" aria-hidden className='bg-img' />
            <div className="shader" style={{backgroundColor: "rgba(255,255,255,.85)"}}></div>
        </div>

        <div className={styles.item}>

            <h3>Term <br />Insurance</h3>
           <div className={styles.linkWrapper}>
                <Link href="/insurance">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></path></svg></Link>
           </div>

            <img src="/img/jumping.png" aria-hidden className='bg-img' />
            <div className="shader" style={{backgroundColor: "rgba(255,255,255,.85)"}}></div>
        </div>

        <div className={styles.item}>

            <h3>Indexed <br />Universal Life</h3>
           <div className={styles.linkWrapper}>
                <Link href="/insurance">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></path></svg></Link>
           </div>

            <img src="/img/iul.png" aria-hidden className='bg-img' />
            <div className="shader" style={{backgroundColor: "rgba(255,255,255,.85)"}}></div>
        </div>

        <div className={styles.item}>

            <h3>Mortgage <br />Insurance</h3>
           <div className={styles.linkWrapper}>
                <Link href="/insurance">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></path></svg></Link>
           </div>

            <img src="/img/house.png" aria-hidden className='bg-img' />
            <div className="shader" style={{backgroundColor: "rgba(255,255,255,.85)"}}></div>
        </div>
    </div>
 </div>
)};