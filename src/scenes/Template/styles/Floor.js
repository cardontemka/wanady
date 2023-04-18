import styled from "styled-components";
import {flex} from "../../../constant";

export const Floor = styled.div`
    width: ${1000 * flex}px;
    height: ${150 * flex}px;
    background-image: url(${props => props.image});
    background-repeat: repeat;
    background-size: ${150 * flex}px;
    background-position: ${props => props.x * flex}px 0px;
    border-top: ${3 * flex}px solid black;
    position: absolute;
    bottom: 0px;
    left: 0px;
`