import React from 'react'
import logo from "../img/logo.png"
import { Div, H1, H2 } from "./styles"
import { Button } from "../../StylesGlobal/styles";

const Header = () => {
    return (
        <H1>
            <Div>
                <img className="logo" src={logo} alt="Umbreon Logo" width="70px" height="70px" />
            </Div>
            <H2 className="navegacao" alt="Botões de Navegação">
                <Button type="submit">Novo Cadastro</Button>
                <Button type="submit">Controller</Button>
                <Button type="submit">Login</Button>
            </H2>
        </H1>
    )
}
export default Header;
