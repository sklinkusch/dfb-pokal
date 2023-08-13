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
      <span className={live ? styles.winner : undefined}>{result ? result : formattedDate ? formattedDate : "–:–"}</span>
      {result && <span>{formattedDate}</span>}
    </div>
  )
}

function Round({matches, title}: RoundProps) {
  const leagueIdentifiers = [
    '4B', '4BB', '4BW', '4MV', '4SN', '4', '3N', '3NO', '3SW', '3S', '3W', '3', '2', '1'
  ]
  const leagues: { [key: string]: string } = {
    '1': '1. Bundesliga',
    '2': '2. Bundesliga',
    '3': 'Regionalliga',
    '3N': 'Regionalliga Nord',
    '3NO': 'Regionalliga Nordost',
    '3SW': 'Regionalliga Südwest',
    '3S': 'Regionalliga Süd',
    '3W': 'Regionalliga West',
    '4': '4. Liga',
    '4B': 'Verbandsliga Berlin',
    '4BB': 'Verbandsliga Brandenburg',
    '4BW': 'Oberliga Baden-Württemberg',
    '4MV': 'Verbandsliga Mecklenburg-Vorpommern',
    '4SN': 'Landesliga Sachsen'
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
  const data: Data = {
    '1. Hauptrunde': [
      { home: 'Karlsruher SC', homeLeague: '3S', away: 'SC Sand', awayLeague: 2, date: "2023-08-12T13:00:00Z", result: "0:4", identifier: 2 },
      { home: 'TSV Jahn Calden', homeLeague: '3S', away: '1. FFC Montabaur', awayLeague: '3SW', date: "2023-08-12T13:00:00Z", result: "7:0", identifier: 1 },
      { home: 'Rostocker FC', homeLeague: '4MV', away: 'Arminia Bielefeld', awayLeague: '3W', date: "2023-08-13T09:00:00Z" },
      { home: 'SV Henstedt-Ulzburg', homeLeague: '3N', away: 'Borussia Bocholt', awayLeague: '4NR', date: "2023-08-13T09:00:00Z" },
      { home: 'ATS Buntentor', homeLeague: '3N', away: 'Hamburger SV', awayLeague: 2, date: "2023-08-13T11:00:00Z" },
      { home: 'FC Viktoria 1889 Berlin', homeLeague: '3NO', away: 'TSV Barmke', awayLeague: '3N', date: "2023-08-13T12:00:00Z" },
      { home: 'SV Grün-Weiss Brieselang', homeLeague: '4BB', away: 'SFC Stern 1900', awayLeague: '4B', date: "2023-08-13T12:00:00Z" },
      { home: 'FC St. Pauli', homeLeague: '3N', away: 'Magdeburger FFC', awayLeague: '3NO', date: "2023-08-13T12:00:00Z" },
      { home: 'VfL Bochum', homeLeague: '3W', away: 'SC Fortuna Köln', awayLeague: '3W', date: "2023-08-13T12:00:00Z" },
      { home: 'Kickers Offenbach', homeLeague: '3S', away: '1. FC Riegelsberg', awayLeague: '3SW', date: "2023-08-13T12:00:00Z" },
      { home: '1. FFV Erfurt', homeLeague: '3NO', away: '1. FSV Mainz 05', awayLeague: '3SW', date: "2023-08-13T12:00:00Z" },
      { home: 'Hegauer FV', homeLeague: '4BW', away: 'Chemnitzer FC', awayLeague: '4SN', date: "2023-08-13T12:00:00Z" },
      { home: 'FC Ingolstadt 04', homeLeague: '2', away: 'FC Carl Zeiss Jena', awayLeague: '2', date: "2023-08-13T12:00:00Z" },
      { home: 'SV Hegnach', homeLeague: '3S', away: 'SV Elversberg', awayLeague: '2', date: "2023-08-13T12:00:00Z" },
      { home: 'FFC Wacker München', homeLeague: '3S', away: 'SV 67 Weinberg', awayLeague: '2', date: "2023-08-13T13:00:00Z" },
      { home: 'Holstein Kiel', homeLeague: '3N', away: 'Borussia Mönchengladbach', awayLeague: '2', date: "2023-08-15T16:30:00Z" }
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