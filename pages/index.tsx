import styles from '@/styles/Home.module.css'
import { getAllOPRsFromEvents, getAllTeams, getHighestOPRs, getUniqueEvents } from '@/utils/requests'
import { LeaderboardInfo } from '@/utils/types'
import { useState } from 'react'


export default function Home() {

    const [eventId, setEventId] = useState('')
    const [teamData, setTeamData] = useState<Array<LeaderboardInfo>>()

    return (
        <div className={styles.container}>
            <input type="text" className={styles.eventId} placeholder="Event Id" onChange={(e) => {
                setEventId(e.target.value)
            }} />
            <button onClick={async () => {
                const teams = await getAllTeams(eventId)
                console.log(teams)
                const eventList = await getUniqueEvents()
                console.log(eventList)
                const oprs = await getAllOPRsFromEvents(eventList, teams)
                const oprSummary = getHighestOPRs(oprs, teams)
                oprSummary.sort((a, b) => {
                    if(a.opr < b.opr) return 1
                    else if (a.opr > b.opr) return -1
                    return 0
                })
                setTeamData(oprSummary)
            }}>click</button>
            {teamData?.map((element, index) => {
                return (
                    <a href={`/${element.team.key}`} className={styles.row}>
                        <h1 className={styles.teamNumber}>
                            {`${index + 1}. ${element.team.team_number}`}
                        </h1>
                        <h1 className={styles.opr}>
                            {Math.round(element.opr * 100) / 100}
                        </h1>
                    </a>
                );
            })}
        </div>
    )
}
