import React from 'react';
// import PrimaryButton from "./styles/index";
import GlobalStyle from "./StylesGlobal/styles";
import CadastroCliente from "./cadastro/CadastroCliente";
import GetCliente from "./controller/ClienteController";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Busca from './Busca/index';
// import Pesquisa from './Pesquisa';
import Header from './StylesGlobal/Navbar-Footer/index';
import CadastroProduto from "./cadastro/PostProduto/index"
import Get from "./controller/GetProduto/index"

import Header from './StylesGlobal/Navbar-Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';




function App() {

  return (
    <>

      <GlobalStyle />
      <Header />
      <BrowserRouter>
        {/* <Pesquisa/> */}
        <Switch>
          <Route path="/busca" exact component={Busca} />
          <Route path="/header" exact component={Header} />
          <Route path="/getClientes" exact component={GetCliente} />
          <Route path="/getProduto" exact component={Get} />
          <Route path="/cadastrarCliente" exact component={CadastroCliente} />
          <Route path="/cadastrarProduto" exact component={CadastroProduto} />
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>

      <NavbarComp />

    </>
  )
}

export default App;

