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
          <NavBar />
        </Switch>
        <Switch>
            <Route path="/getClientes" exact component={GetCliente} />
            <Route path="/getProduto" exact component={Get} />
            <Route path="/cadastrarCliente" exact component={CadastroCliente} />
            <Route path="/cadastrarProduto" exact component={CadastroProduto} />    
        </Switch>
      </BrowserRouter>
      <img className="background" src="https://github.com/RBaltar/Ecommerce/blob/main/src/StylesGlobal/img/Background.png?raw=true" />


    </>
  )
}

export default App;

