'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Round from "@/components/Round"
import styles from '@/styles/index.module.css'

export default function DFBPokal_2023_24() {
  const data: Data = {
    'Achtelfinale': [
      { home: 'VfB Stuttgart', homeLeague: '1', away: 'Borussia Dortmund', awayLeague: '1', date: '2023-12-06T19:45Z', result: '2:0', identifier: 1 },
      { home: '1. FC Saarbrücken', homeLeague: '3', away: 'SG Eintracht Frankfurt', awayLeague: '1', date: '2023-12-06T17:00Z', result: '2:0', identifier: 1 },
      { home: 'Borussia Mönchengladbach', homeLeague: '1', away: 'VfL Wolfsburg', awayLeague: '1', date: '2023-12-05T19:45Z', result: '1:0 (0:0) n.V.', identifier: 1 },
      { home: 'Hertha BSC Berlin', homeLeague: '2', away: 'Hamburger SV', awayLeague: '2', date: '2023-12-06T19:45Z', result: '3:3 (2:2) n.V., 5:3 i.E.', identifier: 1 },
      { home: 'FC 08 Homburg', homeLeague: '4SW', away: 'FC St. Pauli', awayLeague: '2', date: '2023-12-05T19:45Z', result: '1:4', identifier: 2 },
      { home: 'TSV Bayer 04 Leverkusen', homeLeague: '1', away: 'SC Paderborn 07', awayLeague: '2', date: '2023-12-06T17:00Z', result: '3:1', identifier: 1 },
      { home: '1. FC Kaiserslautern', homeLeague: '2', away: '1. FC Nürnberg', awayLeague: '2', date: '2023-12-05T17:00Z', result: '2:0', identifier: 1 },
      { home: '1. FC Magdeburg', homeLeague: '2', away: 'Fortuna Düsseldorf', awayLeague: '2', date: '2023-12-05T17:00Z', result: '1:2', identifier: 2 }
    ],
    '2. Hauptrunde': [
      { home: 'Viktoria Köln', homeLeague: '3', away: 'SG Eintracht Frankfurt', awayLeague: '1', date: '2023-11-01T19:45Z', result: '0:2', identifier: 2 },
      { home: 'Arminia Bielefeld', homeLeague: '3', away: 'Hamburger SV', awayLeague: '2', date: '2023-10-31T19:45Z', result: '1:1 (1:1) n.V., 3:4 i.E.', identifier: 2 },
      { home: 'FC 08 Homburg', homeLeague: '4SW', away: 'SpVgg Greuther Fürth', awayLeague: '2', date: '2023-10-31T17:00Z', result: '2:1', identifier: 1 },
      { home: 'SpVgg Unterhaching', homeLeague: '3', away: 'Fortuna Düsseldorf', awayLeague: '2', date: '2023-10-31T19:45Z', result: '3:6 (3:3) n.V.', identifier: 2 },
      { home: 'SV Sandhausen', homeLeague: '3', away: 'TSV Bayer 04 Leverkusen', awayLeague: '1', date: '2023-11-01T17:00Z', result: '2:5', identifier: 2 },
      { home: '1. FC Saarbrücken', homeLeague: '3', away: 'FC Bayern München', awayLeague: '1', date: '2023-11-01T19:45Z', result: '2:1', identifier: 1 },
      { home: 'FC St. Pauli', homeLeague: '2', away: 'FC Schalke 04', awayLeague: '2', date: '2023-10-31T17:00Z', result: '2:1 (1:1) n.V.', identifier: 1 },
      { home: '1. FC Nürnberg', homeLeague: '2', away: 'FC Hansa Rostock', awayLeague: '2', date: '2023-11-01T19:45Z', result: '3:2 (2:2) n.V.', identifier: 1 },
      { home: 'Borussia Mönchengladbach', homeLeague: '1', away: '1. FC Heidenheim', awayLeague: '1', date: '2023-10-31T19:45Z', result: '3:1', identifier: 1 },
      { home: 'Holstein Kiel', homeLeague: '2', away: '1. FC Magdeburg', awayLeague: '2', date: '2023-11-01T17:00Z', result: '3:3 (2:2) n.V., 3:4 i.E.', identifier: 2 },
      { home: 'SC Freiburg', homeLeague: '1', away: 'SC Paderborn 07', awayLeague: '2', date: '2023-11-01T17:00Z', result: '1:3', identifier: 2 },
      { home: 'VfB Stuttgart', homeLeague: '1', away: '1. FC Union Berlin', awayLeague: '1', date: '2023-10-31T17:00Z', result: '1:0', identifier: 1 },
      { home: 'Hertha BSC Berlin', homeLeague: '2', away: '1. FSV Mainz 05', awayLeague: '1', date: '2023-11-01T19:45Z', result: '3:0', identifier: 1 },
      { home: 'Borussia Dortmund', homeLeague: '1', away: 'TSG 1899 Hoffenheim', awayLeague: '1', date: '2023-11-01T17:00Z', result: '1:0', identifier: 1 },
      { home: 'VfL Wolfsburg', homeLeague: '1', away: 'RB Leipzig', awayLeague: '1', date: '2023-10-31T17:00Z', result: '1:0', identifier: 1 },
      { home: '1. FC Kaiserslautern', homeLeague: '2', away: '1. FC Köln', awayLeague: '1', date: '2023-10-31T19:45Z', result: '3:2', identifier: 1 }
    ],
    '1. Hauptrunde': [
      { home: 'FC 08 Homburg', homeLeague: '4SW', away: 'SV Darmstadt 98', awayLeague: '1', date: "2023-08-14T16:00:00Z", result: "3:0", identifier: 1 },
      { home: 'Hallescher FC', homeLeague: '3', away: 'SpVgg Greuther Fürth', awayLeague: '2', date: "2023-08-12T16:00:00Z", result: "0:1", identifier: 2 },
      { home: 'SV Sandhausen', homeLeague: '3', away: 'Hannover 96', awayLeague: '2', date: "2023-08-11T16:00:00Z", result: "3:3 (3:3) n.V., 4:2 i.E.", identifier: 1 },
      { home: 'VfL Osnabrück', homeLeague: '2', away: '1. FC Köln', awayLeague: '1', date: "2023-08-14T18:45:00Z", result: "1:3 (1:1) n.V.", identifier: 2 },
      { home: 'SV Atlas Delmenhorst', homeLeague: '5NI', away: 'FC St. Pauli', awayLeague: '2', date: "2023-08-12T13:30:00Z", result: "0:5", identifier: 2 },
      { home: 'FV Illertissen', homeLeague: '4BY', away: 'Fortuna Düsseldorf', awayLeague: '2', date: "2023-08-13T13:30:00Z", result: "1:3", identifier: 2 },
      { home: 'TuS Makkabi Berlin', homeLeague: '5NO', away: 'VfL Wolfsburg', awayLeague: '1', date: "2023-08-13T13:30:00Z", result: "0:6", identifier: 2 },
      { home: 'FC Rot-Weiß Koblenz', homeLeague: '5RS', away: '1. FC Kaiserslautern', awayLeague: '2', date: "2023-08-13T13:30:00Z", result: "0:5", identifier: 2 },
      { home: 'SpVgg Unterhaching', homeLeague: '3', away: 'FC Augsburg', awayLeague: '1', date: "2023-08-13T13:30:00Z", result: "2:0", identifier: 1 },
      { home: 'Rostocker FC', homeLeague: '5NO', away: '1. FC Heidenheim', awayLeague: '1', date: "2023-08-13T11:00:00Z", result: "0:8", identifier: 2 },
      { home: 'Preußen Münster', homeLeague: '3', away: 'FC Bayern München', awayLeague: '1', date: "2023-09-26T18:45:00Z", result: '0:4', identifier: 2 },
      { home: 'SSV Jahn Regensburg', homeLeague: '3', away: '1. FC Magdeburg', awayLeague: '2', date: "2023-08-14T16:00:00Z", result: "1:2", identifier: 2 },
      { home: 'FC Energie Cottbus', homeLeague: '4NO', away: 'SC Paderborn 07', awayLeague: '2', date: "2023-08-13T16:00:00Z", result: "0:7", identifier: 2 },
      { home: 'FC Oberneuland', homeLeague: '5HB', away: '1. FC Nürnberg', awayLeague: '2', date: "2023-08-12T13:30:00Z", result: "1:9", identifier: 2 },
      { home: 'VfB Lübeck', homeLeague: '3', away: 'TSG 1899 Hoffenheim', awayLeague: '1', date: "2023-08-14T16:00:00Z", result: "1:4", identifier: 2 },
      { home: 'TSG Balingen', homeLeague: '4SW', away: 'VfB Stuttgart', awayLeague: '1', date: "2023-08-12T11:00:00Z", result: "0:4", identifier: 2 },
      { home: 'TSV Schott Mainz', homeLeague: '4SW', away: 'Borussia Dortmund', awayLeague: '1', date: "2023-08-12T13:30:00Z", result: "1:6", identifier: 2 },
      { home: 'Rot-Weiss Essen', homeLeague: '3', away: 'Hamburger SV', awayLeague: '2', date: "2023-08-13T11:00:00Z", result: "3:4 (3:3) n.V.", identifier: 2 },
      { home: 'SV Elversberg', homeLeague: '2', away: '1. FSV Mainz 05', awayLeague: '1', date: "2023-08-12T16:00:00Z", result: "0:1", identifier: 2 },
      { home: '1. FC Lokomotive Leipzig', homeLeague: '4NO', away: 'SG Eintracht Frankfurt', awayLeague: '1', date: "2023-08-13T13:30:00Z", result: "0:7", identifier: 2 },
      { home: 'FC Astoria Walldorf', homeLeague: '4SW', away: '1. FC Union Berlin', awayLeague: '1', date: "2023-08-13T16:00:00Z", result: "0:4", identifier: 2 },
      { home: 'FC Viktoria Köln', homeLeague: '3', away: 'SV Werder Bremen', awayLeague: '1', date: "2023-08-12T13:30:00Z", result: "3:2", identifier: 1 },
      { home: 'FSV Frankfurt', homeLeague: '4SW', away: 'FC Hansa Rostock', awayLeague: '2', date: "2023-08-13T16:00:00Z", result: "1:1 (1:1) n.V., 0:3 i.E.", identifier: 2 },
      { home: 'SV Wehen Wiesbaden', homeLeague: '2', away: 'RB Leipzig', awayLeague: '1', date: "2023-09-27T18:45:00Z", result: '2:3', identifier: 2 },
      { home: 'FC Teutonia 05 Ottensen', homeLeague: '4N', away: 'TSV Bayer 04 Leverkusen', awayLeague: '1', date: "2023-08-12T13:30:00Z", result: "0:8", identifier: 2 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '4NO', away: 'Hertha BSC Berlin', awayLeague: '2', date: "2023-08-12T11:00:00Z", result: "0:5", identifier: 2 },
      { home: '1. FC Saarbrücken', homeLeague: '3', away: 'Karlsruher SC', awayLeague: '2', date: "2023-08-11T16:00:00Z", result: "2:1", identifier: 1 },
      { home: 'FC Gütersloh', homeLeague: '4W', away: 'Holstein Kiel', awayLeague: '2', date: "2023-08-12T13:30:00Z", result: "0:2", identifier: 2 },
      { home: 'SV Oberachern', homeLeague: '5BW', away: 'SC Freiburg', awayLeague: '1', date: "2023-08-13T13:30:00Z", result: "0:2", identifier: 2 },
      { home: 'TuS Bersenbrück', homeLeague: '5NI', away: 'Borussia Mönchengladbach', awayLeague: '1', date: "2023-08-11T16:00:00Z", result: "0:7", identifier: 2 },
      { home: 'Arminia Bielefeld', homeLeague: '3', away: 'VfL Bochum', awayLeague: '1', date: "2023-08-12T16:00:00Z", result: "2:2 (2:2) n.V., 4:1 i.E.", identifier: 1 },
      { home: 'Eintracht Braunschweig', homeLeague: '2', away: 'FC Schalke 04', awayLeague: '2', date: "2023-08-11T18:45:00Z", result: "1:3", identifier: 2 }
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2023/24</h1>
      {/* <Round matches={data.Finale} title="Finale" /> */}
      {/* <Round matches={data.Halbfinale} title="Halbfinale" /> */}
      {/* <Round matches={data.Viertelfinale} title="Viertelfinale" /> */}
      <Round matches={data.Achtelfinale} title="Achtelfinale" type="m" />
      <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" type="m" />
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" type="m" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}