export type Team = {
    team_number: number,
    key: string,
    nickname: string
}

export type LeaderboardInfo = {
    team: Team,
    opr: number
}

export type Match = {
    matchNumber: number,
    teamNumber: number,
    defensive: boolean,
    notes: string,
    conesScoredAuto: Array<number>,
    cubesScoredAuto: Array<number>,
    conesScored: Array<number>,
    cubesScored: Array<number>,
    endGameStatus: string,
    endAutoStatus: string,
    feedLocation: string,
    feederType: string,
    scouterId: number
}