import { createLeagueTeams } from "@/functions/createLeagueTeams";

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
  const l4teams: { [ key: string ]: [string, string] } = {
    BPA: ['Borussia Pankow', 'B'],
    BAB: ['FSV Babelsberg 74', 'BB'],
    NBR: ['1. FC Neubrandenburg', 'MV'],
    CHL: ['BSG Chemie Leipzig', 'SN'],
    FSG: ['FC Freiburg-St. Georgen', 'BW'],
    STI: ['Saalfeld Titans', 'TH'],
  };
  const l5teams: { [key: string ]: [string, string] } = {
    SOL: ['TSV Solingen-Aufderhöhe', 'NR'],
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