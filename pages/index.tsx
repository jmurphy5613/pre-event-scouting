import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Home() {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => {
                router.push('/events')
            }}>Pre-Event Scouting</button>
            <button className={styles.button} onClick={() => {
                router.push('/central-computer')
            }}>Central Computer</button>
        </div>
    )
}
