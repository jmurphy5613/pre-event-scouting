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
    autoConeScores: Array<number>,
    autoCubeScores: Array<number>,
    coneScores: Array<number>,
    cubeScores: Array<number>,
    endgameStatus: string,
    autoStatus: string,
    feedLocation: string,
    pickup: string,
    scouter: string
}

export type TeamGridData = {
    teamNumber: number,
    averageGamePieceScore: number
}