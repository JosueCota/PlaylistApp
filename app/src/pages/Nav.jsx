import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css"

export default function Nav() {
    return (
        <div className={styles.navCont}>
            <Link to="/" className={styles.btnStyle}>Songs</Link>
            <Link to="/playlist" className={styles.btnStyle}>Playlist</Link>
        </div>
    )
}