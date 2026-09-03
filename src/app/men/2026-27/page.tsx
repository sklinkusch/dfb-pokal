'use client'
import Link from 'next/link'
import Round from "@/components/Round"
import styles from '@/styles/index.module.css'

export default function DFBPokal_2024_25() {
  const l1teams: { [key: string ]: string } = {
    FCB: 'FC Bayern München',
    BVB: 'Borussia Dortmund',
    RBL: 'RB Leipzig',
    VfB: 'VfB Stuttgart',
    HOF: 'TSG 1899 Hoffenheim',
    B04: 'Bayer 04 Leverkusen',
    SCF: 'SC Freiburg',
    SGE: 'SG Eintracht Frankfurt',
    FCA: 'FC Augsburg',
    M05: '1. FSV Mainz 05',
    FCU: '1. FC Union Berlin',
    MGL: 'Borussia Mönchengladbach',
    HSV: 'Hamburger SV',
    KÖL: '1. FC Köln',
    SVW: 'SV Werder Bremen',
    S04: 'FC Schalke 04',
    SVE: 'SV Elversberg',
    P07: 'SC Paderborn 07',
  };
  const Liga1 = Object.keys(l1teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l1teams[team], league: '1' };
    return obj;
  }, {});
  const l2teams: { [key: string ]: string } = {
    WOB: 'VfL Wolfsburg',
    STP: 'FC St. Pauli',
    FCH: '1. FC Heidenheim',
    H96: 'Hannover 96',
    D98: 'SV Darmstadt 98',
    FCK: '1. FC Kaiserslautern',
    BSC: 'Hertha BSC',
    FCN: '1. FC Nürnberg',
    BOC: 'VfL Bochum',
    KSC: 'Karlsruher SC',
    DRE: 'Dynamo Dresden',
    KIE: 'Holstein Kiel',
    BIE: 'Arminia Bielefeld',
    FCM: '1. FC Magdeburg',
    EBS: 'Eintracht Braunschweig',
    SGF: 'SpVgg Greuther Fürth',
    OSN: 'VfL Osnabrück',
    ECB: 'FC Energie Cottbus',
  };
  const Liga2 = Object.keys(l2teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l2teams[team], league: '2' };
    return obj;
  }, {});
  const l3teams: { [key: string ]: string } = {
    DÜS: 'Fortuna Düsseldorf',
    PMS: 'Preußen Münster',
    RWE: 'Rot-Weiss Essen',
    MSV: 'MSV Duisburg',
    WMA: 'SV Waldhof Mannheim',
    WIE: 'SV Wehen Wiesbaden',
    WÜR: 'Würzburger Kickers',
    ROS: 'FC Hansa Rostock',
    VKL: 'Viktoria Köln',
    FCS: '1. FC Saarbrücken',
    SCV: 'SC Verl',
    GAS: 'SG Sonnenhof Großaspach',
  };
  const Liga3 = Object.keys(l3teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l3teams[team], league: '3' };
    return obj;
  }, {});
  const l4teams: { [ key: string ]: [string, string] } = {
    MÜN: ['TSV 1860 München', 'BY'],
    AGL: ['VSG Altglienicke', 'NO'],
    JED: ['SSV Jeddeloh II', 'N'],
    TRI: ['Eintracht Trier', 'SW'],
    AUE: ['FC Erzgebirge Aue', 'NO'],
    HFC: ['Hallescher FC', 'NO'],
    PHL: ['1. FC Phönix Lübeck', 'N'],
    CZJ: ['FC Carl Zeiss Jena', 'NO'],
    RHY: ['Westfalia Rhynern', 'W'],
  };
  const Liga4 = Object.keys(l4teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l4teams[team][0], league: `4${l4teams[team][1]}`};
    return obj;
  }, {});
  const l5teams: { [key: string]: [string, string] } = {
    KRI: ['VfB Krieschow', 'NO'],
    HEM: ['SV Hemelingen', 'HB'],
    HEB: ['Hamburg-Eimsbütteler Ballspiel-Club', 'HH'],
    STT: ['SC St. Tönis 11/20', 'NR'],
    LÜN: ['Lüneburger SK Hansa', 'NI'],
    BAH: ['Bahlinger SC', 'BW'],
    SMZ: ['TSV Schott Mainz', 'RS'],
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
      getMatch('STT', 'SGE', '2026-08-21T16:00Z', '0:11', 2),
      getMatch('WMA', 'FCK', '2026-08-21T16:00Z', '0:0, 0:1 n.V.', 2),
      getMatch('PMS', 'KSC', '2026-08-21T16:00Z', '1:2', 2),
      getMatch('ROS', 'VfB', '2026-08-21T18:45Z', '0:4', 2),
      getMatch('WIE', 'B04', '2026-08-22T11:00Z', '0:4', 2),
      getMatch('ECB', 'FCA', '2026-08-22T11:00Z', '0:2', 2),
      getMatch('AUE', 'HOF', '2026-08-22T13:30Z', '0:4', 2),
      getMatch('LÜN', 'SVW', '2026-08-22T13:30Z', '0:3', 2),
      getMatch('MSV', 'SVE', '2026-08-22T13:30Z', '1:3', 2),
      getMatch('VKL', 'FCN', '2026-08-22T13:30Z', '1:1, 1:1 n.V., 4:5 i.E.', 2),
      getMatch('FCS', 'BSC', '2026-08-22T13:30Z', '1:1, 1:1 n.V., 2:4 i.E.', 2),
      getMatch('HEM', 'H96', '2026-08-22T13:30Z', '1:9', 2),
      getMatch('GAS', 'BIE', '2026-08-22T16:00Z', '2:2, 2:2 n.V., 3:0 i.E.', 1),
      getMatch('TRI', 'RBL', '2026-08-22T16:00Z', '0:6', 2),
      getMatch('MÜN', 'KIE', '2026-08-22T16:00Z', '0:2', 2),
      getMatch('SGF', 'BOC', '2026-08-23T11:00Z', '1:2', 2),
      getMatch('JED', 'FCH', '2026-08-23T11:00Z', '5:2', 1),
      getMatch('KRI', 'M05', '2026-08-23T13:30Z', '0:9', 2),
      getMatch('SMZ', 'MGL', '2026-08-23T13:30Z', '0:5', 2),
      getMatch('RHY', 'DRE', '2026-08-23T13:30Z', '0:6', 2),
      getMatch('CZJ', 'D98', '2026-08-23T13:30Z', '1:2', 2),
      getMatch('BAH', 'FCM', '2026-08-23T13:30Z', '0:4', 2),
      getMatch('EBS', 'FCU', '2026-08-23Z13:30Z', '2:4', 2),
      getMatch('RWE', 'STP', '2026-08-23T16:00Z', '2:0', 1),
      getMatch('DÜS', 'SCF', '2026-08-23T16:00Z', '1:5', 2),
      getMatch('PHL', 'P07', '2026-08-23T16:00Z', '2:4', 2),
      getMatch('WÜR', 'KÖL', '2026-08-24T16:00Z', '1:2', 2),
      getMatch('AGL', 'WOB', '2026-08-24T16:00Z', '2:2, 3:3 n.V., 5:6 i.E.', 2),
      getMatch('SCV', 'HSV', '2026-08-24T16:00Z', '0:3', 2),
      getMatch('HFC', 'S04', '2026-08-24T18:45Z', '2:2, 2:5 n.V.', 2),
      getMatch('HEB', 'BVB', '2026-09-01T18:45Z', '0:5', 2),
      getMatch('OSN', 'FCB', '2026-09-02T18:45Z', '1:4', 2),
    ]
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2026/27</h1>
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
