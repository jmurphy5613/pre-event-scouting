import styles from '../styles/CentralComputer.module.css'
import { IoIosAdd } from 'react-icons/io'
import { IconContext } from 'react-icons'

const CentralComputer = () => {
    return (
        <div className={styles.container}>
            <button className={styles.add}>
                <div className={styles["button-background"]}></div>
                <IconContext.Provider value={{ size: '3em', color: '#ffffff' }}>
                    <IoIosAdd />
                </IconContext.Provider>
            </button>
        </div>
    )
}

export default CentralComputer