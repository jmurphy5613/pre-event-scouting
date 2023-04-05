import { MatchData } from '@/utils/types'
import styles from './MatchList.module.css'

type MatchListProps = {
    matchData: Array<MatchData>
}

const MatchList: React.FC<MatchListProps> = ({ matchData }) => {
    return (
        <div className={styles.grid}>
            <div className={styles["column-titles"]}>
                <h1 className={styles.label}>Match #</h1>
                <h1 className={styles.label}>Auto Game Pieces</h1>
                <h1 className={styles.label}>Teleop Game Pieces</h1>
                <h1 className={styles.label}>Auto Charge</h1>
                <h1 className={styles.label}>Teleop Charge</h1>

            </div>
            <div className={styles.divider} />

            {matchData.map((element, index) => {


                return (
                    <>
                        <div className={styles.match}>
                            <h3 className={styles.data}>{element.matchId}</h3>
                            <h3 className={styles.data}>{element.autoGamePieceCount}</h3>
                            <h3 className={styles.data}>{element.teleopGamePieceCount}</h3>
                            <h3 className={styles.data}>{String(element.autoCharge)}</h3>
                            <h3 className={styles.data}>{String(element.teleopCharge)}</h3>
                        </div>
                        <div className={styles.divider} />
                    </>


                )
            })}
        </div>
    )
}

export default MatchList