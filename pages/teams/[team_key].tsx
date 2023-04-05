import { useEffect, useState } from 'react'
import styles from '../../styles/TeamProfile.module.css'
import { useRouter } from 'next/router'
import { getTeleopTeamGamePieceCounts } from '@/utils/localRequests'
import { GamePieceCount } from '@/utils/types'
import PerformanceGraph from '@/components/performance-graph/PerformanceGraph'


const TeamProfile = () => {

    const router = useRouter()

    const [teleopGamePieceCounts, setTeleopGamePieceCounts] = useState<Array<GamePieceCount>>()

    useEffect(() => {
        if(!router.isReady) return
        const { team_key } = router.query
        if(team_key === undefined || Array.isArray(team_key)) return
        const teleopGamePieceCounts = getTeleopTeamGamePieceCounts(parseInt(team_key))
        setTeleopGamePieceCounts(teleopGamePieceCounts)
        console.log(teleopGamePieceCounts)
    }, [router.isReady])

    if(!teleopGamePieceCounts) return <div></div>

    return (
        <div className={styles.container}>
            <PerformanceGraph teleopGamePieceCounts={teleopGamePieceCounts} />
        </div>
    )
}

export default TeamProfile