import { useEffect, useState } from "react"
import { LeaderboardInfo } from "@/utils/types"
import styles from '../../styles/EventProfile.module.css'
import { getAllTeams, getUniqueEvents, getHighestOPRs, getAllOPRsFromEvents } from "@/utils/requests"
import { useRouter } from "next/router"

const EventPage = () => {
    const [teamData, setTeamData] = useState<Array<LeaderboardInfo>>()

    const router = useRouter()

    const getData = async (eventId: string) => {
            const teams = await getAllTeams(eventId);
            const eventList = await getUniqueEvents();
            const oprs = await getAllOPRsFromEvents(eventList, teams);
            console.log(oprs)
            const oprSummary = getHighestOPRs(oprs, teams);
            oprSummary.sort((a, b) => {
                if (a.opr < b.opr) return 1;
                else if (a.opr > b.opr) return -1;
                return 0;
            });
            setTeamData(oprSummary);
    }

    useEffect(() => {
        const { event_key } = router.query
        if(event_key && !Array.isArray(event_key)) getData(event_key)
    }, [router.isReady])

    return (
        <div className={styles.container}>
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