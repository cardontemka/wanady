import styled from "styled-components";
import {flex} from "../../../constant";

export const Object = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    background: url(${props => props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    left: ${props => props.x * flex}px;
    top: ${props => props.y * flex}px;
`

export const InputSafe = styled.div`
    position: absolute;
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-repeat: no-repeat;
    font-size: 2vw;
    left: ${props => props.x * flex}px;
    top: ${props => props.y * flex}px;
    gap: ${3 * flex}px;
`