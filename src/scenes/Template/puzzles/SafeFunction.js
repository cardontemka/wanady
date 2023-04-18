import { useRef, useState } from "react";
import { InputSafe } from "../styles/Objects";
import styles from "../styles/Contain.module.css";

export const SafeFunction = (props) => {
    const safeInput = useRef("");
    const [safeButton, setSafeButton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // active interval

    // safenii password
    const safePassword = (password) => {
        if (safeInput.current.length !== 4) {
            safeInput.current += password;
        }
        if (safeInput.current.length === 4) {
            setTimeout(() => {
                if (safeInput.current === props.password) {
                    props.puzzleObjects.done = true;
                } else {
                    safeInput.current = ("");
                }
            }, 300);
        }
    }

    return (
        <InputSafe x={200} y={125} width={90} height={120}>
            <input
                className={styles.safeInputContain}
                value={safeInput.current}
            />
            {safeButton.map((item, _index) => {
                return <div key={item} className={styles.safeButton} onClick={() => safePassword(item)}>{item}</div>
            })
            }
        </InputSafe>
    )
}