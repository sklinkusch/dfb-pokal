import Link from 'next/link'
import styles from '@/styles/index.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Liste von DFB-Pokal-Spielzeiten</h1>
      <div className={styles.gridcontainer}>
        <div>
          <h2 className={styles.h2}>Männer</h2>
          <ul className={styles.ul}>
            <li>
              <Link href="/men/2025-26" className={styles.link}>Saison 2025/26</Link>
            </li>
            <li>
              <Link href="/men/2024-25" className={styles.link}>Saison 2024/25</Link>
            </li>
            <li>
              <Link href="/men/2023-24" className={styles.link}>Saison 2023/24</Link>
            </li>
            <li>
              <Link href="/men/2022-23" className={styles.link}>Saison 2022/23</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.h2}>Frauen</h2>
          <ul className={styles.ul}>
            <li>
              <Link href="/women/2023-24" className={styles.link}>Saison 2023/24</Link>
            </li>
            <li>
              <Link href="/women/2022-23" className={styles.link}>Saison 2022/23</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
