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
      { home: 'FC 08 Homburg', homeLeague: '4SW', away: 'SV Darmstadt 98', awayLeague: 1 },
      { home: 'Hallescher FC', homeLeague: 3, away: 'SpVgg Greuther Fürth', awayLeague: 2 },
      { home: 'SV Sandhausen', homeLeague: 3, away: 'Hannover 96', awayLeague: 2 },
      { home: 'VfL Osnabrück', homeLeague: 2, away: '1. FC Köln', awayLeague: 1 },
      { home: 'SV Atlas Delmenhorst', homeLeague: '5NI', away: 'FC St. Pauli', awayLeague: 2 },
      { home: 'FV Illertissen', homeLeague: '4BY', away: 'Fortuna Düsseldorf', awayLeague: 2 },
      { home: 'TuS Makkabi Berlin', homeLeague: '5NO', away: 'VfL Wolfsburg', awayLeague: 1 },
      { home: 'FC Rot-Weiß Koblenz', homeLeague: '5RS', away: '1. FC Kaiserslautern', awayLeague: 2 },
      { home: 'SpVgg Unterhaching', homeLeague: 3, away: 'FC Augsburg', awayLeague: 1 },
      { home: 'Rostocker FC', homeLeague: '5NO', away: '1. FC Heidenheim', awayLeague: 1 },
      { home: 'Preußen Münster', homeLeague: 3, away: 'FC Bayern München', awayLeague: 1 },
      { home: 'SSV Jahn Regensburg', homeLeague: 3, away: '1. FC Magdeburg', awayLeague: 2 },
      { home: 'FC Energie Cottbus', homeLeague: '4NO', away: 'SC Paderborn 07', awayLeague: 2 },
      { home: 'FC Oberneuland', homeLeague: '5HB', away: '1. FC Nürnberg', awayLeague: 2 },
      { home: 'VfB Lübeck', homeLeague: 3, away: 'TSG 1899 Hoffenheim', awayLeague: 1 },
      { home: 'TSG Balingen', homeLeague: '4SW', away: 'VfB Stuttgart', awayLeague: 1 },
      { home: 'TSV Schott Mainz', homeLeague: '4SW', away: 'Borussia Dortmund', awayLeague: 1 },
      { home: 'Rot-Weiss Essen', homeLeague: 3, away: 'Hamburger SV', awayLeague: 2 },
      { home: 'SV Elversberg', homeLeague: 2, away: '1. FSV Mainz 05', awayLeague: 1 },
      { home: '1. FC Lokomotive Leipzig', homeLeague: '4NO', away: 'SG Eintracht Frankfurt', awayLeague: 1 },
      { home: 'FC Astoria Walldorf', homeLeague: '4SW', away: '1. FC Union Berlin', awayLeague: 1 },
      { home: 'FC Viktoria Köln', homeLeague: 3, away: 'SV Werder Bremen', awayLeague: 1 },
      { home: 'FSV Frankfurt', homeLeague: '4SW', away: 'FC Hansa Rostock', awayLeague: 2 },
      { home: 'SV Wehen Wiesbaden', homeLeague: 2, away: 'RB Leipzig', awayLeague: 1 },
      { home: 'FC Teutonia 05 Ottensen', homeLeague: '4N', away: 'TSV Bayer 04 Leverkusen', awayLeague: 1 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '4NO', away: 'Hertha BSC Berlin', awayLeague: 2 },
      { home: '1. FC Saarbrücken', homeLeague: 3, away: 'Karlsruher SC', awayLeague: 2 },
      { home: 'FC Gütersloh', homeLeague: '4W', away: 'Holstein Kiel', awayLeague: 2 },
      { home: 'SV Oberachern', homeLeague: '5BW', away: 'SC Freiburg', awayLeague: 1 },
      { home: 'TuS Bersenbrück', homeLeague: '5NI', away: 'Borussia Mönchengladbach', awayLeague: 1 },
      { home: 'Arminia Bielefeld', homeLeague: 3, away: 'VfL Bochum', awayLeague: 1 },
      { home: 'Eintracht Braunschweig', homeLeague: 2, away: 'FC Schalke 04', awayLeague: 2 }
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2023/24</h1>
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