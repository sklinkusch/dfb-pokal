import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Liste von DFB-Pokal-Spielzeiten</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/men/2023-24" className={styles.link}>Saison 2023/24</Link>
        </li>
        <li>
          <Link href="/men/2022-23" className={styles.link}>Saison 2022/23</Link>
        </li>
      </ul>
    </main>
  )
}
