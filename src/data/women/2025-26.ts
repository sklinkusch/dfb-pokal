import { getRound } from "@/functions/getRound";
import { teams } from "@/teams/women/2025-26";

export type RoundName = 'Playoffs' | '1. Hauptrunde' | 'Achtelfinale' | 'Viertelfinale' | 'Halbfinale' | 'Finale';

export const ROUND_ORDER: RoundName[] = [
    'Finale',
    'Halbfinale',
    'Viertelfinale',
    'Achtelfinale',
    '1. Hauptrunde',
    'Playoffs',
];

type Data = Record<RoundName, Match[]>;

const data: Data = {
    'Finale': getRound(teams, [
        { home: 'WOB', away: 'FCB', date: '2026-05-14T14:00Z', result: '0:4', identifier: 2 },
    ]),
    'Halbfinale': getRound(teams, [
        { home: 'CZJ', away: 'WOB', date: '2026-04-05T14:15Z', result: '0:0, 0:0 n.V., 4:5 i.E.', identifier: 2 },
        { home: 'FCB', away: 'ESS', date: '2026-04-06T13:30Z', result: '4:0', identifier: 1 },
    ]),
    Viertelfinale: getRound(teams, [
        { home: 'WOB', away: 'SGE', date: '2026-03-11T17:30Z', result: '1:0', identifier: 1 },
        { home: 'ESS', away: 'SVW', date: '2026-03-11T17:30Z', result: '1:0', identifier: 1 },
        { home: 'HSV', away: 'FCB', date: '2026-03-11T17:30Z', result: '0:3', identifier: 2 },
        { home: 'CZJ', away: 'SAN', date: '2026-03-11T17:30Z', result: '4:1', identifier: 1 },
    ]),
    Achtelfinale: getRound(teams, [
        { home: 'FCU', away: 'CZJ', date: '2025-11-15T13:00Z', result: '0:1', identifier: 2 },
        { home: 'WOB', away: 'SCF', date: '2025-11-15T15:30Z', result: '3:1', identifier: 1 },
        { home: 'POT', away: 'ESS', date: '2025-11-16T12:00Z', result: '0:1', identifier: 2 },
        { home: 'SAN', away: 'KÖL', date: '2025-11-16T12:00Z', result: '3:2', identifier: 1 },
        { home: 'FCI', away: 'FCB', date: '2025-11-16T13:00Z', result: '0:3', identifier: 2 },
        { home: 'HOF', away: 'SGE', date: '2025-11-16T13:00Z', result: '4:6', identifier: 2 },
        { home: 'HSV', away: 'B04', date: '2025-11-16T14:00Z', result: '1:1, 1:1 n.V., 4:2 i.E.', identifier: 1 },
        { home: 'RBL', away: 'SVW', date: '2025-11-16T15:00Z', result: '1:1, 1:1 n.V., 4:5 i.E.', identifier: 2 },
    ]),
    '1. Hauptrunde': getRound(teams, [
        { home: 'BUN', away: 'WOB', date: '2025-09-27T11:00Z', result: '0:11', identifier: 2 },
        { home: 'MON', away: 'POT', date: '2025-09-27T13:00Z', result: '0:3', identifier: 2 },
        { home: 'FCI', away: 'FCN', date: '2025-09-28T09:00Z', result: '1:1, 2:2 n.V., 4:2 i.E.', identifier: 1 },
        { home: 'H96', away: 'SCF', date: '2025-09-28T09:00Z', result: '0:4', identifier: 2 },
        { home: 'SVE', away: 'B04', date: '2025-09-28T10:00Z', result: '0:5', identifier: 2 },
        { home: 'KOF', away: 'ESS', date: '2025-09-28T11:00Z', result: '0:7', identifier: 2 },
        { home: 'WAR', away: 'KÖL', date: '2025-09-28T11:00Z', result: '0:6', identifier: 2 },
        { home: 'SVM', away: 'SAN', date: '2025-09-28T12:00Z', result: '0:3', identifier: 2 },
        { home: 'CHL', away: 'CZJ', date: '2025-09-28T12:00Z', result: '0:5', identifier: 2 },
        { home: 'AND', away: 'RBL', date: '2025-09-28T12:00Z', result: '0:7', identifier: 2 },
        { home: 'FCM', away: 'HSV', date: '2025-09-28T12:00Z', result: '0:3', identifier: 2 },
        { home: 'VBL', away: 'SGE', date: '2025-09-28T12:00Z', result: '1:3', identifier: 2 },
        { home: 'M05', away: 'FCU', date: '2025-09-28T12:00Z', result: '0:2', identifier: 2 },
        { home: 'VHH', away: 'SVW', date: '2025-09-28T13:00Z', result: '0:7', identifier: 2 },
        { home: 'SGF', away: 'HOF', date: '2025-09-28T13:00Z', result: '1:2', identifier: 2 },
        { home: 'BVB', away: 'FCB', date: '2025-09-29T16:30Z', result: '0:2', identifier: 2 },
    ]),
    Playoffs: getRound(teams, [
        { home: 'SVE', away: 'FKÖ', date: '2025-08-16T12:00Z', result: '1:1, 1:1 n.V., 4:2 i.E.', identifier: 1 },
        { home: 'MON', away: 'SIG', date: '2025-08-16T12:00Z', result: '3:0', identifier: 1 },
        { home: 'WEI', away: 'SGF', date: '2025-08-16T13:00Z', result: '2:2, 2:3 n.V.', identifier: 2 },
        { home: 'KSC', away: 'AND', date: '2025-08-16T14:00Z', result: '0:4', identifier: 2 },
        { home: 'CHL', away: 'FSG', date: '2025-08-16T15:00Z', result: '3:2', identifier: 1 },
        { home: 'VBL', away: 'BOC', date: '2025-08-17T10:00Z', result: '2:1', identifier: 1 },
        { home: 'NBR', away: 'WAR', date: '2025-08-17T10:00Z', result: '0:8', identifier: 2 },
        { home: 'SOL', away: 'VHH', date: '2025-08-17T11:00Z', result: '0:6', identifier: 2 },
        { home: 'GÜT', away: 'FCM', date: '2025-08-17T12:00Z', result: '0:2', identifier: 2 },
        { home: 'BAB', away: 'BUN', date: '2025-08-17T12:00Z', result: '1:2', identifier: 2 },
        { home: 'HER', away: 'KOF', date: '2025-08-17T12:00Z', result: '1:1, 1:1 n.V., 1:4 i.E.', identifier: 2 },
        { home: 'STI', away: 'FCI', date: '2025-08-17T12:00Z', result: '0:23', identifier: 2 },
        { home: 'VfB', away: 'M05', date: '2025-08-17T12:00Z', result: '0:2', identifier: 2 },
        { home: 'BPA', away: 'H96', date: '2025-08-17T13:00Z', result: '0:6', identifier: 2 },
        { home: 'KIE', away: 'SVM', date: '2025-08-17T13:00Z', result: '0:1', identifier: 2 },
        { home: 'BVB', away: 'MGL', date: '2025-08-19T17:00Z', result: '3:1', identifier: 1 },
    ]),
  }

  export { data };
  