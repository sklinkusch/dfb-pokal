import { createLeagueTeams } from "@/functions/createLeagueTeams";

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
const l4teams: { [ key: string ]: [string, string] } = {
  FOR: ['FC Forstern', 'BY'],
  BRA: ['BSG Stahl Brandenburg', 'BB'],
  GÖT: ['ESV RW Göttingen', 'NIO'],
  ELS: ['SV Eintracht Leipzig-Süd', 'SN'],
  HFV: ['Hegauer FV', 'BW'],
};
const teams: Teams = {
  ...createLeagueTeams(l1teams, '1'),
  ...createLeagueTeams(l2teams, '2'),
  ...createLeagueTeams(l3teams, ([_, region]) => `3${region}`),
  ...createLeagueTeams(l4teams, ([_, region]) => `4${region}`),
};
const leagueType = "f" as const;
export { teams, leagueType };
