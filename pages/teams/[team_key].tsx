import { useEffect, useState } from 'react'
import styles from '../../styles/TeamProfile.module.css'
import { VictoryBar, VictoryChart, VictoryThemeDefinition, VictoryTheme, VictoryAxis } from 'victory'
import { useRouter } from 'next/router'
import { getTeleopTeamGamePieceCounts } from '@/utils/localRequests'
import { GamePieceCount } from '@/utils/types'
import { getTickLabels } from '@/utils/conversions'


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
            <div className={styles.chart}>
                <VictoryChart domainPadding={40} style={{
                
                }}>
                    <VictoryAxis
                        dependentAxis
                        label={"Game Pieces Scored"}
                        style={{
                            axisLabel: {
                                padding: 30,
                                fill: "#ffffff"
                            },
                            tickLabels: {
                                fill: "#ffffff"
                            },
                            axis: {
                                stroke: "#ffffff"
                            },
                        }}
                        tickFormat={(x) => Math.round(x * 100) / 100}
                    />
                    <VictoryAxis 
                        tickValues={getTickLabels(teleopGamePieceCounts)}
                        label={"Match Number"}
                        style={{
                            axisLabel: {
                                padding: 30,
                                fill: "#ffffff"
                            },
                            tickLabels: {
                                fill: "#ffffff"
                            },
                            axis: {
                                stroke: "#ffffff"
                            }
                        }}
                    />
                    <VictoryBar
                        data={teleopGamePieceCounts}
                        x={"matchNumber"}
                        y={"gamePieceCount"}
                        style={{
                            data: {
                                fill: "#324690"
                            }
                        }}
                    />
                </VictoryChart>
            </div>

        </div>
    )
}

export default TeamProfile