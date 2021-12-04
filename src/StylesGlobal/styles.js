import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const Button = styled.button`
        width: 200px;
        height: 30px;
        border-radius: 5px;
        background-color: 	#A9A9A9;
        margin: 10px;
        &:hover {
        background-color: 	#FFFF00;
        transition: 1s;
        margin: 15px;
        }
`;

export default createGlobalStyle `
    body {
        background-repeat:no-repeat;
        background-color: #808080;
        max-width: max-content;
    }
`;
