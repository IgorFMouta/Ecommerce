import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const Button = styled.button`
        width: 200px;
        height: 30px;
        border-radius: 5px;
        background-color: 	#A9A9A9;
        margin: 0px;
        &:hover {
            background-color: 	#FFFF00;
            transition: 1s;
            margin: 10px;
}
`

export default createGlobalStyle `
    body {
        background-image: url("https://github.com/RBaltar/Ecommerce/blob/main/src/StylesGlobal/img/Background%20Login.png?raw=true");
        background-repeat:no-repeat;
        background-size: 100%;
        background-color: #808080;
    }
`
