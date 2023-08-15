'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RoundWomen as Round } from '@/components/Round'
import styles from '@/styles/index.module.css'


export default function DFBPokal_2022_23() {
  const data: Data = {
    'Finale': [
      { home: 'VfL Wolfsburg', homeLeague: '1', away: 'SC Freiburg', awayLeague: '1', date: '2023-05-18T14:45:00Z', result: '4:1', identifier: 1 }
    ],
    'Halbfinale': [
      { home: 'FC Bayern München', homeLeague: '1', away: 'VfL Wolfsburg', awayLeague: '1', date: '2023-04-15T12:00:00Z', result: '0:5', identifier: 2 },
      { home: 'RB Leipzig', homeLeague: '2', away: 'SC Freiburg', awayLeague: '1', date: '2023-04-16T16:30:00Z', result: '0:1', identifier: 2 }
    ],
    'Viertelfinale': [
      { home: '1. FC Köln', homeLeague: '1', away: 'VfL Wolfsburg', awayLeague: '1', date: '2023-02-28T17:00:00Z', result: '0:4', identifier: 2 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '2', away: 'SC Freiburg', awayLeague: '1', date: '2023-02-28T17:00:00Z', result: '0:4', identifier: 2 },
      { home: 'RB Leipzig', homeLeague: '2', away: 'SGS Essen', awayLeague: '1', date: '2023-02-28T17:00:00Z', result: '6:1', identifier: 1 },
      { home: 'TSG 1899 Hoffenheim', homeLeague: '1', away: 'FC Bayern München', awayLeague: '1', date: '2023-02-28T19:30:00Z', result: '0:2', identifier: 2 }
    ],
    'Achtelfinale': [
      { home: 'RB Leipzig', homeLeague: '2', away: 'SG Eintracht Frankfurt', awayLeague: '1', date: '2022-11-19T11:00:00Z', result: '2:1', identifier: 1 },
      { home: 'SGS Essen', homeLeague: '1', away: 'SV Werder Bremen', awayLeague: '1', date: '2022-11-19T12:00:00Z', result: '1:0', identifier: 1 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '2', away: 'SC Sand', awayLeague: '2', date: '2022-11-19T12:00:00Z', result: '4:2', identifier: 1 },
      { home: 'MSV Duisburg', homeLeague: '1', away: 'FC Bayern München', awayLeague: '1', date: '2022-11-19T13:30:00Z', result: '0:7', identifier: 2 },
      { home: 'TSG 1899 Hoffenheim', homeLeague: '1', away: 'Bayer 04 Leverkusen', awayLeague: '1', date: '2022-11-20T12:00:00Z', result: '3:0', identifier: 1 },
      { home: 'SC Freiburg', homeLeague: '1', away: 'SV Meppen', awayLeague: '1', date: '2022-11-20T12:00:00Z', result: '1:0', identifier: 1 },
      { home: '1. FFC Turbine Potsdam', homeLeague: '1', away: '1. FC Köln', awayLeague: '1', date: '2022-11-20T12:00:00Z', result: '1:2 (1:1) n.V.', identifier: 2 },
      { home: '1. FC Nürnberg', homeLeague: '2', away: 'VfL Wolfsburg', awayLeague: '1', date: '2022-11-20T13:00:00Z', result: '0:6', identifier: 2 }
    ],
    '2. Hauptrunde': [
      { home: 'SC Fortuna Köln', homeLeague: '3W', away: 'SC Sand', awayLeague: '2', date: '2022-09-10T16:00:00Z', result: '0:1', identifier: 2 },
      { home: 'ATS Buntentor', homeLeague: '3N', away: 'SGS Essen', awayLeague: '1', date: '2022-09-11T11:00:00Z', result: '1:6', identifier: 2 },
      { home: 'Magdeburger FFC', homeLeague: '3NO', away: 'MSV Duisburg', awayLeague: '1', date: '2022-09-11T11:00:00Z', result: '0:5', identifier: 2 },
      { home: 'Borussia Bocholt', homeLeague: '3W', away: 'FC Carl Zeiss Jena', awayLeague: '2', date: '2022-09-11T11:00:00Z', result: '1:2', identifier: 2 },
      { home: 'SV 67 Weinberg', homeLeague: '3S', away: 'SG Eintracht Frankfurt', awayLeague: '1', date: '2022-09-11T11:00:00Z', result: '0:7', identifier: 2 },
      { home: 'SV Henstedt-Ulzburg', homeLeague: '3N', away: 'SV Werder Bremen', awayLeague: '1', date: '2022-09-11T12:00:00Z', result: '0:3', identifier: 2 },
      { home: 'FSV Gütersloh 2009', homeLeague: '3W', away: 'VfL Wolfsburg', awayLeague: '1', date: '2022-09-11T12:00:00Z', result: '2:8', identifier: 2 },
      { home: 'VfL Bochum', homeLeague: '3W', away: 'SV Meppen', awayLeague: '1', date: '2022-09-11T12:00:00Z', result: '0:1', identifier: 2 },
      { home: 'Türkiyemspor Berlin', homeLeague: '3NO', away: 'RB Leipzig', awayLeague: '2', date: '2022-09-11T12:00:00Z', result: '0:6', identifier: 2 },
      { home: 'TSV Jahn Calden', homeLeague: '3S', away: 'Bayer 04 Leverkusen', awayLeague: '1', date: '2022-09-11T12:00:00Z', result: '1:4', identifier: 2 },
      { home: 'SV Elversberg', homeLeague: '3SW', away: '1. FC Köln', awayLeague: '1', date: '2022-09-11T12:00:00Z', result: '0:8', identifier: 2 },
      { home: 'SG 99 Andernach', homeLeague: '2', away: 'SC Freiburg', awayLeague: '1', date: '2022-09-11T12:00:00Z', result: '2:3 (1:1) n.V.', identifier: 2 },
      { home: 'Karlsruher SC', homeLeague: '3S', away: '1. FC Nürnberg', awayLeague: '2', date: '2022-09-11T12:00:00Z', result: '1:2', identifier: 2 },
      { home: 'FC Viktoria 1899 Berlin', homeLeague: '3NO', away: '1. FFC Turbine Potsdam', awayLeague: '1', date: '2022-09-11T14:00:00Z', result: '4:4 (3:3) n.V., 2:3 i.E.', identifier: 2 },
      { home: '1. FC Saarbrücken', homeLeague: '3SW', away: 'TSG 1899 Hoffenheim', awayLeague: '1', date: '2022-09-11T14:00:00Z', result: '1:7', identifier: 2 },
      { home: 'FC Ingolstadt 04', homeLeague: '2', away: 'FC Bayern München', awayLeague: '1', date: '2022-09-12T16:30:00Z', result: '0:7', identifier: 2 }
    ],
    '1. Hauptrunde': [
      { home: 'ATS Buntentor', homeLeague: '3N', away: 'Hamburger SV', awayLeague: '3N', date: "2022-08-20T11:01:00Z", result: "3:3 (3:3) n.V., 2:0 i.E.", identifier: 1 },
      { home: 'Saalfeld Titans', homeLeague: '4TH', away: 'Karlsruher SC', awayLeague: '3S', date: "2022-08-20T13:01:00Z", result: "1:11", identifier: 2 },
      { home: 'Rostocker FC', homeLeague: '3NO', away: 'FSV Gütersloh 2009', awayLeague: '2', date: "2022-08-21T09:01:00Z", result: "0:9", identifier: 2 },
      { home: 'SV 67 Weinberg', homeLeague: '3S', away: 'SC 13 Bad Neuenahr', awayLeague: '3SW', date: "2022-08-21T09:01:00Z", result: "4:1", identifier: 1 },
      { home: 'SC Fortuna Köln', homeLeague: '3W', away: 'Chemnitzer FC', awayLeague: '4SN', date: "2022-08-21T09:01:00Z", result: "4:0", identifier: 1 },
      { home: '1. FC Riegelsberg', homeLeague: '3SW', away: '1. FC Nürnberg', awayLeague: '2', date: "2022-08-21T09:01:00Z", result: "0:3", identifier: 2 },
      { home: 'Magdeburger FFC', homeLeague: '3NO', away: 'SpVg Berghofen', awayLeague: '3W', date: "2022-08-21T11:01:00Z", result: "3:1", identifier: 1 },
      { home: 'TSV Jahn Calden', homeLeague: '3S', away: 'Alemannia Zähringen', awayLeague: '4BW', date: "2022-08-21T11:01:00Z", result: "2:0", identifier: 1 },
      { home: 'Türkiyemspor Berlin', homeLeague: '3NO', away: 'Eimsbütteler TV', awayLeague: '3N', date: "2022-08-21T12:01:00Z", result: "6:1", identifier: 1 },
      { home: 'VfL Jesteburg', homeLeague: '3N', away: 'SV Henstedt-Ulzburg', awayLeague: '3N', date: "2022-08-21T12:01:00Z", result: "3:4 (2:2) n.V.", identifier: 2 },
      { home: 'BSG Stahl Brandenburg', homeLeague: '4BB', away: 'FC Viktoria 1889 Berlin', awayLeague: '3NO', date: "2022-08-21T12:01:00Z", result: "0:7", identifier: 2 },
      { home: 'SV Elversberg', homeLeague: '3SW', away: '1. FFC 08 Niederkirchen', awayLeague: '3SW', date: "2022-08-21T12:01:00Z", result: "3:0", identifier: 1 },
      { home: '1. FC Saarbrücken', homeLeague: '3SW', away: 'SV Hegnach', awayLeague: '3S', date: "2022-08-21T12:01:00Z", result: "3:2", identifier: 1 },
      { home: 'VfR Warbeyen', homeLeague: '3W', away: 'Borussia Bocholt', awayLeague: '3W', date: "2022-08-21T13:01:00Z", result: "1:2", identifier: 2 },
      { home: 'FFC Wacker München', homeLeague: '3S', away: 'FC Ingolstadt 04', awayLeague: '2', date: "2022-08-21T13:01:00Z", result: "0:0 n.V., 4:5 i.E.", identifier: 2 },
      { home: 'Holstein Kiel', homeLeague: '3N', away: 'VfL Bochum', awayLeague: '3W', date: "2022-08-22T16:30:00Z", result: "1:2", identifier: 2 }
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2022/23</h1>
      <Round matches={data.Finale} title="Finale" />
      <Round matches={data.Halbfinale} title="Halbfinale" />
      <Round matches={data.Viertelfinale} title="Viertelfinale" />
      <Round matches={data.Achtelfinale} title="Achtelfinale" />
      <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" />
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}