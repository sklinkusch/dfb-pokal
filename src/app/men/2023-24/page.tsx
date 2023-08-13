'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

type Match = {
  home: string
  away: string
  homeLeague: string | number
  awayLeague: string | number
  result?: string
  identifier?: number
  date?: string
  live?: boolean
}

type Data = { [key: string]: Match[] }

type MatchProps = {
  home: string
  away: string
  result?: string
  identifier?: number
  date?: string
  live?: boolean
}

type RoundProps = {
  matches: Match[]
  title: string
}

function Match({home, away, result, identifier, date, live}: MatchProps) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const formattedDate = date ? new Date(date).toLocaleString("de", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: tz }) : null
  return (
    <div className={styles.flex}>
      <span className={identifier === 1 ? styles.winner : undefined}>{home}</span>
      <span className={identifier === 2 ? styles.winner : undefined}>{away}</span>
      <span className={live ? styles.winner : undefined}>{result ? result : "–:–"}</span>
      {formattedDate && <span>{formattedDate}</span>}
    </div>
  )
}

function Round({matches, title}: RoundProps) {
  const leagueIdentifiers = [
    '5BW', '5HB', '5NI', '5NO', '5RS', '5', '4BY', '4N', '4NO', '4SW', '4W', '4', '3', '2', '1'
  ]
  const leagues: { [key: string]: string } = {
    '1': '1. Bundesliga',
    '2': '2. Bundesliga',
    '3': '3. Liga',
    '4': 'Regionalliga',
    '4BY': 'Regionalliga Bayern',
    '4N': 'Regionalliga Nord',
    '4NO': 'Regionalliga Nordost',
    '4SW': 'Regionalliga Südwest',
    '4W': 'Regionalliga West',
    '5': 'Oberliga',
    '5BW': 'Oberliga Baden-Württemberg',
    '5HB': 'Oberliga Bremen',
    '5NI': 'Oberliga Niedersachsen',
    '5NO': 'Oberliga Nordost',
    '5RS': 'Oberliga Rheinland-Pfalz/Saar',
  }
  const majorLeagueIdentifiers = leagueIdentifiers.filter(item => item.length === 1)
  return (
    <>
      <h2 className={styles.h2}>{title}</h2>
      {majorLeagueIdentifiers.map((hmleague, idxh: number) => {
        return majorLeagueIdentifiers.slice(idxh).map((amleague, idxa: number) => {
          const hammatches = matches.filter(match => (`${match.homeLeague}`.startsWith(`${hmleague}`) && `${match.awayLeague}`.startsWith(`${amleague}`) || `${match.homeLeague}`.startsWith(`${amleague}`) && `${match.awayLeague}`.startsWith(`${hmleague}`)))
          {return hammatches.length > 0 ? (
            <div key={`${title}_${idxh}_${idxa}`}>
              <h3 className={styles.h3}>{leagues[hmleague]} - {leagues[amleague]}</h3>
              {leagueIdentifiers.map((hleague, idx: number) => {
                return leagueIdentifiers.slice(idx).map(aleague => {
                  const hamatches = hammatches.filter(match => (`${match.homeLeague}` === `${hleague}` && `${match.awayLeague}` === `${aleague}`) || (`${match.homeLeague}` === `${aleague}` && `${match.awayLeague}` === `${hleague}`)).sort((a,b) => {
                    if (a.date && b.date) {
                      return a.date < b.date ? -1 : a.date > b.date ? +1 : 0
                    }
                    return 0
                  })
                  const hindex = leagueIdentifiers.indexOf(hleague)
                  const aindex = leagueIdentifiers.indexOf(aleague)
                  const mindex = Math.min(hindex, aindex)
                  const pindex = Math.max(hindex, mindex)
                  const mkey = hindex === mindex ? hleague : aleague
                  const pkey = hindex === pindex ? hleague : aleague
                  const loname = hindex <= aindex ? leagues[hleague] : leagues[aleague]
                  const hiname = hindex > aindex ? leagues[hleague] : leagues[aleague]
                  if (hamatches.length > 0) {
                    return (
                      <div key={`${mkey}_${pkey}`}>
                        {majorLeagueIdentifiers.includes(hleague) && majorLeagueIdentifiers.includes(aleague) ? null : <h4 className={styles.h4}>{loname} - {hiname}</h4>}
                        {hamatches.map((match, index) => {
                          if (match.date) {
                            return (
                              <Match home={match.home} away={match.away} result={match.result} identifier={match.identifier} date={match.date} key={`${mkey}_${pkey}_${index}`} live={match.live} />
                            )
                          }
                          return (
                              <Match home={match.home} away={match.away} result={match.result} identifier={match.identifier} key={`${mkey}_${pkey}_${index}`} live={match.live} />
                            )
                        })}
                      </div>
                    )
                  }
                })
              })}
            </div>
          ) : (null)}
        })
      })}
    </>
  )
}

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
      { home: 'FC 08 Homburg', homeLeague: '4SW', away: 'SV Darmstadt 98', awayLeague: 1, date: "2023-08-14T16:00:00Z" },
      { home: 'Hallescher FC', homeLeague: 3, away: 'SpVgg Greuther Fürth', awayLeague: 2, date: "2023-08-12T16:00:00Z", result: "0:1", identifier: 2 },
      { home: 'SV Sandhausen', homeLeague: 3, away: 'Hannover 96', awayLeague: 2, date: "2023-08-11T16:00:00Z", result: "3:3 (3:3) n.V., 4:2 i.E.", identifier: 1 },
      { home: 'VfL Osnabrück', homeLeague: 2, away: '1. FC Köln', awayLeague: 1, date: "2023-08-14T16:00:00Z" },
      { home: 'SV Atlas Delmenhorst', homeLeague: '5NI', away: 'FC St. Pauli', awayLeague: 2, date: "2023-08-12T13:30:00Z", result: "0:5", identifier: 2 },
      { home: 'FV Illertissen', homeLeague: '4BY', away: 'Fortuna Düsseldorf', awayLeague: 2, date: "2023-08-13T13:30:00Z", result: "1:3", identifier: 2 },
      { home: 'TuS Makkabi Berlin', homeLeague: '5NO', away: 'VfL Wolfsburg', awayLeague: 1, date: "2023-08-13T13:30:00Z", result: "0:6", identifier: 2 },
      { home: 'FC Rot-Weiß Koblenz', homeLeague: '5RS', away: '1. FC Kaiserslautern', awayLeague: 2, date: "2023-08-13T13:30:00Z", result: "0:5", identifier: 2 },
      { home: 'SpVgg Unterhaching', homeLeague: 3, away: 'FC Augsburg', awayLeague: 1, date: "2023-08-13T13:30:00Z", result: "2:0", identifier: 1 },
      { home: 'Rostocker FC', homeLeague: '5NO', away: '1. FC Heidenheim', awayLeague: 1, date: "2023-08-13T11:00:00Z", result: "0:8", identifier: 2 },
      { home: 'Preußen Münster', homeLeague: 3, away: 'FC Bayern München', awayLeague: 1, date: "2023-09-26T18:45:00Z" },
      { home: 'SSV Jahn Regensburg', homeLeague: 3, away: '1. FC Magdeburg', awayLeague: 2, date: "2023-08-14T16:00:00Z" },
      { home: 'FC Energie Cottbus', homeLeague: '4NO', away: 'SC Paderborn 07', awayLeague: 2, date: "2023-08-13T16:00:00Z" },
      { home: 'FC Oberneuland', homeLeague: '5HB', away: '1. FC Nürnberg', awayLeague: 2, date: "2023-08-12T13:30:00Z", result: "1:9", identifier: 2 },
      { home: 'VfB Lübeck', homeLeague: 3, away: 'TSG 1899 Hoffenheim', awayLeague: 1, date: "2023-08-14T16:00:00Z" },
      { home: 'TSG Balingen', homeLeague: '4SW', away: 'VfB Stuttgart', awayLeague: 1, date: "2023-08-12T11:00:00Z", result: "0:4", identifier: 2 },
      { home: 'TSV Schott Mainz', homeLeague: '4SW', away: 'Borussia Dortmund', awayLeague: 1, date: "2023-08-12T13:30:00Z", result: "1:6", identifier: 2 },
      { home: 'Rot-Weiss Essen', homeLeague: 3, away: 'Hamburger SV', awayLeague: 2, date: "2023-08-13T11:00:00Z", result: "3:4 (3:3) n.V.", identifier: 2 },
      { home: 'SV Elversberg', homeLeague: 2, away: '1. FSV Mainz 05', awayLeague: 1, date: "2023-08-12T16:00:00Z", result: "0:1", identifier: 2 },
      { home: '1. FC Lokomotive Leipzig', homeLeague: '4NO', away: 'SG Eintracht Frankfurt', awayLeague: 1, date: "2023-08-13T13:30:00Z", result: "0:7", identifier: 2 },
      { home: 'FC Astoria Walldorf', homeLeague: '4SW', away: '1. FC Union Berlin', awayLeague: 1, date: "2023-08-13T16:00:00Z" },
      { home: 'FC Viktoria Köln', homeLeague: 3, away: 'SV Werder Bremen', awayLeague: 1, date: "2023-08-12T13:30:00Z", result: "3:2", identifier: 1 },
      { home: 'FSV Frankfurt', homeLeague: '4SW', away: 'FC Hansa Rostock', awayLeague: 2, date: "2023-08-13T16:00:00Z" },
      { home: 'SV Wehen Wiesbaden', homeLeague: 2, away: 'RB Leipzig', awayLeague: 1, date: "2023-09-27T18:45:00Z" },
      { home: 'FC Teutonia 05 Ottensen', homeLeague: '4N', away: 'TSV Bayer 04 Leverkusen', awayLeague: 1, date: "2023-08-12T13:30:00Z", result: "0:8", identifier: 2 },
      { home: 'FC Carl Zeiss Jena', homeLeague: '4NO', away: 'Hertha BSC Berlin', awayLeague: 2, date: "2023-08-12T11:00:00Z", result: "0:5", identifier: 2 },
      { home: '1. FC Saarbrücken', homeLeague: 3, away: 'Karlsruher SC', awayLeague: 2, date: "2023-08-11T16:00:00Z", result: "2:1", identifier: 1 },
      { home: 'FC Gütersloh', homeLeague: '4W', away: 'Holstein Kiel', awayLeague: 2, date: "2023-08-12T13:30:00Z", result: "0:2", identifier: 2 },
      { home: 'SV Oberachern', homeLeague: '5BW', away: 'SC Freiburg', awayLeague: 1, date: "2023-08-13T13:30:00Z", result: "0:2", identifier: 2 },
      { home: 'TuS Bersenbrück', homeLeague: '5NI', away: 'Borussia Mönchengladbach', awayLeague: 1, date: "2023-08-11T16:00:00Z", result: "0:7", identifier: 2 },
      { home: 'Arminia Bielefeld', homeLeague: 3, away: 'VfL Bochum', awayLeague: 1, date: "2023-08-12T16:00:00Z", result: "2:2 (2:2) n.V., 4:1 i.E.", identifier: 1 },
      { home: 'Eintracht Braunschweig', homeLeague: 2, away: 'FC Schalke 04', awayLeague: 2, date: "2023-08-11T18:45:00Z", result: "1:3", identifier: 2 }
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