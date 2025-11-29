'use client'
import Link from 'next/link'
import Round from "@/components/Round"
import styles from '@/styles/index.module.css'

export default function DFBPokal_2024_25() {
  const l1teams: { [key: string ]: string } = {
    FCB: 'FC Bayern München',
    B04: 'Bayer 04 Leverkusen',
    SGE: 'SG Eintracht Frankfurt',
    BVB: 'Borussia Dortmund',
    SCF: 'SC Freiburg',
    M05: '1. FSV Mainz 05',
    RBL: 'RB Leipzig',
    SVW: 'SV Werder Bremen',
    VfB: 'VfB Stuttgart',
    MGL: 'Borussia Mönchengladbach',
    WOB: 'VfL Wolfsburg',
    FCA: 'FC Augsburg',
    FCU: '1. FC Union Berlin',
    STP: 'FC St. Pauli',
    HOF: 'TSG 1899 Hoffenheim',
    FCH: '1. FC Heidenheim',
    KÖL: '1. FC Köln',
    HSV: 'Hamburger SV',
  };
  const Liga1 = Object.keys(l1teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l1teams[team], league: '1' };
    return obj;
  }, {});
  const l2teams: { [key: string ]: string } = {
    KIE: 'Holstein Kiel',
    BOC: 'VfL Bochum',
    SVE: 'SV Elversberg',
    P07: 'SC Paderborn 07',
    FCM: '1. FC Magdeburg',
    DÜS: 'Fortuna Düsseldorf',
    FCK: '1. FC Kaiserslautern',
    KSC: 'Karlsruher SC',
    H96: 'Hannover 96',
    FCN: '1. FC Nürnberg',
    BSC: 'Hertha BSC',
    D98: 'SV Darmstadt 98',
    SGF: 'SpVgg Greuther Fürth',
    S04: 'FC Schalke 04',
    PMS: 'Preußen Münster',
    EBS: 'Eintracht Braunschweig',
    BIE: 'Arminia Bielefeld',
    DRE: 'Dynamo Dresden',
  };
  const Liga2 = Object.keys(l2teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l2teams[team], league: '2' };
    return obj;
  }, {});
  const l3teams: { [key: string ]: string } = {
    ULM: 'SSV Ulm 1846',
    JRE: 'SSV Jahn Regensburg',
    FCS: '1. FC Saarbrücken',
    ECB: 'FC Energie Cottbus',
    WIE: 'SV Wehen Wiesbaden',
    ROS: 'FC Hansa Rostock',
    RWE: 'Rot-Weiss Essen',
    VKL: 'Viktoria Köln',
    SWF: '1. FC Schweinfurt 05',
  };
  const Liga3 = Object.keys(l3teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l3teams[team], league: '3' };
    return obj;
  }, {});
  const l4teams: { [ key: string ]: [string, string] } = {
    SVS: ['SV Sandhausen', 'SW'],
    ILL: ['FV Illertissen', 'BY'],
    BFC: ['BFC Dynamo', 'NO'],
    NOR: ['Eintracht Norderstedt', 'N'],
    LOH: ['Blau-Weiß Lohne', 'N'],
    HOM: ['FC 08 Homburg', 'SW'],
    LKL: ['1. FC Lokomotive Leipzig', 'NO'],
    HFC: ['Hallescher FC', 'NO'],
    LÜB: ['VfB Lübeck', 'N'],
    BAH: ['Bahlinger SC', 'SW'],
    ZFC: ['ZFC Meuselwitz', 'NO'],
    LOT: ['Sportfreunde Lotte', 'W'],
    GTL: ['FC Gütersloh', 'W'],
    GAS: ['SG Sonnenhof Großaspach', 'SW'],
  };
  const Liga4 = Object.keys(l4teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l4teams[team][0], league: `4${l4teams[team][1]}`};
    return obj;
  }, {});
  const l5teams: { [key: string]: [string, string] } = {
    RSV: ['RSV Eintracht 1949', 'NO'],
    HEM: ['SV Hemelingen', 'HB'],
    DEL: ['Atlas Delmenhorst', 'NI'],
    ENG: ['FV Engers 07', 'RS'],
    FKP: ['FK Pirmasens', 'RS']
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
    'Achtelfinale': [
      getMatch('MGL', 'STP', '2025-12-02T17:00Z'),
      getMatch('BSC', 'FCK', '2025-12-02T17:00Z'),
      getMatch('RBL', 'FCM', '2025-12-02T20:00Z'),
      getMatch('BVB', 'B04', '2025-12-02T20:00Z'),
      getMatch('BOC', 'VfB', '2025-12-03T17:00Z'),
      getMatch('SCF', 'D98', '2025-12-03T17:00Z'),
      getMatch('HSV', 'KIE', '2025-12-03T19:45Z'),
      getMatch('FCU', 'FCB', '2025-12-03T19:45Z'),
    ],
    '2. Hauptrunde': [
      getMatch('SGE', 'BVB', '2025-10-28T17:30Z', '1:1, 1:1 n.V., 2:4 i.E.', 2),
      getMatch('FCH', 'HSV', '2025-10-28T17:30Z', '0:1', 2),
      getMatch('BSC', 'SVE', '2025-10-28T17:30Z', '3:0', 1),
      getMatch('WOB', 'KIE', '2025-10-28T17:30Z', '0:1', 2),
      getMatch('FCA', 'BOC', '2025-10-28T19:45Z', '0:1', 2),
      getMatch('MGL', 'KSC', '2025-10-28T19:45Z', '3:1', 1),
      getMatch('ECB', 'RBL', '2025-10-28T19:45Z', '1:4', 2),
      getMatch('STP', 'HOF', '2025-10-28T19:45Z', '1:1, 2:2 n.V., 8:7 i.E.', 1),
      getMatch('SGF', 'FCK', '2025-10-29T17:00Z', '0:1', 2),
      getMatch('ILL', 'FCM', '2025-10-29T17:00Z', '0:3', 2),
      getMatch('M05', 'VfB', '2025-10-29T17:00Z', '0:2', 2),
      getMatch('P07', 'B04', '2025-10-29T17:00Z', '1:1, 2:4 n.V.', 2),
      getMatch('KÖL', 'FCB', '2025-10-29T19:45Z', '1:4', 2),
      getMatch('DÜS', 'SCF', '2025-10-29T19:45Z', '1:3', 2),
      getMatch('D98', 'S04', '2025-10-29T19:45Z', '4:0', 1),
      getMatch('FCU', 'BIE', '2025-10-29T19:45Z', '1:1, 2:1 n.V.', 1),
    ],
    '1. Hauptrunde': [
      getMatch('FCS', 'FCM', '2025-08-15T16:00Z', '1:3', 2),
      getMatch('GTL', 'FCU', '2025-08-15T16:00Z', '0:5', 2),
      getMatch('GAS', 'B04', '2025-08-15T16:00Z', '0:4', 2),
      getMatch('BIE', 'SVW', '2025-08-15T18:45Z', '1:0', 1),
      getMatch('BFC', 'BOC', '2025-08-16T11:00Z', '1:1, 1:3 n.V.', 2),
      getMatch('FKP', 'HSV', '2025-08-16T11:00Z', '1:1, 1:2 n.V.', 2),
      getMatch('BAH', 'FCH', '2025-08-16T13:30Z', '0:5', 2),
      getMatch('ROS', 'HOF', '2025-08-16T13:30Z', '0:4', 2),
      getMatch('SVS', 'RBL', '2025-08-16T13:30Z', '2:4', 2),
      getMatch('NOR', 'STP', '2025-08-16T13:30Z', '0:0 n.V., 2:3 i.E.', 2),
      getMatch('ILL', 'FCN', '2025-08-16T13:30Z', '3:3, 3:3 n.V., 6:5 i.E.', 1),
      getMatch('HEM', 'WOB', '2025-08-16T13:30Z', '0:9', 2),
      getMatch('ECB', 'H96', '2025-08-16T16:00Z', '1:0', 1),
      getMatch('LOT', 'SCF', '2025-08-16T16:00Z', '0:2', 2),
      getMatch('LÜB', 'D98', '2025-08-16T16:00Z', '1:2', 2),
      getMatch('ENG', 'SGE', '2025-08-17T11:00Z', '0:5', 2),
      getMatch('VKL', 'P07', '2025-08-17T11:00Z', '1:3', 2),
      getMatch('LKL', 'S04', '2025-08-17T13:30Z', '0:1 n.V.', 2),
      getMatch('LOH', 'SGF', '2025-08-17T13:30Z', '0:2', 2),
      getMatch('JRE', 'KÖL', '2025-08-17T13:30Z', '1:2', 2),
      getMatch('ZFC', 'KSC', '2025-08-17T13:30Z', '0:5', 2),
      getMatch('RSV', 'FCK', '2025-08-17T13:30Z', '0:7', 2),
      getMatch('DEL', 'MGL', '2025-08-17T13:30Z', '2:3', 2),
      getMatch('HOM', 'KIE', '2025-08-17T16:00Z', '0:2', 2),
      getMatch('HFC', 'FCA', '2025-08-17T16:00Z', '0:2', 2),
      getMatch('ULM', 'SVE', '2025-08-17T16:00Z', '0:1', 2),
      getMatch('DRE', 'M05', '2025-08-18T16:00Z', '0:1', 2),
      getMatch('SWF', 'DÜS', '2025-08-18T16:00Z', '2:4', 2),
      getMatch('PMS', 'BSC', '2025-08-18T16:00Z', '0:0 n.V., 3:5 i.E.', 2),
      getMatch('RWE', 'BVB', '2025-08-18T18:45Z', '0:1', 2),
      getMatch('EBS', 'VfB', '2025-08-26T18:45Z', '3:3, 4:4 n.V., 7:8 i.E.', 2),
      getMatch('WIE', 'FCB', '2025-08-27T18:45Z', '2:3', 2),
    ]
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2025/26</h1>
      {/* <Round matches={data.Finale} title="Finale" type="m" /> */}
      {/* <Round matches={data.Halbfinale} title="Halbfinale" type="m" /> */}
      {/* <Round matches={data.Viertelfinale} title="Viertelfinale" type="m" /> */}
      <Round matches={data.Achtelfinale} title="Achtelfinale" type="m" />
      <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" type="m" />
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" type="m" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}