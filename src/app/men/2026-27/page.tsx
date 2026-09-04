'use client'
import Link from 'next/link'
import Round from "@/components/Round"
import styles from '@/styles/index.module.css'
import { leagueType } from '@/teams/men/2026-27'
import { data, ROUND_ORDER } from '@/data/men/2026-27'

export default function DFBPokal_2026_27() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2026/27</h1>
      {ROUND_ORDER.map(round => data[round] && data[round].length > 0 && (<Round matches={data[round]} title={round} key={round} type={leagueType} />))}
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}
