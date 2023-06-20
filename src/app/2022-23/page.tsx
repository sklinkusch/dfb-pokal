import Link from 'next/link'
import styles from './page.module.css'

type Match = {
  home: string
  away: string
  homeLeague: string | number
  awayLeague: string | number
  result?: string
  homeWinner?: boolean
  awayWinner?: boolean
}

type Data = { [key: string]: Match[] }

export default function DFBPokal_2023_24() {
  const leagueIdentifiers = [
    '5BW', '5HB', '5NI', '5NO', '5RS', 5, '4BY', '4N', '4NO', '4SW', '4W', 3, 2, 1
  ]
  const leagues: { [key: string]: string } = {
    1: '1. Bundesliga',
    2: '2. Bundesliga',
    3: '3. Liga',
    '4BY': 'Regionalliga Bayern',
    '4N': 'Regionalliga Nord',
    '4NO': 'Regionalliga Nordost',
    '4SW': 'Regionalliga Südwest',
    '4W': 'Regionalliga West',
    '5BW': 'Oberliga Baden-Württemberg',
    '5HB': 'Oberliga Bremen',
    '5NI': 'Oberliga Niedersachsen',
    '5NO': 'Oberliga Nordost',
    '5RS': 'Oberliga Rheinland-Pfalz/Saar',
  }
  const data: Data = {
    '1. Hauptrunde': [
      { home: 'TSG Neustrelitz', homeLeague: '5NO', away: 'Karlsruher SC', awayLeague: 2, result: '0:8', homeWinner: false, awayWinner: true },
      { home: '1. FC Kaan-Marienborn', homeLeague: '4W', away: '1. FC Nürnberg', awayLeague: 2, result: '0:2', homeWinner: false, awayWinner: true },
      { home: 'Dynamo Dresden', homeLeague: 3, away: 'VfB Stuttgart', awayLeague: 1, result: '0:1', homeWinner: false, awayWinner: true },
      { home: 'TSV 1860 München', homeLeague: '3', away: 'Borussia Dortmund', awayLeague: 1, result: '0:3', homeWinner: false, awayWinner: true },
      { home: 'FC Viktoria 1889 Berlin', homeLeague: '4NO', away: 'VfL Bochum', awayLeague: 1, result: '0:3', homeWinner: false, awayWinner: true },
      { home: 'SV Straelen', homeLeague: '4W', away: 'FC St. Pauli', awayLeague: 2, result: '3:4', homeWinner: false, awayWinner: true },
      { home: 'SV Elversberg', homeLeague: 3, away: 'TSV Bayer 04 Leverkusen', awayLeague: 1, result: '4:3', homeWinner: true, awayWinner: false },
      { home: 'SSV Jahn Regensburg', homeLeague: 2, away: '1. FC Köln', awayLeague: 1, result: '2:2 n.V. (2:2), 4:3 i.E.', homeWinner: true, awayWinner: false },
      { home: 'FV Illertissen', homeLeague: '4BY', away: '1. FC Heidenheim', awayLeague: 2, result: '0:2', homeWinner: false, awayWinner: true },
      { home: 'VfB Lübeck', homeLeague: '4N', away: 'FC Hansa Rostock', awayLeague: 2, result: '1:0', homeWinner: true, awayWinner: false },
      { home: 'SpVgg Bayreuth', homeLeague: 3, away: 'Hamburger SV', awayLeague: 2, result: '1:3 n.V. (1:1)', homeWinner: false, awayWinner: true },
      { home: 'FC Einheit Wernigerode', homeLeague: '5NO', away: 'SC Paderborn 07', awayLeague: 2, result: '0:10', homeWinner: false, awayWinner: true },
      { home: 'Stuttgarter Kickers', homeLeague: '5BW', away: 'SpVgg Greuther Fürth', awayLeague: 2, result: '2:0', homeWinner: true, awayWinner: false },
      { home: 'Kickers Offenbach', homeLeague: '4SW', away: 'Fortuna Düsseldorf', awayLeague: 2, result: '1:4', homeWinner: false, awayWinner: true },
      { home: 'FC Carl Zeiss Jena', homeLeague: '4NO', away: 'VfL Wolfsburg', awayLeague: 2, result: '0:1', homeWinner: false, awayWinner: true },
      { home: 'BSV Rehden', homeLeague: '4N', away: 'SV Sandhausen', awayLeague: 2, result: '0:4', homeWinner: false, awayWinner: true },
      { home: 'Bremer SV', homeLeague: '4N', away: 'FC Schalke 04', awayLeague: 1, result: '0:5', homeWinner: false, awayWinner: true },
      { home: '1. FC Kaiserslautern', homeLeague: 2, away: 'SC Freiburg', awayLeague: 1, result: '1:2 n.V. (1:1)', homeWinner: false, awayWinner: true },
      { home: 'SV Oberachern', homeLeague: '5BW', away: 'Borussia Mönchengladbach', awayLeague: 1, result: '1:9', homeWinner: false, awayWinner: true },
      { home: 'Blau-Weiß Lohne', homeLeague: '4N', away: 'FC Augsburg', awayLeague: 1, result: '0:4', homeWinner: false, awayWinner: true },
      { home: 'TSV Schott Mainz', homeLeague: '5RS', away: 'Hannover 96', awayLeague: 2, result: '0:3', homeWinner: false, awayWinner: true },
      { home: 'FV Engers', homeLeague: '5RS', away: 'Arminia Bielefeld', awayLeague: 2, result: '1:7', homeWinner: false, awayWinner: true },
      { home: 'SV Rödinghausen', homeLeague: '4W', away: 'TSG 1899 Hoffenheim', awayLeague: 1, result: '0:2 n.V.', homeWinner: false, awayWinner: true },
      { home: 'Eintracht Braunschweig', homeLeague: 2, away: 'Hertha BSC Berlin', awayLeague: 1, result: '4:4 n.V. (2:2), 6:5 i.E.', homeWinner: true, awayWinner: false },
      { home: 'FC Erzgebirge Aue', homeLeague: 3, away: '1. FSV Mainz 05', awayLeague: 1, result: '0:3', homeWinner: false, awayWinner: true },
      { home: 'SV Waldhof Mannheim', homeLeague: 3, away: 'Holstein Kiel', awayLeague: 2, result: '0:0 n.V., 5:3 i.E.', homeWinner: true, awayWinner: false },
      { home: 'Chemnitzer FC', homeLeague: '4NO', away: '1. FC Union Berlin', awayLeague: 1, result: '1:2 n.V. (1:1)', homeWinner: false, awayWinner: true },
      { home: 'FC Energie Cottbus', homeLeague: '4NO', away: 'SV Werder Bremen', awayLeague: 1, result: '1:2', homeWinner: false, awayWinner: true },
      { home: 'FC Ingolstadt 04', homeLeague: 3, away: 'SV Darmstadt 98', awayLeague: 2, result: '0:3', homeWinner: false, awayWinner: true },
      { home: '1. FC Magdeburg', homeLeague: 2, away: 'SG Eintracht Frankfurt', awayLeague: 1, result: '0:4', homeWinner: false, awayWinner: true },
      { home: 'RB Leipzig', homeLeague: 1, away: 'FC Teutonia 05 Ottensen', awayLeague: '4N', result: '8:0', homeWinner: true, awayWinner: false },
      { home: 'FC Viktoria Köln', homeLeague: 3, away: 'FC Bayern München', awayLeague: 1, result: '0:5', homeWinner: false, awayWinner: true }
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2022/23</h1>
      <h2 className={styles.h2}>1. Hauptrunde</h2>
      {leagueIdentifiers.map(hleague => {
        return leagueIdentifiers.map(aleague => {
          const hamatches = data['1. Hauptrunde'].filter(match => `${match.homeLeague}` === `${hleague}` && `${match.awayLeague}` === `${aleague}`)
          const hlname = leagues[hleague]
          const alname = leagues[aleague]
          if (hamatches.length > 0) {
            return (
              <div key={`${hleague}_${aleague}`}>
                <h3 className={styles.h3}>{hlname} – {alname}</h3>
                {hamatches.map((match, index) => {
                  return (
                    <div className={styles.flex} key={`${hleague}_${aleague}_${index}`}>
                      <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
                      <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
                      <span>{match.result ? match.result : "–:–"}</span>
                    </div>
                  )})}
              </div>
            )
          }
        })
      })}
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}