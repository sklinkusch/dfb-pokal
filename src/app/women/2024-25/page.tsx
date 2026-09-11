'use client'
import Link from 'next/link'
import Round from '@/components/Round'
import styles from '@/styles/index.module.css'
import { data, ROUND_ORDER } from '@/data/women/2024-25'
import { leagueType } from '@/teams/women/2024-25'

export default function DFBPokal_2024_25() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2024/25</h1>
      {ROUND_ORDER.map(round => data[round] && data[round].length > 0 && (<Round matches={data[round]} title={round} key={round} type={leagueType} />))}
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}