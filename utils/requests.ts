import axios from "axios"
import { LeaderboardInfo, Team } from "./types"

/* 
1. get all teams
2. find the unique events they've all attended
3. get the oprs from all of those events
*/

export const getAllTeams = async (eventId: string) => {
    const teamsReq = await axios.get(`https://www.thebluealliance.com/api/v3/event/${eventId}/teams/simple`, {
        headers: {
            'X-TBA-Auth-Key': '2RlFFFGFtkzhlFVcMD2dsNKcTO12lBqHbz7ZIwVaqLfSK0xtsv8TAZngRZOFc5E7'
        }
    })
    const teams = teamsReq.data as Array<Team>
    return teams
}

export const getUniqueEvents = async() => {
    const eventList = await axios.get("https://www.thebluealliance.com/api/v3/district/2023fma/events/keys", {
        headers: {
            'X-TBA-Auth-Key': '2RlFFFGFtkzhlFVcMD2dsNKcTO12lBqHbz7ZIwVaqLfSK0xtsv8TAZngRZOFc5E7'
        }
    })
    return eventList.data as Array<string>
}

export const getAllOPRsFromEvents = async (eventList: Array<string>, teamList: Array<Team>) => {
    let allOPRS = [];
    for(const event of eventList) {
        const eventOprReq = await axios.get(`https://www.thebluealliance.com/api/v3/event/${event}/oprs`, {
            headers: {
                'X-TBA-Auth-Key': '2RlFFFGFtkzhlFVcMD2dsNKcTO12lBqHbz7ZIwVaqLfSK0xtsv8TAZngRZOFc5E7'
            }
        })
        if(eventOprReq.data) { 
            const oprList = eventOprReq.data.oprs
            if(typeof(oprList) != "undefined") {
                allOPRS.push(oprList)
            }
        }

    }
    return allOPRS
}

export const getHighestOPRs = (oprs: Array<{[key: string]: number}>, teamList: Array<Team>) => {
    let leaderboardValues: Array<LeaderboardInfo> = []
    for(const team of teamList) {
        for(const opr of oprs) {
            if(opr[team.key]) {
                leaderboardValues.push({
                    team: team,
                    opr: opr[team.key]
                })
            }
        }
    }
    return leaderboardValues
}