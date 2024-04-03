"use client"
import Link from "next/link"
import styles from "./aboutus.module.css"

export default function AboutUs() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/person.png" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2>It's All <br />About <span className="underline">Life</span></h2>

            <p>We focus on empowering our clients to create generational wealth that lasts a lifetime. Our mission is simple: to help you build a financial legacy that benefits not only your loved ones in the future but also enhances your quality of life today. With personalized insurance solutions and expert guidance, we're committed to supporting you every step of the way towards achieving your financial goals and securing a brighter future for generations to come.
            </p>
            <Link className="main-link" href="/contact">Get A Quote</Link>
           
        </div>
    </section>
  )
}
