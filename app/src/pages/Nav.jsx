import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css"
import homeIcon from "../assets/images/homeIcon.svg"
import playlistIcon from "../assets/images/playlistIcon.svg"

export default function Nav() {
    function onClick() {
        console.log('CLicked')
    }

    return (
        <>
        <div className={styles.navCont}>
            <Link to="/" className={styles.btnStyle}>
                <div className="flex flex-col justify-center content-center items-center">
                    <img src={homeIcon} className="w-8 h-8"/>
                    <span>Songs</span>
                </div>
            </Link>
            <Link to="/playlist" className={styles.btnStyle}>
                <div className={styles.btnContainer}>
                    <img src={playlistIcon} className="w-6 h-8"/>
                    <span>Playlist</span>
                </div>
            </Link>
            <button className={styles.btnStyle} onClick={onClick}>Log In</button>
        </div>
        </>
        
    )
}