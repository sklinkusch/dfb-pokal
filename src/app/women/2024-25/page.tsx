'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Round from '@/components/Round'
import styles from '@/styles/index.module.css'

export default function DFBPokal_2024_25() {
  const l1teams: { [key: string ]: string } = {
    FCB: 'FC Bayern München',
    WOB: 'VfL Wolfsburg',
    SGE: 'SG Eintracht Frankfurt',
    ESS: 'SGS Essen',
    HOF: 'TSG 1899 Hoffenheim',
    B04: 'Bayer 04 Leverkusen',
    SVW: 'SV Werder Bremen',
    RBL: 'RB Leipzig',
    SCF: 'SC Freiburg',
    KÖL: '1. FC Köln',
    POT: '1. FFC Turbine Potsdam',
    CZJ: 'FC Carl Zeiss Jena'
  };
  const Liga1 = Object.keys(l1teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l1teams[team], league: '1' };
    return obj;
  }, {});
  const l2teams: { [key: string ]: string } = {
    FCN: '1. FC Nürnberg',
    MSV: 'MSV Duisburg',
    SVM: 'SV Meppen',
    HSV: 'Hamburger SV',
    AND: 'SG 99 Andernach',
    SAN: 'SC Sand',
    GÜT: 'FSV Gütersloh 2009',
    MGL: 'Borussia Mönchengladbach',
    FCI: 'FC Ingolstadt 04',
    WEI: 'SV 67 Weinberg',
    FCU: '1. FC Union Berlin',
    BOC: 'VfL Bochum'
  };
  const Liga2 = Object.keys(l2teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l2teams[team], league: '2' };
    return obj;
  }, {});
  const l3teams: { [key: string ]: [string, string] } = {
    HEN: ['SV Henstedt-Ulzburg', 'N'],
    BUN: ['ATS Buntentor', 'N'],
    STP: ['FC St. Pauli', 'N'],
    KIE: ['Kieler MTV', 'N'],
    BSC: ['Hertha BSC Berlin', 'NO'],
    VBL: ['FC Viktoria 1889 Berlin', 'NO'],
    ROS: ['FC Hansa Rostock', 'NO'],
    FCM: ['1. FC Magdeburg', 'NO'],
    ERF: ['Rot-Weiß Erfurt', 'NO'],
    BIE: ['Arminia Bielefeld', 'W'],
    FKÖ: ['SC Fortuna Köln', 'W'],
    WAR: ['VfR Warbeyen', 'W'],
    WME: ['DJK Wacker Mecklenbeck', 'W'],
    M05: ['1. FSV Mainz 05', 'SW'],
    ISS: ['TuS Issel', 'SW'],
    SVE: ['SV Elversberg', 'SW'],
    SIG: ['SC Siegelbach', 'SW'],
    HEG: ['SV Hegnach', 'S'],
    KOF: ['Kickers Offenbach', 'S'],
    KSC: ['Karlsruher SC', 'S'],
    VfB: ['VfB Stuttgart', 'S'],
  };
  const Liga3 = Object.keys(l3teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l3teams[team][0], league: `3${l3teams[team][1]}` };
    return obj;
  }, {});
  const l4teams: { [ key: string ]: [string, string] } = {
    FOR: ['FC Forstern', 'BY'],
    BRA: ['BSG Stahl Brandenburg', 'BB'],
    GÖT: ['ESV RW Göttingen', 'NIO'],
    ELS: ['SV Eintracht Leipzig-Süd', 'SN'],
    HFV: ['Hegauer FV', 'BW'],
  };
  const Liga4 = Object.keys(l4teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l4teams[team][0], league: `4${l4teams[team][1]}`};
    return obj;
  }, {});
  const teams: Teams = { ...Liga1, ...Liga2, ...Liga3, ...Liga4 };
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
    'Finale': [
      getMatch('FCB', 'SVW', '2025-05-01T14:00Z', '4:2', 1),
    ],
    'Halbfinale': [
      getMatch('FCB', 'HOF', '2025-03-22T13:00Z', '3:2', 1),
      getMatch('HSV', 'SVW', '2025-02-23T14:30Z', '1:1, 1:3 n.V.', 2),
    ],
    'Viertelfinale': [
      getMatch('HOF', 'WOB', '2025-02-12T17:30Z', '1:0', 1),
      getMatch('HSV', 'MGL', '2025-02-12T17:30Z', '2:0', 1),
      getMatch('B04', 'SVW', '2025-02-12T17:30Z', '0:1', 2),
      getMatch('FCB', 'SGE', '2025-02-12T17:30Z', '1:1, 4:1 n.V.', 1),
    ],
    'Achtelfinale': [
      getMatch('B04', 'POT', '2024-11-22T17:00Z', '1:0', 1),
      getMatch('FCU', 'SGE', '2024-11-22T17:30Z', '0:2', 2),
      getMatch('BOC', 'HOF', '2024-11-22T17:30Z', '0:5', 2),
      getMatch('MGL', 'ESS', '2024-11-23T13:00Z', '2:0', 1),
      getMatch('FKÖ', 'SVW', '2024-11-23T15:00Z', '0:3', 2),
      getMatch('M05', 'WOB', '2024-11-23T16:00Z', '1:4', 2),
      getMatch('HSV', 'CZJ', '2024-11-24T11:00Z', '4:2', 1),
      getMatch('SCF', 'FCB', '2024-11-24T15:00Z', '1:2', 2),
    ],
    '2. Hauptrunde': [
      getMatch('BSC', 'WOB', '2024-09-06T16:30Z', '0:6', 2),
      getMatch('MSV', 'HSV', '2024-09-07T11:00Z', '0:9', 2),
      getMatch('SVM', 'CZJ', '2024-09-07T12:00Z', '1:1, 1:1 n.V., 2:3 i.E.', 2),
      getMatch('KIE', 'BOC', '2024-09-07T12:00Z', '0:4', 2),
      getMatch('FCN', 'SCF', '2024-09-07T12:00Z', '1:2', 2),
      getMatch('M05', 'KOF', '2024-09-07T15:00Z', '3:0', 1),
      getMatch('KSC', 'B04', '2024-09-08T10:00Z', '0:2', 2),
      getMatch('FKÖ', 'WEI', '2024-09-08T11:00Z', '3:1', 1),
      getMatch('SAN', 'FCB', '2024-09-08T12:00Z', '0:6', 2),
      getMatch('MGL', 'KÖL', '2024-09-08T12:00Z', '1:1, 1:1 n.V., 8:7 i.E.', 1),
      getMatch('BIE', 'SVW', '2024-09-08T13:00Z', '0:4', 2),
      getMatch('VBL', 'POT', '2024-09-08T13:00Z', 'ß:2', 2),
      getMatch('HEG', 'HOF', '2024-09-08T13:00Z', '0:7', 2),
      getMatch('WME', 'ESS', '2024-09-08T13:30Z', '0:3', 2),
      getMatch('FCU', 'RBL', '2024-09-08T14:00Z', '1:0', 1),
      getMatch('ERF', 'SGE', '2024-09-11T16:30Z', '0:10', 2),
    ],
    '1. Hauptrunde': [
      getMatch('BSC', 'BUN', '2024-08-17T12:00Z', '5:0', 1),
      getMatch('FKÖ', 'ISS', '2024-08-17T12:00Z', '3:1', 1),
      getMatch('KSC', 'SVE', '2024-08-17T13:00Z', '5:0', 1),
      getMatch('WAR', 'WME', '2024-08-17T16:00Z', '1:1, 1:1 n.V., 3:4 i.E.', 2),
      getMatch('ROS', 'BOC', '2024-08-18T09:00Z', '0:10', 2),
      getMatch('SIG', 'ERF', '2024-08-18T11:30Z', '2:5', 2),
      getMatch('STP', 'BIE', '2024-08-18T12:00Z', '0:2', 2),
      getMatch('KOF', 'FCI', '2024-08-18T12:00Z', '3:2', 1),
      getMatch('ELS', 'MGL', '2024-08-18T12:00Z', '0:5', 2),
      getMatch('FOR', 'WEI', '2024-08-18T12:00Z', '0:4', 2),
      getMatch('HFV', 'HEG', '2024-08-18T12:00Z', '0:4', 2),
      getMatch('VfB', 'M05', '2024-08-18T12:00Z', '1:2', 2),
      getMatch('GÖT', 'SVM', '2024-08-18T13:00Z', '1:7', 2),
      getMatch('HEN', 'VBL', '2024-08-18T13:00Z', '1:4', 2),
      getMatch('FCM', 'HSV', '2024-08-18T13:00Z', '0:2', 2),
      getMatch('AND', 'SAN', '2024-08-18T13:00Z', '1:2', 2),
      getMatch('BRA', 'KIE', '2024-08-18T13:00Z', '1:5', 2),
      getMatch('GÜT', 'FCU', '2024-08-20T16:30Z', '2:2, 2:2 n.V., 2:4 i.E.', 2)
    ]
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2024/25</h1>
      <Round matches={data.Finale} title="Finale" type="f" />
      <Round matches={data.Halbfinale} title="Halbfinale" type="f" />
      <Round matches={data.Viertelfinale} title="Viertelfinale" type="f" />
      <Round matches={data.Achtelfinale} title="Achtelfinale" type="f" />
      <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" type='f' />
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" type="f" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}