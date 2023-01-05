import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.color};
    }
`;