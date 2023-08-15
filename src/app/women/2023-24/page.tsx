'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RoundWomen as Round } from '@/components/Round'
import styles from '@/styles/index.module.css'

export default function DFBPokal_2023_24() {
  const data: Data = {
    '1. Hauptrunde': [
      { home: 'Karlsruher SC', homeLeague: '3S', away: 'SC Sand', awayLeague: '2', date: "2023-08-12T13:00:00Z", result: "0:4", identifier: 2 },
      { home: 'TSV Jahn Calden', homeLeague: '3S', away: '1. FFC Montabaur', awayLeague: '3SW', date: "2023-08-12T13:00:00Z", result: "7:0", identifier: 1 },
      { home: 'Rostocker FC', homeLeague: '4MV', away: 'Arminia Bielefeld', awayLeague: '3W', date: "2023-08-13T09:00:00Z", result: "1:13", identifier: 2 },
      { home: 'SV Henstedt-Ulzburg', homeLeague: '3N', away: 'Borussia Bocholt', awayLeague: '4NR', date: "2023-08-13T09:00:00Z", result: "7:0", identifier: 1 },
      { home: 'ATS Buntentor', homeLeague: '3N', away: 'Hamburger SV', awayLeague: '2', date: "2023-08-13T11:00:00Z", result: "1:4", identifier: 2 },
      { home: 'FC Viktoria 1889 Berlin', homeLeague: '3NO', away: 'TSV Barmke', awayLeague: '3N', date: "2023-08-13T12:00:00Z", result: "3:1", identifier: 1 },
      { home: 'SV Grün-Weiss Brieselang', homeLeague: '4BB', away: 'SFC Stern 1900', awayLeague: '4B', date: "2023-08-13T12:00:00Z", result: "0:1", identifier: 2 },
      { home: 'FC St. Pauli', homeLeague: '3N', away: 'Magdeburger FFC', awayLeague: '3NO', date: "2023-08-13T12:00:00Z", result: "4:4 (3:3) n.V.,  3:2 i.E.", identifier: 1 },
      { home: 'VfL Bochum', homeLeague: '3W', away: 'SC Fortuna Köln', awayLeague: '3W', date: "2023-08-13T12:00:00Z", result: "3:2 (1:1) n.V.", identifier: 1 },
      { home: 'Kickers Offenbach', homeLeague: '3S', away: '1. FC Riegelsberg', awayLeague: '3SW', date: "2023-08-13T12:00:00Z", result: "2:0", identifier: 1 },
      { home: '1. FFV Erfurt', homeLeague: '3NO', away: '1. FSV Mainz 05', awayLeague: '3SW', date: "2023-08-13T12:00:00Z", result: "0:1", identifier: 2 },
      { home: 'Hegauer FV', homeLeague: '4BW', away: 'Chemnitzer FC', awayLeague: '4SN', date: "2023-08-13T12:00:00Z", result: "6:2", identifier: 1 },
      { home: 'FC Ingolstadt 04', homeLeague: '2', away: 'FC Carl Zeiss Jena', awayLeague: '2', date: "2023-08-13T12:00:00Z", result: "2:3", identifier: 2 },
      { home: 'SV Hegnach', homeLeague: '3S', away: 'SV Elversberg', awayLeague: '2', date: "2023-08-13T12:00:00Z", result: "1:0", identifier: 1 },
      { home: 'FFC Wacker München', homeLeague: '3S', away: 'SV 67 Weinberg', awayLeague: '2', date: "2023-08-13T13:00:00Z", result: "0:4", identifier: 2 },
      { home: 'Holstein Kiel', homeLeague: '3N', away: 'Borussia Mönchengladbach', awayLeague: '2', date: "2023-08-15T16:30:00Z", result: '2:3', identifier: 2 }
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2023/24</h1>
      {/* <Round matches={data.Finale} title="Finale" /> */}
      {/* <Round matches={data.Halbfinale} title="Halbfinale" /> */}
      {/* <Round matches={data.Viertelfinale} title="Viertelfinale" /> */}
      {/* <Round matches={data.Achtelfinale} title="Achtelfinale" /> */}
      {/* <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" /> */}
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}