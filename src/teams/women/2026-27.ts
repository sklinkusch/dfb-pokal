import { createLeagueTeams } from "@/functions/createLeagueTeams";

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
  const l4teams: { [ key: string ]: [string, string] } = {
    BMI: ['Berolina Mitte', 'B'],
    MAR: ['SF BG Marburg', 'HE'],
    JBB: ['FC Jesteburg-Bendestorf', 'NIW'],
  };
  const l5teams: { [key: string ]: [string, string] } = {
    ZÄH: ['Alemannia Freiburg-Zähringen', 'SB'],
    EUT: ['SV Eutingen', 'WB'],
  };
  const teams: Teams = { 
    ...createLeagueTeams(l1teams, '1'),
    ...createLeagueTeams(l2teams, '2'),
    ...createLeagueTeams(l3teams, ([_, region]) => `3${region}`),
    ...createLeagueTeams(l4teams, ([_, region]) => `4${region}`),
    ...createLeagueTeams(l5teams, ([_, region]) => `5${region}`),
};
const leagueType = "f" as const;
export { teams, leagueType };