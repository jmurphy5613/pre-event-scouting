import styles from '../styles/CentralComputer.module.css'
import { IoIosAdd } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import PullDataPopup from '../components/pull-data-popup/PullDataDecisionPopup'

const CentralComputer = () => {

    const [showEntryDecisionPopup, setShowEntryDecisionPopup] = useState(false)

    return (
        <>
            {showEntryDecisionPopup && <PullDataPopup setShowEntryDecisionPopup={setShowEntryDecisionPopup} />}
            <div className={styles.container}>
                <button className={styles.add} onClick={() => setShowEntryDecisionPopup(true)}>
                    <div className={styles["button-background"]}></div>
                    <IconContext.Provider value={{ size: '3em', color: '#ffffff' }}>
                        <IoIosAdd />
                    </IconContext.Provider>
                </button>
            </div>
        </>
    )
}

export default CentralComputer