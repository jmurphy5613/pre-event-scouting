import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Home() {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PreEvent Scouting</h1>
            <button className={styles.button} onClick={() => {
                router.push('/events')
            }}>Event Search</button>
        </div>
    )
}
