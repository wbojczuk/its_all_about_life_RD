"use client"
import Link from "next/link"
import styles from "./choice.module.css"

export default function Choice() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/ocean.webp" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2>The Best Choice For Your Future!</h2>

            <p>We want to make sure you get the best coverage, with no exceptions. That’s why we:
            </p>
            <div className={styles.checkWrapper}>
              <div className={styles.check}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></path><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"></path></svg>
                <span>Never Raise Your Premium</span>
              </div>
              <div className={styles.check}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></path><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"></path></svg>
                <span>Offer Day 1 Coverage</span>
              </div>
              <div className={styles.check}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></path><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"></path></svg>
                <span>Don’t Require Medical Exams</span>
              </div>
              <div className={styles.check}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></path><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"></path></svg>
                <span>Allow Online Applications</span>
              </div>
            </div>
        </div>
    </section>
  )
}
