import styled from "styled-components";
import { flex } from "../../../constant";

export const Word = styled.div`
    position: absolute;
    background-color: black;
    color: white;
    padding ${5 * flex}px ${10 * flex}px;
    font-size: ${100 * flex}%;
    bottom: ${40 * flex}px;
    left: 50%;
    transform: translate(-50%, -50%);
`