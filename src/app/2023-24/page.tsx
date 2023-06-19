import Link from 'next/link'
import styles from './page.module.css'

type Match = {
  home: string
  away: string
  homeLeague: number
  awayLeague: number
  result?: string
  homeWinner?: boolean
  awayWinner?: boolean
}

type Data = { [key: string]: Match[] }

export default function DFBPokal_2023_24() {
  const leagues: { [key: number]: string } = {
    1: '1. Bundesliga',
    2: '2. Bundesliga',
    3: '3. Liga',
    4: 'Regionalliga',
    5: 'Oberliga',
    6: 'Verbandsliga',
    7: 'Landesliga',
    8: 'Bezirksliga'
  }
  const data: Data = {
    '1. Hauptrunde': [
      { home: 'FC 08 Homburg', homeLeague: 4, away: 'SV Darmstadt 98', awayLeague: 1 },
      { home: 'Hallescher FC', homeLeague: 3, away: 'SpVgg Greuther Fürth', awayLeague: 2 },
      { home: 'SV Sandhausen', homeLeague: 3, away: 'Hannover 96', awayLeague: 2 },
      { home: 'VfL Osnabrück', homeLeague: 2, away: '1. FC Köln', awayLeague: 1 },
      { home: 'SV Atlas Delmenhorst', homeLeague: 5, away: 'FC St. Pauli', awayLeague: 2 },
      { home: 'FV Illertissen', homeLeague: 4, away: 'Fortuna Düsseldorf', awayLeague: 2 },
      { home: 'TuS Makkabi Berlin', homeLeague: 5, away: 'VfL Wolfsburg', awayLeague: 1 },
      { home: 'FC Rot-Weiß Koblenz', homeLeague: 5, away: '1. FC Kaiserslautern', awayLeague: 2 },
      { home: 'SpVgg Unterhaching', homeLeague: 3, away: 'FC Augsburg', awayLeague: 1 },
      { home: 'Rostocker FC', homeLeague: 5, away: '1. FC Heidenheim', awayLeague: 1 },
      { home: 'Preußen Münster', homeLeague: 3, away: 'FC Bayern München', awayLeague: 1 },
      { home: 'SSV Jahn Regensburg', homeLeague: 3, away: '1. FC Magdeburg', awayLeague: 2 },
      { home: 'FC Energie Cottbus', homeLeague: 4, away: 'SC Paderborn 07', awayLeague: 2 },
      { home: 'FC Oberneuland', homeLeague: 5, away: '1. FC Nürnberg', awayLeague: 2 },
      { home: 'VfB Lübeck', homeLeague: 3, away: 'TSG 1899 Hoffenheim', awayLeague: 1 },
      { home: 'TSG Balingen', homeLeague: 4, away: 'VfB Stuttgart', awayLeague: 1 },
      { home: 'TSV Schott Mainz', homeLeague: 4, away: 'Borussia Dortmund', awayLeague: 1 },
      { home: 'Rot-Weiss Essen', homeLeague: 3, away: 'Hamburger SV', awayLeague: 2 },
      { home: 'SV Elversberg', homeLeague: 2, away: '1. FSV Mainz 05', awayLeague: 1 },
      { home: '1. FC Lokomotive Leipzig', homeLeague: 4, away: 'SG Eintracht Frankfurt', awayLeague: 1 },
      { home: 'FC Astoria Walldorf', homeLeague: 4, away: '1. FC Union Berlin', awayLeague: 1 },
      { home: 'FC Viktoria Köln', homeLeague: 3, away: 'SV Werder Bremen', awayLeague: 1 },
      { home: 'FSV Frankfurt', homeLeague: 4, away: 'FC Hansa Rostock', awayLeague: 2 },
      { home: 'SV Wehen Wiesbaden', homeLeague: 2, away: 'RB Leipzig', awayLeague: 1 },
      { home: 'FC Teutonia 05 Ottensen', homeLeague: 4, away: 'TSV Bayer 04 Leverkusen', awayLeague: 1 },
      { home: 'FC Carl Zeiss Jena', homeLeague: 4, away: 'Hertha BSC Berlin', awayLeague: 2 },
      { home: '1. FC Saarbrücken', homeLeague: 3, away: 'Karlsruher SC', awayLeague: 2 },
      { home: 'FC Gütersloh', homeLeague: 4, away: 'Holstein Kiel', awayLeague: 2 },
      { home: 'SV Oberachern', homeLeague: 5, away: 'SC Freiburg', awayLeague: 1 },
      { home: 'TuS Bersenbrück', homeLeague: 5, away: 'Borussia Mönchengladbach', awayLeague: 1 },
      { home: 'Arminia Bielefeld', homeLeague: 3, away: 'VfL Bochum', awayLeague: 1 },
      { home: 'Eintracht Braunschweig', homeLeague: 2, away: 'FC Schalke 04', awayLeague: 2 }
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2023/24</h1>
      <h2 className={styles.h2}>1. Hauptrunde</h2>
      <h3 className={styles.h3}>Oberliga – 2. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 5 && match.awayLeague === 2).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 5 && match.awayLeague === 2).map((match, index) => (<div className={styles.flex} key={`5_2_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <h3 className={styles.h3}>Oberliga – 1. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 5 && match.awayLeague === 1).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 5 && match.awayLeague === 1).map((match, index) => (<div className={styles.flex} key={`5_1_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <h3 className={styles.h3}>Regionalliga – 2. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 4 && match.awayLeague === 2).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 4 && match.awayLeague === 2).map((match, index) => (<div className={styles.flex} key={`4_2_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <h3 className={styles.h3}>Regionalliga – 1. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 4 && match.awayLeague === 1).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 4 && match.awayLeague === 1).map((match, index) => (<div className={styles.flex} key={`4_1_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <h3 className={styles.h3}>3. Liga – 2. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 3 && match.awayLeague === 2).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 3 && match.awayLeague === 2).map((match, index) => (<div className={styles.flex} key={`3_2_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <h3 className={styles.h3}>3. Liga – 1. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 3 && match.awayLeague === 1).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 3 && match.awayLeague === 1).map((match, index) => (<div className={styles.flex} key={`3_1_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <h3 className={styles.h3}>2. Bundesliga – 2. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 2 && match.awayLeague === 2).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 2 && match.awayLeague === 2).map((match, index) => (<div className={styles.flex} key={`2_2_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <h3 className={styles.h3}>2. Bundesliga – 1. Bundesliga ({data['1. Hauptrunde'].filter(match => match.homeLeague === 2 && match.awayLeague === 1).length})</h3>
      {data['1. Hauptrunde'] && data['1. Hauptrunde'].filter(match => match.homeLeague === 2 && match.awayLeague === 1).map((match, index) => (<div className={styles.flex} key={`2_1_${index}`}>
        <span className={match.homeWinner ? styles.winner : undefined}>{match.home}</span>
        <span className={match.awayWinner ? styles.winner : undefined}>{match.away}</span>
        <span>{match.result ? match.result : "–:–"}</span>
      </div>))}
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}