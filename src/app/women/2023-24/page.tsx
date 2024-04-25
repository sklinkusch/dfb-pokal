'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Round from '@/components/Round'
import styles from '@/styles/index.module.css'

export default function DFBPokal_2023_24() {
  const data: Data = {
    'Viertelfinale': [
      { home: 'TSG 1899 Hoffenheim', homeLeague: '1', away: 'VfL Wolfsburg', awayLeague: '1', date: '2024-03-05T17:30Z', result: '0:3', identifier: 2 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '2', away: 'FC Bayern München', awayLeague: '1', date: '2024-03-05T17:30Z', result: '0:3', identifier: 2 },
      { home: 'Bayer 04 Leverkusen', homeLeague: '1', away: 'SGS Essen', awayLeague: '1', date: '2024-03-05T17:30Z', result: '1:2', identifier: 2 },
      { home: 'SG Eintracht Frankfurt', homeLeague: '1', away: 'MSV Duisburg', awayLeague: '1', date: '2024-03-05T17:30Z', result: '4:1', identifier: 1 }
    ],
    'Achtelfinale': [
      { home: 'Hamburger SV', homeLeague: '2', away: 'Bayer 04 Leverkusen', awayLeague: '1', date: '2023-11-25T13:00Z', result: '0:4', identifier: 2 },
      { home: 'TSG 1899 Hoffenheim', homeLeague: '1', away: 'RB Leipzig', awayLeague: '1', date: '2023-11-26T12:00Z', result: '3:0', identifier: 1 },
      { home: '1. FSV Mainz 05', homeLeague: '2SW', away: 'MSV Duisburg', awayLeague: '1', date: '2023-11-26T14:00Z', result: '0:2', identifier: 2 },
      { home: 'SG Eintracht Frankfurt', homeLeague: '1', away: 'SC Freiburg', awayLeague: '1', date: '2024-02-08T17:30Z', result: '2:1', identifier: 1 },
      { home: 'VfL Wolfsburg', homeLeague: '1', away: 'SV Werder Bremen', awayLeague: '1', date: '2023-11-24T17:00Z', result: '5:0', identifier: 1 },
      { home: 'FC Viktoria 1889 Berlin', homeLeague: '3NO', away: 'FC Carl Zeiss Jena', awayLeague: '2', date: '2023-11-25T13:00Z', result: '1:3', identifier: 2 },
      { home: 'SGS Essen', homeLeague: '1', away: '1. FC Köln', awayLeague: '1', date: '2023-11-25T13:00Z', result: '4:3', identifier: 1 },
      { home: 'Kickers Offenbach', homeLeague: '3S', away: 'FC Bayern München', awayLeague: '1', date: '2024-02-14T18:00Z', result: '0:6', identifier: 2 }
    ],
    '2. Hauptrunde': [
      { home: 'SV Meppen', homeLeague: '2', away: 'Bayer 04 Leverkusen', awayLeague: '1', date: '2023-09-10T14:00Z', result: '0:3', identifier: 2 },
      { home: '1. FFC Turbine Potsdam', homeLeague: '2', away: 'VfL Wolfsburg', awayLeague: '1', date: '2023-09-10T12:00Z', result: '0:2', identifier: 2 },
      { home: 'Arminia Bielefeld', homeLeague: '3W', away: 'MSV Duisburg', awayLeague: '1', date: '2023-09-09T14:00Z', result: '1:6', identifier: 2 },
      { home: 'Borussia Mönchengladbach', homeLeague: '2', away: 'SV Werder Bremen', awayLeague: '1', date: '2023-09-09T13:30Z', result: '0:3', identifier: 2 },
      { home: 'SFC Stern 1900', homeLeague: '4B', away: '1. FC Köln', awayLeague: '1', date: '2023-09-09T11:00Z', result: '0:10', identifier: 2 },
      { home: 'VfL Bochum', homeLeague: '3W', away: 'SGS Essen', awayLeague: '1', date: '2023-09-09T11:00Z', result: '0:4', identifier: 2 },
      { home: 'FSV Gütersloh 2009', homeLeague: '2', away: 'RB Leipzig', awayLeague: '1', date: '2023-09-09T15:30Z', result: '0:7', identifier: 2 },
      { home: 'FC Viktoria 1889 Berlin', homeLeague: '3NO', away: 'SV Henstedt-Ulzburg', awayLeague: '3N', date: '2023-09-09T14:30Z', result: '4:0', identifier: 1 },
      { home: 'FC St. Pauli', homeLeague: '3N', away: 'Hamburger SV', awayLeague: '2', date: '2023-09-08T16:30Z', result: '1:7', identifier: 2 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '2', away: '1. FC Nürnberg', awayLeague: '1', date: '2023-09-09T12:00Z', result: '1:0', identifier: 1 },
      { home: 'SV 67 Weinberg', homeLeague: '2', away: 'TSG 1899 Hoffenheim', awayLeague: '1', date: '2023-09-09T13:00Z', result: '0:7', identifier: 2 },
      { home: 'SC Sand', homeLeague: '2', away: 'SC Freiburg', awayLeague: '1', date: '2023-09-10T12:00Z', result: '1:2', identifier: 2 },
      { home: 'SG 99 Andernach', homeLeague: '2', away: 'FC Bayern München', awayLeague: '1', date: '2023-09-10T12:00Z', result: '0:2', identifier: 2 },
      { home: 'Hegauer FV', homeLeague: '4BW', away: 'SG Eintracht Frankfurt', awayLeague: '1', date: '2023-09-13T16:30Z', result: '0:8', identifier: 2 },
      { home: '1. FSV Mainz 05', homeLeague: '3SW', away: 'TSV Jahn Calden', awayLeague: '3S', date: '2023-09-10T13:00Z', result: '3:0', identifier: 1 },
      { home: 'Kickers Offenbach', homeLeague: '3S', away: 'SV Hegnach', awayLeague: '3S', date: '2023-09-10T12:00Z', result: '3:0', identifier: 1 }
    ],
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
      <Round matches={data.Viertelfinale} title="Viertelfinale" type="f" />
      <Round matches={data.Achtelfinale} title="Achtelfinale" type="f" />
      <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" type='f' />
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" type="f" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}