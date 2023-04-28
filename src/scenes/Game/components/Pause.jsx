import styles from "../styles/Contain.module.css"

export const Pause = (props) => {
    return (
        <div className={styles.pauseContain}>
            <h1>{props.title}</h1>
        </div>
    )
}