"use client"
import Link from "next/link"
import styles from "./wealth.module.css"

export default function Wealth() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/boat.webp" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2>Coverage That Builds <span className="underline">Wealth!</span></h2>

            <p>Permanent life insurance accumulates cash value over time, which can be borrowed against or withdrawn to supplement retirement income or cover other financial needs, effectively serving as a dual-purpose investment and protection vehicle.
            </p>
            <Link className="main-link" href="/contact">Get A Quote</Link>
           
        </div>
    </section>
  )
}
