'use client'
import Link from 'next/link'
import Round from "@/components/Round"
import styles from '@/styles/index.module.css'

export default function DFBPokal_2024_25() {
  const l1teams: { [key: string ]: string } = {
    B04: 'Bayer 04 Leverkusen',
    VfB: 'VfB Stuttgart',
    FCB: 'FC Bayern München',
    RBL: 'RB Leipzig',
    BVB: 'Borussia Dortmund',
    SGE: 'SG Eintracht Frankfurt',
    HOF: 'TSG 1899 Hoffenheim',
    FCH: '1. FC Heidenheim',
    SVW: 'SV Werder Bremen',
    SCF: 'SC Freiburg',
    FCA: 'FC Augsburg',
    WOB: 'VfL Wolfsburg',
    M05: '1. FSV Mainz 05',
    MGL: 'Borussia Mönchengladbach',
    FCU: '1. FC Union Berlin',
    BOC: 'VfL Bochum',
    STP: 'FC St. Pauli',
    KIE: 'Holstein Kiel',
  };
  const Liga1 = Object.keys(l1teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l1teams[team], league: '1' };
    return obj;
  }, {});
  const l2teams: { [key: string ]: string } = {
    KÖL: '1. FC Köln',
    D98: 'SV Darmstadt 98',
    DÜS: 'Fortuna Düsseldorf',
    HSV: 'Hamburger SV',
    KSC: 'Karlsruher SC',
    H96: 'Hannover 96',
    P07: 'SC Paderborn 07',
    SGF: 'SpVgg Greuther Fürth',
    BSC: 'Hertha BSC',
    S04: 'FC Schalke 04',
    SVE: 'SV Elversberg',
    FCN: '1. FC Nürnberg',
    FCK: '1. FC Kaiserslautern',
    FCM: '1. FC Magdeburg',
    EBS: 'Eintracht Braunschweig',
    ULM: 'SSV Ulm 1846',
    PMS: 'Preußen Münster',
    JRE: 'SSV Jahn Regensburg'
  };
  const Liga2 = Object.keys(l2teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l2teams[team], league: '2' };
    return obj;
  }, {});
  const l3teams: { [key: string ]: string } = {
    ROS: 'FC Hansa Rostock',
    OSN: 'VfL Osnabrück',
    WIE: 'SV Wehen Wiesbaden',
    DRE: 'Dynamo Dresden',
    SVS: 'SV Sandhausen',
    FCI: 'FC Ingolstadt 04',
    WÜR: 'Würzburger Kickers',
    ECB: 'FC Energie Cottbus',
    AAC: 'Alemannia Aachen',
    RWE: 'Rot-Weiss Essen',
    FCS: '1. FC Saarbrücken',
    AUE: 'Erzgebirge Aue',
    BIE: 'Arminia Bielefeld'
  };
  const Liga3 = Object.keys(l3teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l3teams[team], league: '3' };
    return obj;
  }, {});
  const l4teams: { [ key: string ]: [string, string] } = {
    VBL: ['Viktoria Berlin', 'NO'],
    BSV: ['Bremer SV', 'N'],
    OTT: ['FC Teutonia 05 Ottensen', 'N'],
    KOF: ['Kickers Offenbach', 'SW'],
    GFC: ['Greifswalder FC', 'NO'],
    SVM: ['SV Meppen', 'N'],
    HFC: ['Hallescher FC', 'NO'],
    PLB: ['1. FC Phönix Lübeck', 'N'],
    VIL: ['FC 08 Villingen', 'SW'],
    CZJ: ['FC Carl Zeiss Jena', 'NO'],
    LOT: ['Sportfreunde Lotte', 'W']
  };
  const Liga4 = Object.keys(l4teams).reduce((acc: Teams, team) => {
    const obj = { ...acc };
    obj[team] = { name: l4teams[team][0], league: `4${l4teams[team][1]}`};
    return obj;
  }, {});
  const l5teams: { [key: string]: [string, string] } = {
    HIL: ['VfV 06 Hildesheim', 'NI'],
    KOB: ['TuS Koblenz', 'RS'],
    SMZ: ['TSV Schott Mainz', 'RS'],
    AAL: ['VfR Aalen', 'BW']
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
      getMatch('WÜR', 'HOF', '2024-08-16T16:00Z'),
      getMatch('WIE', 'M05', '2024-08-16T16:00Z'),
      getMatch('HFC', 'STP', '2024-08-16T16:00Z'),
      getMatch('ULM', 'FCB', '2024-08-16T18:45Z'),
      getMatch('AUE', 'MGL', '2024-08-17T11:00Z'),
      getMatch('SMZ', 'SGF', '2024-08-17T11:00Z'),
      getMatch('VIL', 'FCH', '2024-08-17T13:30Z'),
      getMatch('RWE', 'RBL', '2024-08-17T13:30Z'),
      getMatch('FCI', 'FCK', '2024-08-17T13:30Z'),
      getMatch('AAL', 'S04', '2024-08-17T13:30Z'),
      getMatch('OSN', 'SCF', '2024-08-17T13:30Z'),
      getMatch('GFC', 'FCU', '2024-08-17T13:30Z'),
      getMatch('BIE', 'H96', '2024-08-17T16:00Z'),
      getMatch('AAC', 'KIE', '2024-08-17T16:00Z'),
      getMatch('PLB', 'BVB', '2024-08-17T16:00Z'),
      getMatch('FCS', 'FCN', '2024-08-18T11:00Z'),
      getMatch('VBL', 'FCA', '2024-08-18T11:00Z'),
      getMatch('BSV', 'P07', '2024-08-18T13:30Z'),
      getMatch('HIL', 'SVE', '2024-08-18T13:30Z'),
      getMatch('JRE', 'BOC', '2024-08-18T13:30Z'),
      getMatch('SVS', 'KÖL', '2024-08-18T13:30Z'),
      getMatch('ROS', 'BSC', '2024-08-18T13:30Z'),
      getMatch('OTT', 'D98', '2024-08-18T13:30Z'),
      getMatch('DRE', 'DÜS', '2024-08-18T16:00Z'),
      getMatch('LOT', 'KSC', '2024-08-18T16:00Z'),
      getMatch('SVM', 'HSV', '2024-08-18T16:00Z'),
      getMatch('ECB', 'SVW', '2024-08-19T16:00Z'),
      getMatch('KOB', 'WOB', '2024-08-19T16:00Z'),
      getMatch('KOF', 'FCM', '2024-08-19T16:00Z'),
      getMatch('EBS', 'SGE', '2024-08-19T18:45Z'),
      getMatch('PMS', 'VfB', '2024-08-27T18:45Z'),
      getMatch('CZJ', 'B04', '2024-08-28T16:00Z')
    ]
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>DFB-Pokal 2024/25</h1>
      {/* <Round matches={data.Finale} title="Finale" type="m" /> */}
      {/* <Round matches={data.Halbfinale} title="Halbfinale" type="m" /> */}
      {/* <Round matches={data.Viertelfinale} title="Viertelfinale" type="m" /> */}
      {/* <Round matches={data.Achtelfinale} title="Achtelfinale" type="m" /> */}
      {/* <Round matches={data['2. Hauptrunde']} title="2. Hauptrunde" type="m" /> */}
      <Round matches={data['1. Hauptrunde']} title="1. Hauptrunde" type="m" />
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>Zur Hauptseite</Link>
      </div>
    </main>
  )
}