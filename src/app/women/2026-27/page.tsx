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
    HOF: 'TSG 1899 Hoffenheim',
    B04: 'Bayer 04 Leverkusen',
    SVW: 'SV Werder Bremen',
    KÖL: '1. FC Köln',
    SCF: 'SC Freiburg',
    FCU: '1. FC Union Berlin',
    RBL: 'RB Leipzig',
    FCN: '1. FC Nürnberg',
    HSV: 'Hamburger SV',
    VfB: 'VfB Stuttgart',
    M05: 'FSV Mainz 05',
  };
  const Liga1 = Object.keys(l1teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l1teams[team], league: '1' };
    return obj;
  }, {});
  const l2teams: { [key: string ]: string } = {
    ESS: 'SGS Essen',
    CZJ: 'FC Carl Zeiss Jena',
    SAN: 'SC Sand',
    SVM: 'SV Meppen',
    VBL: 'FC Viktoria 1889 Berlin',
    AND: 'SG 99 Andernach',
    FCI: 'FC Ingolstadt 04',
    BOC: 'VfL Bochum',
    MGL: 'Borussia Mönchengladbach',
    POT: '1. FFC Turbine Potsdam',
    WAR: 'VfR Warbeyen',
    BSC: 'Hertha BSC Berlin'
  };
  const Liga2 = Object.keys(l2teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l2teams[team], league: '2' };
    return obj;
  }, {});
  const l3teams: { [key: string ]: [string, string] } = {
    KSC: ['Karlsruher SC', 'S'],
    SGF: ['SpVgg Greuther Fürth', 'S'],
    BAB: ['FSV Babelsberg 74', 'NO'],
    BUN: ['ATS Buntentor', 'N'],
    STP: ['FC St. Pauli', 'N'],
    ROS: ['FC Hansa Rostock', 'NO'],
    FKÖ: ['SC Fortuna Köln', 'W'],
    MSV: ['MSV Duisburg', 'W'],
    H96: ['Hannover 96', 'N'],
    ISS: ['TuS Issel', 'SW'],
    FCS: ['1. FC Saarbrücken', 'SW'],
    CFC: ['Chemnitzer FC', 'NO'],
    FCM: ['1. FC Magdeburg', 'NO'],
    KIE: ['Holstein Kiel', 'N'],
    WOR: ['VfR Wormatia 08 Worms', 'SW'],
    ERF: ['1. FFV Erfurt', 'NO'],
    S04: ['FC Schalke 04', 'W'],
  };
  const Liga3 = Object.keys(l3teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l3teams[team][0], league: `3${l3teams[team][1]}` };
    return obj;
  }, {});
  const l4teams: { [ key: string ]: [string, string] } = {
    BMI: ['Berolina Mitte', 'B'],
    MAR: ['SF BG Marburg', 'HE'],
    JBB: ['FC Jesteburg-Bendestorf', 'NIW'],
  };
  const Liga4 = Object.keys(l4teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l4teams[team][0], league: `4${l4teams[team][1]}`};
    return obj;
  }, {});
  const l5teams: { [key: string ]: [string, string] } = {
    ZÄH: ['Alemannia Freiburg-Zähringen', 'SB'],
    EUT: ['SV Eutingen', 'WB'],
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
    '1. Hauptrunde': [
      getMatch('BOC', 'SVW'),
      getMatch('MAR', 'RBL'),
      getMatch('MGL', 'FCB'),
      getMatch('S04', 'ESS'),
      getMatch('FCM', 'FCU'),
      getMatch('EUT', 'CZJ'),
      getMatch('FCI', 'M05'),
      getMatch('AND', 'SCF'),
      getMatch('SAN', 'WOB'),
      getMatch('SGF', 'HOF'),
      getMatch('SVM', 'HSV'),
      getMatch('BUN', 'FCN'),
      getMatch('POT', 'VfB'),
      getMatch('KSC', 'SGE'),
      getMatch('BSC', 'KÖL'),
      getMatch('VBL', 'B04'),
    ],
    'Playoffs': [
      getMatch('ROS', 'BOC', '2026-08-15T09:00Z', '0:6', 2),
      getMatch('JBB', 'BSC', '2026-08-15T13:00Z', '0:5', 2),
      getMatch('S04', 'H96', '2026-08-15T13:00Z', '7:0', 1),
      getMatch('MSV', 'MGL', '2026-08-15T13:30Z', '1:2', 2),
      getMatch('KIE', 'FCM', '2026-08-16T10:00Z', '0:3', 2),
      getMatch('CFC', 'MAR', '2026-08-16T10:00Z', '0:6', 2),
      getMatch('WOR', 'EUT', '2026-08-16T11:00Z', '0:10', 2),
      getMatch('BUN', 'BMI', '2026-08-16T12:00Z', '3:0', 1),
      getMatch('WAR', 'VBL', '2026-08-16T12:00Z', '1:3', 2),
      getMatch('BAB', 'POT', '2026-08-16T12:00Z', '0:4', 2),
      getMatch('ERF', 'FCI', '2026-08-16T12:00Z', '1:1, 1:1 n.V., 1:4 i.E.', 2),
      getMatch('FCS', 'SGF', '2026-08-16T12:00Z', '1:3', 2),
      getMatch('FKÖ', 'AND', '2026-08-16T12:00Z', '1:2', 2),
      getMatch('STP', 'SVM', '2026-08-16T13:00Z', '0:1', 2),
      getMatch('ZÄH', 'SAN', '2026-08-16T14:00Z', '0:7', 2),
      getMatch('KSC', 'ISS', '2026-08-16T15:00Z', '8:0', 1),
    ],
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2026/27</h1>
      <Round matches={data.Finale} title="Finale" type="f" />
      <Round matches={data.Halbfinale} title="Halbfinale" type="f" />
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