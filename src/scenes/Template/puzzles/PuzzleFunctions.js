// end buh puzzlinha functionig orulna

import { SafeFunction } from "./SafeFunction"

export const PuzzleFunctions = (props) => {
    switch (props.function) {
        case "SafeFunction":
            return <SafeFunction password={props.value} puzzleObjects={props.puzzleObjects} />
        case "SwitchPuzzle":
            return
        default:
            return <></>
    }
}