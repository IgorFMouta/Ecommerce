import React from 'react';
import GlobalStyle from "./StylesGlobal/styles";
import CadastroCliente from "./cadastro/CadastroCliente";
import GetCliente from "./controller/ClienteController";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import CadastroProduto from "./cadastro/PostProduto/index";
import Get from "./controller/GetProduto/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import AtualizarCliente from './cadastro/AtualizarCliente';
import AtualizarProduto from './cadastro/AtualizarProduto/index';
import "./styles.css"
import NavBar from './Components/Navbar';

function App() {

  return (
    <>

    <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <NavBar />
        </Switch>
        <Switch>
            <Route path="/getClientes" exact component={GetCliente} />
            <Route path="/getProduto" exact component={Get} />
            <Route path="/cadastrarCliente" exact component={CadastroCliente} />
            <Route path="/cadastrarProduto" exact component={CadastroProduto} />
            <Route path="/atualizarProduto/:id+" component={AtualizarProduto} />
            <Route path="/atualizarCliente/:id+" component={AtualizarCliente} />
        </Switch>
      </BrowserRouter>
      <img className="background" src="https://github.com/RBaltar/Ecommerce/blob/main/src/StylesGlobal/img/Background.png?raw=true" />



    </>
  )
}

export default App;

