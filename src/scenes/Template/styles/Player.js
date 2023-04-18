import styled from "styled-components";
import {flex} from "../../../constant";
import playerImg from "../images/player.png";

export const Player = styled.div`
    position: absolute;
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    background-image: url(${playerImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: ${props => props.y * flex}px;
    left: ${props => props.x * flex}px;
`