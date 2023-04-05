import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'
import styles from './PerformanceGraph.module.css'
import { getTickLabels } from '@/utils/conversions'
import { GamePieceCount } from '@/utils/types'

type PerformanceGraphProps = {
    teleopGamePieceCounts: Array<GamePieceCount>
}

const PerformanceGraph:React.FC<PerformanceGraphProps> = ({ teleopGamePieceCounts }) => {
    return (
        <div className={styles.chart}>
            <VictoryChart domainPadding={40}>
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
    )
}

export default PerformanceGraph