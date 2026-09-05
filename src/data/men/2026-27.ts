import { getRound } from "@/functions/getRound";
import { teams } from "@/teams/men/2026-27";

export type RoundName = '1. Hauptrunde' | '2. Hauptrunde' | 'Achtelfinale' | 'Viertelfinale' | 'Halbfinale' | 'Finale';

export const ROUND_ORDER: RoundName[] = [
    'Finale',
    'Halbfinale',
    'Viertelfinale',
    'Achtelfinale',
    '2. Hauptrunde',
    '1. Hauptrunde',
];

type Data = Record<RoundName, Match[]>;

const data: Data = {
    Finale: getRound(teams, []),
    Halbfinale: getRound(teams, []),
    Viertelfinale: getRound(teams, []),
    Achtelfinale: getRound(teams, []),
    '2. Hauptrunde': getRound(teams, [
        {home: 'GAS', away: 'FCA'},
        {home: 'JED', away: 'BSC'},
        {home: 'RWE', away: 'RBL'},
        {home: 'KÖL', away: 'FCU'},
        {home: 'DRE', away: 'S04'},
        {home: 'BVB', away: 'SVW'},
        {home: 'BOC', away: 'M05'},
        {home: 'HSV', away: 'SGE'},
        {home: 'MGL', away: 'KSC'},
        {home: 'FCB', away: 'FCM'},
        {home: 'KIE', away: 'HOF'},
        {home: 'SCF', away: 'WOB'},
        {home: 'H96', away: 'FCK'},
        {home: 'B04', away: 'FCN'},
        {home: 'P07', away: 'VfB'},
        {home: 'SVE', away: 'D98'},
    ]),
    '1. Hauptrunde': getRound(teams, [
        {home: 'STT', away: 'SGE', date: '2026-08-21T16:00Z', result: '0:11', identifier: 2},
        {home: 'WMA', away: 'FCK', date: '2026-08-21T16:00Z', result: '0:0, 0:1 n.V.', identifier: 2},
        {home: 'PMS', away: 'KSC', date: '2026-08-21T16:00Z', result: '1:2', identifier: 2},
        {home: 'ROS', away: 'VfB', date: '2026-08-21T18:45Z', result: '0:4', identifier: 2},
        {home: 'WIE', away: 'B04', date: '2026-08-22T11:00Z', result: '0:4', identifier: 2},
        {home: 'ECB', away: 'FCA', date: '2026-08-22T11:00Z', result: '0:2', identifier: 2},
        {home: 'AUE', away: 'HOF', date: '2026-08-22T13:30Z', result: '0:4', identifier: 2},
        {home: 'LÜN', away: 'SVW', date: '2026-08-22T13:30Z', result: '0:3', identifier: 2},
        {home: 'MSV', away: 'SVE', date: '2026-08-22T13:30Z', result: '1:3', identifier: 2},
        {home: 'VKL', away: 'FCN', date: '2026-08-22T13:30Z', result: '1:1, 1:1 n.V., 4:5 i.E.', identifier: 2},
        {home: 'FCS', away: 'BSC', date: '2026-08-22T13:30Z', result: '1:1, 1:1 n.V., 2:4 i.E.', identifier: 2},
        {home: 'HEM', away: 'H96', date: '2026-08-22T13:30Z', result: '1:9', identifier: 2},
        {home: 'GAS', away: 'BIE', date: '2026-08-22T16:00Z', result: '2:2, 2:2 n.V., 3:0 i.E.', identifier: 1},
        {home: 'TRI', away: 'RBL', date: '2026-08-22T16:00Z', result: '0:6', identifier: 2},
        {home: 'MÜN', away: 'KIE', date: '2026-08-22T16:00Z', result: '0:2', identifier: 2},
        {home: 'SGF', away: 'BOC', date: '2026-08-23T11:00Z', result: '1:2', identifier: 2},
        {home: 'JED', away: 'FCH', date: '2026-08-23T11:00Z', result: '5:2', identifier: 1},
        {home: 'KRI', away: 'M05', date: '2026-08-23T13:30Z', result: '0:9', identifier: 2},
        {home: 'SMZ', away: 'MGL', date: '2026-08-23T13:30Z', result: '0:5', identifier: 2},
        {home: 'RHY', away: 'DRE', date: '2026-08-23T13:30Z', result: '0:6', identifier: 2},
        {home: 'CZJ', away: 'D98', date: '2026-08-23T13:30Z', result: '1:2', identifier: 2},
        {home: 'BAH', away: 'FCM', date: '2026-08-23T13:30Z', result: '0:4', identifier: 2},
        {home: 'EBS', away: 'FCU', date: '2026-08-23T13:30Z', result: '2:4', identifier: 2},
        {home: 'RWE', away: 'STP', date: '2026-08-23T16:00Z', result: '2:0', identifier: 1},
        {home: 'DÜS', away: 'SCF', date: '2026-08-23T16:00Z', result: '1:5', identifier: 2},
        {home: 'PHL', away: 'P07', date: '2026-08-23T16:00Z', result: '2:4', identifier: 2},
        {home: 'WÜR', away: 'KÖL', date: '2026-08-24T16:00Z', result: '1:2', identifier: 2},
        {home: 'AGL', away: 'WOB', date: '2026-08-24T16:00Z', result: '2:2, 3:3 n.V., 5:6 i.E.', identifier: 2},
        {home: 'SCV', away: 'HSV', date: '2026-08-24T16:00Z', result: '0:3', identifier: 2},
        {home: 'HFC', away: 'S04', date: '2026-08-24T18:45Z', result: '2:2, 2:5 n.V.', identifier: 2},
        {home: 'HEB', away: 'BVB', date: '2026-09-01T18:45Z', result: '0:5', identifier: 2},
        {home: 'OSN', away: 'FCB', date: '2026-09-02T18:45Z', result: '1:4', identifier: 2},
    ]),
}

export { data };
