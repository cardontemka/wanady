import styled from "styled-components";
import {flex} from "../../../constant";

export const Player = styled.div`
    position: absolute;
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: ${props => props.left ? "rotateY(180deg)" : props.right ? "rotateY(0deg)" : props.up ? "rotateX(0deg)" : props.down && "rotateX(180deg)"};
    top: ${props => props.y * flex}px;
    left: ${props => props.x * flex}px;
    z-index: 2;
`