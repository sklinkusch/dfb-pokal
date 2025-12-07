'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Round from '@/components/Round'
import styles from '@/styles/index.module.css'

export default function DFBPokal_2025_26() {
  const l1teams: { [key: string ]: string } = {
    FCB: 'FC Bayern München',
    WOB: 'VfL Wolfsburg',
    SGE: 'SG Eintracht Frankfurt',
    B04: 'Bayer 04 Leverkusen',
    SCF: 'SC Freiburg',
    HOF: 'TSG 1899 Hoffenheim',
    SVW: 'SV Werder Bremen',
    RBL: 'RB Leipzig',
    ESS: 'SGS Essen',
    KÖL: '1. FC Köln',
    CZJ: 'FC Carl Zeiss Jena',
    FCU: '1. FC Union Berlin',
    FCN: '1. FC Nürnberg',
    HSV: 'Hamburger SV'
  };
  const Liga1 = Object.keys(l1teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l1teams[team], league: '1' };
    return obj;
  }, {});
  const l2teams: { [key: string ]: string } = {
    POT: '1. FFC Turbine Potsdam',
    SAN: 'SC Sand',
    SVM: 'SV Meppen',
    BOC: 'VfL Bochum',
    FCI: 'FC Ingolstadt 04',
    MGL: 'Borussia Mönchengladbach',
    AND: 'SG 99 Andernach',
    VBL: 'FC Viktoria 1889 Berlin',
    WAR: 'VfR Warbeyen',
    M05: '1. FSV Mainz 05',
    VfB: 'VfB Stuttgart',
  };
  const Liga2 = Object.keys(l2teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l2teams[team], league: '2' };
    return obj;
  }, {});
  const l3teams: { [key: string ]: [string, string] } = {
    VHH: ['SC Victoria Hamburg', 'N'],
    BUN: ['ATS Buntentor', 'N'],
    KIE: ['Holstein Kiel', 'N'],
    H96: ['Hannover 96', 'N'],
    FCM: ['1. FC Magdeburg', 'NO'],
    GÜT: ['FSV Gütersloh 2009', 'W'],
    FKÖ: ['SC Fortuna Köln', 'W'],
    BVB: ['Borussia Dortmund', 'W'],
    MON: ['1. FFC Montabaur', 'SW'],
    SVE: ['SV Elversberg', 'SW'],
    SIG: ['SC Siegelbach', 'SW'],
    WEI: ['SV 67 Weinberg', 'S'],
    KSC: ['Karlsruher SC', 'S'],
    SGF: ['SpVgg Greuther Fürth', 'S'],
    KOF: ['Kickers Offenbach', 'S'],
    HER: ['VfL Herrenberg', 'S'],
  };
  const Liga3 = Object.keys(l3teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l3teams[team][0], league: `3${l3teams[team][1]}` };
    return obj;
  }, {});
  const l4teams: { [ key: string ]: [string, string] } = {
    BPA: ['Borussia Pankow', 'B'],
    BAB: ['FSV Babelsberg 74', 'BB'],
    NBR: ['1. FC Neubrandenburg', 'MV'],
    CHL: ['BSG Chemie Leipzig', 'SN'],
    FSG: ['FC Freiburg-St. Georgen', 'BW'],
    STI: ['Saalfeld Titans', 'TH'],
  };
  const Liga4 = Object.keys(l4teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l4teams[team][0], league: `4${l4teams[team][1]}`};
    return obj;
  }, {});
  const l5teams: { [key: string ]: [string, string] } = {
    SOL: ['TSV Solingen-Aufderhöhe', 'NR'],
  };
  const Liga5 = Object.keys(l5teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l5teams[team][0], league: `5${l5teams[team][1]}`};
    return obj;
  }, {});
  const teams: Teams = { ...Liga1, ...Liga2, ...Liga3, ...Liga4, ...Liga5 };
  const getMatch = (shortHome: string, shortAway: string, date?: string, result?: string, identifier?: 1 | 2, live?: boolean) => {
    if (teams.hasOwnProperty(shortHome) && teams.hasOwnProperty(shortAway)) {
      const homeTeam = teams[shortHome];
      const awayTeam = teams[shortAway];
      const resultObject: Match = { home: homeTeam.name, homeLeague: homeTeam.league, away: awayTeam.name, awayLeague: awayTeam.league };
      if (date) resultObject.date = date;
      if (result) resultObject.result = result;
      if (identifier) resultObject.identifier = identifier;
      if (live) resultObject.live = live;
      return resultObject;
    }
  }
  const data: Data = {
    'Viertelfinale': [
      getMatch('WOB', 'SGE'),
      getMatch('ESS', 'SVW'),
      getMatch('HSV', 'FCB'),
      getMatch('CZJ', 'SAN'),
    ],
    'Achtelfinale': [
      getMatch('FCU', 'CZJ', '2025-11-15T13:00Z', '0:1', 2),
      getMatch('WOB', 'SCF', '2025-11-15T15:30Z', '3:1', 1),
      getMatch('POT', 'ESS', '2025-11-16T12:00Z', '0:1', 2),
      getMatch('SAN', 'KÖL', '2025-11-16T12:00Z', '3:2', 1),
      getMatch('FCI', 'FCB', '2025-11-16T13:00Z', '0:3', 2),
      getMatch('HOF', 'SGE', '2025-11-16T13:00Z', '4:6', 2),
      getMatch('HSV', 'B04', '2025-11-16T14:00Z', '1:1, 1:1 n.V., 4:2 i.E.', 1),
      getMatch('RBL', 'SVW', '2025-11-16T15:00Z', '1:1, 1:1 n.V., 4:5 i.E.', 2),
    ],
    '1. Hauptrunde': [
      getMatch('BUN', 'WOB', '2025-09-27T11:00Z', '0:11', 2),
      getMatch('MON', 'POT', '2025-09-27T13:00Z', '0:3', 2),
      getMatch('FCI', 'FCN', '2025-09-28T09:00Z', '1:1, 2:2 n.V., 4:2 i.E.', 1),
      getMatch('H96', 'SCF', '2025-09-28T09:00Z', '0:4', 2),
      getMatch('SVE', 'B04', '2025-09-28T10:00Z', '0:5', 2),
      getMatch('KOF', 'ESS', '2025-09-28T11:00Z', '0:7', 2),
      getMatch('WAR', 'KÖL', '2025-09-28T11:00Z', '0:6', 2),
      getMatch('SVM', 'SAN', '2025-09-28T12:00Z', '0:3', 2),
      getMatch('CHL', 'CZJ', '2025-09-28T12:00Z', '0:5', 2),
      getMatch('AND', 'RBL', '2025-09-28T12:00Z', '0:7', 2),
      getMatch('FCM', 'HSV', '2025-09-28T12:00Z', '0:3', 2),
      getMatch('VBL', 'SGE', '2025-09-28T12:00Z', '1:3', 2),
      getMatch('M05', 'FCU', '2025-09-28T12:00Z', '0:2', 2),
      getMatch('VHH', 'SVW', '2025-09-28T13:00Z', '0:7', 2),
      getMatch('SGF', 'HOF', '2025-09-28T13:00Z', '1:2', 2),
      getMatch('BVB', 'FCB', '2025-09-29T16:30Z', '0:2', 2),
    ],
    'Playoffs': [
      getMatch('SVE', 'FKÖ', '2025-08-16T12:00Z', '1:1, 1:1 n.V., 4:2 i.E.', 1),
      getMatch('MON', 'SIG', '2025-08-16T12:00Z', '3:0', 1),
      getMatch('WEI', 'SGF', '2025-08-16T13:00Z', '2:2, 2:3 n.V.', 2),
      getMatch('KSC', 'AND', '2025-08-16T14:00Z', '0:4', 2),
      getMatch('CHL', 'FSG', '2025-08-16T15:00Z', '3:2', 1),
      getMatch('VBL', 'BOC', '2025-08-17T10:00Z', '2:1', 1),
      getMatch('NBR', 'WAR', '2025-08-17T10:00Z', '0:8', 2),
      getMatch('SOL', 'VHH', '2025-08-17T11:00Z', '0:6', 2),
      getMatch('GÜT', 'FCM', '2025-08-17T12:00Z', '0:2', 2),
      getMatch('BAB', 'BUN', '2025-08-17T12:00Z', '1:2', 2),
      getMatch('HER', 'KOF', '2025-08-17T12:00Z', '1:1, 1:1 n.V., 1:4 i.E.', 2),
      getMatch('STI', 'FCI', '2025-08-17T12:00Z', '0:23', 2),
      getMatch('VfB', 'M05', '2025-08-17T12:00Z', '0:2', 2),
      getMatch('BPA', 'H96', '2025-08-17T13:00Z', '0:6', 2),
      getMatch('KIE', 'SVM', '2025-08-17T13:00Z', '0:1', 2),
      getMatch('BVB', 'MGL', '2025-08-19T17:00Z', '3:1', 1),
    ],
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2025/26</h1>
      {/* <Round matches={data.Finale} title="Finale" type="f" /> */}
      {/* <Round matches={data.Halbfinale} title="Halbfinale" type="f" /> */}
      <Round matches={data.Viertelfinale} title="Viertelfinale" type="f" />
      <Round matches={data.Achtelfinale} title="Achtelfinale" type="f" />
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" type="f" />
      <Round matches={data['Playoffs']} title="Playoffs" type="f" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}