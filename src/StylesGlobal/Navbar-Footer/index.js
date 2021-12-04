import React from 'react'
import logo from "../img/logo.png"
import { Div, H1, H2 } from "./styles"
import { Button } from "../../StylesGlobal/styles";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Header = () => {
    return (
        <H1>
            <Div>
                <img className="logo" src={logo} alt="Umbreon Logo" width="70px" height="70px" />
            </Div>
            <H2 className="navegacao" alt="Botões de Navegação">
                <BrowserRouter>
                <Link to="/getProduto">
                    <Button>Pagina inicial</Button>
                </Link>
                <Link to="/getCliente">
                    <Button>Controle de clientes</Button>
                </Link>
                <Link to="/cadastrarCliente">
                    <Button>Novo Cadastro de cliente</Button>
                </Link>
                <Link to="/cadastrarProduto">
                    <Button>Novo Cadastro de produto</Button>
                </Link>
                </BrowserRouter>
            </H2>
        </H1>
    )
}
export default Header;
