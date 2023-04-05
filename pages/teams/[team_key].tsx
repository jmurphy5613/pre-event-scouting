import { useEffect, useState } from 'react'
import styles from '../../styles/TeamProfile.module.css'
import { useRouter } from 'next/router'
import { getRelevantMatchData, getTeleopTeamGamePieceCounts } from '@/utils/localRequests'
import { GamePieceCount, MatchData } from '@/utils/types'
import PerformanceGraph from '@/components/performance-graph/PerformanceGraph'
import MatchList from '@/components/match-list/MatchList'


const TeamProfile = () => {

    const router = useRouter()

    const [teleopGamePieceCounts, setTeleopGamePieceCounts] = useState<Array<GamePieceCount>>()
    const [relevantMatchData, setRelevantMatchData] = useState<Array<MatchData>>()

    useEffect(() => {
        if(!router.isReady) return
        const { team_key } = router.query
        if(team_key === undefined || Array.isArray(team_key)) return
        const teleopGamePieceCounts = getTeleopTeamGamePieceCounts(parseInt(team_key))
        setTeleopGamePieceCounts(teleopGamePieceCounts)

        const matchData = getRelevantMatchData(parseInt(team_key))
        setRelevantMatchData(matchData)

    }, [router.isReady])

    if(!teleopGamePieceCounts || !relevantMatchData) return <div></div>

    return (
        <div className={styles.container}>
            <PerformanceGraph teleopGamePieceCounts={teleopGamePieceCounts} />
            <MatchList matchData={relevantMatchData} />
        </div>
    )
}

export default TeamProfile