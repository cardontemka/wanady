import styled from "styled-components";
import {flex} from "../../../constant";

export const HealthBar = styled.div`
    position: absolute;
    width: ${100 * flex}px;
    height: ${12 * flex}px;
    left: ${props => props.x * flex}px;
    top: ${props => props.y * flex}px;
    background: linear-gradient(to right, ${props => props.color} 0%, ${props => props.color} ${props => props.health}%, black 0%, black 100%);
    border: ${2 * flex}px solid black;
    z-index: 100;
`