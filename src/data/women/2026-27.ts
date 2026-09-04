import { getRound } from "@/functions/getRound";
import { teams } from "@/teams/women/2026-27";

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
    'Playoffs': getRound(teams, [
        { home: 'ROS', away: 'BOC', date: '2026-08-15T09:00Z', result: '0:6', identifier: 2 },
        { home: 'JBB', away: 'BSC', date: '2026-08-15T13:00Z', result: '0:5', identifier: 2 },
        { home: 'S04', away: 'H96', date: '2026-08-15T13:00Z', result: '7:0', identifier: 1 },
        { home: 'MSV', away: 'MGL', date: '2026-08-15T13:30Z', result: '1:2', identifier: 2 },
        { home: 'KIE', away: 'FCM', date: '2026-08-16T10:00Z', result: '0:3', identifier: 2 },
        { home: 'CFC', away: 'MAR', date: '2026-08-16T10:00Z', result: '0:6', identifier: 2 },
        { home: 'WOR', away: 'EUT', date: '2026-08-16T11:00Z', result: '0:10', identifier: 2 },
        { home: 'BUN', away: 'BMI', date: '2026-08-16T12:00Z', result: '3:0', identifier: 1 },
        { home: 'WAR', away: 'VBL', date: '2026-08-16T12:00Z', result: '1:3', identifier: 2 },
        { home: 'BAB', away: 'POT', date: '2026-08-16T12:00Z', result: '0:4', identifier: 2 },
        { home: 'ERF', away: 'FCI', date: '2026-08-16T12:00Z', result: '1:1, 1:1 n.V., 1:4 i.E.', identifier: 2 },
        { home: 'FCS', away: 'SGF', date: '2026-08-16T12:00Z', result: '1:3', identifier: 2 },
        { home: 'FKÖ', away: 'AND', date: '2026-08-16T12:00Z', result: '1:2', identifier: 2 },
        { home: 'STP', away: 'SVM', date: '2026-08-16T13:00Z', result: '0:1', identifier: 2 },
        { home: 'ZÄH', away: 'SAN', date: '2026-08-16T14:00Z', result: '0:7', identifier: 2 },
        { home: 'KSC', away: 'ISS', date: '2026-08-16T15:00Z', result: '8:0', identifier: 1 },
    ]),
    '1. Hauptrunde': getRound(teams, [
        { home: 'FCI', away: 'M05', date: '2026-09-26T12:00Z' },
        { home: 'AND', away: 'SCF', date: '2026-09-26T12:00Z' },
        { home: 'BSC', away: 'KÖL', date: '2026-09-26T12:00Z' },
        { home: 'EUT', away: 'CZJ', date: '2026-09-26T13:00Z' },
        { home: 'SVM', away: 'HSV', date: '2026-09-26T13:00Z' },
        { home: 'POT', away: 'VfB', date: '2026-09-26T13:00Z' },
        { home: 'BOC', away: 'SVW', date: '2026-09-26T14:00Z' },
        { home: 'MAR', away: 'RBL', date: '2026-09-27T11:00Z' },
        { home: 'S04', away: 'ESS', date: '2026-09-27T11:00Z' },
        { home: 'SGF', away: 'HOF', date: '2026-09-27T11:00Z' },
        { home: 'BUN', away: 'FCN', date: '2026-09-27T11:00Z' },
        { home: 'FCM', away: 'FCU', date: '2026-09-27T12:00Z' },
        { home: 'SAN', away: 'WOB', date: '2026-09-27T12:00Z' },
        { home: 'KSC', away: 'SGE', date: '2026-09-27T12:00Z' },
        { home: 'VBL', away: 'B04', date: '2026-09-27T12:00Z' },
        { home: 'MGL', away: 'FCB', date: '2026-09-27T13:00Z' },
    ]),
    Achtelfinale: getRound(teams, []),
    Viertelfinale: getRound(teams, []),
    Halbfinale: getRound(teams, []),
    Finale: getRound(teams, []),
};

export { data };
