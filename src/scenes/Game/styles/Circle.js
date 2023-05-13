import styled from "styled-components";
import { flex } from "../../../constant";

export const CircleBar = styled.div`
    position: absolute;
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    left: ${props => props.x * flex}px;
    top: ${props => props.y * flex}px;
    border-radius: 50%;
    background: conic-gradient(${props => props.color} ${props => props.fill}deg, transparent 0);
    z-index: 100;
`