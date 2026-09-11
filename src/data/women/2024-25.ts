import { getRound } from '@/functions/getRound';
import { teams } from '@/teams/women/2024-25';

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
  Finale: getRound(teams, [
    { home: 'FCB', away: 'SVW', date: '2025-05-01T14:00Z', result: '4:2', identifier: 1 },
  ]),
  Halbfinale: getRound(teams, [
    { home: 'FCB', away: 'HOF', date: '2025-03-22T13:00Z', result: '3:2', identifier: 1 },
    { home: 'HSV', away: 'SVW', date: '2025-02-23T14:30Z', result: '1:1, 1:3 n.V.', identifier: 2 },
  ]),
  Viertelfinale: getRound(teams, [
    { home: 'HOF', away: 'WOB', date: '2025-02-12T17:30Z', result: '1:0', identifier: 1 },
    { home: 'HSV', away: 'MGL', date: '2025-02-12T17:30Z', result: '2:0', identifier: 1 },
    { home: 'B04', away: 'SVW', date: '2025-02-12T17:30Z', result: '0:1', identifier: 2 },
    { home: 'FCB', away: 'SGE', date: '2025-02-12T17:30Z', result: '1:1, 4:1 n.V.', identifier: 1 },
  ]),
  Achtelfinale: getRound(teams, [
    { home: 'B04', away: 'POT', date: '2024-11-22T17:00Z', result: '1:0', identifier: 1 },
    { home: 'FCU', away:  'SGE', date: '2024-11-22T17:30Z', result: '0:2', identifier: 2 },
    { home: 'BOC', away:  'HOF', date: '2024-11-22T17:30Z', result: '0:5', identifier: 2 },
    { home: 'MGL', away:  'ESS', date: '2024-11-23T13:00Z', result: '2:0', identifier: 1 },
    { home: 'FKÖ', away:  'SVW', date: '2024-11-23T15:00Z', result: '0:3', identifier: 2 },
    { home: 'M05', away:  'WOB', date: '2024-11-23T16:00Z', result: '1:4', identifier: 2 },
    { home: 'HSV', away:  'CZJ', date: '2024-11-24T11:00Z', result: '4:2', identifier: 1 },
    { home: 'SCF', away:  'FCB', date: '2024-11-24T15:00Z', result: '1:2', identifier: 2 },
  ]),
  '2. Hauptrunde': getRound(teams, [
    { home: 'BSC', away: 'WOB', date: '2024-09-06T16:30Z', result: '0:6', identifier: 2 },
    { home: 'MSV', away: 'HSV', date: '2024-09-07T11:00Z', result: '0:9', identifier: 2 },
    { home: 'SVM', away: 'CZJ', date: '2024-09-07T12:00Z', result: '1:1, 1:1 n.V., 2:3 i.E.', identifier: 2 },
    { home: 'KIE', away: 'BOC', date: '2024-09-07T12:00Z', result: '0:4', identifier: 2 },
    { home: 'FCN', away: 'SCF', date: '2024-09-07T12:00Z', result: '1:2', identifier: 2 },
    { home: 'M05', away: 'KOF', date: '2024-09-07T15:00Z', result: '3:0', identifier: 1 },
    { home: 'KSC', away: 'B04', date: '2024-09-08T10:00Z', result: '0:2', identifier: 2 },
    { home: 'FKÖ', away: 'WEI', date: '2024-09-08T11:00Z', result: '3:1', identifier: 1 },
    { home: 'SAN', away: 'FCB', date: '2024-09-08T12:00Z', result: '0:6', identifier: 2 },
    { home: 'MGL', away: 'KÖL', date: '2024-09-08T12:00Z', result: '1:1, 1:1 n.V., 8:7 i.E.', identifier: 1 },
    { home: 'BIE', away: 'SVW', date: '2024-09-08T13:00Z', result: '0:4', identifier: 2 },
    { home: 'VBL', away: 'POT', date: '2024-09-08T13:00Z', result: 'ß:2', identifier: 2 },
    { home: 'HEG', away: 'HOF', date: '2024-09-08T13:00Z', result: '0:7', identifier: 2 },
    { home: 'WME', away: 'ESS', date: '2024-09-08T13:30Z', result: '0:3', identifier: 2 },
    { home: 'FCU', away: 'RBL', date: '2024-09-08T14:00Z', result: '1:0', identifier: 1 },
    { home: 'ERF', away: 'SGE', date: '2024-09-11T16:30Z', result: '0:10', identifier: 2 },
  ]),
  '1. Hauptrunde': getRound(teams, [
    { home: 'BSC', away: 'BUN', date: '2024-08-17T12:00Z', result: '5:0', identifier: 1 },
    { home: 'FKÖ', away: 'ISS', date: '2024-08-17T12:00Z', result: '3:1', identifier: 1 },
    { home: 'KSC', away: 'SVE', date: '2024-08-17T13:00Z', result: '5:0', identifier: 1 },
    { home: 'WAR', away: 'WME', date: '2024-08-17T16:00Z', result: '1:1, 1:1 n.V., 3:4 i.E.', identifier: 2 },
    { home: 'ROS', away: 'BOC', date: '2024-08-18T09:00Z', result: '0:10', identifier: 2 },
    { home: 'SIG', away: 'ERF', date: '2024-08-18T11:30Z', result: '2:5', identifier: 2 },
    { home: 'STP', away: 'BIE', date: '2024-08-18T12:00Z', result: '0:2', identifier: 2 },
    { home: 'KOF', away: 'FCI', date: '2024-08-18T12:00Z', result: '3:2', identifier: 1 },
    { home: 'ELS', away: 'MGL', date: '2024-08-18T12:00Z', result: '0:5', identifier: 2 },
    { home: 'FOR', away: 'WEI', date: '2024-08-18T12:00Z', result: '0:4', identifier: 2 },
    { home: 'HFV', away: 'HEG', date: '2024-08-18T12:00Z', result: '0:4', identifier: 2 },
    { home: 'VfB', away: 'M05', date: '2024-08-18T12:00Z', result: '1:2', identifier: 2 },
    { home: 'GÖT', away: 'SVM', date: '2024-08-18T13:00Z', result: '1:7', identifier: 2 },
    { home: 'HEN', away: 'VBL', date: '2024-08-18T13:00Z', result: '1:4', identifier: 2 },
    { home: 'FCM', away: 'HSV', date: '2024-08-18T13:00Z', result: '0:2', identifier: 2 },
    { home: 'AND', away: 'SAN', date: '2024-08-18T13:00Z', result: '1:2', identifier: 2 },
    { home: 'BRA', away: 'KIE', date: '2024-08-18T13:00Z', result: '1:5', identifier: 2 },
    { home: 'GÜT', away: 'FCU', date: '2024-08-20T16:30Z', result: '2:2, 2:2 n.V., 2:4 i.E.', identifier: 2 },
  ]),
}

export { data };
