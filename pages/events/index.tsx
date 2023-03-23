import { useState } from "react";
import styles from '../../styles/EventSearch.module.css'
import { useRouter } from "next/router";

const EventSearch = () => {

    const router = useRouter()

    const [eventId, setEventId] = useState('')

    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.eventId}
                placeholder="Event Id"
                onChange={(e) => {
                    setEventId(e.target.value);
                }}
            />
            <button
                className={styles.button}
                onClick={async () => {
                    router.push(`/events/${eventId}`)
                }}
            >
                Search
            </button>
        </div>
    );
}

export default EventSearch