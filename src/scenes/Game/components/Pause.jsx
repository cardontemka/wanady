import styles from "../styles/Contain.module.css"

export const Pause = (props) => {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className={styles.pauseContain} >
            <p className={styles.pauseTitle}>{props.title}</p>
            {!props.end && <p className={styles.pauseOption} onClick={props.pause} >Resume</p>}
            <p className={styles.pauseOption} onClick={refreshPage}>Restart</p>
            <p className={styles.pauseOption} >Quit</p>
        </div>
    )
}