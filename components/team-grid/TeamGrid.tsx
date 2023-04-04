import { useEffect } from 'react'
import styles from './TeamGrid.module.css'
import { getTeamsAverageMatchScore } from '@/utils/localRequests'
import { useState } from 'react'
import { TeamGridData } from '@/utils/types'

const TeamGrid = () => {

    const [teamData, setTeamData] = useState<Array<TeamGridData>>()

    useEffect(() => {
        const data = getTeamsAverageMatchScore()
        setTeamData(data)
        console.log(data)
    }, [])

    if(!teamData) return <div></div>

    return (
        <>
            <div className={styles["column-titles"]}>
                <h1 className={styles.label}>Team number</h1>
                <h1 className={styles.label}>OPR</h1>
            </div>
            <div className={styles.grid}>
                {teamData.map((element, index) => {
                    return (
                        <>
                            <a
                                href={`/${element.teamNumber}`}
                                className={styles.row}
                            >
                                <h1 className={styles.teamNumber}>
                                    {`${index + 1}. ${
                                       element.teamNumber
                                    }`}
                                </h1>
                                <h1 className={styles.opr}>
                                    {Math.round(element.averageGamePieceScore * 100) / 100}
                                </h1>
                            </a>
                            <div className={styles.divider} />
                        </>
                    )
                })}
            </div>
        </>

    )
}

export default TeamGrid
