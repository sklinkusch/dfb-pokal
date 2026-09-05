'use client'
import Link from 'next/link'
import Round from '@/components/Round'
import styles from '@/styles/index.module.css'
import { leagueType } from '@/teams/women/2025-26'
import { ROUND_ORDER, data } from '@/data/women/2025-26'

export default function DFBPokal_2025_26() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2025/26</h1>
      {ROUND_ORDER.map(round => data[round] && data[round].length > 0 && (<Round matches={data[round]} title={round} key={round} type={leagueType} />))}
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}