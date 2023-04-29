import styled from "styled-components";
import {flex} from "../../../constant";

export const Text = styled.div`
    position: absolute;
    font-size: ${props => props.size * flex}px;
    left: ${props => props.x * flex}px;
    top: ${props => props.y * flex}px;
    color: ${props => props.color};
    -webkit-text-stroke: ${0.5 * flex}px black;
    z-index: 5;
`