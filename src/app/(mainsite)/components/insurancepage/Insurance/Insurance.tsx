"use client"
import Link from "next/link"
import styles from "./insurance.module.css"

export default function Insurance() {
  return (
    <section className={styles.section}>
        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
              <img className={styles.img} src="/img/old.webp" width={360} height={600} alt="Image of old people" />
          </div>
          

          <div className={styles.content}>
              <h2>Whole Life Insurance</h2>

              <p>Whole life insurance is a type of permanent life insurance that provides coverage for your entire life, as long as premiums are paid. It builds cash value over time, which can be borrowed against or withdrawn for various financial needs. <br /><br />With whole life insurance, you have the security of knowing that your loved ones will receive a death benefit when you pass away, while also having the potential to grow a savings component that can be accessed during your lifetime.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Get A Quote</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
              <img className={styles.img} src="/img/jumping.webp" width={360} height={600} alt="Image of man jumping" />
          </div>
          

          <div className={styles.content}>
              <h2>Term Life Insurance</h2>

              <p>Term life insurance provides coverage for a specific period, such as 10, 20, or 30 years, offering financial protection to your loved ones if you pass away during that time frame. It's like renting coverage for a set period: you pay regular premiums, and if you die within the term, your beneficiaries receive a lump sum payout, but if you outlive the term, the coverage expires without any payout.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Get A Quote</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
              <img className={styles.img} src="/img/iul.webp" width={360} height={600} alt="Image of boat" />
          </div>
          

          <div className={styles.content}>
              <h2>Indexed Universal Life Insurance</h2>

              <p>Indexed Universal Life insurance is a type of life insurance policy that offers flexibility and potential for growth. It combines a death benefit with a cash value component, where the cash value can be linked to the performance of a stock market index, such as the S&P 500. <br /><br />This means that while providing protection for your loved ones, the policy allows for the opportunity to accumulate cash value based on the performance of the chosen index, offering a way to potentially grow your savings over time.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Get A Quote</Link>
          </div>
        </div>


        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
              <img className={styles.img} src="/img/house.webp" width={360} height={600} alt="Image of house" />
          </div>
          

          <div className={styles.content}>
              <h2>Mortgage Insurance</h2>

              <p>Mortgage insurance is a type of insurance that protects the lender if a borrower defaults on their mortgage payments. It's typically required for homebuyers who make a down payment of less than 20% of the home's purchase price. <br /><br />This insurance provides lenders with a financial safety net, allowing them to offer mortgages to buyers with smaller down payments, making homeownership more accessible.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Get A Quote</Link>
          </div>
        </div>

    </section>
  )
}
