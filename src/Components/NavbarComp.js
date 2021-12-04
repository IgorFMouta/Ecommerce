import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Button } from "../StylesGlobal/styles"
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import "./styles.css"


export default class NavbarComp extends Component {
    render() {
        return (
            <Switch>
                <Router>
                    <div className="containerNav">

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <a href="http://localhost:3000/getProduto">
                                    <Button>Pagina inicial</Button>
                                </a>
                                <a href="http://localhost:3000/getClientes">
                                    <Button>Controle de Clientes</Button>
                                </a>
                                <a href="http://localhost:3000/cadastrarCliente">
                                    <Button>Cadastro de cliente</Button>
                                </a>
                                <a href="http://localhost:3000/cadastrarProduto">
                                    <Button>Cadastro de Produto</Button>
                                </a>

                                <div className="nomeNav">
                                    <Navbar.Brand><p className="navName">Umbreon Gestor</p></Navbar.Brand>
                                </div>

                                <img className="logoUmbreon" src="https://github.com/RBaltar/Ecommerce/blob/main/src/StylesGlobal/img/logo.png?raw=true" alt="logo umbreon" />
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                    </div>
                </Router>
            </Switch>
        )
    }
}
