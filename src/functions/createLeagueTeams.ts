function createLeagueTeams<T extends Record<string, any>>(
    teamData: T,
    leagueMapper: string | ((value: T[keyof T]) => string)
): Teams {
    return Object.entries(teamData).reduce((acc: Teams, [key, value]) => {
        acc[key] = {
            name: Array.isArray(value) ? value[0] : value,
            league: typeof leagueMapper === 'function'
                ? leagueMapper(value)
                : leagueMapper,
        };
        return acc;
    }, {});
}

export { createLeagueTeams };