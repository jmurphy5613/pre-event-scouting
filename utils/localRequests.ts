import { Match } from "./types";


export const addMatchToLocalstorage = (match: Match) => {
    const localMatches = localStorage.getItem("matches")
    if(localMatches) {
        const localMatchesJSON = JSON.parse(localMatches) as Array<Match>
        //check if match already exists
        for(const localMatch of localMatchesJSON) {
            if(localMatch.matchNumber == match.matchNumber && localMatch.teamNumber == match.teamNumber) {
                return
            }
        }
        localMatchesJSON.push(match)
        localStorage.setItem("matches", JSON.stringify(localMatchesJSON))
    }
}