import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string, subtitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}</h1>
        <h2>{props.subtitle}</h2>

        <img src="/img/pagetitle-bg.png" className="bg-img" aria-hidden />
        <div style={{backgroundColor: "rgba(255,255,255,.77)"}} className="shader"></div>
    </header>
  )
}
