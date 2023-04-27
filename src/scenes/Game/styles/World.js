import styled from "styled-components";
import {flex} from "../../../constant";

export const World = styled.div`
    width: ${1000 * flex}px;
    height: ${600 * flex}px;
    background-image: url(${props => props.image});
    background-repeat: repeat;
    background-size: ${props => props.size * flex}px;
    background-position: ${props => props.x * flex}px ${props => props.y * flex}px;
    overflow: hidden;
    position: relative;
`