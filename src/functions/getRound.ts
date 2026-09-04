type RawMatch = {
    home: string;
    away: string;
    date?: string;
    result?: string;
    identifier?: 1 | 2;
    live?: boolean;
};

const getRound = (teams: Teams, rawMatches: RawMatch[]) => {
    return rawMatches
        .filter(raw => raw.home in teams && raw.away in teams)
        .map(raw => ({
            home: teams[raw.home].name,
            homeLeague: teams[raw.home].league,
            away: teams[raw.away].name,
            awayLeague: teams[raw.away].league,
            ...(raw.date && { date: raw.date }),
            ...(raw.result && { result: raw.result }),
            ...(raw.identifier && { identifier: raw.identifier }),
            ...(raw.live && { live: raw.live }),
        }));
};
export { getRound };