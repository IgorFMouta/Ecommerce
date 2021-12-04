import React from 'react';
// import PrimaryButton from "./styles/index";
import GlobalStyle from "./StylesGlobal/styles";
import CadastroCliente from "./cadastro/CadastroCliente";
import GetCliente from "./controller/ClienteController";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Busca from './Busca/index';
// import Pesquisa from './Pesquisa';
import CadastroProduto from "./cadastro/PostProduto/index"
import AtualizarProduto from "./cadastro/AtualizarProduto/index"
import Get from "./controller/GetProduto/index"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css"
import NavBar from './Components/Navbar';

function App() {

  return (
    <>

      <GlobalStyle />
      <BrowserRouter>
        {/* <Pesquisa/> */}
        <Switch>
          <Route path="/" exact component={Login} />
          <NavbarComp />
        </Switch>
        <Switch>
          <Route path="/busca" exact component={Busca} />
          <Route path="/getClientes" component={GetCliente} />
          <Route path="/getProduto" component={Get} />
          <Route path="/cadastrarCliente" component={CadastroCliente} />
          <Route path="/cadastrarProduto" component={CadastroProduto} />
          <Route path="/atualizarProduto/:id+" component={AtualizarProduto} />
        </Switch>
        <Switch>        
          <Route path="/" exact component={Login} />
          <NavBar />
        </Switch>
         <img className="background" src="https://github.com/RBaltar/Ecommerce/blob/main/src/StylesGlobal/img/Background.png?raw=true" />
      </BrowserRouter>
      
      


    </>
  )
}

export default App;

