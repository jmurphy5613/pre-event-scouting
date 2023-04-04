import styles from '../styles/CentralComputer.module.css'
import { IoIosAdd } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'
import PullDataPopup from '../components/pull-data-popup/PullDataDecisionPopup'
import TeamGrid from '@/components/team-grid/TeamGrid'
import { TeamGridData } from '@/utils/types'
import { getTeamsAverageMatchScore } from '@/utils/localRequests'

const CentralComputer = () => {

    const [showEntryDecisionPopup, setShowEntryDecisionPopup] = useState(false)

    const [teamData, setTeamData] = useState<Array<TeamGridData>>()

    const fetchTeamData = () => {
        const data = getTeamsAverageMatchScore()
        setTeamData(data)
    }

    useEffect(() => {
        fetchTeamData()
    }, [])

    if(!teamData) return <div></div>

    return (
        <>
            {showEntryDecisionPopup && <PullDataPopup fetchTeamData={fetchTeamData} setShowEntryDecisionPopup={setShowEntryDecisionPopup} />}
            <div className={styles.container}>
                <button className={styles.add} onClick={() => setShowEntryDecisionPopup(true)}>
                    <div className={styles["button-background"]}></div>
                    <IconContext.Provider value={{ size: '3em', color: '#ffffff' }}>
                        <IoIosAdd />
                    </IconContext.Provider>
                </button>

                <TeamGrid teamData={teamData} />

            </div>
        </>
    )
}

export default CentralComputer