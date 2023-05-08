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
    z-index: ${props => props.ahead ? 3 : 1};
    opacity: ${props => props.opacity};
    transition: opacity 500ms;
`

export const HitBox = styled.div`
    position: absolute;
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    left: ${props => props.x * flex}px;
    top: ${props => props.y * flex}px;
    background-color: red;
    z-index: 10;
`