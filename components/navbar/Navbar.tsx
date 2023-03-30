import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Jordan Scouting System</h1>
            <div className={styles.links}>
                <a href="/" className={styles.link}>
                    Home
                </a>
                <a href="/central-computer" className={styles.link}>
                    Central Computer
                </a>
                <a href="/events" className={styles.link}>
                    PreComp
                </a>

            </div>
        </div>
    );
}

export default Navbar