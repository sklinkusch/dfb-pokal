import Link from 'next/link'
import Round from "@/components/Round"
import styles from '@/styles/index.module.css'

export default function DFBPokal_2023_24() {
  const data: Data = {
    'Finale': [
      { home: 'RB Leipzig', homeLeague: '1', away: 'SG Eintracht Frankfurt', awayLeague: '1', result: '2:0', identifier: 1 }
    ],
    'Halbfinale': [
      { home: 'SC Freiburg', homeLeague: '1', away: 'RB Leipzig', awayLeague: '1', result: '1:5', identifier: 2 },
      { home: 'VfB Stuttgart', homeLeague: '1', away: 'SG Eintracht Frankfurt', awayLeague: '1', result: '2:3', identifier: 2 }
    ],
    'Viertelfinale': [
      { home: 'SG Eintracht Frankfurt', homeLeague: '1', away: '1. FC Union Berlin', awayLeague: '1', result: '2:0', identifier: 1 },
      { home: 'FC Bayern München', homeLeague: '1', away: 'SC Freiburg', awayLeague: '1', result: '1:2', identifier: 2 },
      { home: '1. FC Nürnberg', homeLeague: '2', away: 'VfB Stuttgart', awayLeague: '1', result: '0:1', identifier: 2 },
      { home: 'RB Leipzig', homeLeague: '1', away: 'Borussia Dortmund', awayLeague: '1', result: '2:0', identifier: 1 }
    ],
    'Achtelfinale': [
      { home: 'SC Paderborn 07', homeLeague: '2', away: 'VfB Stuttgart', awayLeague: '1', result: '1:2', identifier: 2 },
      { home: '1. FC Union Berlin', homeLeague: '1', away: 'VfL Wolfsburg', awayLeague: '1', result: '2:1', identifier: 1 },
      { home: 'RB Leipzig', homeLeague: '1', away: 'TSG 1899 Hoffenheim', awayLeague: '1', result: '3:1', identifier: 1 },
      { home: '1. FSV Mainz 05', homeLeague: '1', away: 'FC Bayern München', awayLeague: '1', result: '0:4', identifier: 2 },
      { home: 'SV Sandhausen', homeLeague: '2', away: 'SC Freiburg', awayLeague: '1', result: '0:2', identifier: 2 },
      { home: 'SG Eintracht Frankfurt', homeLeague: '1', away: 'SV Darmstadt 98', awayLeague: '2', result: '4:2', identifier: 1 },
      { home: '1. FC Nürnberg', homeLeague: '2', away: 'Fortuna Düsseldorf', awayLeague: '2', result: '1:1 n.V. (1:1), 5:3 i.E.', identifier: 1 },
      { home: 'VfL Bochum', homeLeague: '1', away: 'Borussia Dortmund', awayLeague: '1', result: '1:2', identifier: 2 }
    ],
    '2. Hauptrunde': [
      { home: 'VfB Lübeck', homeLeague: '4N', away: '1. FSV Mainz 05', awayLeague: '1', result: '0:3', identifier: 2 },
      { home: 'Stuttgarter Kickers', homeLeague: '5BW', away: 'SG Eintracht Frankfurt', awayLeague: '1', result: '0:2', identifier: 2 },
      { home: 'SV Waldhof Mannheim', homeLeague: '3', away: '1. FC Nürnberg', awayLeague: '2', result: '0:1', identifier: 2 },
      { home: 'RB Leipzig', homeLeague: '1', away: 'Hamburger SV', awayLeague: '2', result: '4:0', identifier: 1 },
      { home: 'SV Elversberg', homeLeague: '3', away: 'VfL Bochum', awayLeague: '1', result: '0:1', identifier: 2},
      { home: 'Eintracht Braunschweig', homeLeague: '2', away: 'VfL Wolfsburg', awayLeague: '1', result: '1:2', identifier: 2 },
      { home: 'TSG 1899 Hoffenheim', homeLeague: '1', away: 'FC Schalke 04', awayLeague: '1', result: '5:1', identifier: 1 },
      { home: 'SV Darmstadt 98', homeLeague: '2', away: 'Borussia Mönchengladbach', awayLeague: '1', result: '2:1', identifier: 1 },
      { home: 'Hannover 96', homeLeague: '2', away: 'Borussia Dortmund', awayLeague: '1', result: '0:2', identifier: 2 },
      { home: 'SC Freiburg', homeLeague: '1', away: 'FC St. Pauli', awayLeague: '2', result: '2:1 n.V. (1:1)', identifier: 1 },
      { home: 'SV Sandhausen', homeLeague: '2', away: 'Karlsruher SC', awayLeague: '2', result: '2:2 n.V. (1:1), 8:7 i.E.', identifier: 1 },
      { home: 'SC Paderborn 07', homeLeague: '2', away: 'SV Werder Bremen', awayLeague: '1', result: '2:2 n.V. (2:2), 5:4 i.E.', identifier: 1 },
      { home: 'FC Augsburg', homeLeague: '1', away: 'FC Bayern München', awayLeague: '1', result: '2:5', identifier: 2 },
      { home: 'VfB Stuttgart', homeLeague: '1', away: 'Arminia Bielefeld', awayLeague: '2', result: '6:0', identifier: 1 },
      { home: '1. FC Union Berlin', homeLeague: '1', away: '1. FC Heidenheim', awayLeague: '2', result: '2:0', identifier: 1 },
      { home: 'SSV Jahn Regensburg', homeLeague: '2', away: 'Fortuna Düsseldorf', awayLeague: '2', result: '0:3', identifier: 2 }
    ],
    '1. Hauptrunde': [
      { home: 'TSG Neustrelitz', homeLeague: '5NO', away: 'Karlsruher SC', awayLeague: '2', result: '0:8', identifier: 2 },
      { home: '1. FC Kaan-Marienborn', homeLeague: '4W', away: '1. FC Nürnberg', awayLeague: '2', result: '0:2', identifier: 2 },
      { home: 'Dynamo Dresden', homeLeague: '3', away: 'VfB Stuttgart', awayLeague: '1', result: '0:1', identifier: 2 },
      { home: 'TSV 1860 München', homeLeague: '3', away: 'Borussia Dortmund', awayLeague: '1', result: '0:3', identifier: 2 },
      { home: 'FC Viktoria 1889 Berlin', homeLeague: '4NO', away: 'VfL Bochum', awayLeague: '1', result: '0:3', identifier: 2 },
      { home: 'SV Straelen', homeLeague: '4W', away: 'FC St. Pauli', awayLeague: '2', result: '3:4', identifier: 2 },
      { home: 'SV Elversberg', homeLeague: '3', away: 'TSV Bayer 04 Leverkusen', awayLeague: '1', result: '4:3', identifier: 1 },
      { home: 'SSV Jahn Regensburg', homeLeague: '2', away: '1. FC Köln', awayLeague: '1', result: '2:2 n.V. (2:2), 4:3 i.E.', identifier: 1 },
      { home: 'FV Illertissen', homeLeague: '4BY', away: '1. FC Heidenheim', awayLeague: '2', result: '0:2', identifier: 2 },
      { home: 'VfB Lübeck', homeLeague: '4N', away: 'FC Hansa Rostock', awayLeague: '2', result: '1:0', identifier: 1 },
      { home: 'SpVgg Bayreuth', homeLeague: '3', away: 'Hamburger SV', awayLeague: '2', result: '1:3 n.V. (1:1)', identifier: 2 },
      { home: 'FC Einheit Wernigerode', homeLeague: '5NO', away: 'SC Paderborn 07', awayLeague: '2', result: '0:10', identifier: 2 },
      { home: 'Stuttgarter Kickers', homeLeague: '5BW', away: 'SpVgg Greuther Fürth', awayLeague: '2', result: '2:0', identifier: 1 },
      { home: 'Kickers Offenbach', homeLeague: '4SW', away: 'Fortuna Düsseldorf', awayLeague: '2', result: '1:4', identifier: 2 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '4NO', away: 'VfL Wolfsburg', awayLeague: '2', result: '0:1', identifier: 2 },
      { home: 'BSV Rehden', homeLeague: '4N', away: 'SV Sandhausen', awayLeague: '2', result: '0:4', identifier: 2 },
      { home: 'Bremer SV', homeLeague: '4N', away: 'FC Schalke 04', awayLeague: '1', result: '0:5', identifier: 2 },
      { home: '1. FC Kaiserslautern', homeLeague: '2', away: 'SC Freiburg', awayLeague: '1', result: '1:2 n.V. (1:1)', identifier: 2 },
      { home: 'SV Oberachern', homeLeague: '5BW', away: 'Borussia Mönchengladbach', awayLeague: '1', result: '1:9', identifier: 2 },
      { home: 'Blau-Weiß Lohne', homeLeague: '4N', away: 'FC Augsburg', awayLeague: '1', result: '0:4', identifier: 2 },
      { home: 'TSV Schott Mainz', homeLeague: '5RS', away: 'Hannover 96', awayLeague: '2', result: '0:3', identifier: 2 },
      { home: 'FV Engers', homeLeague: '5RS', away: 'Arminia Bielefeld', awayLeague: '2', result: '1:7', identifier: 2 },
      { home: 'SV Rödinghausen', homeLeague: '4W', away: 'TSG 1899 Hoffenheim', awayLeague: '1', result: '0:2 n.V.', identifier: 2 },
      { home: 'Eintracht Braunschweig', homeLeague: '2', away: 'Hertha BSC Berlin', awayLeague: '1', result: '4:4 n.V. (2:2), 6:5 i.E.', identifier: 1 },
      { home: 'FC Erzgebirge Aue', homeLeague: '3', away: '1. FSV Mainz 05', awayLeague: '1', result: '0:3', identifier: 2 },
      { home: 'SV Waldhof Mannheim', homeLeague: '3', away: 'Holstein Kiel', awayLeague: '2', result: '0:0 n.V., 5:3 i.E.', identifier: 1 },
      { home: 'Chemnitzer FC', homeLeague: '4NO', away: '1. FC Union Berlin', awayLeague: '1', result: '1:2 n.V. (1:1)', identifier: 2 },
      { home: 'FC Energie Cottbus', homeLeague: '4NO', away: 'SV Werder Bremen', awayLeague: '1', result: '1:2', identifier: 2 },
      { home: 'FC Ingolstadt 04', homeLeague: '3', away: 'SV Darmstadt 98', awayLeague: '2', result: '0:3', identifier: 2 },
      { home: '1. FC Magdeburg', homeLeague: '2', away: 'SG Eintracht Frankfurt', awayLeague: '1', result: '0:4', identifier: 2 },
      { home: 'RB Leipzig', homeLeague: '1', away: 'FC Teutonia 05 Ottensen', awayLeague: '4N', result: '8:0', identifier: 1 },
      { home: 'FC Viktoria Köln', homeLeague: '3', away: 'FC Bayern München', awayLeague: '1', result: '0:5', identifier: 2 }
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2022/23</h1>
      <Round matches={data.Finale} title="Finale" type="m" />
      <Round matches={data.Halbfinale} title="Halbfinale" type="m" />
      <Round matches={data.Viertelfinale} title="Viertelfinale" type="m" />
      <Round matches={data.Achtelfinale} title="Achtelfinale" type="m" />
      <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" type="m" />
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" type="m" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}