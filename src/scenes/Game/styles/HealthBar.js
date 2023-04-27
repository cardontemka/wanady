import styled from "styled-components";
import {flex} from "../../../constant";

export const HealthBar = styled.div`
    position: absolute;
    width: ${100 * flex}px;
    height: ${12 * flex}px;
    left: ${50 * flex}px;
    top: ${20 * flex}px;
    background: linear-gradient(to right, ${props => props.color} 0%, ${props => props.color} ${props => props.health}%, black 0%, black 100%);
    z-index: 5;
`