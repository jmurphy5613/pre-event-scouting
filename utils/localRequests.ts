import { GamePieceCount, Match, MatchData, TeamGridData } from "./types";


export const addMatchToLocalstorage = (match: Match) => {
    const localMatches = localStorage.getItem("matches")
    if(localMatches) {
        const localMatchesJSON = JSON.parse(localMatches) as Array<Match>
        //check if match already exists
        for(const localMatch of localMatchesJSON) {
            if(localMatch.matchId == match.matchId && localMatch.teamNumber == match.teamNumber) {
                return
            }
        }
        localMatchesJSON.push(match)
        localStorage.setItem("matches", JSON.stringify(localMatchesJSON))
    }
}

export const getTeamsList = () => {
    const localMatches = localStorage.getItem("matches")
    
    if(localMatches) {
        const localMatchesJSON = JSON.parse(localMatches) as Array<Match>
        let teamsList: Array<number> = []
        for(const match of localMatchesJSON) {
            if(!teamsList.includes(match.teamNumber)) {
                teamsList.push(match.teamNumber)
            }
        }
        return teamsList
    }
    return []
}

export const getPointContribution = (teamNumber: number) => {
    //get all matches, filter by team number, add up points
    const localMatches = localStorage.getItem("matches")
    if(localMatches) {
        const localMatchesJSON = JSON.parse(localMatches) as Array<Match>
        let points = 0
        let matchesPlayed = 0
        for(const match of localMatchesJSON) {
            if(match.teamNumber == teamNumber) {
                matchesPlayed++
                points += match.coneScores[0]*2 + match.coneScores[1]*4 + match.coneScores[2]*5
                points += match.cubeScores[0]*2 + match.cubeScores[1]*4 + match.cubeScores[2]*5
                points += match.autoConeScores[0]*3 + match.autoConeScores[1]*5 + match.autoConeScores[2]*6
                points += match.autoCubeScores[0]*3 + match.autoCubeScores[1]*5 + match.autoCubeScores[2]*6
            }
        }
        return points/matchesPlayed
    }
    return 0
}

export const getTeamsAverageMatchScore = () => {
    const teams = getTeamsList()
    let teamScores: Array<TeamGridData> = []
    for(const team of teams) {
        teamScores.push({
            teamNumber: team,
            averageGamePieceScore: getPointContribution(team)
        })
    }
    return teamScores
}

export const getTeleopTeamGamePieceCounts = (teamNumber: number) => {
    const localMatches = localStorage.getItem("matches")
    let gamePieceCounts: Array<GamePieceCount> = []
    if(localMatches) {
        for(const match of JSON.parse(localMatches) as Array<Match>) {
            if(match.teamNumber == teamNumber) {
                gamePieceCounts.push({
                    matchNumber: match.matchId,
                    gamePieceCount: match.coneScores[0] + match.coneScores[1] + match.coneScores[2] + match.cubeScores[0] + match.cubeScores[1] + match.cubeScores[2]
                })
            }
        }
    }
    return gamePieceCounts
}

export const getRelevantMatchData = (teamNumber: number) => {
    const localMatches = localStorage.getItem("matches")
    let matchData: Array<MatchData> = []
    if(localMatches) {
        for(const match of JSON.parse(localMatches) as Array<Match>) {
            if(match.teamNumber == teamNumber) {
                matchData.push({
                    matchId: match.matchId,
                    autoGamePieceCount: match.autoConeScores[0] + match.autoConeScores[1] + match.autoConeScores[2] + match.autoCubeScores[0] + match.autoCubeScores[1] + match.autoCubeScores[2],
                    teleopGamePieceCount: match.coneScores[0] + match.coneScores[1] + match.coneScores[2] + match.cubeScores[0] + match.cubeScores[1] + match.cubeScores[2],
                    autoCharge: match.autoStatus === "DockedAndEngaged",
                    teleopCharge: match.endgameStatus.includes("Docked")
                })
            }
        }
    }
    return matchData
}