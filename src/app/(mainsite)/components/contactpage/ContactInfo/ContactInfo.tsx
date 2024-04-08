"use client"
import styles from "./contactinfo.module.css"
import FreeEstimateForm from "../FreeEstimateForm/FreeEstimateForm"
import Script from "next/script"
import { InlineWidget } from "react-calendly"

export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
        <div className={styles.stuffWrapper}>
        <div className={styles.textContent}>
        <p>Let’s make your future brighter together!</p>

<h4>We can also be reached at:</h4>

<a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`} className={styles.contactItem}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m-6.117-18.07c-5.813-5.79-9.516-13.172-5.133-17.555c.258-.258.539-.515.797-.773c1.336-1.266 2.625-1.195 3.773.422l3.047 4.336c1.031 1.5.773 2.343-.328 3.515l-.961 1.055c-.351.328-.21.773-.047 1.055c.446.843 1.711 2.343 3.07 3.703c1.407 1.406 2.836 2.601 3.727 3.093c.328.188.797.235 1.102-.046l1.007-.961c1.125-1.102 2.04-1.383 3.493-.352a318.803 318.803 0 0 0 4.43 3.094c1.476 1.078 1.827 2.414.327 3.773c-.257.258-.492.54-.75.797c-4.382 4.36-11.742.656-17.554-5.156"></path></svg>
  <span>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</span>
</a>
<a href="tel:5862095576" className={styles.contactItem}>
<svg fill="currentColor" width="800px" height="800px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg"><path d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zM6.15 8.796a1.044 1.044 0 0 0-2.088 0v4.408a1.044 1.044 0 1 0 2.088 0zM5.704 4.21a.401.401 0 0 0-.4.4v2.353a1.83 1.83 0 0 1 1.106.53c.043.042.084.087.122.134h5.137v-.7H9.304a.423.423 0 0 1-.422-.422V4.21zm7.197 4.633a.401.401 0 0 0-.4-.4H6.916a1.87 1.87 0 0 1 .034.353v4.408a1.832 1.832 0 0 1-.313 1.029h5.864a.401.401 0 0 0 .4-.4zm-3.987 1.41a.4.4 0 0 0-.4-.4h-.001a.4.4 0 1 0 .4.4zm0 1.188a.4.4 0 0 0-.4-.4h-.001a.4.4 0 1 0 .4.4zm0 1.188a.4.4 0 0 0-.4-.4h-.001a.4.4 0 1 0 .4.4zm1.355-2.377a.4.4 0 0 0-.4-.4h-.002a.4.4 0 1 0 0 .8h.002a.4.4 0 0 0 .4-.4zm0 1.189a.4.4 0 0 0-.4-.4h-.002a.4.4 0 1 0 0 .8h.002a.4.4 0 0 0 .4-.4zm0 1.188a.4.4 0 0 0-.4-.4h-.002a.4.4 0 1 0 0 .8h.002a.4.4 0 0 0 .4-.4zm-.747-6.342h2.147v-.004L9.523 4.21h-.001zm2.101 3.965a.4.4 0 0 0-.4-.4.4.4 0 1 0 .4.4zm0 1.189a.4.4 0 0 0-.4-.4.4.4 0 1 0 .4.4zm0 1.188a.4.4 0 0 0-.4-.4.4.4 0 1 0 .4.4z"/></svg>
<span>(586) 209-5576 - FAX</span>
</a>
<a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className={styles.contactItem}>
<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"/></svg>
  <span>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
</a>
        </div>
        <div className={styles.formContent}>  
        <InlineWidget styles={{width: "100%", height: "700px"}} url="https://calendly.com/itsallaboutlifeinsurance/30min?primary_color=5ebdc3" />
        </div>
        </div>
        <div className={styles.newFormWrapper}>
       
        <FreeEstimateForm />
        </div>
    </section>
  )
}
