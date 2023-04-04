import styles from './PullDataPopup.module.css'
import { IconContext } from 'react-icons'
import { AiOutlineQrcode } from 'react-icons/ai'
import { BiServer } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { addMatchesToLocalStorage } from '@/utils/requests'
import QRScanner from '../qr-scanner/QRScanner'
import { useState } from 'react'

type PullDataPopupProps = {
    setShowEntryDecisionPopup: (show: boolean) => void,
    fetchTeamData: () => void
}

const PullDataDecisionPopup:React.FC<PullDataPopupProps> = ({ setShowEntryDecisionPopup, fetchTeamData }) => {

    const [showQRScanner, setShowQRScanner] = useState<boolean>(false)

    if (showQRScanner) {
        return (
            <div className={styles.container}>
                <div className={styles["modal-container"]}>
                    <div className={styles.exit} onClick={() => setShowQRScanner(false)}>
                        <div className={styles["exit-background"]}></div>
                        <IconContext.Provider value={{ size: '1.5em', color: '#ffffff' }}>
                            <RxCross2 />
                        </IconContext.Provider>
                    </div>
                    <QRScanner fetchTeamData={fetchTeamData} setShowQRScanner={setShowQRScanner} />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles["modal-container"]}>
                <div className={styles.exit} onClick={() => setShowEntryDecisionPopup(false)}>
                    <div className={styles["exit-background"]}></div>
                    <IconContext.Provider value={{ size: '1.5em', color: '#ffffff' }}>
                        <RxCross2 />
                    </IconContext.Provider>
                </div>
                <div className={styles["icon-container"]} onClick={() => {
                    setShowQRScanner(true)
                }}>
                    <IconContext.Provider value={{ size: '4em', color: '#ffffff' }}>
                        <AiOutlineQrcode />
                    </IconContext.Provider>
                    <h3 className={styles.description}>QR Scan</h3>
                </div>
                <div className={styles["icon-container"]} onClick={addMatchesToLocalStorage}>
                    <IconContext.Provider value={{ size: '4em', color: '#ffffff' }}>
                        <BiServer />
                    </IconContext.Provider>
                    <h3 className={styles.description}>Server Fetch</h3>
                </div>

            </div>
        </div>
    )
}

export default PullDataDecisionPopup