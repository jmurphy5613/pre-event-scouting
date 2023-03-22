import { useEffect, useState } from "react"
import { LeaderboardInfo } from "@/utils/types"
import styles from '../../styles/EventProfile.module.css'
import { getAllTeams, getUniqueEvents, getHighestOPRs, getAllOPRsFromEvents } from "@/utils/requests"
import { useRouter } from "next/router"

const EventPage = () => {
    const [eventId, setEventId] = useState('')
    const [teamData, setTeamData] = useState<Array<LeaderboardInfo>>()

    const router = useRouter()

    useEffect(() => {
        console.log(router.pathname)
    }, [router.isReady])

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

export default EventPage