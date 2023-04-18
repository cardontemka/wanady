import styled from "styled-components";
import {flex} from "../../../constant";

export const ItemsContain = styled.div`
    position: absolute;
    display: flex;
    height: ${600 * flex}px;
    right: ${props => props.pos * flex}px;
    top: 0px;
    transition: 100ms;
`

export const ItemSquare = styled.div`
    position: absolute;
    display: flex;
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    top: ${props => props.top * flex}px;
    right: ${props => props.right * flex}px;
    background-color: rgba(0,0,0,0.8);
    flex-direction: column;
    overflow-y: auto;
`

export const Item = styled.div`
    position: absolute;
    display: ${props => props.exist};
    width: ${props => props.width * flex}px;
    height: ${props => props.height * flex}px;
    background: url(${props => props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`

export const ItemFromContain = styled.div`
    margin: ${10 * flex}px;
    width: ${60 * flex}px;
    height: ${60 * flex}px;
    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`